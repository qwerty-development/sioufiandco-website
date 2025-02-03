'use client'
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Building2 } from 'lucide-react';
import Image from 'next/image';

const companyNewsData = [
    {
        id: 1,
        title: "AXA Middle East honors Sioufi & Co",
        date: "2024-06-27",
        category: "Achievements",
        summary: "AXA Middle East honors Sioufi & Co on the occasion of its 70th anniversary. This milestone is a testament to the loyalty and dedication that both companies have upheld through the years.",
        content: "AXA Middle East honors Sioufi & Co on the occasion of its 70th anniversary. This milestone is a testament to the loyalty and dedication that both companies have upheld through the years. 'Thank you, Sioufi & Co, for your unwavering partnership and trust. Here is to many more years of mutual success and growth!",
        author: "AXA Middle East and with Sioufi & Co.",
        department: "Executive Office",
        featured: false,
        image: '/news/axasioufi.jpg'
    },
];

const NewsAndEventsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const formatDate = (dateStr: string | number | Date) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const categories = ['all', ...new Set(companyNewsData.map(news => news.category))];

  const filteredNews = activeCategory === 'all' 
    ? companyNewsData 
    : companyNewsData.filter(news => news.category === activeCategory);

  const ArticlePreview = ({ article }:any) => (
    <div className="mb-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-2">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[#1B365D] text-gold-400 rounded-full">
            {article.category}
          </span>
          {article.featured && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gold-400/20 text-gold-400 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center text-text-secondary dark:text-text-muted text-sm">
          <Building2 className="w-4 h-4 mr-1" />
          <span>{article.department}</span>
        </div>
      </div>
      
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent mb-2 font-serif">
        {article.title}
      </h2>
      
      <div className="flex items-center justify-between text-text-secondary dark:text-text-muted text-sm">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{formatDate(article.date)}</span>
        </div>
        <span className="italic">By {article.author}</span>
      </div>

      <div className="mt-4">
        <p className="text-text-secondary dark:text-text-muted mb-4 leading-relaxed">
          {article.summary}
        </p>
        <button
          onClick={() => setSelectedArticle(article)}
          className="flex items-center text-gold-400 hover:text-gold-300 transition-colors duration-200 font-medium"
        >
          Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  const ArticlePage = ({ article, onClose }:any) => (
    <div className="fixed inset-0 bg-primary-light dark:bg-primary-dark z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 text-text-secondary dark:text-text-muted hover:text-gold-400 transition-colors duration-200"
        >
          ← Back to News
        </button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[#1B365D] text-gold-400 rounded-full mr-2">
            {article.category}
          </span>
          {article.featured && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gold-400/20 text-gold-400 rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="aspect-video mb-6 overflow-hidden rounded-lg">
          <div className="relative w-full h-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent mb-4 font-serif">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between text-text-secondary dark:text-text-muted text-sm mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              <span>{article.department}</span>
            </div>
          </div>
          <span className="italic">By {article.author}</span>
        </div>

        <div className="prose max-w-none dark:prose-invert">
          <p className="text-text-secondary dark:text-text-muted leading-relaxed">
            {article.content}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="font-title text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent leading-relaxed pt-3 pb-1">
          Company News And Updates
        </h2>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
                ${activeCategory === category 
                  ? 'bg-[#1B365D] text-gold-400' 
                  : 'bg-white/5 text-text-secondary dark:text-text-muted hover:bg-white/10'}`}
            >
              {category === 'all' ? 'All News' : category}
            </button>
          ))}
        </div>
        
        {selectedArticle ? (
          <ArticlePage 
            article={selectedArticle} 
            onClose={() => setSelectedArticle(null)} 
          />
        ) : (
          <div className="grid gap-8">
            {filteredNews.map(article => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;