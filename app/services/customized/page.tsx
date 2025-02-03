'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '@/AI/types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const scrollContainer = chatContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage.text }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const botMessage: Message = { sender: 'bot', text: data.answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        sender: 'bot',
        text: 'I apologize, but I encountered an error while processing your request. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          className="w-full max-w-4xl mx-auto h-[800px] sm:h-[850px] md:h-[900px] rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Rest of the component structure stays the same, just updated message max-width */}
          <div className="bg-white dark:bg-gray-800 h-full flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="font-avenir-book text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Insurance Assistant
                </h1>
                <p className="font-avenir-book text-lg sm:text-xl text-gray-400 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Ask our AI anything you would like to know!
                </p>
              </motion.div>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-4 sm:px-6"
            >
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`
                        font-avenir rounded-lg px-4 py-2 max-w-[85%] sm:max-w-[75%] lg:max-w-[65%] break-words
                        ${message.sender === 'user'
                          ? 'bg-blue-600 text-white dark:bg-blue-500'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                        }
                      `}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                    <div className="flex space-x-2">
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
              <motion.form
                onSubmit={handleSubmit}
                className="flex space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about our insurance services..."
                  className="font-avenir flex-grow border border-gray-300 dark:border-gray-600 
                    rounded-lg px-3 sm:px-4 py-2 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                    bg-gray-100 dark:bg-gray-700
                    text-gray-800 dark:text-gray-100
                    text-sm sm:text-base
                    transition-all duration-200"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="font-avenir bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                    text-white font-semibold 
                    px-4 sm:px-6 py-2 rounded-lg 
                    text-sm sm:text-base
                    transition-colors duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;