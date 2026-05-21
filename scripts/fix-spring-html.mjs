import fs from "fs";

const map = {
  "./spring_files/logo(1).png": "./public/logo/logo.png",
  "./spring_files/logo.png": "./public/logo.png",
  "./spring_files/logo_1.svg": "./public/logo/logo_1.svg",
  "./spring_files/logo_2.png": "./public/logo/logo_2.png",
  "./spring_files/logo_3.svg": "./public/logo/logo_3.svg",
  "./spring_files/logo_4.png": "./public/logo/logo_4.png",
  "./spring_files/logo_5.svg": "./public/logo/logo_5.svg",
  "./spring_files/logo_6.svg": "./public/logo/logo_6.svg",
  "./spring_files/2.jpg": "./public/service-photo/48 Wall/2.jpg",
  "./spring_files/2.png": "./public/service-photo/Artistry/2.png",
  "./spring_files/3.png": "./public/service-photo/MME Event Rentals/3.png",
  "./spring_files/2.jpeg": "./public/service-photo/MME Floral Design/2.png",
  "./spring_files/3.jpg": "./public/service-photo/MME Audio VIsual/3.png",
  "./spring_files/2(1).jpeg":
    "./public/service-photo/Tardis Food and Beverage/2.png",
  "./spring_files/3.jpeg":
    "./public/service-photo/Mikey Mike Musical and Live Entertainment/3.png",
  "./spring_files/3(1).jpg":
    "./public/service-photo/Creative Partners South Florida Services/3.jpg",
  "./spring_files/3(2).jpg":
    "./public/service-photo/Creative Partners Custom Fabrication/3.png",
  "/nav_bg.png": "./public/nav_bg.png",
  "/videos/video.mp4": "./public/videos/video.mp4",
};

let html = fs.readFileSync("spring.html", "utf8");

for (const [from, to] of Object.entries(map)) {
  if (!fs.existsSync(to.replace("./", ""))) {
    console.error("Missing asset:", to);
    process.exit(1);
  }
  html = html.split(from).join(to);
}

html = html.replace(
  /<script type="module" crossorigin="" src="[^"]+"><\/script>\s*/,
  "",
);
html = html.replace(
  /<script defer="" src="\.\/spring_files\/v833[^<]+<\/script>\s*/,
  "",
);

fs.writeFileSync("spring.html", html);
console.log("Updated spring.html with local asset paths.");
