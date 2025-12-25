import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, BookOpen, Heart, Phone } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Programs", path: "/programs", icon: BookOpen },
  { name: "Involved", path: "/get-involved", icon: Heart },
  { name: "Contact", path: "/contact", icon: Phone },
];

export const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      <div className="mx-3 mb-3">
        <div className="glass-card rounded-2xl border border-border/40 px-2 py-2 flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-1 px-3 py-2 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="bottomNavActive"
                    className="absolute inset-0 bg-secondary/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon 
                  size={20} 
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-secondary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                <span 
                  className={`relative z-10 text-[10px] font-body font-medium transition-colors duration-300 ${
                    isActive ? "text-secondary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
