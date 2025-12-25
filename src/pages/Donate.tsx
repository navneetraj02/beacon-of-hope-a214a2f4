import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { Heart, GraduationCap, Utensils, Users, CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationImpacts = [
  { icon: GraduationCap, amount: 25, label: "$25", impact: "School supplies for one child" },
  { icon: Utensils, amount: 50, label: "$50", impact: "Food package for a widow" },
  { icon: Users, amount: 100, label: "$100", impact: "Support for an orphan's needs" },
  { icon: Heart, amount: 0, label: "Custom", impact: "Every amount makes a difference" },
];

const Donate = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    email: "",
  });
  const { toast } = useToast();

  const handleDonateClick = async () => {
    const finalAmount = selectedAmount === 0 ? parseFloat(customAmount) : selectedAmount;
    
    if (!finalAmount || finalAmount <= 0) {
      toast({
        title: "Please select an amount",
        description: "Choose a donation amount to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!cardDetails.name || !cardDetails.email || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvc) {
      toast({
        title: "Please fill all fields",
        description: "All payment details are required.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing (test mode)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setDonationComplete(true);
    
    toast({
      title: "Thank you for your donation!",
      description: `Your generous gift of $${finalAmount} will make a real difference.`,
    });
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  if (donationComplete) {
    return (
      <>
        <Helmet>
          <title>Thank You | Beacon of Blessings</title>
        </Helmet>
        <Navigation />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            <h1 className="font-display text-4xl text-foreground mb-4">Thank You!</h1>
            <p className="font-body text-muted-foreground mb-8 max-w-md">
              Your donation of ${selectedAmount === 0 ? customAmount : selectedAmount} has been received. 
              You're now part of the light bringing hope to communities in need.
            </p>
            <button
              onClick={() => {
                setDonationComplete(false);
                setSelectedAmount(null);
                setCustomAmount("");
                setCardDetails({ number: "", expiry: "", cvc: "", name: "", email: "" });
              }}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-body font-medium"
            >
              Make Another Donation
            </button>
          </motion.div>
        </main>
        <Footer />
        <AIChatbot />
      </>
    );
  }

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
                    key={item.label}
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
                      {item.label}
                    </div>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.impact}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto mt-6"
              >
                <div className="glass-card rounded-xl p-4">
                  <label className="block font-body text-sm text-muted-foreground mb-2">
                    Enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-display text-xl">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="0"
                      min="1"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-display text-2xl text-foreground"
                    />
                  </div>
                </div>
              </motion.div>
            )}
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
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center"
                  >
                    <CreditCard className="w-10 h-10 text-secondary" />
                  </motion.div>

                  <h2 className="font-display text-2xl text-foreground mb-4">
                    Make Your Gift
                  </h2>
                  
                  {(selectedAmount !== null && selectedAmount > 0) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 rounded-xl bg-secondary/10 border border-secondary/30 inline-block"
                    >
                      <span className="font-body text-sm text-muted-foreground">Selected: </span>
                      <span className="font-display text-xl text-secondary">${selectedAmount}</span>
                    </motion.div>
                  )}
                  
                  {selectedAmount === 0 && customAmount && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 rounded-xl bg-secondary/10 border border-secondary/30 inline-block"
                    >
                      <span className="font-body text-sm text-muted-foreground">Selected: </span>
                      <span className="font-display text-xl text-secondary">${customAmount}</span>
                    </motion.div>
                  )}
                </div>

                {/* Payment Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={cardDetails.name}
                      onChange={handleCardChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={cardDetails.email}
                      onChange={handleCardChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">Card Number</label>
                    <input
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardChange}
                      placeholder="4242 4242 4242 4242"
                      maxLength={19}
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">Expiry</label>
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        value={cardDetails.cvc}
                        onChange={handleCardChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-secondary/50 focus:outline-none transition-colors font-body text-foreground"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      onClick={handleDonateClick}
                      disabled={isProcessing}
                      className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                      whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    >
                      {isProcessing ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Heart className="w-5 h-5" />
                          Donate Now
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-center font-body text-xs text-muted-foreground pt-2">
                    <span className="text-green-500">🔒</span> Test mode - no real charges. 
                    <br />Questions? <a href="/contact" className="text-secondary hover:underline">Contact us</a>.
                  </p>
                </div>
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
