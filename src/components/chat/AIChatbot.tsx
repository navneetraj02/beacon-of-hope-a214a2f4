import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ORGANIZATION_CONTEXT = `You are a helpful assistant for Beacon of Blessings Charity Initiative. 

About the Organization:
- Beacon of Blessings is a faith-based non-profit in Nigeria
- Founded by Lionel Tchami with Grace as Community Coordinator
- Tagline: "Helping Hands, Healing Hearts"
- Mission: Demonstrate the love of Jesus Christ by supporting vulnerable children, widows, orphans, and young girls

Programs:
1. Education Support - School bags, books, pens, uniforms for children
2. Widow Support - Food items and basic necessities
3. Orphan Care - Material assistance and community care
4. Young Girls Support - Basic needs, dignity, safety

Contact:
- Phone: +1 (587) 432-0753
- Location: Nigeria

How to Help:
- Donate via the website
- Volunteer in community outreach
- Partner with the organization

Be warm, compassionate, and helpful. Keep responses concise but informative.`;

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you learn about Beacon of Blessings. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simple pattern-based responses for now (without Lovable Cloud)
    setTimeout(() => {
      let response = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("donate") || lowerInput.includes("give") || lowerInput.includes("support financially")) {
        response = "Thank you for your generous heart! You can donate through our Donate page. Every contribution helps provide school supplies for children, food for widows, and care for orphans. Would you like me to tell you more about how your donation makes an impact?";
      } else if (lowerInput.includes("volunteer") || lowerInput.includes("help out") || lowerInput.includes("get involved")) {
        response = "We'd love to have you join our mission! You can volunteer in community outreach programs or partner with us. Visit our 'Get Involved' page to learn about opportunities. Your time and skills can make a real difference in someone's life.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("phone")) {
        response = "You can reach us at +1 (587) 432-0753. We're based in Nigeria and always happy to hear from those interested in our mission. You can also use the contact form on our Contact page.";
      } else if (lowerInput.includes("program") || lowerInput.includes("what do you do")) {
        response = "We run four key programs:\n\n1. **Education Support** - Providing school bags, books, and uniforms\n2. **Widow Support** - Food and basic necessities\n3. **Orphan Care** - Material assistance and community support\n4. **Young Girls Support** - Promoting dignity and safety\n\nWhich program would you like to learn more about?";
      } else if (lowerInput.includes("founder") || lowerInput.includes("who started") || lowerInput.includes("leadership")) {
        response = "Beacon of Blessings was founded by Lionel Tchami, driven by a desire to share God's love with those lacking basic necessities. Grace serves as our Community Coordinator in Nigeria. Visit our Leadership page to learn more about our team.";
      } else if (lowerInput.includes("mission") || lowerInput.includes("vision") || lowerInput.includes("about")) {
        response = "Our mission is to demonstrate the love of Jesus Christ by supporting vulnerable children, widows, orphans, and young girls through education assistance, basic needs support, and community outreach. Our vision is a Nigeria where vulnerable individuals are supported, empowered, and given hope for a brighter future.";
      } else {
        response = "Thank you for your interest in Beacon of Blessings! We're here to share the love of Jesus Christ through practical acts of compassion. You can ask me about our programs, how to donate, volunteer opportunities, or how to contact us. How may I help you?";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] max-h-[70vh] rounded-2xl overflow-hidden glass-card border border-border/40 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary/80 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-border/30">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-sm text-foreground">Beacon Assistant</h3>
                <p className="text-xs text-muted-foreground">Here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl font-body text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-secondary text-secondary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {message.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/30 bg-background/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our mission..."
                  className="flex-1 bg-muted/50 border border-border/50 rounded-full px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/90 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
