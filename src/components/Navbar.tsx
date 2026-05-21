import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar-shell fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-black/10 bg-whitesmoke shadow-sm">
        <img
          src="/nav_bg.png"
          alt=""
          aria-hidden
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto block h-full w-full max-w-[1920px] object-cover object-bottom"
        />
        <div className="navbar-flag-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-3 sm:px-6">
          <a
            href="https://www.fidihospitality.com/"
            className="flex max-w-[1920px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Celebrate the Spirit of America — visit FIDI Hospitality"
          >
            <span className="navbar-header-text font-primary flex flex-col px-2 text-center text-[2.1rem] leading-tight tracking-wide sm:px-4 lg:text-[clamp(1.375rem,5.005vw,3.575rem)]">
              <span className="text-gold-light">Celebrate</span>
              <span className="text-white">the Spirit of America</span>
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
