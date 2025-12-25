import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import childrenImage from "@/assets/children-school.jpg";
import widowImage from "@/assets/widow-care.jpg";
import helpingImage from "@/assets/helping-hands.jpg";

const challenges = [
  {
    title: "Without Supplies",
    description: "Children attend school lacking basic materials—bags, books, uniforms.",
    image: childrenImage,
  },
  {
    title: "Without Support",
    description: "Widows struggle daily to access food and essential care.",
    image: widowImage,
  },
  {
    title: "Without Protection",
    description: "Orphans and young girls are left without guidance or opportunity.",
    image: helpingImage,
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background contrast effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            The Reality
          </motion.span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mb-4 md:mb-6">
            Many Walk in{" "}
            <span className="text-muted-foreground italic">Darkness</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed px-4">
            Across communities in Nigeria, countless individuals face daily struggles
            that limit their potential and dim their hope.
          </p>
        </motion.div>

        {/* Challenges Grid with Real Images */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const yValue = index === 0 ? y1 : index === 1 ? y2 : y3;
            
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-secondary/30">
                  {/* Image with Parallax */}
                  <motion.div
                    className="relative h-48 sm:h-56 overflow-hidden"
                    style={{ y: yValue }}
                  >
                    <motion.img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                      initial={{ scale: 1.2 }}
                      animate={isInView ? { scale: 1.1 } : { scale: 1.2 }}
                      transition={{ duration: 1.5 }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-secondary transition-colors duration-300">
                      {challenge.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
              But then
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-secondary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
