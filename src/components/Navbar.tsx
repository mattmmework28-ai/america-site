import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar-shell fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-black/10 bg-[#faf6f0] shadow-sm">
        <img
          src="/nav_bg.png"
          alt=""
          aria-hidden
          decoding="async"
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto block h-full w-full max-w-[1920px] object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center px-3 pt-1.5 sm:px-6 sm:pt-2">
          <a
            href="https://www.fidihospitality.com/"
            className="flex max-w-[1920px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Celebrate the Spirit of America — visit FIDI Hospitality"
          >
            <span className="navbar-header-text font-primary flex flex-col px-2 text-center text-[1.05rem] leading-tight tracking-wide sm:px-4 sm:text-[clamp(1.25rem,4.55vw,3.25rem)]">
              <span className="text-patriot-red">Celebrate</span>
              <span className="text-primary">the Spirit of America</span>
            </span>
          </a>
        </div>
      </nav>

      <div className="navbar-divider fixed left-0 right-0 z-10 h-0.5 bg-primary-gradient" />
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  );
};

export default Navbar;
