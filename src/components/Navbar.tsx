import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme"; // import your hook

interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme(); // use your hook

  const navLinks: NavLink[] = [
    { name: "Open Ups Product", path: "/open-ups-product" },
    { name: "CCS Product", path: "/ccs-product" },
    { name: "Logs Product", path: "/logs-product" },
  ];

  // Detect scroll for shadow/backdrop
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              alt="TechRise Logo"
              className="w-12 h-12 object-contain rounded-full transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MufasaOpenUps&Logs
            </span>
          </Link>

          {/* Centered Menu Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
              </Link>
            ))}
          </div>

          {/* Right side: Dark/Light Mode + Contact Button */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark/light mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all duration-200 hidden md:inline-block"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-6 py-3 text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800 rounded-xl mx-2 transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col px-2 pt-2 gap-2">
              {/* Dark/Light Toggle (Mobile) */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
              >
                {theme === "dark" ? <Sun size={20} className="text-yellow-400"/> : <Moon size={20} className="text-gray-800"/>}
                <span className="ml-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
