import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  "What are your timings?",
  "Do you deliver?",
  "Bulk order enquiry",
  "Popular sweets"
];

const botResponses: Record<string, string> = {
  "timing": "We are open Monday to Saturday from 8:00 AM to 9:00 PM, and Sundays from 9:00 AM to 8:00 PM. Feel free to visit us at Mirchaibari, Katihar!",
  "delivery": "Yes, we offer home delivery within Katihar! For orders above ₹500, delivery is free. Call us at 7488774336 to place your delivery order.",
  "bulk": "We'd love to handle your bulk orders! For weddings, events, or corporate orders, please call Raja Kumar at 7488774336. We offer special discounts on bulk purchases.",
  "popular": "Our most loved sweets are Motichoor Laddoo, Kaju Barfi, and Fresh Rasgullas! The Gulab Jamuns are also a customer favorite. Would you like to know the prices?",
  "price": "Our prices range from ₹280 for namkeen items to ₹720 for premium Pista Barfi. Laddoos start at ₹420/500g and Rasgullas at ₹350 for 12 pieces.",
  "default": "Thank you for your message! For immediate assistance, please call us at 7488774336 or visit our shop at Mirchaibari, Katihar. How can I help you today?"
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! 🙏 Welcome to Vandana Sweets. I'm here to help you with our products, timings, delivery, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('timing') || msg.includes('time') || msg.includes('open') || msg.includes('hour')) {
      return botResponses.timing;
    }
    if (msg.includes('deliver') || msg.includes('shipping') || msg.includes('home')) {
      return botResponses.delivery;
    }
    if (msg.includes('bulk') || msg.includes('wholesale') || msg.includes('event') || msg.includes('wedding')) {
      return botResponses.bulk;
    }
    if (msg.includes('popular') || msg.includes('best') || msg.includes('recommend') || msg.includes('favourite')) {
      return botResponses.popular;
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
      return botResponses.price;
    }
    return botResponses.default;
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient shadow-elevated flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-card rounded-2xl shadow-elevated flex flex-col overflow-hidden animate-slide-up border border-border">
          {/* Header */}
          <div className="hero-gradient p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Vandana Assistant</h3>
                <p className="text-xs text-primary-foreground/80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {msg.isBot && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.isBot
                      ? 'bg-muted text-foreground rounded-tl-sm'
                      : 'bg-primary text-primary-foreground rounded-tr-sm'
                  }`}
                >
                  {msg.text}
                </div>
                {!msg.isBot && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3 rounded-tl-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => handleSend()} size="icon" className="flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
