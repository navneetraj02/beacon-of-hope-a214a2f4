import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";
import educationImage from "@/assets/education-books.jpg";
import communityImage from "@/assets/community-support.jpg";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Helping the Needy",
    description: "Essential supplies for education and daily life",
  },
  {
    icon: Users,
    title: "Supporting Orphans",
    description: "Care, guidance, and community connection",
  },
  {
    icon: Heart,
    title: "Empowering Widows",
    description: "Food, resources, and dignity restored",
  },
  {
    icon: Sparkles,
    title: "Caring for Young Girls",
    description: "Protection, opportunity, and hope",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Beacon glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Full-width Image with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2 }}
          className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-12 md:mb-20"
        >
          <motion.img
            src={communityImage}
            alt="Community support"
            className="w-full h-full object-cover"
            style={{ y: imageY, scale: imageScale }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 sm:px-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="font-display text-xl sm:text-2xl md:text-4xl text-foreground max-w-md leading-tight">
                "Love in action is{" "}
                <span className="text-gradient-gold">service</span>"
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-4"
          >
            The Light Emerges
          </motion.span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-4 md:mb-6">
            <span className="text-gradient-gold">Compassion</span> Becomes Action
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Through outreach programs and community support, we restore hope, dignity,
            and opportunity to those who need it most.
          </p>
        </motion.div>

        {/* Focus Areas with Second Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Left: Focus Area Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-4 sm:p-6 h-full text-center transition-all duration-500 hover:border-secondary/50 hover:shadow-beacon cursor-pointer">
                  <motion.div
                    className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <area.icon className="w-6 sm:w-8 h-6 sm:h-8 text-secondary" />
                  </motion.div>

                  <h3 className="font-display text-sm sm:text-lg text-foreground mb-1 sm:mb-2 group-hover:text-secondary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image with Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden h-64 lg:h-auto"
          >
            <motion.img
              src={educationImage}
              alt="Education support"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-body text-xs sm:text-sm text-foreground/80"
              >
                Every child deserves the tools to learn and grow
              </motion.p>
            </div>
          </motion.div>
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
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-secondary/50 text-secondary rounded-full font-body text-sm sm:text-base hover:bg-secondary/10 transition-all duration-300 group"
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
