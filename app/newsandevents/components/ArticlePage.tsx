'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Building2 } from 'lucide-react';
import { formatDate } from '../utils/formatter'
import PhotoGalleryModal from './PhotoGalleryModal';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Define types for our content structure
interface ArticleSection {
  title: string;
  content: string;
  video?: string;
  isPortrait?: boolean;
  image?: string | StaticImport;
  gallery?: string[];
}

interface StructuredContent {
  introduction: string;
  mainQuote: string;
  sections: ArticleSection[];
  conclusion: string;
}

interface Article {
  id: number;
  title: string;
  titleAr?: string;
  date: string;
  category: string;
  summary: string;
  summaryAr?: string;
  content: string | StructuredContent;
  author: string;
  department: string;
  featured: boolean;
  image: string | StaticImport;
}

interface ArticlePageProps {
  article: Article;
  onClose: () => void;
}

interface GalleryModalState {
  open: boolean;
  images: string[];
  initialIndex: number;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onClose }) => {
  const [galleryModal, setGalleryModal] = useState<GalleryModalState>({ 
    open: false, 
    images: [], 
    initialIndex: 0 
  });

  return (
    <div className="fixed inset-0 bg-primary-light dark:bg-primary-dark z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onClose}
            className="text-text-secondary dark:text-text-muted hover:text-gold-400 transition-colors duration-200"
          >
            ← Back to News
          </button>
        </div>

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
        
        {article.titleAr && (
          <h2 className="text-2xl mb-4 text-text-secondary dark:text-text-muted font-serif">
            {article.titleAr}
          </h2>
        )}
        
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
          {typeof article.content === "string" ? (
            <p className="text-text-secondary dark:text-text-muted leading-relaxed">
              {article.content}
            </p>
          ) : (
            <>
              <p className="text-lg mb-8 text-text-secondary dark:text-text-muted">{article.content.introduction}</p>
              
              <blockquote className="border-l-4 border-gold-400 text-text-secondary dark:text-text-muted pl-4 my-8 italic">
                {article.content.mainQuote}
              </blockquote>
              
              {article.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-bold text-gold-400 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-text-secondary dark:text-text-muted leading-relaxed">
                    {section.content}
                  </p>
                  {section.video && (
                    <div className={`mt-4 ${section.isPortrait ? "max-w-xs mx-auto" : "w-full"}`}>
                      <video 
                        src={section.video}
                        controls
                        className={`w-full rounded-lg border border-white/10 ${section.isPortrait ? "aspect-[9/16]" : "aspect-video"}`}
                      />
                    </div>
                  )}
                  {section.image && (
                    <div className="mt-6 max-w-lg mx-auto">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-gold-400/30 shadow-lg">
                        <Image
                          src={section.image}
                          alt="Official Invitation"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-text-muted italic mt-2">
                        The official invitation card for Sioufi & Co's 70th anniversary celebration
                      </p>
                    </div>
                  )}
                  
                  {section.gallery && (
                    <div className="mt-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {section.gallery.map((image, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="aspect-square relative rounded-lg overflow-hidden border border-white/10 hover:border-gold-400/50 transition-all duration-300 shadow-lg hover:shadow-gold-400/20 cursor-pointer"
                            onClick={() => setGalleryModal({ 
                              open: true, 
                              images: section.gallery || [], 
                              initialIndex: imgIndex 
                            })}
                          >
                            <Image
                              src={image}
                              alt={`70th Anniversary Celebration - Image ${imgIndex + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-text-muted italic mt-4">
                        Images from Sioufi & Co's 70th anniversary celebration events
                      </p>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="text-2xl font-bold text-gold-400 mb-4">
                  Conclusion
                </h3>
                <p className="text-text-secondary dark:text-text-muted leading-relaxed">
                  {article.content.conclusion}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Photo Gallery Modal */}
      {galleryModal.open && (
        <PhotoGalleryModal 
          images={galleryModal.images}
          initialIndex={galleryModal.initialIndex}
          onClose={() => setGalleryModal({ open: false, images: [], initialIndex: 0 })}
        />
      )}
    </div>
  );
};

export default ArticlePage;