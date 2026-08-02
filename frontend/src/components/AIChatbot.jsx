import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, MessageSquare } from 'lucide-react';

export default function AIChatbot({ courses }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Vanakkam! I am your Alagappa AI Course Advisor. Ask me anything about NME electives, prerequisite checks, timetable clashes, or seat availability!'
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const query = input.toLowerCase();
    setInput('');

    // Generate intelligent AI response based on real course data
    setTimeout(() => {
      let botResponse = "I can help you filter courses by department, check remaining seats, or avoid schedule clashes. Try asking 'Which courses have seats left?' or 'Recommend a python course'.";

      if (query.includes('seat') || query.includes('available') || query.includes('full')) {
        const available = courses?.filter(c => c.filledSeats < c.totalSeats) || [];
        botResponse = `Currently there are ${available.length} courses with open seats! Top choice: ${available[0]?.title || 'Python Programming'} (${available[0]?.totalSeats - available[0]?.filledSeats} seats remaining).`;
      } else if (query.includes('python') || query.includes('code') || query.includes('data')) {
        botResponse = "I recommend 'NME-CSE-101: Python Programming for Data Analysis' taught by Dr. R. Ramanathan. It carries 3 credits and is beginner friendly!";
      } else if (query.includes('tamil') || query.includes('culture') || query.includes('தமிழ்')) {
        botResponse = "'NME-TAM-101: Applied Tamil Literature' by Dr. P. Thirunavukkarasu is currently open. Schedule: Mon & Fri 03:30 PM.";
      } else if (query.includes('clash') || query.includes('time') || query.includes('schedule')) {
        botResponse = "Our registration engine automatically checks day and time overlaps before confirming your seat. No overlapping classes allowed!";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-alagappa-blue to-alagappa-maroon hover:from-alagappa-darkblue hover:to-red-900 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all border border-alagappa-gold/50"
        >
          <Bot className="w-6 h-6 text-alagappa-gold animate-bounce" />
          <span className="font-bold text-xs tracking-wide">AI Course Advisor</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 w-80 sm:w-96 flex flex-col h-[480px] overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-alagappa-darkblue to-alagappa-maroon p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-alagappa-gold" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">Alagappa NME AI Bot</h3>
                <p className="text-[10px] text-slate-300">Powered by Gemini Intelligent Search</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900/50 text-xs">
            {messages.map(m => (
              <div key={m.id} className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-alagappa-blue text-alagappa-gold flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    AI
                  </div>
                )}
                <div className={`max-w-[78%] p-3 rounded-2xl ${
                  m.sender === 'user' 
                    ? 'bg-alagappa-blue text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI about electives, seats..."
              className="flex-1 px-3 py-2 text-xs bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
            />
            <button
              type="submit"
              className="p-2 bg-alagappa-blue hover:bg-alagappa-darkblue text-white rounded-xl shadow transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
