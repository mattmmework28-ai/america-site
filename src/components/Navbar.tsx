import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar-shell fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-black/10 bg-white shadow-sm">
        <a
          href="https://www.fidihospitality.com/"
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2"
          aria-label="Visit FIDI Hospitality"
        >
          <img
            src="/nav_bg.png"
            alt="Memorial Day"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </a>
      </nav>

      <div className="navbar-divider fixed left-0 right-0 z-10 h-0.5 bg-primary" />
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  );
};

export default Navbar;
