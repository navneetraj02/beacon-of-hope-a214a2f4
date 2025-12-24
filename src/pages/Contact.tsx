import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

        {/* Contact Info + Form */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
                  <h2 className="font-display text-2xl text-foreground mb-6">
                    Send a Message
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-body text-sm text-muted-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="donation">Donation Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
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
