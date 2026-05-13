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
          height: "112px",
        }}
      >
        <div className="flex h-full items-center justify-center px-6">
          <a
            href="https://www.fidihospitality.com/"
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="Summer Celebrations Begin Here"
              className="h-18 md:h-22 xl:h-26 w-auto"
            />
          </a>
        </div>
      </nav>

      <div
        className="fixed left-0 right-0 z-10 h-0.5 bg-primary-gradient"
        style={{ top: "112px" }}
      />
    </>
  );
};

export default Navbar;
