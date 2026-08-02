import React, { useState } from 'react';
import { Mic, MicOff, Sparkles } from 'lucide-react';

export default function VoiceSearch({ onSearch }) {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice Search Web Speech API is not supported in this browser version. Simulating voice recognition...');
      onSearch('Python');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSearch(transcript);
    };

    recognition.start();
  };

  return (
    <button
      type="button"
      onClick={startListening}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition shadow ${
        isListening
          ? 'bg-rose-600 text-white animate-pulse'
          : 'bg-alagappa-gold/20 text-alagappa-blue dark:text-alagappa-gold hover:bg-alagappa-gold/30 border border-alagappa-gold/40'
      }`}
      title="Voice Search (English & Tamil)"
    >
      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-alagappa-blue dark:text-alagappa-gold" />}
      <span>{isListening ? 'Listening...' : 'Voice Search'}</span>
    </button>
  );
}
