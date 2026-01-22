import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu_icon.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===== TOP BANNER ===== */}
      <div
        className="text-white text-center text-sm md:text-base py-2 px-4"
        style={{
          background:
            "linear-gradient(92.15deg, var(--primary-1) 2.09%, var(--primary-2) 86.55%)",
        }}
      >
        🚀 <span className="font-semibold">Join Reward Capital Investment</span>{" "}
        — <span className="font-semibold">$5 Million</span> in prizes & seed
        funding.{" "}
        <Link to="/signup" className="underline font-semibold">
          Join us today
        </Link>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav
        className="w-full px-6 py-4 flex items-center justify-between relative"
        style={{ backgroundColor: "var(--background-b)" }}
      >
        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src={menuIcon}
            alt="menu"
            className={`w-6 h-6 transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
          <span className="text-white text-sm">Menu</span>
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-white text-lg font-semibold md:static md:translate-x-0 md:text-xl"
        >
          Reward Capital
        </Link>

        {/* MOBILE LOGIN */}
        <Link
          to="/login"
          className="md:hidden px-4 py-2 rounded-full text-white text-sm"
          style={{ backgroundColor: "var(--primary-2)" }}
        >
          Login
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="nav-link text-[var(--white70)] hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/login"
            className="px-6 py-2 rounded-full text-white font-medium transition hover:opacity-90"
            style={{ backgroundColor: "var(--primary-2)" }}
          >
            Login
          </Link>
        </div>

        {/* ===== MOBILE SLIDE MENU ===== */}
        {open && (
          <div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "var(--background-b)" }}
          >
            <div className="flex flex-col items-start p-8 gap-8 h-full">
              <button
                className="text-white text-2xl self-end"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl transition-transform duration-300 hover:translate-x-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
