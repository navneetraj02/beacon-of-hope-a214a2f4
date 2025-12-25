import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const desktopNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "Leadership", path: "/leadership" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Contact", path: "/contact" },
];

// Only Impact and Leadership in mobile top nav
const mobileTopLinks = [
  { name: "Impact", path: "/impact" },
  { name: "Leadership", path: "/leadership" },
  { name: "Donate", path: "/donate" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/30" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Bigger size */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src={logo}
                alt="Beacon of Blessings"
                className="h-14 sm:h-16 lg:h-20 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {desktopNavLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-secondary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link
                  to="/donate"
                  className="px-6 py-2.5 bg-secondary text-secondary-foreground rounded-full font-body text-sm font-medium hover:bg-secondary/90 transition-all duration-300 hover:shadow-glow"
                >
                  Donate
                </Link>
              </motion.div>
            </div>

            {/* Mobile Top Links + Menu Button */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-4">
              {mobileTopLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-xs sm:text-sm transition-colors duration-300 ${
                    link.name === "Donate" 
                      ? "px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-secondary-foreground rounded-full font-medium"
                      : location.pathname === link.path
                        ? "text-secondary"
                        : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
