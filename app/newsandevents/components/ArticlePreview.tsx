'use client'
import React from 'react';
import Image from 'next/image';
import { Calendar, Building2, ArrowRight } from 'lucide-react';
import { formatDate} from '../utils/formatter'

const ArticlePreview = ({ article, onSelect }:any) => (
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
        onClick={() => onSelect(article)}
        className="flex items-center text-gold-400 hover:text-gold-300 transition-colors duration-200 font-medium"
      >
        Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

export default ArticlePreview;