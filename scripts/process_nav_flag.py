"""Re-process navbar flag with smooth alpha edges and tight crop."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "ChatGPT Image May 21, 2026, 12_30_47 PM.png"
OUTPUT = ROOT / "public" / "nav_bg.png"


def smooth_white_key(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size

    for y in range(height):
        for x in range(width):
            r, g, b, _ = pixels[x, y]
            # Soft matte: fade near-white background to transparent.
            white_strength = min(r, g, b)
            if white_strength >= 248:
                alpha = 0
            elif white_strength <= 215:
                alpha = 255
            else:
                alpha = int(255 * (248 - white_strength) / 33)

            pixels[x, y] = (r, g, b, alpha)

    red, green, blue, alpha = rgba.split()
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=1.2))
    return Image.merge("RGBA", (red, green, blue, alpha))


def crop_to_content(img: Image.Image, padding: int = 8) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img

    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(img.width, right + padding)
    bottom = min(img.height, bottom + padding)
    return img.crop((left, top, right, bottom))


def main() -> None:
    source = Image.open(SOURCE)
    processed = smooth_white_key(source)
    cropped = crop_to_content(processed, padding=12)

    # Upscale for sharper display on wide screens.
    upscale_w = min(3840, cropped.width * 2)
    upscale_h = max(1, round(cropped.height * (upscale_w / cropped.width)))
    final = cropped.resize((upscale_w, upscale_h), Image.Resampling.LANCZOS)

    red, green, blue, alpha = final.split()
    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.6))
    final = Image.merge("RGBA", (red, green, blue, alpha))

    final.save(OUTPUT, "PNG", optimize=True)
    print(f"Wrote {OUTPUT} ({final.width}x{final.height}) from {SOURCE.name}")


if __name__ == "__main__":
    main()
