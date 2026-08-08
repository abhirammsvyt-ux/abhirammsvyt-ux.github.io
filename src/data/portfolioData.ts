import { Project, SkillCategory, ExperienceItem, EducationItem, AchievementItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Abhiram M S',
  headline: 'Hi, I\'m Abhiram.',
  title: 'AI & Data Science Engineer',
  subtitle: 'I build intelligent systems, data-driven applications and practical AI solutions.',
  bio: 'B.Tech student in Artificial Intelligence and Data Science at Vimal Jyothi Engineering College. Driven by a deep passion for building practical machine learning pipelines, agentic AI frameworks, and data-driven systems that solve real-world problems.',
  detailedBio: [
    'I am an AI & Data Science Engineer in training with hands-on experience in machine learning, deep learning, computer vision, and modern generative AI architectures.',
    'As Secretary of the IEEE Computer Society Student Chapter and Joint Technical Coordinator of the IEEE Student Branch at Vimal Jyothi Engineering College, I regularly organize technical bootcamps, mentor peers in AI/ML fundamentals, and present tech sessions.',
    'Beyond core engineering, I hold a deep interest in history, governance, and technology policy—believing that a well-rounded perspective is key to developing responsible, high-impact AI systems.'
  ],
  location: 'Kerala, India',
  email: 'abhiramms.vyt@gmail.com',
  github: 'https://github.com/abhirammsvyt-ux',
  linkedin: 'https://linkedin.com/in/abhiram-m-s8848',
  status: 'OPEN FOR AI / ML ROLES',
  web3FormsKey: 'c7dc65ac-9c22-4ad2-bf0a-9e3250dd48ae',
  avatarImage: '/image.jpg.jpeg',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/abhirammsvyt-ux',
    label: 'github.com/abhirammsvyt-ux',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/abhiram-m-s8848',
    label: 'linkedin.com/in/abhiram-m-s8848',
  },
  {
    platform: 'Email',
    url: 'mailto:abhiramms.vyt@gmail.com',
    label: 'abhiramms.vyt@gmail.com',
  },
];

export const SPECIALIZATION_PILLARS = [
  { title: 'Machine Learning', count: '01' },
  { title: 'Deep Learning', count: '02' },
  { title: 'Generative AI', count: '03' },
  { title: 'Agentic AI', count: '04' },
  { title: 'Natural Language Processing', count: '05' },
  { title: 'Computer Vision', count: '06' },
  { title: 'Data Science', count: '07' },
  { title: 'Python Development', count: '08' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', tag: 'Core Language', level: 'Advanced' },
      { name: 'R', tag: 'Data Analysis', level: 'Intermediate' },
      { name: 'SQL', tag: 'Database Querying', level: 'Intermediate' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Machine Learning', tag: 'Scikit-Learn / Algorithms', level: 'Advanced' },
      { name: 'Deep Learning', tag: 'Neural Networks', level: 'Intermediate' },
      { name: 'NLP', tag: 'Text & Transformers', level: 'Advanced' },
      { name: 'Computer Vision', tag: 'OpenCV / Classification', level: 'Intermediate' },
      { name: 'Generative AI', tag: 'LLMs & Prompt Engineering', level: 'Advanced' },
      { name: 'RAG', tag: 'Vector Search & Embeddings', level: 'Intermediate' },
      { name: 'Agentic AI', tag: 'Autonomus Workflow Tools', level: 'Intermediate' },
    ],
  },
  {
    category: 'Frameworks / Libraries',
    skills: [
      { name: 'TensorFlow', tag: 'Deep Learning Model Dev', level: 'Intermediate' },
      { name: 'PyTorch', tag: 'Neural Nets & Tensors', level: 'Intermediate' },
      { name: 'Scikit-learn', tag: 'ML Algorithms & Pipelines', level: 'Advanced' },
      { name: 'Pandas', tag: 'Data Manipulation', level: 'Advanced' },
      { name: 'NumPy', tag: 'Numerical Computing', level: 'Advanced' },
      { name: 'OpenCV', tag: 'Image Processing', level: 'Intermediate' },
      { name: 'LangChain', tag: 'LLM Orchestration', level: 'Intermediate' },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'Git', tag: 'Version Control', level: 'Advanced' },
      { name: 'GitHub', tag: 'Collaboration', level: 'Advanced' },
      { name: 'React', tag: 'Modern Frontend UI', level: 'Intermediate' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ktu-pyq-analyzer',
    title: 'KTU Previous Year Question Priority Analyzer',
    category: 'AI / NLP',
    shortDescription: 'A Python-based NLP application that extracts questions from KTU question paper PDFs, performs semantic topic clustering, and generates module-wise priority reports.',
    fullDescription: 'Built an end-to-end intelligent NLP pipeline designed for university paper analysis. The application extracts text from uploaded PDF question papers using PyMuPDF and fallback OCR via Gemini Vision API. It clusters semantically identical questions using Sentence Transformers, calculates topic repetition frequencies, maps them to KTU syllabus modules, and outputs actionable PDF reports.',
    technologies: ['Python', 'NLP', 'Sentence Transformers', 'Gemini Vision API', 'PyMuPDF', 'Scikit-learn'],
    features: [
      'PDF text & layout question extraction',
      'OCR / Vision-based fallback extraction for scanned papers',
      'Semantic topic clustering using Sentence Transformers',
      'Repeated-question frequency analysis & probability scoring',
      'Automated KTU syllabus module mapping',
      'Priority classification (High / Medium / Low weightage)',
      'Instant downloadable PDF report generation with visual metrics'
    ],
    image: '/project1.jpg',
    githubUrl: 'https://github.com/abhirammsvyt-ux',
    featured: true,
    metrics: 'Automated 100% of paper trend analysis',
  },
  {
    id: 'ktu-activity-points',
    title: 'KTU Activity Points Calculator & Tracker',
    category: 'AI / NLP',
    shortDescription: 'An automated application that calculates, tracks, and manages KTU student activity points required for B.Tech degree completion.',
    fullDescription: 'Designed and built a dedicated tracking system for KTU university students. Automates the calculation of activity points earned across technical workshops, IEEE events, sports, and community initiatives according to official KTU regulation point structures.',
    technologies: ['Python', 'Web Architecture', 'JavaScript', 'HTML5/CSS3', 'Data Verification'],
    features: [
      'KTU official activity points category rule engine',
      'Student activity certificate logging & point allocation',
      'Automated degree completion eligibility progress tracking',
      'Structured report generation for institutional audits'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/abhirammsvyt-ux/ktu-activity-points',
    featured: true,
    metrics: 'Automated Point Auditing Engine',
  },
  {
    id: 'smart-farming',
    title: 'Smart Farming & Crop Optimization System',
    category: 'Machine Learning',
    shortDescription: 'AI-driven agricultural system predicting optimal crop selection and soil health management using environmental and soil parameters.',
    fullDescription: 'An intelligent agricultural machine learning system built to empower precision farming. Analyzes soil composition metrics (NPK ratios, pH, rainfall, temperature) to recommend suitable crops and optimize agricultural yields.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analytics'],
    features: [
      'Soil NPK and climate parameter predictive modeling',
      'Optimal crop recommendation classification engine',
      'Resource & irrigation optimization insights',
      'Agricultural yield evaluation dashboard'
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/abhirammsvyt-ux/Smart-Farming',
    featured: true,
    metrics: 'Precision Agricultural Model',
  },
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Risk Prediction Model',
    category: 'Machine Learning',
    shortDescription: 'Clinical machine learning model predicting cardiovascular disease risk based on patient physiological parameters.',
    fullDescription: 'Healthcare data science project applying classification algorithms to clinical heart disease datasets. Evaluates patient risk markers such as cholesterol, resting blood pressure, and ST depression to assist in early medical risk detection.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'Random Forest', 'Matplotlib'],
    features: [
      'Cardiovascular diagnostic classification modeling',
      'ROC-AUC curve optimization for diagnostic recall',
      'Physiological risk factor correlation analysis',
      'Patient risk prediction workflow'
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/abhirammsvyt-ux/Heart_Disease-prediction',
    featured: false,
    metrics: 'Clinical ML Classifier',
  },
  {
    id: 'ieee-ml-projects',
    title: 'IEEE Machine Learning Projects Suite',
    category: 'Machine Learning',
    shortDescription: 'A comprehensive collection of machine learning algorithms, preprocessing pipelines, and benchmark models developed during IEEE technical sessions.',
    fullDescription: 'An extensive repository of ML codebases created as part of IEEE Computer Society technical workshops. Demonstrates practical implementations of supervised learning, feature engineering, classification, and neural network models.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Jupyter'],
    features: [
      'Supervised & unsupervised ML algorithm implementations',
      'End-to-end data preprocessing & feature scaling pipelines',
      'Computer vision & neural network experiment benchmarks',
      'Interactive laboratory notebooks for technical sessions'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/abhirammsvyt-ux/IEEE-ML-PROJECTS',
    featured: false,
    metrics: 'IEEE Technical Benchmark Suite',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'neovent-internship',
    role: 'Machine Learning Intern',
    company: 'Neovent Innovations Pvt. Ltd.',
    location: 'Kerala, India',
    period: 'Internship',
    type: 'Industry Internship',
    description: [
      'Developed machine learning and computer vision models for automated data preprocessing, image classification, and regression analysis.',
      'Engineered structured data pipelines for cleaning noise, normalizing numerical features, and handling missing data across production datasets.',
      'Trained, evaluated, and fine-tuned predictive models, achieving improved accuracy and lower inference latencies.',
      'Collaborated closely with senior software engineers to integrate trained models into production backend endpoints.'
    ],
    skills: ['Machine Learning', 'Image Classification', 'Regression', 'Data Preprocessing', 'Model Development', 'Python', 'Scikit-learn'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Vimal Jyothi Engineering College',
    location: 'Kannur, Kerala',
    period: 'Undergraduate Program',
    focusAreas: [
      'Machine Learning & Pattern Recognition',
      'Deep Learning & Neural Architectures',
      'Natural Language Processing',
      'Data Science & Analytics',
      'Database Systems & Data Warehousing',
      'Python Software Development'
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Secretary',
    organization: 'IEEE Computer Society Student Chapter',
    role: 'Leadership & Management',
    period: 'Executive Tenure',
    description: 'Spearheaded technical events, coding workshops, and computer society chapter activities. Led team initiatives, managed communications, and promoted AI/ML learning culture among students.',
    tag: '[LEADERSHIP]',
  },
  {
    title: 'Joint Technical Coordinator',
    organization: 'IEEE Student Branch',
    role: 'Technical Operations',
    period: 'Executive Tenure',
    description: 'Coordinated campus-wide technical events, hackathons, and skill-building bootcamps. Directed event execution, speaker management, and hands-on session arrangements.',
    tag: '[TECHNICAL COORDINATOR]',
  },
  {
    title: 'Speaker – AI / ML / Data Science Sessions',
    organization: 'Technical Bootcamps & Workshops',
    role: 'Technical Educator',
    period: 'Multiple Sessions',
    description: 'Delivered technical sessions and hands-on guidance on machine learning, Python data pipelines, and AI career pathways for student groups and internship cohorts.',
    tag: '[SPEAKER]',
  },
  {
    title: 'Technical Event Coordination',
    organization: 'Vimal Jyothi Engineering College',
    role: 'Organizing Committee',
    period: 'Ongoing',
    description: 'Successfully coordinated academic symposiums, coding competitions, and guest webinars involving external industry experts and tech leaders.',
    tag: '[COMMUNITY]',
  },
];

export const GITHUB_STATS = {
  username: 'abhirammsvyt-ux',
  profileUrl: 'https://github.com/abhirammsvyt-ux',
  tagline: 'Building, experimenting, and learning through code.',
  totalRepos: 18,
  contributionsThisYear: 340,
  favoriteStack: ['Python', 'PyTorch', 'Scikit-Learn', 'TensorFlow', 'TypeScript'],
};
