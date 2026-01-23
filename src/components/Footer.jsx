import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook API here later
    setEmail("");
  };

  return (
    <footer className="w-full text-white pt-16 bg-[#02040e]">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* ===== BRAND ===== */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Reward Capital</h2>
          <p className="text-sm text-[var(--white70)] mb-6">
            Empowering decentralized investments with transparent rewards and
            secure blockchain infrastructure.
          </p>

          <div className="flex flex-col gap-3 w-fit">
            <a
              href="https://apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 hover:border-[#ff8d3a] transition"
            >
              <FaApple size={20} />
              <span className="text-sm">Download on App Store</span>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/20 hover:border-[#ff8d3a] transition"
            >
              <FaGooglePlay size={18} />
              <span className="text-sm">Get it on Play Store</span>
            </a>
          </div>
        </div>

        {/* ===== COMPANY ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-[var(--white70)]">
            <li>
              <Link
                to="/"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== RESOURCES ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-[var(--white70)]">
            <li>
              <a
                href="/"
                target="_blank"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                White Paper
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                GitHub
              </a>
            </li>
            <li>
              <Link
                to="#roadmap"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white hover:underline decoration-[#ff8d3a]"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== NEWSLETTER / CONTACT ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-transparent border border-white/20 text-sm focus:outline-none focus:border-[#ff8d3a]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white font-medium bg-[#ff8d3a] hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          <ul className="space-y-3 text-sm text-[var(--white70)]">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:[email protected]" className="hover:text-white">
                [email protected]
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaGlobe />
              <a
                href="https://rewardcap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                rewardcap.org
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaGithub />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="border-t border-white/10 mt-12 py-6 text-center text-sm text-[var(--white70)]">
        © 2026 Reward Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
