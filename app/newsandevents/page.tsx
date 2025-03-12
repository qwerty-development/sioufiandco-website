'use client'
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Building2, Download } from 'lucide-react';
import Image from 'next/image';

const companyNewsData = [
    {
        id: 3,
        title: "Sioufi & Co Celebrate 70 Years in the Insurance Industry",
        date: "2024-06-14",
        category: "Anniversary",
        summary: "Sioufi & Co marks a significant milestone with their 70th anniversary celebration in the insurance industry. The two-day event brought together partners, clients, and employees to commemorate seven decades of excellence and trust.",
        content: {
          introduction: "On June 26th, 2025, Sioufi & Co celebrated 70 years of excellence in the insurance industry. This momentous occasion was marked with a special two-day event that highlighted the company's journey, achievements, and vision for the future.",
          
          mainQuote: "For seven decades, Sioufi & Co has stood as a pillar of trust and reliability in the insurance sector. This anniversary is not just about celebrating our past, but also about reaffirming our commitment to excellence for the decades to come.",
          
          sections: [
            {
              title: "The Official Invitation",
              content: "Sioufi & Co extended a warm invitation to all its partners, clients, and industry peers to join in the celebration of this historic milestone. The elegantly designed invitation card captured the essence of the company's heritage and its forward-looking vision.",
              image: "/70years/invitation.jpg"
            },
            {
              title: "Day 1: A Journey Through History",
              content: "The celebration kicked off with an elegant gathering of long-standing clients, partners, and industry leaders. The event featured a comprehensive presentation of Sioufi & Co's evolution from a small family business to a leading name in the Middle Eastern insurance sector.",
              video: "/70years/event-day-1.mp4",
              isPortrait: true
            },
            {
              title: "Day 2: Looking to the Future",
              content: "The second day focused on innovation and future prospects. Workshops, panel discussions, and interactive sessions explored emerging trends in the insurance industry and Sioufi & Co's strategic plans to adapt and thrive in changing market conditions.",
              video: "/70years/event-day-2.mp4",
              isPortrait: true
            }
          ],
          
          conclusion: "As Sioufi & Co celebrates this remarkable milestone, the company remains dedicated to its founding principles of integrity, customer service, and adaptability. The 70th anniversary celebration not only honored the company's rich history but also set the stage for continued success and growth in an evolving insurance landscape."
        },
        author: "Sioufi & Co Communications Team",
        department: "Corporate Communications",
        featured: true,
        image: "/70years/70years.jpg"
    },
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
    {
      id: 2,
      title: "Interview with Nicolas Sioufi: Lebanese Insurance Market Overcomes Crisis Impact",
      titleAr: "لقاء مع نقولا سيوفي: تمكّن سوق التأمين في لبنان من تجاوز تداعيات الأزمة",
      date: "2025-01-16",
      category: "Interviews",
      summary: "Nicolas Sioufi (Chairman of SIOUFI & CO) discusses the state of the Lebanese insurance sector after the economic crisis and how it overcame current challenges.",
      summaryAr: "نقولا سيوفي (رئيس مجلس إدارة شركة SIOUFI & CO) يتحدث عن وضع قطاع التأمين اللبناني بعد الأزمة الاقتصادية، وكيفية تجاوزه تحديات المرحلة الراهنة.",
      content: {
        introduction: "We paid a visit to SIOUFI & CO for a special meeting, during which we had an in-depth conversation with Mr. Nicolas Sioufi, Chairman of the Board. He explained that the insurance sector in Lebanon - after enduring unprecedented challenges over the past few years - is now positioning itself on a new foundation, with a modern mindset and fresh vision. According to Mr. Sioufi, despite having encountered turbulence due to the economic crisis, the sector has begun redefining its core principles and approaches, aiming to step confidently into a new era. This evolution is especially vital as the country prepares for imminent economic transformations that demand adaptability and innovative thinking.",
        
        mainQuote: "It is well known that Lebanon insurance sector is trying to keep pace with rapidly unfolding economic conditions. The setbacks we experienced have paved the way for a stronger, more resilient industry that is proactively aligning itself with emerging global standards. True, there have been obstacles - particularly fluctuations in currency exchange rates and broader financial instability - but the sectors ability to regroup and reorganize has proven impressive.",
        
        sections: [
          {
            title: "Challenges and the Path to Recovery",
            content: "Mr. Sioufi discussed how 2023 was marked by a range of geopolitical and economic difficulties around the world, from the war in Ukraine and rising inflationary pressures to increasing costs of reinsurance. This global context inevitably spilled over into Lebanon, creating further complications for local businesses and families alike. Yet, SIOUFI & CO and other key players in the insurance market managed to navigate these issues through a combination of careful planning and prudent decision-making."
          },
          {
            title: "Planning for a New Generation",
            content: "It is essential to recognize that a new generation of clients is entering the market. They bring fresh expectations and demand digital solutions that streamline the entire insurance process. We see this not as a challenge but as an opportunity to modernize our offerings and keep step with international trends. However, we must do it in a way that preserves personalized service - because in a country like Lebanon, strong, direct client relationships are crucial for building trust."
          },
          {
            title: "Corporate Social Responsibility and Community Support",
            content: "Mr. Sioufi underscored the importance of social responsibility in the insurance sector, particularly during times of upheaval. Given the difficulties facing many Lebanese families - economic hardships, cuts in essential services, and limited access to affordable healthcare - he believes the insurance market has a duty to contribute positively to the broader community."
          },
          {
            title: "Prospects for 2024 and Beyond",
            content: "Looking ahead, Mr. Sioufi shared an optimistic yet cautious perspective. While the global and local headwinds may persist, he sees the insurance market in Lebanon evolving steadily, laying the groundwork for renewed growth. The year 2024 is brimming with potential. We are exploring ways to launch digital platforms to serve our clients more efficiently. Nonetheless, we are mindful that digital transformation must be accompanied by hands-on support and genuine customer care."
          }
        ],
        
        conclusion: "In Mr. Sioufi view, Lebanon insurance market is already displaying strong signs of recovery and long-term resilience. Though challenges remain - from currency volatility to regional instability - the sectors swift adaptation, innovation, and commitment to social responsibility have laid a robust foundation for future progress. Despite all the hardships, we have proven that we are capable of weathering storms and emerging with greater resolve. Our clients deserve the best possible coverage and protection for themselves and their families, and we intend to deliver on that promise, no matter the obstacles. It is precisely through collective effort - insurers, policymakers, businesses, and clients - that we will continue to raise industry standards and ensure a more secure future for everyone."
      },
      author: "Al Bayan",
      department: "Executive Office",
      featured: false,
      image: "/news/nicolassioufi.png"
    }
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

  const ArticlePage = ({ article, onClose }:any) => {
  
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
                
                <blockquote className="border-l-4 border-gold-400 text-text-secondary dark:text-text-muted  pl-4 my-8 italic">
                  {article.content.mainQuote}
                </blockquote>
                
                {article.content.sections.map((section: any, index: React.Key | null | undefined) => (
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
      </div>
    );
  };

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