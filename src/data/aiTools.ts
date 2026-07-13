export interface AITool {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  glowColor: string;
  category: string;
  dayUsed: number[];
}

// Real AI Tool Logos from official sources
export const aiTools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI ka flagship AI assistant',
    logo: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
    color: '#10a37f',
    glowColor: 'rgba(16, 163, 127, 0.4)',
    category: 'AI Chat',
    dayUsed: [1, 2, 5, 9]
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic ka advanced AI model',
    logo: 'https://www.anthropic.com/images/icons/apple-touch-icon.png',
    color: '#cc785c',
    glowColor: 'rgba(204, 120, 92, 0.4)',
    category: 'AI Chat',
    dayUsed: [1, 2, 5, 9]
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI image generation ka king',
    logo: 'https://cdn.midjourney.com/logo.png',
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    category: 'Image Gen',
    dayUsed: [3]
  },
  {
    id: 'dalle',
    name: 'DALL-E 3',
    description: 'OpenAI ka image generator',
    logo: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
    color: '#10a37f',
    glowColor: 'rgba(16, 163, 127, 0.4)',
    category: 'Image Gen',
    dayUsed: [3]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice cloning & synthesis',
    logo: 'https://elevenlabs.io/favicon.ico',
    color: '#000000',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    category: 'Voice AI',
    dayUsed: [6]
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'Text-to-video AI tool',
    logo: 'https://runway.ml/favicon.ico',
    color: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    category: 'Video AI',
    dayUsed: [7]
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI avatar video generator',
    logo: 'https://www.heygen.com/favicon.ico',
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.4)',
    category: 'Video AI',
    dayUsed: [7]
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered research engine',
    logo: 'https://www.perplexity.ai/favicon.ico',
    color: '#1fb8cd',
    glowColor: 'rgba(31, 184, 205, 0.4)',
    category: 'Research',
    dayUsed: [2]
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI presentation builder',
    logo: 'https://gamma.app/favicon.ico',
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    category: 'Presentations',
    dayUsed: [4]
  },
  {
    id: 'canva',
    name: 'Canva AI',
    description: 'AI-powered design tool',
    logo: 'https://www.canva.com/favicon.ico',
    color: '#00c4cc',
    glowColor: 'rgba(0, 196, 204, 0.4)',
    category: 'Design',
    dayUsed: [3, 4]
  },
  {
    id: 'notion',
    name: 'Notion AI',
    description: 'AI-powered workspace',
    logo: 'https://www.notion.so/images/favicon.ico',
    color: '#000000',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    category: 'Productivity',
    dayUsed: [1, 5]
  },
  {
    id: 'make',
    name: 'Make',
    description: 'No-code automation platform',
    logo: 'https://www.make.com/favicon.ico',
    color: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    category: 'Automation',
    dayUsed: [9]
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Workflow automation tool',
    logo: 'https://zapier.com/favicon.ico',
    color: '#ff4a00',
    glowColor: 'rgba(255, 74, 0, 0.4)',
    category: 'Automation',
    dayUsed: [9]
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting assistant',
    logo: 'https://www.copy.ai/favicon.ico',
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.4)',
    category: 'Copywriting',
    dayUsed: [5]
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content platform',
    logo: 'https://www.jasper.ai/favicon.ico',
    color: '#ff5c35',
    glowColor: 'rgba(255, 92, 53, 0.4)',
    category: 'Copywriting',
    dayUsed: [5]
  },
  {
    id: 'surferseo',
    name: 'SurferSEO',
    description: 'AI SEO optimization tool',
    logo: 'https://surferseo.com/favicon.ico',
    color: '#00d4aa',
    glowColor: 'rgba(0, 212, 170, 0.4)',
    category: 'SEO',
    dayUsed: [8]
  }
];

export const achievements = [
  {
    id: 'first-day',
    title: 'First Step',
    description: 'Complete your first day',
    icon: '🚀',
    xp: 100,
    condition: (completedDays: number[]) => completedDays.length >= 1
  },
  {
    id: 'three-days',
    title: 'Getting Momentum',
    description: 'Complete 3 days',
    icon: '⚡',
    xp: 300,
    condition: (completedDays: number[]) => completedDays.length >= 3
  },
  {
    id: 'half-way',
    title: 'Half Way There',
    description: 'Complete 5 days',
    icon: '🎯',
    xp: 500,
    condition: (completedDays: number[]) => completedDays.length >= 5
  },
  {
    id: 'almost-there',
    title: 'Almost There',
    description: 'Complete 8 days',
    icon: '🔥',
    xp: 800,
    condition: (completedDays: number[]) => completedDays.length >= 8
  },
  {
    id: 'master',
    title: 'AI Master',
    description: 'Complete all 10 days',
    icon: '👑',
    xp: 1000,
    condition: (completedDays: number[]) => completedDays.length >= 10
  },
  {
    id: 'dedicated',
    title: 'Dedicated Learner',
    description: 'Spend 10+ hours learning',
    icon: '📚',
    xp: 500,
    condition: () => false
  },
  {
    id: 'streak-3',
    title: 'On Fire',
    description: '3-day learning streak',
    icon: '🔥',
    xp: 300,
    condition: () => false
  },
  {
    id: 'streak-7',
    title: 'Unstoppable',
    description: '7-day learning streak',
    icon: '💎',
    xp: 700,
    condition: () => false
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Freelancer',
    location: 'Delhi',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Is course ne meri life change kar di. Ab main AI tools se 5x faster kaam karta hoon aur clients bhi impress hote hain. Monthly income 3x ho gayi!',
    rating: 5,
    courseTaken: 'AI Mastery Bootcamp',
    verified: true
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Digital Marketer',
    location: 'Mumbai',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Content creation ab minutes mein ho jata hai. ROI 10x improve hua hai mere campaigns ka. Highly recommended!',
    rating: 5,
    courseTaken: 'AI Mastery Bootcamp',
    verified: true
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'YouTube Creator',
    location: 'Bangalore',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    content: 'Video production time 80% kam ho gaya. Thumbnails, scripts, voiceovers - sab AI se hota hai ab. 50K se 200K subscribers ho gaye!',
    rating: 5,
    courseTaken: 'AI Mastery Bootcamp',
    verified: true
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Agency Owner',
    location: 'Pune',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'Day 10 ki agency strategies follow karke 3 months mein 5 lakh monthly revenue cross kiya. Best investment ever!',
    rating: 5,
    courseTaken: 'AI Mastery Bootcamp',
    verified: true
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Business Owner',
    location: 'Jaipur',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    content: 'Automation workflows se daily 4-5 hours bachte hain. Staff hire karne ki zaroorat nahi padhi. Amazing course!',
    rating: 5,
    courseTaken: 'AI Mastery Bootcamp',
    verified: true
  }
];

export const faqs = [
  {
    question: 'Kya mujhe coding aani chahiye?',
    answer: 'Bilkul nahi! Ye course non-technical logon ke liye design kiya gaya hai. Hum no-code tools aur simple techniques sikhate hain jo koi bhi use kar sakta hai. Agar aap WhatsApp use kar sakte ho, toh ye course bhi kar sakte ho!'
  },
  {
    question: 'Course access kitne time tak milega?',
    answer: 'Lifetime access milega. Ek baar payment karo, hamesha ke liye access rakho. Plus, future updates aur new modules bhi free mein milenge. No recurring fees!'
  },
  {
    question: 'Refund policy kya hai?',
    answer: '7 days ki no-questions-asked refund policy hai. Agar course pasand nahi aaya, full refund mil jayega within 24 hours. Hum apne content pe confident hain isliye ye guarantee dete hain.'
  },
  {
    question: 'Certificate ka kya value hai?',
    answer: 'Humara certificate industry-recognized hai aur aap isse LinkedIn pe add kar sakte ho. Unique verification ID ke saath aata hai jo employers verify kar sakte hain. Already 2000+ students ne apne resumes mein add kiya hai.'
  },
  {
    question: 'Support kaise milega?',
    answer: '24/7 WhatsApp aur email support available hai. Plus, exclusive Discord community access jahan 2000+ students aur experts se connect kar sakte ho. Doubts within 24 hours solve hote hain.'
  },
  {
    question: 'Kya mobile pe course access kar sakte hain?',
    answer: 'Haan! Course fully mobile-responsive hai. Kahin bhi, kabhi bhi seekho - phone, tablet, ya laptop pe. Offline access ke liye resources download bhi kar sakte ho.'
  },
  {
    question: 'Payment methods kya hain?',
    answer: 'UPI, Debit Card, Credit Card, Net Banking - sab accept karte hain. EMI option bhi available hai. Secure payment gateway use karte hain with 256-bit SSL encryption.'
  },
  {
    question: 'Kya real projects milenge?',
    answer: 'Haan! Har day ke end mein practical assignment hai. Plus, 10 premium assets worth ₹2,10,000+ milte hain jo aap directly apne business mein use kar sakte ho.'
  }
];
