import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { User } from "lucide-react";

const leaders = [
  {
    name: "Lionel Tchami",
    role: "Founder & Director",
    description: "Driven by a heart to share God's love with those in need, Lionel founded Beacon of Blessings to bring practical compassion to vulnerable communities.",
    featured: true,
  },
  {
    name: "Grace",
    role: "Community Coordinator (Nigeria)",
    description: "Grace leads our on-the-ground efforts in Nigeria, connecting with communities and ensuring our programs reach those who need them most.",
    featured: true,
  },
];

const boardMembers = [
  { name: "Samuel Okafor", role: "Board Member" },
  { name: "Rebecca Johnson", role: "Board Member" },
  { name: "Michael Adeyemi", role: "Board Member" },
];

const advisors = [
  { name: "Faith Williams", role: "Advisor" },
  { name: "Daniel Thompson", role: "Advisor" },
];

const Leadership = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Leadership | Beacon of Blessings</title>
        <meta
          name="description"
          content="Meet the leaders of Beacon of Blessings—people committed to serving with love, compassion, and dedication."
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
              Chapter Five
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              People, Not <span className="text-gradient-gold">Positions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Behind every action is a person with a heart for service. 
              Meet the team that makes our mission possible.
            </motion.p>
          </div>
        </section>

        {/* Featured Leaders */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-card rounded-3xl p-8 text-center"
                >
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring" }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center border-2 border-secondary/30"
                  >
                    <User className="w-12 h-12 text-secondary" />
                  </motion.div>

                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {leader.name}
                  </h3>
                  <span className="inline-block font-body text-sm text-secondary mb-4">
                    {leader.role}
                  </span>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board & Advisors */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Board Members */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                  Board Members
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {boardMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {member.name}
                      </h3>
                      <span className="font-body text-xs text-muted-foreground">
                        {member.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Advisors */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                  Advisors
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
                  {advisors.map((advisor, index) => (
                    <motion.div
                      key={advisor.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {advisor.name}
                      </h3>
                      <span className="font-body text-xs text-muted-foreground">
                        {advisor.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join the Team */}
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
                Serve With <span className="text-gradient-gold">Purpose</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                We're always looking for passionate individuals to join our mission. 
                Whether through volunteering, partnership, or support—there's a place for you.
              </p>
              <motion.a
                href="/get-involved"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Involved
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

export default Leadership;
