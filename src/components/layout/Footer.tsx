import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-forest-dark border-t border-border/20">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Beacon of Blessings" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Sharing the love of Jesus Christ through practical acts of compassion across Nigeria.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Navigate</h4>
            <ul className="space-y-3">
              {["About", "Programs", "Impact", "Leadership"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Join Us</h4>
            <ul className="space-y-3">
              {["Donate", "Volunteer", "Partner", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "volunteer" || item.toLowerCase() === "partner" ? "get-involved" : item.toLowerCase()}`}
                    className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg text-foreground mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="font-body text-sm">+1 (587) 432-0753</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-body text-sm">Nigeria</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground font-body text-xs">
            © {new Date().getFullYear()} Beacon of Blessings Charity Initiative. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> for those in need
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
