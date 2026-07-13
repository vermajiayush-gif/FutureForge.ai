export interface Section {
  id: string;
  title: string;
  content: string;
  codeBlock?: string;
}

export interface Day {
  day_number: number;
  title: string;
  intro: string;
  duration: string;
  asset_name: string;
  asset_value: string;
  sections: Section[];
}

export interface CourseTrack {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  modules: number;
  price: number;
  originalPrice: number;
  features: string[];
}

export const courseTracks: CourseTrack[] = [
  {
    id: 'ai-mastery',
    title: 'AI Mastery Bootcamp',
    description: '10 din mein AI tools master karke apni productivity 10x karein. Complete transformation program.',
    icon: '🤖',
    color: 'from-cyan-500 to-blue-600',
    duration: '10 Days',
    modules: 50,
    price: 2500,
    originalPrice: 15000,
    features: [
      'Advanced Prompt Engineering',
      'AI Research & Analytics',
      'Visual Content Generation',
      'Voice Cloning & Audio',
      'Video Production Automation',
      'SEO & Content Strategy',
      'No-Code Automation',
      'AI Agency Launch Guide',
      '₹2,10,000+ Worth Assets',
      'Lifetime Access'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Pro',
    description: 'Complete digital marketing mastery - SEO, Social Media, Ads, aur Lead Generation.',
    icon: '📈',
    color: 'from-purple-500 to-pink-600',
    duration: '8 Weeks',
    modules: 40,
    price: 3500,
    originalPrice: 20000,
    features: [
      'Social Media Marketing',
      'Google & Meta Ads',
      'SEO Mastery',
      'Email Marketing',
      'Lead Generation',
      'Analytics & Reporting',
      'Content Strategy',
      'Influencer Marketing'
    ]
  },
  {
    id: 'web-development',
    title: 'Full Stack Developer',
    description: 'Zero se hero - Complete web development with React, Node.js aur modern technologies.',
    icon: '💻',
    color: 'from-green-500 to-emerald-600',
    duration: '12 Weeks',
    modules: 60,
    price: 4500,
    originalPrice: 25000,
    features: [
      'HTML, CSS, JavaScript',
      'React & Next.js',
      'Node.js & Express',
      'Database Management',
      'API Development',
      'Deployment & DevOps',
      'Real Projects',
      'Job Preparation'
    ]
  }
];

export const skillLevels = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: 'Abhi shuru kar raha hoon, basics se seekhna hai',
    icon: '🌱',
    recommendation: 'Foundation se shuru karenge, step by step'
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    description: 'Basics pata hai, advanced concepts seekhne hain',
    icon: '🚀',
    recommendation: 'Advanced techniques pe focus karenge'
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Experience hai, mastery level tak pahunchna hai',
    icon: '⚡',
    recommendation: 'Expert-level strategies aur scaling'
  }
];

export const careerGoals = [
  {
    id: 'freelancer',
    title: 'Freelancer Banna Hai',
    description: 'Apna freelance business start karna chahta hoon',
    icon: '🎯',
    tracks: ['ai-mastery', 'digital-marketing', 'web-development']
  },
  {
    id: 'job',
    title: 'High-Paying Job',
    description: 'Top companies mein job leni hai',
    icon: '💼',
    tracks: ['web-development', 'digital-marketing', 'ai-mastery']
  },
  {
    id: 'business',
    title: 'Business Grow Karna',
    description: 'Apne existing business ko scale karna hai',
    icon: '📊',
    tracks: ['digital-marketing', 'ai-mastery']
  },
  {
    id: 'agency',
    title: 'Agency Start Karna',
    description: 'Apni digital agency build karni hai',
    icon: '🏢',
    tracks: ['ai-mastery', 'digital-marketing', 'web-development']
  },
  {
    id: 'content',
    title: 'Content Creator',
    description: 'YouTube, Instagram pe grow karna hai',
    icon: '🎬',
    tracks: ['ai-mastery', 'digital-marketing']
  }
];

export const courseData: Day[] = [
  {
    "day_number": 1,
    "title": "Advanced Prompt Engineering & System Archetypes",
    "intro": "Aaj hum seekhenge ki kaise context windows, system prompts, aur parameter tuning ko master karke AI se 10x better output le sakte hain. Ye foundational day hai jo baaki 9 days ka base banayega.",
    "duration": "2-3 hrs",
    "asset_name": "Master System Architect Mega-Prompt Database",
    "asset_value": "₹25,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Beyond the Chat Interface",
        "content": "Zyada tar log AI ko sirf ek 'chatbot' ki tarah use karte hain — ek question, ek answer, khatam. Lekin professionals AI ko ek 'system' ki tarah treat karte hain jisme layers hoti hain: System Prompt, Context Window, aur User Input.\n\n**Key Points:**\n- System Prompt = AI ki 'constitution', jo har response ko govern karta hai\n- Context Window = short-term memory jisme pura conversation store hota hai\n- User Input = aapka real-time query jo context ke andar process hota hai"
      },
      {
        "id": "2",
        "title": "2. The Dynamic Behavioral Pipeline",
        "content": "Ek professional-grade prompt kabhi bhi random nahi hota — usme ek structured pipeline follow hoti hai: Context → Constraint → Filter → Output.\n\n**Key Points:**\n- Context set karta hai 'kya scene hai'\n- Constraint define karta hai 'boundaries kahan hain'\n- Filter refine karta hai 'quality bar kya hai'\n- Output confirm karta hai 'final shape kya honi chahiye'",
        "codeBlock": "[CONTEXT] → [CONSTRAINT] → [FILTER] → [OUTPUT]\n\nExample:\nCONTEXT: Tum ek expert Hindi cricket YouTube scriptwriter ho\nCONSTRAINT: Script max 60 seconds, koi controversy nahi\nFILTER: Hook → Context → Action → Stats → CTA format\nOUTPUT: Spoken-word script with timestamps"
      },
      {
        "id": "3",
        "title": "3. Dynamic Variables & Template Engineering",
        "content": "Professional AI users 'Template Prompts' banate hain jisme variables hote hain — jaise {TOPIC}, {TONE}, {LENGTH}, {AUDIENCE}.\n\n**Key Points:**\n- Variables ko curly braces {} mein wrap karo\n- Ek master template 50+ use cases cover kar sakta hai\n- Templates ko organized library mein save karo"
      },
      {
        "id": "4",
        "title": "4. Parameter Tuning: Temperature & Creativity Control",
        "content": "Temperature parameter AI ki creativity vs predictability control karta hai.\n\n**Key Points:**\n- Low creativity (0.1-0.3) = technical docs, legal content\n- High creativity (0.7-1.0) = storytelling, ad copy\n- Ek conversation mein dono modes switch kar sakte hain"
      },
      {
        "id": "5",
        "title": "5. Building Your Personal Prompt Library",
        "content": "Experts ek 'Prompt Library' maintain karte hain — organized database jisme best-performing prompts save hote hain.\n\n**Key Points:**\n- Categorize prompts by use-case, not by date\n- Har prompt ke saath success example attach karein\n- Monthly review karke outdated prompts update karein"
      }
    ]
  },
  {
    "day_number": 2,
    "title": "AI-Powered Research & Deep Data Analytics",
    "intro": "Aaj hum seekhenge kaise AI ko ek super-fast research analyst banaya jaye jo 500-page reports ko minutes mein digest kar sake.",
    "duration": "2-3 hrs",
    "asset_name": "Executive Market Intelligence Dashboard",
    "asset_value": "₹18,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Synthesizing Massive Documents",
        "content": "AI tools jaise Perplexity Pro ke saath, 500-page report 20-30 minutes mein complete.\n\n**Key Points:**\n- Documents ko sections mein tod kar analyze karein\n- Generic 'summarize' ki jagah specific questions poochein\n- Har finding ko 'so what?' test dein"
      },
      {
        "id": "2",
        "title": "2. Real-Time Web Intelligence",
        "content": "Perplexity Pro real-time web se information pull karta hai with source citations.\n\n**Key Points:**\n- Focus Mode se source type control karein\n- Follow-up questions se depth badhayein\n- Har major claim ka source verify karein"
      },
      {
        "id": "3",
        "title": "3. Code Interpreter for Data Analytics",
        "content": "Bina coding ke complex data analysis — CSV upload karke natural language mein questions.\n\n**Key Points:**\n- Chart type specify karein for clarity\n- Statistical significance verify karein\n- Raw data sample bhi dikhane ko kahein",
        "codeBlock": "Prompt Example:\n\"Attached CSV mein mera YouTube analytics data hai.\n1. Views vs Watch Time ka correlation nikaalo\n2. Top 5 performing videos identify karo\n3. Weekly upload frequency vs average views chart\n4. Actionable recommendation do\""
      },
      {
        "id": "4",
        "title": "4. Competitor Intelligence Framework",
        "content": "Structured framework: Positioning, Pricing, Content Strategy, Weaknesses.\n\n**Key Points:**\n- Har competitor ke liye standardized template\n- Customer reviews ka sentiment analysis\n- Quarterly refresh karein"
      },
      {
        "id": "5",
        "title": "5. Executive Intelligence Dashboard",
        "content": "4 sections: Market Overview, Competitive Landscape, Opportunity Map, Action Items.\n\n**Key Points:**\n- Dashboard 'scan-able' hona chahiye\n- Har insight ke saath clear next action\n- Numbers ko bold/highlight karein"
      }
    ]
  },
  {
    "day_number": 3,
    "title": "Generative Artistry & Cinematic Visual Engine",
    "intro": "AI image generation ko professional commercial skill mein convert karenge — YouTube thumbnails se lekar premium brand visuals tak.",
    "duration": "2-3 hrs",
    "asset_name": "Premium Commercial Prompt Book",
    "asset_value": "₹22,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Anatomy of a Photorealistic Prompt",
        "content": "5 layers: Subject + Environment + Lighting + Camera + Style/Mood.\n\n**Key Points:**\n- Specific lighting terms use karein (golden hour, rim light)\n- Lens details (35mm, 85mm) real camera feel create karte hain",
        "codeBlock": "Template:\n[SUBJECT] + [ENVIRONMENT] + [LIGHTING] + [CAMERA] + [MOOD]\n\nExample:\n\"An elderly pilgrim offering prayers, temple courtyard, golden hour sunlight, 50mm lens shallow depth of field, cinematic documentary style, 8k detail\""
      },
      {
        "id": "2",
        "title": "2. Aspect Ratios & Platform Optimization",
        "content": "Har platform ki optimal dimensions: YouTube 16:9, Reels 9:16, Instagram 1:1.\n\n**Key Points:**\n- Midjourney: --ar parameters use karein\n- Composition ko ratio ke hisaab se design karayein"
      },
      {
        "id": "3",
        "title": "3. Camera Angles & Cinematic Storytelling",
        "content": "Low-angle = power, High-angle = scale, Eye-level = connection, Dutch = tension.\n\n**Key Points:**\n- Multiple angles mix karke cinematic feel banaye\n- Wide shots context, close-ups emotion dete hain"
      },
      {
        "id": "4",
        "title": "4. Fixing 'Fake-Looking' AI Visuals",
        "content": "Imperfection engineering: natural textures, film grain, subtle motion blur.\n\n**Key Points:**\n- 'Visible skin texture', 'natural imperfections' add karein\n- 'Muted, natural color grading' specify karein"
      },
      {
        "id": "5",
        "title": "5. Commercial Prompt Library",
        "content": "Categories: Portrait, Architecture, Product Shots, B-Roll, Thumbnails.\n\n**Key Points:**\n- Category-wise templates banayein\n- [VARIABLE] placeholders rakhein\n- Best-performing prompts ko flag karein"
      }
    ]
  },
  {
    "day_number": 4,
    "title": "UI/UX Prototyping & Dynamic Pitch Engine",
    "intro": "Text-based parameters se professional pitch decks aur web layouts minutes mein bana sakte hain.",
    "duration": "2 hrs",
    "asset_name": "5 Enterprise Presentation Templates",
    "asset_value": "₹15,000",
    "sections": [
      {
        "id": "1",
        "title": "1. From Text to High-Converting Decks",
        "content": "Gamma.app aur Beautiful.ai se professionally-designed deck.\n\n**Key Points:**\n- Ek slide = ek idea\n- Clear outline pehle likhein\n- Bullet points ko 'so what' angle se likhein"
      },
      {
        "id": "2",
        "title": "2. Design Parameters: Premium Look",
        "content": "3-color palette rule: primary + accent + neutral.\n\n**Key Points:**\n- Maximum 2 fonts — headline aur body\n- Pre-built enterprise themes se start karein"
      },
      {
        "id": "3",
        "title": "3. Dynamic Web Layouts",
        "content": "Landing page structure: Hero → Trust → Value → CTA.\n\n**Key Points:**\n- Mobile-first explicitly specify karein\n- CTA button text action-oriented rakhein"
      },
      {
        "id": "4",
        "title": "4. Investor-Ready Pitch Formula",
        "content": "8-slide formula: Hook → Problem → Solution → Market → Model → Traction → Team → Ask.\n\n**Key Points:**\n- Har slide 30 second mein scan-able\n- Numbers/data ko visual mein present karein"
      },
      {
        "id": "5",
        "title": "5. Rapid Iteration Workflow",
        "content": "Rough draft → Specific feedback → Targeted revisions.\n\n**Key Points:**\n- Feedback specific dein (slide number + exact change)\n- Poora deck dobara mat banwao, sirf targeted slides revise karwao"
      }
    ]
  },
  {
    "day_number": 5,
    "title": "Enterprise Copywriting & Brand Voice Scale",
    "intro": "AI ko apni exact brand voice sikhayein aur infinite content variations generate karayein.",
    "duration": "2-3 hrs",
    "asset_name": "Infinite Content Engine Blueprint",
    "asset_value": "₹20,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Reverse-Engineering Brand Voice",
        "content": "Tone + Vocabulary + Rhythm + Personality = complete voice profile.\n\n**Key Points:**\n- Existing best-content se voice reverse-engineer karein\n- 1-page 'Brand Voice Doc' banayein"
      },
      {
        "id": "2",
        "title": "2. The Content Matrix",
        "content": "Ek Pillar Idea → 8-10 format variations.\n\n**Key Points:**\n- Core message same, format platform ke hisaab se\n- Batch generation time bachata hai",
        "codeBlock": "Prompt Template:\n\"Core message: [PILLAR IDEA]\nBrand Voice: [Bold, Hinglish, energetic]\nConvert to:\n1. YouTube Shorts script (60 sec)\n2. Instagram caption (150 words)\n3. Community post (question format)\n4. WhatsApp broadcast (2-3 lines)\n5. Thumbnail text (4 words max)\""
      },
      {
        "id": "3",
        "title": "3. Persuasion Frameworks",
        "content": "AIDA, PAS, BAB frameworks for high-converting copy.\n\n**Key Points:**\n- AIDA long-form sales pages ke liye\n- PAS emotional niches ke liye\n- BAB transformation-focused offers ke liye"
      },
      {
        "id": "4",
        "title": "4. Emotional Resonance in Hinglish",
        "content": "Natural English-Hindi blend, not robotic translation.\n\n**Key Points:**\n- Cultural references, local idioms use karein\n- Emotional word placement: Headline=curiosity, Body=trust, CTA=confidence"
      },
      {
        "id": "5",
        "title": "5. Scaling Copy Production",
        "content": "2-step workflow: Bulk draft → Quality check pass.\n\n**Key Points:**\n- AI se khud apna output evaluate karwayein\n- 'Top 3 issues' identify karke fix karein"
      }
    ]
  },
  {
    "day_number": 6,
    "title": "AI Audio Synthesis & Voice Cloning",
    "intro": "ElevenLabs se professional voice cloning aur multi-lingual voiceover production.",
    "duration": "2 hrs",
    "asset_name": "Voice Clone Optimization Checklist",
    "asset_value": "₹12,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Clean Voice Clone Science",
        "content": "Source audio quality sabse important — garbage in, garbage out.\n\n**Key Points:**\n- Minimum background noise, consistent volume\n- 3-10 minutes sample optimal\n- Different emotional tones include karein"
      },
      {
        "id": "2",
        "title": "2. Multi-Lingual Production",
        "content": "Cross-lingual voice cloning — English mein train, Hindi mein bol sakti hai.\n\n**Key Points:**\n- Script translation quality important\n- Phonetic adjustments se mispronunciation fix karein"
      },
      {
        "id": "3",
        "title": "3. Emotional Range & Direction",
        "content": "Stability slider control karta hai expressiveness.\n\n**Key Points:**\n- Lower Stability = zyada expressive (entertainment)\n- Higher Stability = zyada consistent (corporate)\n- Script mein pause aur emphasis mark karein"
      },
      {
        "id": "4",
        "title": "4. Ethical & Legal Guardrails",
        "content": "Sirf apni voice ya explicit consent wali voice clone karein.\n\n**Key Points:**\n- Celebrity/public figure cloning avoid karein\n- AI-generated disclosure trust build karta hai"
      },
      {
        "id": "5",
        "title": "5. Production Workflow",
        "content": "Script Preparation → Voice Selection → Generation → Post-Processing.\n\n**Key Points:**\n- Script ko spoken-language style mein likhein\n- Post-processing final professional touch deta hai"
      }
    ]
  },
  {
    "day_number": 7,
    "title": "Automated Video Pipelines & Cinematic B-Roll",
    "intro": "Runway Gen-3 aur HeyGen se text-to-video, camera motion control, aur AI avatars.",
    "duration": "3 hrs",
    "asset_name": "Video Production Automation Pipeline",
    "asset_value": "₹28,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Text-to-Video Fundamentals",
        "content": "Subject + Action + Camera Movement + Environment = complete video prompt.\n\n**Key Points:**\n- Static shots = professional; Dynamic shots = energetic\n- Short, clear motion descriptions better",
        "codeBlock": "Video Prompt Template:\n[SUBJECT/ACTION] + [CAMERA MOVEMENT] + [ENVIRONMENT] + [MOOD]\n\nExample:\n\"Pilgrims walking through temple courtyard at golden hour, slow dolly zoom in, warm ambient lighting with dust particles, cinematic documentary style\""
      },
      {
        "id": "2",
        "title": "2. Image-to-Video Workflow",
        "content": "Real photos ko video mein convert — authenticity preserve karna goal hai.\n\n**Key Points:**\n- High-quality source image = high-quality output\n- Subtle motion prompts authenticity preserve karte hain"
      },
      {
        "id": "3",
        "title": "3. AI Avatars with HeyGen",
        "content": "Realistic AI avatar jo script naturally deliver kare.\n\n**Key Points:**\n- Avatar selection target audience ke hisaab se\n- Short sentences aur natural pauses use karein"
      },
      {
        "id": "4",
        "title": "4. Automated Production Pipeline",
        "content": "Script Batch → Asset Generation → Assembly → Quality Review.\n\n**Key Points:**\n- Batch processing tool-switching time bachata hai\n- Quality review kabhi skip na karein"
      },
      {
        "id": "5",
        "title": "5. Sound Design & Final Polish",
        "content": "3 audio layers: Voiceover + Background Music + Sound Effects.\n\n**Key Points:**\n- Music volume voiceover se significantly kam\n- Content type ke hisaab se music genre select karein"
      }
    ]
  },
  {
    "day_number": 8,
    "title": "Authority Scale & Semantic SEO Dominance",
    "intro": "SurferSEO aur NeuronWriter se 95+ optimization scores achieve karein.",
    "duration": "2-3 hrs",
    "asset_name": "90-Day Topical Authority Map",
    "asset_value": "₹16,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Semantic SEO Fundamentals",
        "content": "Modern SEO topic comprehensiveness measure karta hai, keyword density nahi.\n\n**Key Points:**\n- Entity clusters content ko authoritative banate hain\n- Gap analysis dikhata hai kya missing hai"
      },
      {
        "id": "2",
        "title": "2. High-Intent Keyword Research",
        "content": "4 intent categories: Informational, Navigational, Commercial, Transactional.\n\n**Key Points:**\n- Funnel ke har stage ke liye alag content\n- Transactional keywords higher conversion dete hain"
      },
      {
        "id": "3",
        "title": "3. Achieving 95+ Content Scores",
        "content": "Content pehle value ke liye, phir score optimize karein.\n\n**Key Points:**\n- Missing terms naturally integrate karein\n- Headings mein related keywords semantic structure strengthen karte hain"
      },
      {
        "id": "4",
        "title": "4. Topical Authority Map",
        "content": "1 Pillar Topic + 15-20 Cluster Topics = complete authority structure.\n\n**Key Points:**\n- Customer journey stages ke hisaab se organize\n- Internal linking authority signal strengthen karta hai"
      },
      {
        "id": "5",
        "title": "5. 90-Day Execution Roadmap",
        "content": "30-30-30 structure: Foundation → Expansion → Optimization.\n\n**Key Points:**\n- Har phase end mein performance review\n- Consistency speed se zyada important"
      }
    ]
  },
  {
    "day_number": 9,
    "title": "No-Code Automation & Webhooks",
    "intro": "Make.com aur Zapier Canvas se zero-human-intervention workflows banayein.",
    "duration": "2-3 hrs",
    "asset_name": "Lead Router & Fulfillment Blueprint",
    "asset_value": "₹19,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Triggers, Actions & Webhooks",
        "content": "Trigger = start event, Action = response step, Webhook = real-time data bridge.\n\n**Key Points:**\n- 'When [TRIGGER] happens, do [ACTION 1, 2, 3]'\n- Lead form → WhatsApp confirmation → CRM entry → Team notification"
      },
      {
        "id": "2",
        "title": "2. Connecting LLM Backends via API",
        "content": "HTTP Module se AI API workflow mein connect.\n\n**Key Points:**\n- AI categorization, summarization, personalization ke liye\n- Conditional branching AI response ke hisaab se",
        "codeBlock": "Automation Logic:\nTRIGGER: New WhatsApp message\n→ ACTION 1: Send to Claude API\n   \"Categorize: PRICING, SUPPORT, or NEW_LEAD\n   Respond JSON: {category, urgency}\"\n→ ACTION 2 (Router): Route based on category\n→ ACTION 3: Take appropriate action"
      },
      {
        "id": "3",
        "title": "3. Zero-Touch Lead Router",
        "content": "5-step flow: Capture → Enrich → Route → Notify → Follow-up.\n\n**Key Points:**\n- AI-based lead scoring high-value leads fast-track karta hai\n- Low-priority leads automated nurture mein"
      },
      {
        "id": "4",
        "title": "4. Automated Fulfillment",
        "content": "Payment → Access Grant → Welcome Sequence → Follow-ups → Feedback.\n\n**Key Points:**\n- Scheduled follow-ups engagement improve karte hain\n- Feedback automation reviews organically collect karta hai"
      },
      {
        "id": "5",
        "title": "5. Error Handling & Monitoring",
        "content": "Har critical workflow mein Error Handling branch add karein.\n\n**Key Points:**\n- Silent failure business-critical problem hai\n- Weekly monitoring routine se issues jaldi catch"
      }
    ]
  },
  {
    "day_number": 10,
    "title": "The Sovereign Engine - Launch Your AI Agency",
    "intro": "Saari skills ko profitable business mein convert karenge — pricing, retainers, aur high-ticket clients.",
    "duration": "3 hrs",
    "asset_name": "Elite AI Agency Proposal & MSA Template",
    "asset_value": "₹35,000",
    "sections": [
      {
        "id": "1",
        "title": "1. Choosing Your Agency's Core Offer",
        "content": "Specific, niche offer generic 'AI services' se zyada premium pricing commands.\n\n**Key Points:**\n- Existing skills ko core offer ka foundation banayein\n- 'Riches are in the niches'"
      },
      {
        "id": "2",
        "title": "2. Value-Based Pricing",
        "content": "Price client ke ROI ke hisaab se, na ki aapke time ke.\n\n**Key Points:**\n- Hourly pricing AI-efficiency ko punish karta hai\n- Case studies aur numbers pricing justify karte hain"
      },
      {
        "id": "3",
        "title": "3. Retainer Models",
        "content": "Deliverables + Response Time + Strategic Input = strong retainer.\n\n**Key Points:**\n- Retainers predictable revenue dete hain\n- Minimum contract length 3-6 months lock karein"
      },
      {
        "id": "4",
        "title": "4. High-Ticket Sales Process",
        "content": "Discovery Call → Custom Proposal → Case Study Proof.\n\n**Key Points:**\n- Discovery mein 80% listening, 20% talking\n- Custom proposals zyada close hoti hain"
      },
      {
        "id": "5",
        "title": "5. Systemizing & Scaling",
        "content": "SOPs document karein taaki business founder-dependent na rahe.\n\n**Key Points:**\n- High-value work pe focus, production delegate/automate karein\n- MSA har client ke saath legal clarity establish kare"
      }
    ]
  }
];
