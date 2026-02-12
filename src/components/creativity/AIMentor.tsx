'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIMentor() {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Hello! I'm your AI Creativity Coach. Need a quick prompt, feedback on an idea, or a strategy to unblock? Just ask!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsgs = [...messages, { role: 'user' as const, text: input }];
    setMessages(newMsgs);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages([...newMsgs, { role: 'ai', text: "That's a fascinating perspective! To deepen this creative exploration, try applying the SCAMPER technique. Substitute one element, Combine it with another, or Adapt it to a new context. What happens if you try that?" }]);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xl flex flex-col md:flex-row h-[600px]">
      {/* Sidebar Info - Simplified for No Login */}
      <div className="md:w-1/3 bg-neutral-50 p-8 border-r border-neutral-200 flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-xl text-neutral-800">Mentor Mode</h3>
            <span className="text-xs font-bold text-success uppercase tracking-wider bg-success/10 px-2 py-1 rounded-md">Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">Conversation Starters</h4>
          <div className="space-y-3">
            {[
              "Give me a random design prompt.",
              "How do I overcome writer's block?",
              "Critique my color palette idea.",
              "Explain the Rule of Thirds.",
              "Generate a startup name."
            ].map((starter, i) => (
              <button 
                key={i} 
                onClick={() => setInput(starter)}
                className="w-full text-left text-sm text-neutral-600 hover:text-primary hover:bg-white p-3 rounded-xl border border-transparent hover:border-neutral-100 transition-all"
              >
                {starter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Tip of the Day</h4>
          <p className="text-sm font-medium text-neutral-700">"Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="md:w-2/3 flex flex-col bg-white relative">
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-neutral-100 text-neutral-700 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-neutral-100 p-4 rounded-2xl rounded-bl-none flex gap-1">
                 <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                 <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-100" />
                 <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-200" />
               </div>
             </div>
          )}
        </div>

        <div className="p-4 border-t border-neutral-100 bg-white">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for advice, feedback, or a prompt..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-primary hover:bg-accent text-white p-3 rounded-xl transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
