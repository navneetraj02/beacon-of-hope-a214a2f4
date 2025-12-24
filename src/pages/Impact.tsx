import { Helmet } from "react-helmet-async";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";

const milestones = [
  {
    year: "2024",
    title: "First Outreach",
    description: "Successfully completed our inaugural community outreach program.",
    highlight: true,
  },
  {
    year: "2024",
    title: "Education Initiative",
    description: "Distributed school bags and supplies to children in need.",
    highlight: false,
  },
  {
    year: "2024",
    title: "Widow Support",
    description: "Provided food assistance to widows in our community.",
    highlight: false,
  },
  {
    year: "Future",
    title: "Expanding Reach",
    description: "Growing our impact across more communities in Nigeria.",
    highlight: true,
  },
];

const Impact = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Helmet>
        <title>Our Impact | Beacon of Blessings</title>
        <meta
          name="description"
          content="See the impact of Beacon of Blessings—our journey of outreach, lives touched, and communities transformed."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[50vh] flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-6"
            >
              Chapter Four
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              Impact as a <span className="text-gradient-gold">Living Story</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Every number represents a life touched. Every milestone, a step toward transformation.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "1", label: "Outreach Completed" },
                { value: "50+", label: "Children Reached" },
                { value: "20+", label: "Widows Supported" },
                { value: "100%", label: "Community Driven" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
                    className="font-display text-4xl md:text-5xl text-secondary mb-2 glow-text"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <span className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-4">
                Our Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                A Timeline of <span className="text-gradient-gold">Hope</span>
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto relative">
              {/* Animated Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border">
                <motion.div
                  className="w-full bg-secondary origin-top"
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Milestones */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`w-4 h-4 rounded-full border-2 ${
                          milestone.highlight
                            ? "bg-secondary border-secondary shadow-glow"
                            : "bg-background border-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="font-body text-sm text-secondary mb-2 block">
                        {milestone.year}
                      </span>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                The Story <span className="text-gradient-gold">Continues</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Though we are just beginning, each step forward illuminates new paths. 
                With your support, we will continue to grow, reach, and transform lives 
                across Nigeria.
              </p>
              <motion.a
                href="/donate"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Be Part of Our Story
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default Impact;
