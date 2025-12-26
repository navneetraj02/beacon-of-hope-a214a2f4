import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Phone, MapPin } from "lucide-react";

const Contact = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    // Load Fillout embed script
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Beacon of Blessings</title>
        <meta
          name="description"
          content="Get in touch with Beacon of Blessings. We welcome inquiries, partnerships, and support."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-[40vh] flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-hero opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="inline-block font-body text-xs tracking-[0.4em] uppercase text-secondary mb-6"
            >
              Connect With Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            >
              Get in <span className="text-gradient-gold">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
            >
              We welcome inquiries, partnerships, and support.
            </motion.p>
          </div>
        </section>

        {/* Contact Info + Fillout Form */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h2 className="font-display text-2xl text-foreground mb-8">
                  Reach Out Directly
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+15874320753" className="font-body text-foreground hover:text-secondary transition-colors">
                        +1 (587) 432-0753
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">Location</p>
                      <p className="font-body text-foreground">Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Whether you have questions about our programs, want to explore partnership 
                    opportunities, or simply want to learn more about our mission—we'd love 
                    to hear from you.
                  </p>
                </div>
              </motion.div>

              {/* Fillout Form Embed */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="glass-card rounded-3xl p-4 overflow-hidden">
                  <h2 className="font-display text-2xl text-foreground mb-4 px-4 pt-4">
                    Send a Message
                  </h2>
                  <div 
                    className="w-full rounded-2xl overflow-hidden"
                    style={{ minHeight: "600px" }}
                  >
                    <div
                      data-fillout-id="9fpMZb4V9Mus"
                      data-fillout-embed-type="standard"
                      data-fillout-inherit-parameters
                      style={{ width: "100%", height: "600px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default Contact;
