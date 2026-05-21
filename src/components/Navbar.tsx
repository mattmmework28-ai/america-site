import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar-shell fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-black/10 bg-white shadow-sm">
        <img
          src="/nav_bg.png"
          alt=""
          aria-hidden
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-1 sm:pb-1.5">
          <a
            href="https://www.fidihospitality.com/"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2"
            aria-label="Celebrate the Spirit of America — visit FIDI Hospitality"
          >
            <span className="navbar-header-text font-primary text-center text-sm font-semibold tracking-wide text-[#1e3a5f] sm:text-base lg:text-lg">
              Celebrate the Spirit of America
            </span>
          </a>
        </div>
      </nav>

      <div className="navbar-divider fixed left-0 right-0 z-10 h-0.5 bg-primary" />
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  );
};

export default Navbar;
