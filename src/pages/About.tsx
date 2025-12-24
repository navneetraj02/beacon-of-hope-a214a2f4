import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Heart, Target, Eye } from "lucide-react";

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const whyRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  return (
    <>
      <Helmet>
        <title>About Us | Beacon of Blessings</title>
        <meta
          name="description"
          content="Learn about Beacon of Blessings Charity Initiative—our mission, vision, and commitment to serving vulnerable communities in Nigeria."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-6"
            >
              Chapter Two
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              Who We <span className="text-gradient-gold">Are</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A faith-based community dedicated to illuminating lives through love, 
              service, and unwavering compassion.
            </motion.p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                    Beacon of Blessings Charity Initiative
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    We are a faith-based non-profit organization committed to serving vulnerable 
                    communities in Nigeria. Our work is rooted in compassion, love, and service 
                    inspired by the teachings of Jesus Christ.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Every action we take is guided by the belief that everyone deserves care, 
                    dignity, and the opportunity to thrive. We don't just provide resources—we 
                    walk alongside those we serve, sharing in their journey toward a brighter future.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why We Were Established */}
        <section ref={whyRef} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-4">
                Our Origin
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Why We Were <span className="text-gradient-gold">Established</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                The organization was founded out of a desire to share God's love with those 
                who lack basic necessities—people who may not have access to education, food, 
                or support systems. We believe that everyone deserves care, dignity, and opportunity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-3xl p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To demonstrate the love of Jesus Christ by supporting vulnerable children, 
                  widows, orphans, and young girls through education assistance, basic needs 
                  support, and community outreach.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card rounded-3xl p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  A Nigeria where vulnerable individuals are supported, empowered, and given 
                  hope for a brighter future—where no child goes to school without supplies, 
                  no widow goes hungry, and no orphan is forgotten.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Faith Statement */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">
                "We exist not to be served, but to serve—extending hands of help and hearts 
                of healing to those who need it most."
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default About;
