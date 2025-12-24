import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const impactStats = [
  { number: "1st", label: "Outreach Completed", description: "Building momentum" },
  { number: "50+", label: "Children Equipped", description: "With school supplies" },
  { number: "20+", label: "Widows Supported", description: "With food assistance" },
  { number: "∞", label: "Lives Touched", description: "And growing" },
];

export const ImpactPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-4"
          >
            Our Journey
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Every Step <span className="text-gradient-gold">Matters</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Though we are growing, each outreach brings real change to lives within our community.
          </p>
        </motion.div>

        {/* Impact Stats - Horizontal Scroll on Mobile */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="flex-1 min-w-[140px] max-w-[180px] text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15, type: "spring" }}
                className="font-display text-4xl md:text-5xl text-secondary mb-2 glow-text"
              >
                {stat.number}
              </motion.div>
              <h3 className="font-display text-sm text-foreground mb-1">{stat.label}</h3>
              <p className="font-body text-xs text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Link
            to="/impact"
            className="inline-flex items-center gap-3 font-body text-sm text-secondary hover:text-secondary/80 transition-colors duration-300 group"
          >
            <span>View Full Impact Story</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
