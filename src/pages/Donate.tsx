import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Heart, GraduationCap, Utensils, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationImpacts = [
  { icon: GraduationCap, amount: "$25", impact: "School supplies for one child" },
  { icon: Utensils, amount: "$50", impact: "Food package for a widow" },
  { icon: Users, amount: "$100", impact: "Support for an orphan's needs" },
  { icon: Heart, amount: "Any", impact: "Every amount makes a difference" },
];

const Donate = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDonateClick = () => {
    toast({
      title: "Donation System Coming Soon",
      description: "We're setting up secure payment processing. Please contact us directly to donate.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Donate | Beacon of Blessings</title>
        <meta
          name="description"
          content="Support Beacon of Blessings through your generous donation. Every contribution provides school supplies, food, and care to those in need."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[50vh] flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-6"
            >
              Support Our Mission
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              Extend the <span className="text-gradient-gold">Light</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Your generosity provides school supplies for children, food for widows, 
              and care for orphans and young girls.
            </motion.p>
          </div>
        </section>

        {/* Impact Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {donationImpacts.map((item, index) => {
                const Icon = item.icon;
                const isSelected = selectedAmount === item.amount;

                return (
                  <motion.button
                    key={item.amount}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedAmount(isSelected ? null : item.amount)}
                    className={`glass-card rounded-2xl p-6 text-center transition-all duration-300 ${
                      isSelected ? "border-secondary shadow-beacon" : "hover:border-secondary/30"
                    }`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? "text-secondary" : "text-muted-foreground"}`} />
                    <div className={`font-display text-2xl mb-2 ${isSelected ? "text-secondary" : "text-foreground"}`}>
                      {item.amount}
                    </div>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.impact}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Donation Form Area */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-lg mx-auto"
            >
              <div className="glass-card rounded-3xl p-8 md:p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center"
                >
                  <Heart className="w-10 h-10 text-secondary" />
                </motion.div>

                <h2 className="font-display text-2xl text-foreground mb-4">
                  Make Your Gift
                </h2>
                <p className="font-body text-muted-foreground mb-8">
                  Your donation is secure and tax-deductible. Every contribution, 
                  no matter the size, makes a real difference.
                </p>

                {selectedAmount && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-secondary/10 border border-secondary/30"
                  >
                    <span className="font-body text-sm text-muted-foreground">Selected amount:</span>
                    <div className="font-display text-2xl text-secondary">{selectedAmount}</div>
                  </motion.div>
                )}

                <motion.button
                  onClick={handleDonateClick}
                  className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate Now
                </motion.button>

                <p className="mt-6 font-body text-xs text-muted-foreground">
                  Secure payment processing. Questions? <a href="/contact" className="text-secondary hover:underline">Contact us</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl text-foreground mb-6">
                Other Ways to Support
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Beyond financial donations, you can also support our mission by volunteering 
                your time, partnering with us, or spreading the word about our work.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/get-involved"
                  className="px-6 py-3 border border-secondary/50 text-secondary rounded-full font-body font-medium hover:bg-secondary/10 transition-all duration-300"
                >
                  Volunteer
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-muted-foreground/30 text-muted-foreground rounded-full font-body font-medium hover:border-secondary/50 hover:text-secondary transition-all duration-300"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default Donate;
