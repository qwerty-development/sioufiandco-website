export const companyNewsData = [
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
          },
          {
            title: "Photo Gallery",
            content: "Below are some highlights from our 70th anniversary celebration events that capture the spirit of the occasion and the wonderful moments we shared with our partners, clients, and team members.",
            gallery: Array.from({ length: 16 }, (_, i) => `/70years/gallery/${i + 1}.JPG`)
          }
        ],
        
        conclusion: "As Sioufi & Co celebrates this remarkable milestone, the company remains dedicated to its founding principles of integrity, customer service, and adaptability. The 70th anniversary celebration not only honored the company's rich history but also set the stage for continued success and growth in an evolving insurance landscape."
      },
      author: "Sioufi & Co Communications Team",
      department: "Corporate Communications",
      featured: true,
      image: "/70years/cover.JPG"
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
      
      conclusion: "In Mr. Sioufi view, Lebanon insurance sector is already displaying strong signs of recovery and long-term resilience. Though challenges remain - from currency volatility to regional instability - the sectors swift adaptation, innovation, and commitment to social responsibility have laid a robust foundation for future progress. Despite all the hardships, we have proven that we are capable of weathering storms and emerging with greater resolve. Our clients deserve the best possible coverage and protection for themselves and their families, and we intend to deliver on that promise, no matter the obstacles. It is precisely through collective effort - insurers, policymakers, businesses, and clients - that we will continue to raise industry standards and ensure a more secure future for everyone."
    },
    author: "Al Bayan",
    department: "Executive Office",
    featured: false,
    image: "/news/nicolassioufi.png"
  }
];