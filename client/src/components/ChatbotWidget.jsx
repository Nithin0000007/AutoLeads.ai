'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi there! I'm your AI assistant. I'm here to help you discover how we can generate more leads for your business. What's your name?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [collectedFields, setCollectedFields] = useState({
    name: false,
    email: false,
    phone: false,
    businessType: false,
    message: false,
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef(null);
  
  // FIX: Initialize with EMPTY conversation history
  const conversationHistoryRef = useRef([]);
  const lastRequestTimeRef = useRef(0);
  const REQUEST_DELAY = 1100;

  const GEMINI_API_KEY = import.meta.env.VITE_NEXT_PUBLIC_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const SYSTEM_PROMPT = `You are a professional AI assistant for "AutoLeads AI" - an AI-powered lead generation and automation platform.

**Your Primary Goals**:
1. Welcome users warmly and professionally
2. Understand their business and lead generation challenges
3. Collect their contact information: Name, Email, Phone, Business Type, and specific requirements/message
4. Qualify them as potential clients
5. Guide them toward booking a demo call

**Information You MUST Extract** (collect ALL 5):
- Name: Full name of the person
- Email: Valid email address
- Phone: Phone number (any format)
- Business Type: Industry they're in (e.g., "Real Estate Agent", "Healthcare Clinic", etc.)
- Message: Their specific needs/challenges

**IMPORTANT - Data Extraction Instructions**:
When user provides information, extract it clearly. At the END of your response, add:
[EXTRACTED_DATA]
name: "extracted value or skip"
email: "extracted value or skip"
phone: "extracted value or skip"
businessType: "extracted value or skip"
message: "extracted value or skip"
[END_EXTRACTED_DATA]

If you don't find a piece of information, put "skip" for that field.

**Conversation Style**:
- Warm, professional, empathetic
- Ask ONE question at a time
- Extract information naturally
- Acknowledge extracted data and move to next question
- Use natural language

**STRICT GUARDRAILS**:
❌ NO casual chat, jokes, or off-topic discussions
❌ NO general knowledge questions
❌ NO personal advice, therapy, or life coaching
❌ NO politics, religion, or controversial topics
✅ DO redirect off-topic politely: "I'm here to help with lead generation. Tell me about your business..."

**Response Guidelines**:
- Keep responses SHORT (2-3 sentences max)
- One clear question per message
- Professional but friendly tone

**After All 5 Fields Are Collected**:
Congratulate them, confirm details, explain they'll hear from team soon, suggest booking demo.`;

  const throttledSendMessage = async (userText) => {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTimeRef.current;

    if (timeSinceLastRequest < REQUEST_DELAY) {
      const waitTime = REQUEST_DELAY - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }

    lastRequestTimeRef.current = Date.now();
    await sendMessageToGemini(userText);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userText = input;
    setInput('');
    setIsLoading(true);

    try {
      await throttledSendMessage(userText);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const sendMessageToGemini = async (userText) => {
    try {
      // FIX: Add user message to history
      conversationHistoryRef.current.push({
        role: 'user',
        parts: [{ text: userText }],
      });

      // Log the request for debugging
      console.log('Sending to Gemini API with history:', conversationHistoryRef.current);

      const requestBody = {
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: conversationHistoryRef.current,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 250,
        },
      };

      console.log('Request body:', JSON.stringify(requestBody, null, 2));

      // Call Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log('Gemini Response Status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini Error:', errorData);

        if (response.status === 429) {
          throw new Error('Rate limited. Please wait a moment before sending another message.');
        }

        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('Gemini Response:', data);

      if (data.candidates && data.candidates[0]) {
        const botResponseFull = data.candidates[0].content.parts[0].text;

        // Extract the main response and data
        const mainResponse = botResponseFull.split('[EXTRACTED_DATA]')[0].trim();
        const extractedSection = botResponseFull.split('[EXTRACTED_DATA]')[1]?.split('[END_EXTRACTED_DATA]')[0] || '';

        console.log('Main Response:', mainResponse);
        console.log('Extracted Section:', extractedSection);

        // Parse extracted data from the response
        if (extractedSection) {
          const lines = extractedSection.split('\n');
          const extracted = {};

          lines.forEach((line) => {
            if (line.includes(':')) {
              const [key, ...valueParts] = line.split(':');
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');

              if (value && value !== 'skip') {
                extracted[key.trim()] = value;
              }
            }
          });

          console.log('Extracted data:', extracted);

          // Update lead data
          setLeadData((prev) => ({
            name: extracted.name || prev.name,
            email: extracted.email || prev.email,
            phone: extracted.phone || prev.phone,
            businessType: extracted.businessType || prev.businessType,
            message: extracted.message || prev.message,
          }));

          // Update collected fields
          setCollectedFields((prev) => ({
            name: extracted.name ? true : prev.name,
            email: extracted.email ? true : prev.email,
            phone: extracted.phone ? true : prev.phone,
            businessType: extracted.businessType ? true : prev.businessType,
            message: extracted.message ? true : prev.message,
          }));
        }

        // Add bot response to history
        conversationHistoryRef.current.push({
          role: 'model',
          parts: [{ text: mainResponse }],
        });

        const botMessage = {
          id: messages.length + 2,
          text: mainResponse,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);

        // Check if all fields are collected
        const allFieldsCollected =
          leadData.name &&
          leadData.email &&
          leadData.phone &&
          leadData.businessType &&
          leadData.message;

        if (allFieldsCollected && !leadSubmitted) {
          setTimeout(() => {
            saveLead();
          }, 500);
        }
      } else {
        throw new Error('No response from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);

      let errorText = error.message || 'Sorry, I encountered an error. Please try again.';

      if (error.message.includes('Rate limited')) {
        errorText =
          'I need a moment to catch my breath! 😊 Please wait a few seconds before sending your next message.';
      }

      const errorMessage = {
        id: messages.length + 2,
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      
      // Remove the user message from history if there was an error
      conversationHistoryRef.current.pop();
    } finally {
      setIsLoading(false);
    }
  };

  const saveLead = async () => {
    if (leadSubmitted) return;

    try {
      setLeadSubmitted(true);

      const response = await fetch('https://autoleads-ai.onrender.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          businessType: leadData.businessType,
          message: leadData.message,
          source: 'chatbot',
        }),
      });

      if (response.ok) {
        const finalMessage = {
          id: messages.length + 1,
          text: `🎉 Perfect, ${leadData.name}! I've saved all your information. Our team will review your requirements and reach out to you at ${leadData.email} or ${leadData.phone} very soon. In the meantime, feel free to book a demo call with us!`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, finalMessage]);
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      setLeadSubmitted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && !isMinimized && (
        <div className="w-96 h-[32rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl flex flex-col border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-white font-bold text-sm">AutoLeads AI</h3>
                <p className="text-blue-200 text-xs">Usually responds instantly</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-blue-600 rounded transition"
              >
                <Minimize2 size={16} className="text-white" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-blue-600 rounded transition"
              >
                <X size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800 bg-opacity-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-700 text-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 text-slate-100 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-slate-700 bg-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? 'Waiting for response...' : 'Type your message...'}
                className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white rounded-lg px-3 py-2 transition"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Minimized State */}
      {isOpen && isMinimized && (
        <div className="w-80 bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-lg">
          <div
            onClick={() => setIsMinimized(false)}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm">AutoLeads AI</span>
            </div>
            <Maximize2 size={16} className="text-slate-400" />
          </div>
        </div>
      )}

      {/* Floating Button (when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group relative"
        >
          <MessageCircle size={28} className="text-white" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            1
          </div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;