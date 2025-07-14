import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronRight, Sparkles, Code, FileText, Scale, Palette, BarChart3, Globe, Zap, Brain, Building, Star, Camera, Music, Video, Mic, Users, Shield, Briefcase, GraduationCap, Heart, Car, Home, Gamepad2, ShoppingCart, MessageSquare, Headphones, Smartphone, Monitor, Cpu, Database, Bot, Eye, PenTool, Layers, Wand2, TrendingUp, Target, Mail, Calendar, Clock, DollarSign, Megaphone, BookOpen, Lightbulb, Settings } from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  rating: number;
  url: string;
  icon: React.ReactNode;
}

const aiTools: AITool[] = [
  // Writing & Content
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI for writing, coding, and general assistance',
    category: 'Writing & Content',
    features: ['Text generation', 'Code assistance', 'Creative writing', 'Research'],
    pricing: 'Freemium',
    rating: 4.8,
    url: 'https://chat.openai.com',
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: '2',
    name: 'Jasper AI',
    description: 'AI copywriting and marketing content generation',
    category: 'Writing & Content',
    features: ['Blog writing', 'Ad copy', 'Social media content', 'Email campaigns'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.jasper.ai',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: '3',
    name: 'Copy.ai',
    description: 'AI-powered copywriting for marketing and sales',
    category: 'Writing & Content',
    features: ['Sales copy', 'Product descriptions', 'Social media posts', 'Email templates'],
    pricing: 'Freemium',
    rating: 4.3,
    url: 'https://www.copy.ai',
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: '4',
    name: 'Writesonic',
    description: 'AI writing assistant for content creation and optimization',
    category: 'Writing & Content',
    features: ['Article writing', 'SEO optimization', 'Ad copy', 'Landing pages'],
    pricing: 'Freemium',
    rating: 4.2,
    url: 'https://writesonic.com',
    icon: <Wand2 className="w-6 h-6" />
  },
  {
    id: '5',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar and style',
    category: 'Writing & Content',
    features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Tone adjustment'],
    pricing: 'Freemium',
    rating: 4.6,
    url: 'https://www.grammarly.com',
    icon: <BookOpen className="w-6 h-6" />
  },

  // Development & Code
  {
    id: '6',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and programming assistant',
    category: 'Development & Code',
    features: ['Code completion', 'Function generation', 'Bug fixing', 'Documentation'],
    pricing: 'Paid',
    rating: 4.7,
    url: 'https://github.com/features/copilot',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: '7',
    name: 'Tabnine',
    description: 'AI code completion for faster development',
    category: 'Development & Code',
    features: ['Code prediction', 'Multi-language support', 'Team collaboration', 'Privacy focused'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://www.tabnine.com',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '8',
    name: 'Replit Ghostwriter',
    description: 'AI pair programmer for collaborative coding',
    category: 'Development & Code',
    features: ['Code generation', 'Debugging', 'Code explanation', 'Refactoring'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://replit.com/site/ghostwriter',
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: '9',
    name: 'CodeT5',
    description: 'AI model for code understanding and generation',
    category: 'Development & Code',
    features: ['Code summarization', 'Code translation', 'Bug detection', 'Code completion'],
    pricing: 'Free',
    rating: 4.3,
    url: 'https://github.com/salesforce/CodeT5',
    icon: <Database className="w-6 h-6" />
  },

  // Design & Creative
  {
    id: '10',
    name: 'Midjourney',
    description: 'AI-powered image generation and artistic creation',
    category: 'Design & Creative',
    features: ['Image generation', 'Art creation', 'Style transfer', 'Concept art'],
    pricing: 'Paid',
    rating: 4.9,
    url: 'https://midjourney.com',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: '11',
    name: 'DALL-E 2',
    description: 'AI system for creating realistic images from text descriptions',
    category: 'Design & Creative',
    features: ['Text-to-image', 'Image editing', 'Variations', 'Outpainting'],
    pricing: 'Paid',
    rating: 4.7,
    url: 'https://openai.com/dall-e-2',
    icon: <Camera className="w-6 h-6" />
  },
  {
    id: '12',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generation model',
    category: 'Design & Creative',
    features: ['Image generation', 'Image-to-image', 'Inpainting', 'Upscaling'],
    pricing: 'Free',
    rating: 4.6,
    url: 'https://stability.ai/stable-diffusion',
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: '13',
    name: 'Canva AI',
    description: 'AI-powered design platform for graphics and presentations',
    category: 'Design & Creative',
    features: ['Template generation', 'Background removal', 'Magic resize', 'Brand kit'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://www.canva.com',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: '14',
    name: 'Uizard',
    description: 'AI-powered UI/UX design tool for rapid prototyping',
    category: 'Design & Creative',
    features: ['Wireframe generation', 'Design-to-code', 'Sketch-to-design', 'Collaboration'],
    pricing: 'Freemium',
    rating: 4.4,
    url: 'https://uizard.io',
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: '15',
    name: 'Figma AI',
    description: 'AI features integrated into Figma design platform',
    category: 'Design & Creative',
    features: ['Auto-layout', 'Component variants', 'Design tokens', 'Prototyping'],
    pricing: 'Freemium',
    rating: 4.8,
    url: 'https://www.figma.com',
    icon: <Smartphone className="w-6 h-6" />
  },

  // Legal & Compliance
  {
    id: '16',
    name: 'LawGeex',
    description: 'AI contract review and legal document analysis',
    category: 'Legal & Compliance',
    features: ['Contract review', 'Risk assessment', 'Compliance checking', 'Legal research'],
    pricing: 'Paid',
    rating: 4.5,
    url: 'https://www.lawgeex.com',
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: '17',
    name: 'DoNotPay',
    description: 'AI lawyer for consumer rights and legal assistance',
    category: 'Legal & Compliance',
    features: ['Legal document generation', 'Dispute resolution', 'Rights protection', 'Automated appeals'],
    pricing: 'Paid',
    rating: 4.2,
    url: 'https://donotpay.com',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: '18',
    name: 'Kira Systems',
    description: 'AI for contract analysis and due diligence',
    category: 'Legal & Compliance',
    features: ['Contract extraction', 'Due diligence', 'Risk identification', 'Clause analysis'],
    pricing: 'Paid',
    rating: 4.3,
    url: 'https://kirasystems.com',
    icon: <FileText className="w-6 h-6" />
  },

  // Data & Analytics
  {
    id: '19',
    name: 'Tableau AI',
    description: 'Advanced data analysis and visualization with AI insights',
    category: 'Data & Analytics',
    features: ['Data visualization', 'Predictive analytics', 'Automated insights', 'Dashboard creation'],
    pricing: 'Paid',
    rating: 4.6,
    url: 'https://www.tableau.com',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: '20',
    name: 'DataRobot',
    description: 'Automated machine learning platform',
    category: 'Data & Analytics',
    features: ['AutoML', 'Model deployment', 'Feature engineering', 'Model monitoring'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.datarobot.com',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: '21',
    name: 'H2O.ai',
    description: 'Open-source machine learning and AI platform',
    category: 'Data & Analytics',
    features: ['Machine learning', 'Deep learning', 'AutoML', 'Model interpretability'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://www.h2o.ai',
    icon: <Database className="w-6 h-6" />
  },

  // Translation & Language
  {
    id: '22',
    name: 'DeepL',
    description: 'High-quality AI translation for multiple languages',
    category: 'Translation & Language',
    features: ['Real-time translation', 'Document translation', 'API integration', 'Grammar correction'],
    pricing: 'Freemium',
    rating: 4.7,
    url: 'https://www.deepl.com',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: '23',
    name: 'Google Translate',
    description: 'Free neural machine translation service',
    category: 'Translation & Language',
    features: ['Text translation', 'Image translation', 'Voice translation', '100+ languages'],
    pricing: 'Free',
    rating: 4.4,
    url: 'https://translate.google.com',
    icon: <MessageSquare className="w-6 h-6" />
  },

  // Audio & Music
  {
    id: '24',
    name: 'AIVA',
    description: 'AI composer for creating original music',
    category: 'Audio & Music',
    features: ['Music composition', 'Soundtrack creation', 'Style customization', 'MIDI export'],
    pricing: 'Freemium',
    rating: 4.3,
    url: 'https://www.aiva.ai',
    icon: <Music className="w-6 h-6" />
  },
  {
    id: '25',
    name: 'Mubert',
    description: 'AI-generated royalty-free music',
    category: 'Audio & Music',
    features: ['Real-time music generation', 'Mood-based tracks', 'Royalty-free', 'API access'],
    pricing: 'Freemium',
    rating: 4.2,
    url: 'https://mubert.com',
    icon: <Headphones className="w-6 h-6" />
  },
  {
    id: '26',
    name: 'Descript',
    description: 'AI-powered audio and video editing',
    category: 'Audio & Music',
    features: ['Transcription', 'Voice cloning', 'Audio editing', 'Overdub'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://www.descript.com',
    icon: <Mic className="w-6 h-6" />
  },

  // Video & Animation
  {
    id: '27',
    name: 'Runway ML',
    description: 'AI tools for video editing and generation',
    category: 'Video & Animation',
    features: ['Video generation', 'Background removal', 'Style transfer', 'Motion tracking'],
    pricing: 'Freemium',
    rating: 4.6,
    url: 'https://runwayml.com',
    icon: <Video className="w-6 h-6" />
  },
  {
    id: '28',
    name: 'Synthesia',
    description: 'AI video generation with virtual presenters',
    category: 'Video & Animation',
    features: ['AI avatars', 'Text-to-video', 'Multi-language', 'Custom avatars'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.synthesia.io',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '29',
    name: 'Luma AI',
    description: '3D capture and neural rendering technology',
    category: 'Video & Animation',
    features: ['3D scanning', 'Neural rendering', 'AR/VR content', 'Photorealistic 3D'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://lumalabs.ai',
    icon: <Eye className="w-6 h-6" />
  },

  // Productivity & Automation
  {
    id: '30',
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management',
    category: 'Productivity & Automation',
    features: ['Document writing', 'Task automation', 'Content summarization', 'Project planning'],
    pricing: 'Freemium',
    rating: 4.5,
    url: 'https://www.notion.so',
    icon: <Building className="w-6 h-6" />
  },
  {
    id: '31',
    name: 'Zapier',
    description: 'Automation platform connecting apps and services',
    category: 'Productivity & Automation',
    features: ['Workflow automation', 'App integration', 'Trigger-based actions', 'Multi-step zaps'],
    pricing: 'Freemium',
    rating: 4.6,
    url: 'https://zapier.com',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: '32',
    name: 'Calendly AI',
    description: 'AI-powered scheduling and calendar management',
    category: 'Productivity & Automation',
    features: ['Smart scheduling', 'Meeting optimization', 'Availability management', 'Integration'],
    pricing: 'Freemium',
    rating: 4.4,
    url: 'https://calendly.com',
    icon: <Calendar className="w-6 h-6" />
  },

  // Research & Education
  {
    id: '33',
    name: 'Perplexity AI',
    description: 'AI-powered research and information discovery engine',
    category: 'Research & Education',
    features: ['Real-time search', 'Source citation', 'Research synthesis', 'Academic support'],
    pricing: 'Freemium',
    rating: 4.6,
    url: 'https://www.perplexity.ai',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: '34',
    name: 'Elicit',
    description: 'AI research assistant for academic literature',
    category: 'Research & Education',
    features: ['Literature review', 'Paper summarization', 'Research questions', 'Citation analysis'],
    pricing: 'Freemium',
    rating: 4.3,
    url: 'https://elicit.org',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: '35',
    name: 'Consensus',
    description: 'AI-powered search engine for scientific research',
    category: 'Research & Education',
    features: ['Scientific paper search', 'Evidence synthesis', 'Research insights', 'Citation tracking'],
    pricing: 'Freemium',
    rating: 4.4,
    url: 'https://consensus.app',
    icon: <Lightbulb className="w-6 h-6" />
  },

  // Marketing & SEO
  {
    id: '36',
    name: 'Surfer SEO',
    description: 'AI-powered SEO optimization and content planning',
    category: 'Marketing & SEO',
    features: ['Content optimization', 'Keyword research', 'SERP analysis', 'Content planning'],
    pricing: 'Paid',
    rating: 4.5,
    url: 'https://surferseo.com',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: '37',
    name: 'Mailchimp AI',
    description: 'AI-powered email marketing and automation',
    category: 'Marketing & SEO',
    features: ['Email optimization', 'Audience segmentation', 'Send time optimization', 'Content suggestions'],
    pricing: 'Freemium',
    rating: 4.3,
    url: 'https://mailchimp.com',
    icon: <Mail className="w-6 h-6" />
  },
  {
    id: '38',
    name: 'Hootsuite Insights',
    description: 'AI-powered social media analytics and management',
    category: 'Marketing & SEO',
    features: ['Social listening', 'Sentiment analysis', 'Content scheduling', 'Performance analytics'],
    pricing: 'Paid',
    rating: 4.2,
    url: 'https://hootsuite.com',
    icon: <Megaphone className="w-6 h-6" />
  },

  // Healthcare & Medical
  {
    id: '39',
    name: 'IBM Watson Health',
    description: 'AI platform for healthcare and medical research',
    category: 'Healthcare & Medical',
    features: ['Medical imaging', 'Drug discovery', 'Clinical decision support', 'Population health'],
    pricing: 'Paid',
    rating: 4.3,
    url: 'https://www.ibm.com/watson-health',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: '40',
    name: 'PathAI',
    description: 'AI-powered pathology and diagnostic assistance',
    category: 'Healthcare & Medical',
    features: ['Pathology analysis', 'Diagnostic support', 'Biomarker discovery', 'Clinical trials'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.pathai.com',
    icon: <Eye className="w-6 h-6" />
  },

  // Finance & Business
  {
    id: '41',
    name: 'Kensho',
    description: 'AI analytics for financial markets and business intelligence',
    category: 'Finance & Business',
    features: ['Market analysis', 'Risk assessment', 'Portfolio optimization', 'Economic forecasting'],
    pricing: 'Paid',
    rating: 4.5,
    url: 'https://www.kensho.com',
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    id: '42',
    name: 'Zest AI',
    description: 'AI platform for credit underwriting and lending',
    category: 'Finance & Business',
    features: ['Credit scoring', 'Risk modeling', 'Loan approval', 'Compliance monitoring'],
    pricing: 'Paid',
    rating: 4.3,
    url: 'https://www.zest.ai',
    icon: <Briefcase className="w-6 h-6" />
  },

  // Gaming & Entertainment
  {
    id: '43',
    name: 'AI Dungeon',
    description: 'AI-powered text adventure game generator',
    category: 'Gaming & Entertainment',
    features: ['Story generation', 'Interactive fiction', 'Character creation', 'Multiplayer'],
    pricing: 'Freemium',
    rating: 4.2,
    url: 'https://aidungeon.io',
    icon: <Gamepad2 className="w-6 h-6" />
  },
  {
    id: '44',
    name: 'Promethean AI',
    description: 'AI assistant for 3D artists and game developers',
    category: 'Gaming & Entertainment',
    features: ['3D asset creation', 'Environment building', 'Texture generation', 'Scene composition'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.prometheanai.com',
    icon: <Layers className="w-6 h-6" />
  },

  // E-commerce & Retail
  {
    id: '45',
    name: 'Dynamic Yield',
    description: 'AI-powered personalization for e-commerce',
    category: 'E-commerce & Retail',
    features: ['Product recommendations', 'Personalization', 'A/B testing', 'Customer segmentation'],
    pricing: 'Paid',
    rating: 4.3,
    url: 'https://www.dynamicyield.com',
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    id: '46',
    name: 'Yotpo',
    description: 'AI-powered customer reviews and marketing platform',
    category: 'E-commerce & Retail',
    features: ['Review management', 'Customer insights', 'Marketing automation', 'Loyalty programs'],
    pricing: 'Freemium',
    rating: 4.2,
    url: 'https://www.yotpo.com',
    icon: <Star className="w-6 h-6" />
  },

  // Transportation & Logistics
  {
    id: '47',
    name: 'Waymo',
    description: 'Autonomous driving technology and self-driving cars',
    category: 'Transportation & Logistics',
    features: ['Self-driving technology', 'Route optimization', 'Safety systems', 'Fleet management'],
    pricing: 'Paid',
    rating: 4.5,
    url: 'https://waymo.com',
    icon: <Car className="w-6 h-6" />
  },

  // Real Estate & Property
  {
    id: '48',
    name: 'Zillow Zestimate',
    description: 'AI-powered property valuation and real estate insights',
    category: 'Real Estate & Property',
    features: ['Property valuation', 'Market analysis', 'Price predictions', 'Investment insights'],
    pricing: 'Free',
    rating: 4.1,
    url: 'https://www.zillow.com',
    icon: <Home className="w-6 h-6" />
  },

  // Customer Service & Support
  {
    id: '49',
    name: 'Intercom Resolution Bot',
    description: 'AI-powered customer service and support automation',
    category: 'Customer Service & Support',
    features: ['Automated responses', 'Ticket routing', 'Customer insights', 'Live chat'],
    pricing: 'Paid',
    rating: 4.4,
    url: 'https://www.intercom.com',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: '50',
    name: 'Zendesk Answer Bot',
    description: 'AI chatbot for customer support and help desk',
    category: 'Customer Service & Support',
    features: ['Automated tickets', 'Knowledge base', 'Multi-channel support', 'Analytics'],
    pricing: 'Paid',
    rating: 4.3,
    url: 'https://www.zendesk.com',
    icon: <Bot className="w-6 h-6" />
  }
];

const categories = [
  'All',
  'Writing & Content',
  'Development & Code',
  'Design & Creative',
  'Legal & Compliance',
  'Data & Analytics',
  'Translation & Language',
  'Audio & Music',
  'Video & Animation',
  'Productivity & Automation',
  'Research & Education',
  'Marketing & SEO',
  'Healthcare & Medical',
  'Finance & Business',
  'Gaming & Entertainment',
  'E-commerce & Retail',
  'Transportation & Logistics',
  'Real Estate & Property',
  'Customer Service & Support'
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const PricingBadge = ({ pricing }: { pricing: string }) => {
    const colors = {
      Free: 'bg-green-100 text-green-800 border-green-200',
      Freemium: 'bg-blue-100 text-blue-800 border-blue-200',
      Paid: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${colors[pricing as keyof typeof colors]}`}>
        {pricing}
      </span>
    );
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Writing & Content': <FileText className="w-8 h-8" />,
      'Development & Code': <Code className="w-8 h-8" />,
      'Design & Creative': <Palette className="w-8 h-8" />,
      'Legal & Compliance': <Scale className="w-8 h-8" />,
      'Data & Analytics': <BarChart3 className="w-8 h-8" />,
      'Translation & Language': <Globe className="w-8 h-8" />,
      'Audio & Music': <Music className="w-8 h-8" />,
      'Video & Animation': <Video className="w-8 h-8" />,
      'Productivity & Automation': <Zap className="w-8 h-8" />,
      'Research & Education': <GraduationCap className="w-8 h-8" />,
      'Marketing & SEO': <Target className="w-8 h-8" />,
      'Healthcare & Medical': <Heart className="w-8 h-8" />,
      'Finance & Business': <DollarSign className="w-8 h-8" />,
      'Gaming & Entertainment': <Gamepad2 className="w-8 h-8" />,
      'E-commerce & Retail': <ShoppingCart className="w-8 h-8" />,
      'Transportation & Logistics': <Car className="w-8 h-8" />,
      'Real Estate & Property': <Home className="w-8 h-8" />,
      'Customer Service & Support': <MessageSquare className="w-8 h-8" />
    };
    return iconMap[category] || <Settings className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Toolvy</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 transition-colors">Tools</a>
              <a href="#categories" className="text-gray-600 hover:text-blue-600 transition-colors">Categories</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ultimate
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Tools</span>
              <br />Directory
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover 50+ cutting-edge AI tools across 18 categories. From writing and development to healthcare and finance - 
              find the perfect AI tool for every need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore {aiTools.length} Tools
              </button>
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Browse Categories
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{aiTools.length}+</div>
                <div className="text-gray-600">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{categories.length - 1}</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{aiTools.filter(tool => tool.pricing === 'Free').length}</div>
                <div className="text-gray-600">Free Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="tools" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI tools, features, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Categories
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredTools.length} of {aiTools.length} tools
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                        <PricingBadge pricing={tool.pricing} />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
                  
                  <div className="mb-4">
                    <StarRating rating={tool.rating} />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700 mb-2 block">Key Features:</span>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {tool.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{tool.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 group-hover:from-blue-700 group-hover:to-purple-700"
                  >
                    <span className="font-medium">Try {tool.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse AI tools organized by their primary use cases and applications across {categories.length - 1} different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category) => {
              const categoryTools = aiTools.filter(tool => tool.category === category);
              
              return (
                <div
                  key={category}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setSelectedCategory(category);
                    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">{categoryTools.length} tools available</p>
                  <div className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore tools
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Toolvy?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              The most comprehensive directory of AI tools across all industries. We curate, test, and review 
              every tool to help you find the perfect AI solution for your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
                <p className="opacity-90">Hand-picked tools tested and verified by experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Always Updated</h3>
                <p className="opacity-90">Latest tools and features added regularly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
                <p className="opacity-90">Detailed analysis and honest recommendations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect Match</h3>
                <p className="opacity-90">Find exactly what you need with smart filtering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Toolvy</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2025 Toolvy. Your gateway to the future of artificial intelligence.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                 Built by Keshav · Featuring {aiTools.length} tools across {categories.length - 1} categories
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;