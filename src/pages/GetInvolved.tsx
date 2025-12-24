import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Heart, Users, Handshake } from "lucide-react";

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our community outreach programs and make a direct impact on the ground.",
    action: "Sign Up to Volunteer",
    color: "from-teal-light/20",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with us to expand our reach and multiply our impact together.",
    action: "Become a Partner",
    color: "from-secondary/20",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Your financial support provides essential supplies, food, and care to those in need.",
    action: "Make a Donation",
    link: "/donate",
    color: "from-secondary/30",
  },
];

const GetInvolved = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Get Involved | Beacon of Blessings</title>
        <meta
          name="description"
          content="Join Beacon of Blessings through volunteering, partnership, or donation. Every contribution helps change lives."
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
              Chapter Six
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              <span className="text-gradient-gold">Participate</span> in Light
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Every contribution—time, skills, or resources—helps change lives.
              Find your way to be part of the mission.
            </motion.p>
          </div>
        </section>

        {/* Involvement Options */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {involvementOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className={`glass-card rounded-3xl p-8 h-full flex flex-col text-center transition-all duration-500 hover:border-secondary/50 bg-gradient-to-b ${option.color} to-transparent`}>
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <Icon className="w-8 h-8 text-secondary" />
                      </motion.div>

                      <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                        {option.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-8 flex-1">
                        {option.description}
                      </p>

                      {option.link ? (
                        <Link
                          to={option.link}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300"
                        >
                          {option.action}
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary/50 text-secondary rounded-full font-body font-medium hover:bg-secondary/10 transition-all duration-300"
                        >
                          {option.action}
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Participate */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                  Why <span className="text-gradient-gold">Participate</span>?
                </h2>
                <div className="space-y-6 text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="font-body text-muted-foreground">
                      <span className="text-foreground">Direct impact</span> — Your contribution goes directly 
                      to those who need it, with full transparency on how resources are used.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="font-body text-muted-foreground">
                      <span className="text-foreground">Community connection</span> — Join a network of 
                      compassionate individuals united by a common purpose.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="font-body text-muted-foreground">
                      <span className="text-foreground">Lasting change</span> — Together, we're not just 
                      addressing symptoms but building sustainable solutions.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to Make a <span className="text-gradient-gold">Difference</span>?
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Have questions or want to learn more? We'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-secondary/50 text-secondary rounded-full font-body font-medium hover:bg-secondary/10 transition-all duration-300"
              >
                Contact Us
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
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default GetInvolved;
