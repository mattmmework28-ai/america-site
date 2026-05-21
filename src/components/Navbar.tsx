import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-black/10 bg-[#faf6f0] shadow-sm"
        style={{ height: "174px" }}
      >
        <img
          src="/nav_bg.png"
          alt=""
          aria-hidden
          decoding="async"
          className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1920px] -translate-x-1/2 select-none"
        />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <a
            href="https://www.fidihospitality.com/"
            className="flex h-full w-full max-w-[1920px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Celebrate the Spirit of America — visit FIDI Hospitality"
          >
            <span className="font-primary flex flex-col px-4 text-center text-[clamp(1.43rem,4.55vw,3.25rem)] leading-tight tracking-wide">
              <span className="text-patriot-red">Celebrate</span>
              <span className="text-primary">the Spirit of America</span>
            </span>
          </a>
        </div>
      </nav>

      <div
        className="fixed left-0 right-0 z-10 h-0.5 bg-primary-gradient"
        style={{ top: "174px" }}
      />
    </>
  );
};

export default Navbar;
