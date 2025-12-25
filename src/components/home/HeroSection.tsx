import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import childrenImage from "@/assets/children-school.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-depth" />
        
        {/* Beacon glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{ transform: `translate(-50%, ${scrollY * -0.2}px)` }}
        >
          <div className="w-full h-full bg-gradient-hero opacity-80" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Beacon Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-glow-pulse" />
              <div className="relative w-full h-full bg-secondary rounded-full flex items-center justify-center shadow-beacon">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-secondary-foreground">
                  <path
                    fill="currentColor"
                    d="M12 2L4 12l8 10 8-10L12 2zm0 3.5L17.5 12 12 18.5 6.5 12 12 5.5z"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-secondary mb-6"
          >
            Helping Hands, Healing Hearts
          </motion.p>

          {/* Main Title with Children Image */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8"
            >
              A Light Rises{" "}
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="text-gradient-gold"
                >
                  Where Hope
                </motion.span>
                {/* Children image appearing behind "Where Hope" */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 2.2 }}
                  className="absolute -bottom-20 md:-bottom-32 left-1/2 -translate-x-1/2 w-48 md:w-72 lg:w-96 z-[-1]"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/30 rounded-2xl blur-2xl" />
                    <img
                      src={childrenImage}
                      alt="Children with hope"
                      className="rounded-2xl shadow-beacon opacity-80 w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
                  </div>
                </motion.div>
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                Was Needed Most
              </motion.span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Beacon of Blessings exists to share the love of Jesus Christ through
            practical acts of compassion—restoring hope, dignity, and opportunity
            to vulnerable communities across Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/programs"
              className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              Discover Our Mission
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 border border-secondary/50 text-secondary rounded-full font-body font-medium hover:bg-secondary/10 transition-all duration-300"
            >
              Join the Light
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
