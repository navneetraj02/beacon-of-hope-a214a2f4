import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Complete organization knowledge base
const KNOWLEDGE_BASE = {
  organization: {
    name: "Beacon of Blessings Charity Initiative",
    tagline: "Helping Hands, Healing Hearts",
    type: "Faith-based non-profit organization",
    location: "Nigeria",
    phone: "+1 (587) 432-0753",
    foundation: "Christian faith-based, inspired by the teachings of Jesus Christ",
  },
  mission: "To demonstrate the love of Jesus Christ by supporting vulnerable children, widows, orphans, and young girls through education assistance, basic needs support, and community outreach.",
  vision: "A Nigeria where vulnerable individuals are supported, empowered, and given hope for a brighter future.",
  whyEstablished: "The organization was founded out of a desire to share God's love with those who lack basic necessities—people who may not have access to education, food, or support systems. We believe that everyone deserves care, dignity, and opportunity.",
  leadership: {
    founder: { name: "Lionel Tchami", role: "Founder & Director" },
    coordinator: { name: "Grace", role: "Community Coordinator (Nigeria)" },
    board: ["Samuel Okafor", "Rebecca Johnson", "Michael Adeyemi"],
    advisors: ["Faith Williams", "Daniel Thompson"],
  },
  programs: [
    {
      name: "Education Support for Children",
      description: "We provide school bags, books, pens, and uniforms to children who attend school without basic learning materials. Our first outreach focused on equipping students with essential supplies to support their education.",
    },
    {
      name: "Widow Support Program",
      description: "We reach out to widows who lack food and basic necessities by providing food items and support to help ease daily hardships.",
    },
    {
      name: "Orphan Care & Support",
      description: "We support orphans through material assistance and community care, ensuring they are not forgotten or neglected.",
    },
    {
      name: "Support for Young Girls",
      description: "We assist young girls from vulnerable backgrounds by addressing their basic needs and promoting dignity, safety, and care.",
    },
  ],
  impact: [
    "First community outreach successfully completed",
    "School bags and supplies distributed to children",
    "Food support provided to widows",
    "Direct community engagement achieved",
  ],
  howToHelp: [
    "Volunteer in community outreach",
    "Partner with us to expand our impact",
    "Support our mission financially through donations",
  ],
  problems: [
    "Children attend school without basic learning materials (school bags, books, pens, uniforms)",
    "Widows and vulnerable families struggle to access food and essential support",
    "Orphans and young girls are often left without protection, guidance, or opportunities",
    "These challenges limit education, dignity, and hope for a better future",
  ],
};

// Smart response generator
const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  // Greetings
  if (lowerInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/)) {
    return `Hello! Welcome to Beacon of Blessings Charity Initiative. I'm here to help you learn about our mission to support vulnerable communities in Nigeria. What would you like to know about? You can ask about our programs, how to donate, volunteer opportunities, or our leadership team.`;
  }

  // Donate related
  if (lowerInput.match(/donat|give|contribut|support financially|money|fund|payment|stripe/)) {
    return `Thank you for your generous heart! Your donations help us provide:\n\n• School supplies for children (bags, books, uniforms)\n• Food assistance for widows\n• Care and support for orphans\n• Basic needs for young girls\n\nYou can donate securely through our Donate page. Every contribution, no matter the size, makes a real difference in someone's life. Would you like to know more about how your donation is used?`;
  }

  // Volunteer/Get involved
  if (lowerInput.match(/volunteer|help out|get involved|join|participate|how can i help/)) {
    return `We'd love to have you join our mission! Here's how you can get involved:\n\n1. **Volunteer** - Join our community outreach programs\n2. **Partner** - Collaborate with us to expand our impact\n3. **Donate** - Support our mission financially\n4. **Spread the Word** - Share our mission with others\n\nVisit our 'Get Involved' page to learn more. Your time, skills, or resources can transform lives!`;
  }

  // Contact information
  if (lowerInput.match(/contact|reach|phone|call|email|location|address|where are you/)) {
    return `You can reach Beacon of Blessings at:\n\n📞 Phone: ${KNOWLEDGE_BASE.organization.phone}\n📍 Location: Nigeria\n\nYou can also use the contact form on our Contact page to send us a message directly. We welcome inquiries, partnership proposals, and support offers!`;
  }

  // Programs
  if (lowerInput.match(/program|what do you do|services|activities|work|help people/)) {
    const programs = KNOWLEDGE_BASE.programs.map((p, i) => `${i + 1}. **${p.name}**`).join("\n");
    return `We run four key programs:\n\n${programs}\n\nWould you like to know more about any specific program?`;
  }

  // Education program
  if (lowerInput.match(/education|school|children|student|books|uniform|supplies|learning/)) {
    const edu = KNOWLEDGE_BASE.programs[0];
    return `**${edu.name}**\n\n${edu.description}\n\nMany children in Nigeria attend school without basic materials, which limits their ability to learn effectively. Your support helps change that!`;
  }

  // Widow program
  if (lowerInput.match(/widow|women|food|hunger|daily needs/)) {
    const widow = KNOWLEDGE_BASE.programs[1];
    return `**${widow.name}**\n\n${widow.description}\n\nWidows often face tremendous challenges in providing for themselves and their families. We're here to ease their burdens.`;
  }

  // Orphan program
  if (lowerInput.match(/orphan|parentless|abandoned/)) {
    const orphan = KNOWLEDGE_BASE.programs[2];
    return `**${orphan.name}**\n\n${orphan.description}\n\nEvery child deserves love, care, and a chance at a better future.`;
  }

  // Young girls program
  if (lowerInput.match(/girl|young women|dignity|safety/)) {
    const girls = KNOWLEDGE_BASE.programs[3];
    return `**${girls.name}**\n\n${girls.description}\n\nWe believe every girl deserves to grow up with dignity, safety, and opportunity.`;
  }

  // Leadership/Founder
  if (lowerInput.match(/founder|who started|leadership|team|director|lionel|grace|board/)) {
    const { founder, coordinator, board, advisors } = KNOWLEDGE_BASE.leadership;
    return `**Our Leadership Team:**\n\n👤 **${founder.name}** - ${founder.role}\n👤 **${coordinator.name}** - ${coordinator.role}\n\n**Board Members:**\n${board.map(b => `• ${b}`).join("\n")}\n\n**Advisors:**\n${advisors.map(a => `• ${a}`).join("\n")}\n\nVisit our Leadership page to learn more about the people behind our mission.`;
  }

  // Mission
  if (lowerInput.match(/mission|purpose|goal|objective/)) {
    return `**Our Mission:**\n\n${KNOWLEDGE_BASE.mission}\n\nWe believe that practical acts of compassion, inspired by the love of Jesus Christ, can transform communities.`;
  }

  // Vision
  if (lowerInput.match(/vision|future|dream|aspiration/)) {
    return `**Our Vision:**\n\n${KNOWLEDGE_BASE.vision}\n\nWe work every day toward this vision, one community at a time.`;
  }

  // About/Who
  if (lowerInput.match(/about|who are you|tell me about|what is beacon|organization/)) {
    return `**${KNOWLEDGE_BASE.organization.name}** is a ${KNOWLEDGE_BASE.organization.type} committed to serving vulnerable communities in Nigeria.\n\n**Tagline:** "${KNOWLEDGE_BASE.organization.tagline}"\n\n${KNOWLEDGE_BASE.whyEstablished}\n\nWould you like to know about our programs or how you can help?`;
  }

  // Impact
  if (lowerInput.match(/impact|results|achievement|accomplish|done|difference/)) {
    const impacts = KNOWLEDGE_BASE.impact.map(i => `✓ ${i}`).join("\n");
    return `**Our Impact So Far:**\n\n${impacts}\n\nThough we are growing, each outreach brings real change to lives within our community. Visit our Impact page to see our journey!`;
  }

  // Problem/Why needed
  if (lowerInput.match(/problem|issue|challenge|why needed|why exist|need/)) {
    const problems = KNOWLEDGE_BASE.problems.map(p => `• ${p}`).join("\n");
    return `**The Problems We Address:**\n\n${problems}\n\nThese challenges motivate us to act with compassion and urgency. Every contribution helps address these issues.`;
  }

  // Faith/Christian
  if (lowerInput.match(/faith|christian|jesus|church|god|religion|spiritual|prayer/)) {
    return `Beacon of Blessings is rooted in Christian faith. Our work is inspired by the teachings of Jesus Christ—to love our neighbors and care for the vulnerable.\n\nWe express our faith through practical acts of compassion, serving all people regardless of their background. Our motivation is love, and our goal is to share hope and dignity with every person we serve.`;
  }

  // Nigeria specific
  if (lowerInput.match(/nigeria|african|africa|country/)) {
    return `We are based in Nigeria and focus our efforts on serving vulnerable communities across the country. Nigeria faces significant challenges in education access, food security, and support for vulnerable populations—especially widows, orphans, and young girls.\n\nOur community-based approach ensures we reach those who need help the most.`;
  }

  // Thank you
  if (lowerInput.match(/thank|thanks|appreciate|grateful/)) {
    return `You're very welcome! Thank you for your interest in Beacon of Blessings. Your curiosity and care mean a lot to us. Is there anything else you'd like to know?`;
  }

  // Goodbye
  if (lowerInput.match(/bye|goodbye|see you|farewell|take care/)) {
    return `Thank you for visiting! May you be blessed. If you ever want to learn more or get involved, we're always here. Take care! 🌟`;
  }

  // How to support
  if (lowerInput.match(/how.*support|ways.*help|contribute/)) {
    const ways = KNOWLEDGE_BASE.howToHelp.map(h => `• ${h}`).join("\n");
    return `**Ways You Can Support:**\n\n${ways}\n\nEvery contribution—whether time, skills, or resources—helps change lives. Which option interests you most?`;
  }

  // Default response - more helpful
  return `Thank you for your question! I'm here to help you learn about Beacon of Blessings Charity Initiative.\n\nHere's what I can tell you about:\n• Our **programs** (education, widow support, orphan care, young girls)\n• **How to donate** or support our work\n• **Volunteer** opportunities\n• Our **mission, vision,** and **leadership**\n• Our **impact** and the **problems** we address\n• **Contact** information\n\nWhat would you like to know more about?`;
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your guide to Beacon of Blessings Charity Initiative. I can tell you about our programs, how to donate, volunteer opportunities, our leadership, and much more. How can I help you today?",
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

    // Generate contextual response
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 lg:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300"
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
            className="fixed bottom-36 lg:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[90vw] max-w-[380px] h-[60vh] sm:h-[500px] max-h-[70vh] rounded-2xl overflow-hidden glass-card border border-border/40 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary/80 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-border/30">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-sm text-foreground">Beacon Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything about our mission</p>
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
                        {line.includes("**") ? (
                          <span dangerouslySetInnerHTML={{ 
                            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                          }} />
                        ) : line}
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
