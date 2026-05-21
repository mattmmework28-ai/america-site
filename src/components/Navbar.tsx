import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 shadow-sm"
        style={{
          backgroundImage: "url('/nav_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "151px",
        }}
      >
        <div className="flex h-full items-center justify-center px-6">
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
        style={{ top: "151px" }}
      />
    </>
  );
};

export default Navbar;
