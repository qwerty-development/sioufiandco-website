'use client'
import React, { useState } from 'react';
import ArticlePreview from './components/ArticlePreview';
import ArticlePage from './components/ArticlePage';
import { companyNewsData } from './data';

const NewsAndEventsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories from data
  const categories = ['all', ...new Set(companyNewsData.map(news => news.category))];

  // Filter news based on active category
  const filteredNews = activeCategory === 'all' 
    ? companyNewsData 
    : companyNewsData.filter(news => news.category === activeCategory);

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
              <ArticlePreview 
                key={article.id} 
                article={article} 
                onSelect={setSelectedArticle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndEventsPage;