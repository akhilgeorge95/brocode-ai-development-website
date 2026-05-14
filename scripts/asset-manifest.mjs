// Manifest of all locally-hosted assets. Each entry maps a destination path
// in /public to a remote source on Unsplash / Pexels / Coverr / Pixabay.
// `fetch-assets.mjs` walks this list and downloads every file.

export const IMAGE_ASSETS = [
  // ─── General ───
  { dest: 'public/images/general/og-default.jpg', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&fm=jpg', credit: 'DeepMind on Unsplash' },
  { dest: 'public/images/general/abu-dhabi-skyline.jpg', src: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1920&q=80&fm=jpg', credit: 'David Rodrigo on Unsplash' },
  { dest: 'public/images/general/team-collaboration.jpg', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&fm=jpg', credit: 'Headway on Unsplash' },
  { dest: 'public/images/general/datacenter.jpg', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&fm=jpg', credit: 'Taylor Vick on Unsplash' },
  { dest: 'public/images/general/code-screen.jpg', src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=80&fm=jpg', credit: 'Markus Spiske on Unsplash' },
  { dest: 'public/images/general/abstract-flow.jpg', src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&fm=jpg', credit: 'Steve Johnson on Unsplash' },
  { dest: 'public/images/general/dubai-night.jpg', src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80&fm=jpg', credit: 'ZQ Lee on Unsplash' },

  // ─── Hero / posters ───
  { dest: 'public/images/hero/home-poster.jpg', src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80&fm=jpg', credit: 'Solen Feyissa on Unsplash' },
  { dest: 'public/images/hero/services-poster.jpg', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&fm=jpg', credit: 'Adi Goldstein on Unsplash' },
  { dest: 'public/images/hero/industries-poster.jpg', src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80&fm=jpg', credit: 'Christin Hume on Unsplash' },
  { dest: 'public/images/hero/cta-poster.jpg', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&fm=jpg', credit: 'NASA on Unsplash' },

  // ─── Service pages (20) ───
  { dest: 'public/images/services/machine-learning-development.jpg', src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1600&q=80&fm=jpg', credit: 'Pietro Jeng on Unsplash' },
  { dest: 'public/images/services/deep-learning-solutions.jpg', src: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1600&q=80&fm=jpg', credit: 'ThisIsEngineering on Unsplash' },
  { dest: 'public/images/services/natural-language-processing.jpg', src: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1600&q=80&fm=jpg', credit: 'Patrick Tomasso on Unsplash' },
  { dest: 'public/images/services/computer-vision.jpg', src: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=1600&q=80&fm=jpg', credit: 'David Travis on Unsplash' },
  { dest: 'public/images/services/generative-ai-development.jpg', src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&fm=jpg', credit: 'Steve Johnson on Unsplash' },
  { dest: 'public/images/services/llm-fine-tuning.jpg', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80&fm=jpg', credit: 'Markus Spiske on Unsplash' },
  { dest: 'public/images/services/conversational-ai-chatbots.jpg', src: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1600&q=80&fm=jpg', credit: 'Mohamed Nohassi on Unsplash' },
  { dest: 'public/images/services/ai-agents-agentic-workflows.jpg', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fm=jpg', credit: 'Carlos Muza on Unsplash' },
  { dest: 'public/images/services/predictive-analytics.jpg', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&fm=jpg', credit: 'Luke Chesser on Unsplash' },
  { dest: 'public/images/services/recommendation-systems.jpg', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80&fm=jpg', credit: 'Austin Distel on Unsplash' },
  { dest: 'public/images/services/speech-recognition-voice-ai.jpg', src: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80&fm=jpg', credit: 'Soundtrap on Unsplash' },
  { dest: 'public/images/services/document-intelligence.jpg', src: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=1600&q=80&fm=jpg', credit: 'Christa Dodoo on Unsplash' },
  { dest: 'public/images/services/mlops-ai-infrastructure.jpg', src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80&fm=jpg', credit: 'Taylor Vick on Unsplash' },
  { dest: 'public/images/services/self-hosted-llm-infrastructure.jpg', src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1600&q=80&fm=jpg', credit: 'Sergey Zolkin on Unsplash' },
  { dest: 'public/images/services/ai-consulting-strategy.jpg', src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&fm=jpg', credit: 'Austin Distel on Unsplash' },
  { dest: 'public/images/services/ai-integration-services.jpg', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&fm=jpg', credit: 'Marvin Meyer on Unsplash' },
  { dest: 'public/images/services/intelligent-process-automation.jpg', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fm=jpg', credit: 'Adi Goldstein on Unsplash' },
  { dest: 'public/images/services/data-engineering-for-ai.jpg', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fm=jpg', credit: 'Carlos Muza on Unsplash' },
  { dest: 'public/images/services/ai-model-optimization.jpg', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fm=jpg', credit: 'Adi Goldstein on Unsplash' },
  { dest: 'public/images/services/responsible-ai-governance.jpg', src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&fm=jpg', credit: 'Wesley Tingey on Unsplash' },

  // ─── Industry pages (10) ───
  { dest: 'public/images/industries/government-public-sector.jpg', src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fm=jpg', credit: 'Joshua Sukoff on Unsplash' },
  { dest: 'public/images/industries/banking-financial-services.jpg', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&fm=jpg', credit: 'Etienne Martin on Unsplash' },
  { dest: 'public/images/industries/healthcare.jpg', src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&fm=jpg', credit: 'National Cancer Institute on Unsplash' },
  { dest: 'public/images/industries/retail-ecommerce.jpg', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&fm=jpg', credit: 'Hannah Morgan on Unsplash' },
  { dest: 'public/images/industries/manufacturing.jpg', src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80&fm=jpg', credit: 'Lenny Kuhne on Unsplash' },
  { dest: 'public/images/industries/real-estate-proptech.jpg', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80&fm=jpg', credit: 'Tierra Mallorca on Unsplash' },
  { dest: 'public/images/industries/energy-utilities.jpg', src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80&fm=jpg', credit: 'Zbynek Burival on Unsplash' },
  { dest: 'public/images/industries/logistics-supply-chain.jpg', src: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600&q=80&fm=jpg', credit: 'Andy Li on Unsplash' },
  { dest: 'public/images/industries/education.jpg', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80&fm=jpg', credit: 'Mikael Kristenson on Unsplash' },
  { dest: 'public/images/industries/hospitality-tourism.jpg', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80&fm=jpg', credit: 'Marten Bjork on Unsplash' },

  // ─── Technology pages (6) ───
  { dest: 'public/images/technology/stack.jpg', src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=80&fm=jpg', credit: 'Markus Spiske on Unsplash' },
  { dest: 'public/images/technology/ai-platform-partners.jpg', src: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1600&q=80&fm=jpg', credit: 'Andrew Neel on Unsplash' },
  { dest: 'public/images/technology/cloud-infrastructure-partners.jpg', src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1600&q=80&fm=jpg', credit: 'ThisIsEngineering on Unsplash' },
  { dest: 'public/images/technology/open-source.jpg', src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1600&q=80&fm=jpg', credit: 'Florian Olivo on Unsplash' },
  { dest: 'public/images/technology/methodology.jpg', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&fm=jpg', credit: 'Štefan Štefančík on Unsplash' },
  { dest: 'public/images/technology/quality-assurance.jpg', src: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80&fm=jpg', credit: 'Lukas Blazek on Unsplash' },

  // ─── Insights / resources (5) ───
  { dest: 'public/images/insights/insights-hub.jpg', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80&fm=jpg', credit: 'Andrew Neel on Unsplash' },
  { dest: 'public/images/insights/whitepapers.jpg', src: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&q=80&fm=jpg', credit: 'Susan Q Yin on Unsplash' },
  { dest: 'public/images/insights/guides.jpg', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80&fm=jpg', credit: 'Akson on Unsplash' },
  { dest: 'public/images/insights/glossary.jpg', src: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1600&q=80&fm=jpg', credit: 'Romain Vignes on Unsplash' },
  { dest: 'public/images/insights/faqs.jpg', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80&fm=jpg', credit: 'Glenn Carstens-Peters on Unsplash' },

  // ─── Legal (4) ───
  { dest: 'public/images/legal/security-compliance.jpg', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&fm=jpg', credit: 'Scott Graham on Unsplash' },
  { dest: 'public/images/legal/privacy-policy.jpg', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80&fm=jpg', credit: 'Scott Graham on Unsplash' },
  { dest: 'public/images/legal/terms-of-service.jpg', src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&fm=jpg', credit: 'Wesley Tingey on Unsplash' },
  { dest: 'public/images/legal/cookie-policy.jpg', src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&q=80&fm=jpg', credit: 'Toa Heftiba on Unsplash' },

  // ─── Core pages ───
  { dest: 'public/images/general/about-hero.jpg', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&fm=jpg', credit: 'Austin Distel on Unsplash' },
  { dest: 'public/images/general/why-hero.jpg', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80&fm=jpg', credit: 'Sigmund on Unsplash' },
  { dest: 'public/images/general/careers-hero.jpg', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&fm=jpg', credit: 'Mapbox on Unsplash' },
  { dest: 'public/images/general/contact-hero.jpg', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fm=jpg', credit: 'Benjamin Child on Unsplash' }
];

// ─── Videos (Pexels / Coverr / Mixkit direct-mp4 endpoints) ───
export const VIDEO_ASSETS = [
  { dest: 'public/videos/hero/home.mp4', src: 'https://videos.pexels.com/video-files/5849609/5849609-uhd_2560_1440_25fps.mp4', credit: 'Pressmaster on Pexels' },
  { dest: 'public/videos/hero/services.mp4', src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4', credit: 'Pressmaster on Pexels' },
  { dest: 'public/videos/hero/industries.mp4', src: 'https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4', credit: 'Free Videos on Pexels' },
  { dest: 'public/videos/sections/data-flow.mp4', src: 'https://videos.pexels.com/video-files/3192198/3192198-uhd_2560_1440_25fps.mp4', credit: 'Pressmaster on Pexels' },
  { dest: 'public/videos/sections/cta.mp4', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', credit: 'Tima Miroshnichenko on Pexels' }
];
