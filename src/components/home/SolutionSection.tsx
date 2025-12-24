import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Helping the Needy",
    description: "Essential supplies for education and daily life",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Supporting Orphans",
    description: "Care, guidance, and community connection",
    color: "text-secondary",
  },
  {
    icon: Heart,
    title: "Empowering Widows",
    description: "Food, resources, and dignity restored",
    color: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "Caring for Young Girls",
    description: "Protection, opportunity, and hope",
    color: "text-secondary",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Beacon glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-4"
          >
            The Light Emerges
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            <span className="text-gradient-gold">Compassion</span> Becomes Action
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Through outreach programs and community support, we restore hope, dignity,
            and opportunity to those who need it most.
          </p>
        </motion.div>

        {/* Focus Areas - Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full text-center transition-all duration-500 hover:border-secondary/50 hover:shadow-beacon cursor-pointer">
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </motion.div>

                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Link
            to="/programs"
            className="inline-flex items-center gap-3 px-8 py-4 border border-secondary/50 text-secondary rounded-full font-body hover:bg-secondary/10 transition-all duration-300 group"
          >
            <span>Explore Our Programs</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:text-secondary"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
