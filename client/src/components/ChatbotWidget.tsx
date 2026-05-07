import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "What's the best time to visit Malaysia?",
  "How much does a week in Langkawi cost?",
  "What are the top things to do in Penang?",
  "Is Malaysia safe for solo travelers?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const chatMutation = trpc.ai.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again!",
        },
      ]);
    },
  });

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatMutation.isPending]);

  const handleSend = (content: string) => {
    if (!content.trim() || chatMutation.isPending) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: content.trim() },
    ];
    setMessages(newMessages);
    setInput("");

    chatMutation.mutate({ messages: newMessages });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #4dd9c0, #2a9d8f)",
          boxShadow: "0 0 30px rgba(77, 217, 192, 0.4), 0 8px 32px rgba(0,0,0,0.4)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? {} : { y: [0, -4, 0] }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
              <X className="w-6 h-6 text-[#0a0f1e]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-[#0a0f1e]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] md:w-[420px] h-[560px] flex flex-col rounded-3xl overflow-hidden"
            style={{
              background: "rgba(10, 15, 30, 0.92)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              border: "1px solid rgba(77, 217, 192, 0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(77, 217, 192, 0.1)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4dd9c020, #4dd9c040)" }}>
                <Bot className="w-5 h-5 text-[#4dd9c0]" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Maya</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4dd9c0] animate-pulse" />
                  <span className="text-xs text-white/50">Malaysia Travel Expert</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #4dd9c020, #4dd9c040)" }}>
                    <Sparkles className="w-8 h-8 text-[#4dd9c0]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Hi! I'm Maya 👋</div>
                    <div className="text-sm text-white/50 max-w-[260px]">
                      Your personal Malaysia travel guide. Ask me anything about destinations, costs, or trip planning!
                    </div>
                  </div>
                  <div className="w-full space-y-2 mt-2">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-white/70 hover:text-white transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ background: "rgba(77, 217, 192, 0.15)" }}>
                          <Bot className="w-4 h-4 text-[#4dd9c0]" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                          msg.role === "user"
                            ? "text-[#0a0f1e] font-medium"
                            : "text-white/85"
                        }`}
                        style={
                          msg.role === "user"
                            ? { background: "linear-gradient(135deg, #4dd9c0, #2a9d8f)" }
                            : { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }
                        }
                      >
                        {msg.role === "assistant" ? (
                          <div className="prose prose-sm prose-invert max-w-none text-white/85">
                            <Streamdown>{msg.content}</Streamdown>
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        )}
                      </div>
                      {msg.role === "user" && (
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ background: "rgba(255,255,255,0.1)" }}>
                          <User className="w-4 h-4 text-white/70" />
                        </div>
                      )}
                    </div>
                  ))}
                  {chatMutation.isPending && (
                    <div className="flex gap-2.5 justify-start">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(77, 217, 192, 0.15)" }}>
                        <Bot className="w-4 h-4 text-[#4dd9c0]" />
                      </div>
                      <div className="rounded-2xl px-4 py-3"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="flex gap-1 items-center">
                          <span className="w-2 h-2 rounded-full bg-[#4dd9c0] animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-[#4dd9c0] animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-[#4dd9c0] animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Malaysia travel..."
                  rows={1}
                  className="flex-1 resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none max-h-24 overflow-y-auto"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
                <motion.button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || chatMutation.isPending}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #4dd9c0, #2a9d8f)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {chatMutation.isPending ? (
                    <Loader2 className="w-4 h-4 text-[#0a0f1e] animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-[#0a0f1e]" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
