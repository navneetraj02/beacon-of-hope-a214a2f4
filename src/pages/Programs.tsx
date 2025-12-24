import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { GraduationCap, Heart, Users, Sparkles, ChevronRight } from "lucide-react";

const programs = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Support for Children",
    shortDesc: "Equipping young minds for success",
    fullDesc: "We provide school bags, books, pens, and uniforms to children who attend school without basic learning materials. Our first outreach focused on equipping students with essential supplies to support their education.",
    impact: "Removing barriers to education",
    color: "from-teal-light/20 to-transparent",
  },
  {
    id: "widows",
    icon: Heart,
    title: "Widow Support Program",
    shortDesc: "Restoring dignity and hope",
    fullDesc: "We reach out to widows who lack food and basic necessities by providing food items and support to help ease daily hardships. Every widow deserves to be seen, valued, and cared for.",
    impact: "Providing daily sustenance",
    color: "from-secondary/20 to-transparent",
  },
  {
    id: "orphans",
    icon: Users,
    title: "Orphan Care & Support",
    shortDesc: "Building community and belonging",
    fullDesc: "We support orphans through material assistance and community care, ensuring they are not forgotten or neglected. Every child deserves to feel loved and connected.",
    impact: "Creating family bonds",
    color: "from-teal-light/20 to-transparent",
  },
  {
    id: "girls",
    icon: Sparkles,
    title: "Support for Young Girls",
    shortDesc: "Empowering the next generation",
    fullDesc: "We assist young girls from vulnerable backgrounds by addressing their basic needs and promoting dignity, safety, and care. Every girl deserves protection and the opportunity to thrive.",
    impact: "Nurturing potential",
    color: "from-secondary/20 to-transparent",
  },
];

const Programs = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Programs | Beacon of Blessings</title>
        <meta
          name="description"
          content="Discover our programs: Education Support, Widow Care, Orphan Support, and Young Girls Care. Each program is designed to restore hope and dignity."
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
              Chapter Three
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              Action in <span className="text-gradient-gold">Motion</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Light becomes paths. Paths become hands. Hands become action.
            </motion.p>
          </div>
        </section>

        {/* Programs - Interactive Cards */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {programs.map((program, index) => {
                const isExpanded = expandedProgram === program.id;
                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                        isExpanded ? "border-secondary/50" : ""
                      }`}
                      onClick={() => setExpandedProgram(isExpanded ? null : program.id)}
                      whileHover={{ scale: 1.01 }}
                    >
                      {/* Header */}
                      <div className="p-6 md:p-8 flex items-center gap-6">
                        <motion.div
                          className="w-16 h-16 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center"
                          animate={{ rotate: isExpanded ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 text-secondary" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                            {program.title}
                          </h3>
                          <p className="font-body text-sm text-muted-foreground">
                            {program.shortDesc}
                          </p>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          <ChevronRight className="w-6 h-6 text-muted-foreground" />
                        </motion.div>
                      </div>

                      {/* Expanded Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 md:px-8 pb-8 bg-gradient-to-b ${program.color}`}>
                          <div className="pt-4 border-t border-border/30">
                            <p className="font-body text-muted-foreground leading-relaxed mb-4">
                              {program.fullDesc}
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10">
                              <span className="w-2 h-2 rounded-full bg-secondary" />
                              <span className="font-body text-sm text-secondary">
                                {program.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Be Part of the <span className="text-gradient-gold">Action</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Every program needs supporters. Your involvement turns plans into reality
                and dreams into lived experiences.
              </p>
              <motion.a
                href="/get-involved"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Our Mission
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

export default Programs;
