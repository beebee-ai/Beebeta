import { Linkedin, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { SectionDivider } from './SectionDivider';

export function TeamSection() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const isEn = language === 'en';

  // 项目导师
  const projectMentors = [
    // 前10位按指定顺序
    {
      id: 1,
      name: 'Pin Zhou',
      title: isEn ? 'Entrepreneur & AI Product Builder' : '创业导师 / AI 产品实战派',
      bio: isEn 
        ? 'Serial founder with 8 years of applied AI experience across product, operations, e-commerce and supply chain.'
        : '连续创业者，Beebee AI & 趣玩网创始人，8 年 AI 实战经验，跨产品、运营、电商与供应链。',
      expertise: isEn 
        ? ['Product', 'AI Applications', 'E-commerce', 'Operations', 'Supply Chain']
        : ['产品', 'AI 应用', '电商', '运营', '供应链'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_pin.png',
      category: 'project' as const
    },
    {
      id: 2,
      name: 'Iris Hu',
      title: isEn ? 'NLP Scientist & Associate Professor' : 'NLP 科学家 / 高校副教授',
      bio: isEn
        ? 'Associate Professor with 40+ top-tier NLP papers, 3× Best Paper Awards and major national research projects.'
        : '北师大副教授，国家级项目负责人，NLP 顶会论文 40+，三次中计算语言学最佳论文，GitHub 万星作者。',
      expertise: isEn
        ? ['NLP', 'Computational Linguistics', 'Research', 'Algorithms', 'Open Source']
        : ['NLP', '计算语言学', '学术', '算法', '开源'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_H.png',
      category: 'project' as const
    },
    {
      id: 4,
      name: 'Vito Liu',
      title: isEn ? 'RAG Engineer & AI Full-Stack Developer' : 'RAG 系统工程师 / AI 全栈开发',
      bio: isEn
        ? 'McGill CS + Math graduate, core engineer for enterprise-grade RAG and knowledge systems.'
        : '麦吉尔 CS+数学双学位，主导多套企业级 RAG 与知识管理系统开发。',
      expertise: isEn
        ? ['RAG', 'LLM Apps', 'Full-stack', 'Knowledge Systems', 'Python']
        : ['RAG', 'LLM 应用', '全栈', '知识管理', 'Python'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Vito.png',
      category: 'project' as const
    },
    {
      id: 6,
      name: 'Ashlynn Lu',
      title: isEn ? 'Data Scientist & AI Data Engineer' : '数据科学 / AI 数据工程师',
      bio: isEn
        ? 'ICL Distinction MSc and Edinburgh First Class; strong in statistical modeling, async crawlers and LLM data systems.'
        : '帝国理工硕士（卓越），爱丁堡一等荣誉；擅长统计建模、异步爬虫、LLM 数据处理与检索系统。',
      expertise: isEn
        ? ['Data Science', 'Statistical Modeling', 'Async Crawling', 'LLM Data', 'ElasticSearch']
        : ['数据科学', '统计建模', '异步爬虫', 'LLM 数据', 'ElasticSearch'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_ashlynn.png',
      category: 'project' as const
    },
    {
      id: 16,
      name: 'Jennifer Liu',
      title: isEn ? 'Senior AI Product GTM Expert / Serial Entrepreneur' : '资深 AI 产品 GTM 专家 / 连续创业者',
      bio: isEn
        ? 'NYU Economics & KCL International Management graduate, currently pursuing MBA at Cheung Kong. Former Lu Qi team member, co-founded AI company with Li Ziran, focusing on AI Growth Agent and product commercialization.'
        : 'NYU 经济学士、KCL 国际管理硕士，长江商学院 MBA 在读。曾在陆奇团队工作，与李自然共创 AI 公司，聚焦 AI Growth Agent 与产品商业化。',
      expertise: isEn
        ? ['AI Product GTM', 'Growth Strategy', 'Cold Start', '0-to-1 Product', 'Commercialization']
        : ['AI 产品 GTM', '增长策略', '冷启动', '0-1 产品', '商业化'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jennifer.png',
      category: 'project' as const
    },
    {
      id: 9,
      name: 'Fangzhong Liu',
      title: isEn ? 'Senior Data Scientist' : '资深数据科学家',
      bio: isEn
        ? 'UChicago Financial Math graduate specializing in XGBoost/uplift modeling, MMM, RAG analytics and growth systems.'
        : '芝加哥大学金融数学硕士，负责 XGBoost/uplift 建模、MMM、RAG Analytics Assistant 与增长决策系统。',
      expertise: isEn
        ? ['Data Science', 'Marketing Models', 'Risk', 'RAG', 'Experiments']
        : ['数据科学', '营销建模', '风险', 'RAG', 'A/B 测试'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_fangzhong.png',
      category: 'project' as const
    },
    {
      id: 10,
      name: 'Mingxi Chen',
      title: isEn ? 'Full-Stack Engineer & AI Application Developer' : '全栈工程师 / AI 应用开发者',
      bio: isEn
        ? 'Builds end-to-end AI systems including RAG, vLLM, OCR and automation workflows; strong full-stack delivery.'
        : '专长 RAG、vLLM、OCR、自动化流程、React/Node 全链路；多次完成"想法→上线产品"全流程交付。',
      expertise: isEn
        ? ['Full-stack', 'RAG', 'vLLM', 'OCR', 'Automation', 'React/Node']
        : ['全栈', 'RAG', 'vLLM', 'OCR', '自动化', 'React/Node'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Mingxi.png',
      category: 'project' as const
    },
    {
      id: 11,
      name: 'Shu Hong',
      title: isEn ? 'NYC Financial Systems Engineer' : '纽约金融系统工程师',
      bio: isEn
        ? 'Columbia OR alumnus with 9+ years building trading, settlement and risk systems in NYC finance.'
        : '哥大运筹学硕士，9+ 年纽约金融机构后端与资金结算/交易/风险系统经验。',
      expertise: isEn
        ? ['Backend', 'Trading', 'FinTech', 'Pipelines', 'Risk']
        : ['后端', '交易系统', '金融工程', '数据管线', '风险系统'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_shuhong.png',
      category: 'project' as const
    },
    {
      id: 12,
      name: 'Heyang Long',
      title: isEn ? 'Machine Learning Engineer, Google' : 'Google 机器学习工程师',
      bio: isEn
        ? 'OSU Physics PhD (Presidential Fellow), ML engineer at Google with experience across RAG, agents and full-stack pipelines.'
        : 'OSU 物理博士（总统奖学金），深度学习 + 工程并行经验，熟悉 RAG、Agent、全栈与 ML 系统。',
      expertise: isEn
        ? ['ML', 'DL', 'RAG', 'Agent', 'Engineering']
        : ['机器学习', '深度学习', 'RAG', 'Agent', '工程系统'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_heyang.png',
      category: 'project' as const
    },
    {
      id: 13,
      name: 'Jerry Yu',
      title: isEn ? 'AI Infrastructure & Cloud Architecture Expert' : 'AI 基础设施与云架构专家',
      bio: isEn
        ? '16-year veteran, early DevOps adopter; expert in Kubernetes, cloud-native engineering and vLLM deployments.'
        : '16 年大厂经验，国内最早 DevOps 实践者之一；精通 Kubernetes、MLOps、云原生、vLLM 推理部署。',
      expertise: isEn
        ? ['Cloud-native', 'DevOps', 'MLOps', 'Kubernetes', 'vLLM', 'Infra']
        : ['云原生', 'DevOps', 'MLOps', 'Kubernetes', 'vLLM', 'Infra'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jerry.png',
      category: 'project' as const
    },
    {
      id: 14,
      name: 'Claire Chen',
      title: isEn ? 'UX Designer & Program Lead' : '用户体验设计师 & 项目负责人',
      bio: isEn
        ? '8+ years in digital product design and educational program management, combining UX thinking with operations to deliver smooth, high-quality learning experiences.'
        : '8 年+ 数字产品设计与教育项目管理经验，将用户体验设计和项目运营打通，负责课程体验、流程优化和高质量交付。',
      expertise: isEn
        ? ['User Experience', 'Learning Experience Design', 'Project Management', 'Cross-team Coordination']
        : ['用户体验', '学习体验设计', '项目管理', '跨团队协作'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_jin.png',
      category: 'project' as const
    },
    // 其他导师保持原顺序
    {
      id: 3,
      name: 'Fred Chi',
      title: isEn ? 'System Architect & Private LLM Expert' : '底层架构大师 / 私有模型专家',
      bio: isEn
        ? '25-year C/C++ veteran specializing in private LLM deployment, distributed systems and high-performance pipelines.'
        : '25 年 C/C++ 开发经验，超级解霸核心程序员，专长私有模型部署、分布式系统与高性能数据处理。',
      expertise: isEn
        ? ['Architecture', 'C/C++', 'Private Models', 'Distributed Systems', 'HPC']
        : ['系统架构', 'C/C++', '私有模型', '分布式', '高性能'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Chi.png',
      category: 'project' as const
    },
    {
      id: 5,
      name: 'Miles Chen',
      title: isEn ? 'Crawler & Concurrency Engineer' : '爬虫与并发工程师',
      bio: isEn
        ? 'Expert in large-scale web scraping, BFS crawler frameworks and concurrent data pipelines.'
        : '专注大规模 Web 数据采集，擅长 BFS 爬虫架构与高并发抓取系统设计。',
      expertise: isEn
        ? ['Crawling', 'Concurrency', 'Data Acquisition', 'Python', 'Data Engineering']
        : ['爬虫', '并发', '数据采集', 'Python', '数据工程'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_Miles.png',
      category: 'project' as const
    },
    {
      id: 7,
      name: 'Charlie Chen',
      title: isEn ? 'NLP Algorithm Engineer' : 'NLP 算法工程师',
      bio: isEn
        ? 'Focused on Transformers, prompt engineering and multimodal RAG; contributed to major AI agent systems.'
        : '专注 Transformer、Prompt 工程、多模态 RAG，负责第二大脑智能体落地与跨平台集成。',
      expertise: isEn
        ? ['NLP', 'Transformer', 'Prompt Engineering', 'RAG', 'Full-stack']
        : ['NLP', 'Transformer', 'Prompt Engineering', 'RAG', '全栈'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_charlie.png',
      category: 'project' as const
    },
    {
      id: 8,
      name: 'Bobby Wang',
      title: isEn ? 'Senior Frontend Engineer' : '资深前端工程师',
      bio: isEn
        ? '8 years multi-platform experience across Uniapp, Vue, and enterprise-scale frontend architecture.'
        : '8 年多端实战，精通 Uniapp、Vue、前端架构与复杂商业项目交付。',
      expertise: isEn
        ? ['Frontend', 'Vue', 'Uniapp', 'Components', 'Engineering']
        : ['前端', 'Vue', 'Uniapp', '组件设计', '工程化'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_bobby.png',
      category: 'project' as const
    },
    {
      id: 15,
      name: 'Alan Peng',
      title: isEn ? 'Teaching Assistant & Test Engineer' : '助教 & 测试工程师',
      bio: isEn
        ? 'Math & Physics junior at Augustana University, serving as BEEBEE AI test engineer and TA, helping students grasp AI concepts and code with both strong theory and hands-on debugging skills.'
        : '美国在读数学 & 物理专业，担任 BEEBEE 测试工程师与助教，用扎实理工基础和实战调试能力，支持学员理解 AI 概念、工具与代码。',
      expertise: isEn
        ? ['Math & Physics', 'Testing & Debugging', 'TA Support', 'Bilingual (EN/ZH)']
        : ['数学物理基础', '测试与调试', '助教辅导', '中英双语'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_alan.png',
      category: 'project' as const
    },
    {
      id: 998,
      name: '',
      title: '',
      bio: '',
      expertise: [],
      image: 'https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'project' as const,
      isInviteCard: true
    }
  ];

  // 专业讲师
  const professionalLecturers = [
    // 前3位按指定顺序
    {
      id: 22,
      name: 'Yu Guo',
      title: isEn ? 'Chief-level UX & Product Design Expert' : '设计与体验总监级专家',
      bio: isEn
        ? 'Former Chief Designer at Baidu and UX designer at Netscape/eBay/PayPal; educated at SJTU, IIT Institute of Design and Columbia Business School; built one of China\'s earliest professional UX teams.'
        : '前百度首席设计师,曾任硅谷 Netscape / eBay / PayPal 设计师，就读上交大、IIT 设计学院、哥大商学院，中国最早一批专业 UX 团队创建者。',
      expertise: isEn
        ? ['UX Design', 'Interaction Design', 'Product Innovation']
        : ['交互设计', '用户体验', '产品创新'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_guoyu.png',
      category: 'lecturer' as const
    },
    {
      id: 24,
      name: 'Jieyu Yang',
      title: isEn ? 'Product Lead & UI/UX Designer (Silicon Valley & London)' : '硅谷/伦敦产品负责人 & UI/UX 设计师',
      bio: isEn
        ? 'US-educated (Bachelor & Master), worked as a UI/UX designer at major tech companies in Silicon Valley and London; now Product Lead at an AI startup, known for practical "interest → product → monetization" playbooks.'
        : '美国本硕背景，曾在硅谷与伦敦大厂做 UI/UX 设计，现任 AI 初创公司产品负责人，小红书上分享「从兴趣到产品变现」实战方法。',
      expertise: isEn
        ? ['Product Management', 'UI/UX', 'AI Products', 'Zero-to-One']
        : ['产品设计', 'UI/UX', 'AI 产品', '从 0 到 1'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_xiaoyu.png',
      category: 'lecturer' as const
    },
    {
      id: 23,
      name: 'Wu Xu',
      title: isEn ? 'Leading XR Industry Expert' : 'XR 行业资深观察者与实践者',
      bio: isEn
        ? 'Known as a top XR expert in China; former core member at Baidu and Maoyan, ex-investor at ZhenFund, with deep insight into Meta and Apple\'s XR strategies and ecosystems.'
        : '被称为"中国 XR 第一人"，历任百度、猫眼核心成员与真格基金投资人，深度研究 Meta 和 Apple 的 XR 战略与生态。',
      expertise: isEn
        ? ['XR', 'Spatial Computing', 'Product Strategy', 'VC Perspective']
        : ['XR', '空间计算', '行业战略', '产品与投融资'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_xuwu.png',
      category: 'lecturer' as const
    },
    // 其他专业讲师保持原顺序
    {
      id: 25,
      name: 'Hugo Yu',
      title: isEn ? 'Senior Speech AI & Voice Model Expert' : '语音大模型与语音合成专家',
      bio: isEn
        ? 'Senior voice algorithm expert at Zhipu AI; PhD trainee at CAS Institute of Acoustics; 20+ papers at ICASSP/INTERSPEECH/IJCAI; led multiple large-scale speech synthesis and voice interaction products.'
        : '智谱 AI 资深语音算法专家，中传与中科院声学所联合培养博士，在 ICASSP/INTERSPEECH/IJCAI 发表论文 20+，多套语音合成与语音交互系统成功落地。',
      expertise: isEn
        ? ['Speech Synthesis', 'Voice Interaction', 'Speech Enhancement', 'Speech LMs']
        : ['语音合成', '语音交互', '语音增强', '语音大模型'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_yuguo.png',
      category: 'lecturer' as const
    },
    {
      id: 26,
      name: 'William',
      title: isEn ? 'AI Evangelist & Minimalist Engineer' : 'AI 技术布道者 & 极简工程实践者',
      bio: isEn
        ? 'MSc in CS from UESTC, former Senior Software Engineer at Nokia; now Ireland-based AI creator simplifying LangChain, MCP and LLM tooling through videos, articles and open-source projects.'
        : '电子科大计算机硕士，前诺基亚高级软件工程师，现居爱尔兰，专注用视频与图文科普 LangChain、MCP 等前沿 AI 技术并打造开源 AI 应用。',
      expertise: isEn
        ? ['LLM Apps', 'LangChain', 'MCP', 'Developer Education']
        : ['大模型应用', 'LangChain', 'MCP', '技术内容创作'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_william.png',
      category: 'lecturer' as const
    },
    {
      id: 27,
      name: 'Henry Wang',
      title: isEn ? 'Multimodal & Video AI Algorithm Engineer (CVPR Champion)' : '多模态与视频 AI 算法工程师（CVPR 冠军）',
      bio: isEn
        ? 'Master in Software Engineering (BJUT), 6+ years in AI; CVPR 2020 facial expression challenge champion; specializes in multimodal models, video understanding, OCR, and edge AI optimization with models deployed in consumer devices.'
        : '北工大软件工程硕士，6 年算法经验，CVPR 2020 人脸表情识别冠军，专注多模态大模型、视频理解、OCR 与端侧 AI 优化，算法已落地多款硬件与学习产品。',
      expertise: isEn
        ? ['Multimodal LLMs', 'Video Understanding', 'OCR', 'Edge AI']
        : ['多模态模型', '视频理解', 'OCR', '端侧 AI 优化'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_henry.png',
      category: 'lecturer' as const
    },
    {
      id: 28,
      name: 'Alex Wu',
      title: isEn ? 'Distributed Systems & Cloud-Native Architect' : '分布式系统与云原生架构专家',
      bio: isEn
        ? 'MSc in Software Engineering (St Andrews), 13 years of engineering and tech leadership; designed billion-scale index search engines with high QPS and low latency, plus AI-integrated cloud-native platforms.'
        : '英国圣安德鲁斯大学软件工程硕士，13 年工程与技术管理经验，主导搭建十亿级索引、万级 QPS、毫秒级响应的分布式搜索与 AI 系统。',
      expertise: isEn
        ? ['Distributed Systems', 'Cloud-Native', 'Microservices', 'DevOps']
        : ['分布式架构', '云原生', '微服务', 'DevOps'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_alexwu.png',
      category: 'lecturer' as const
    },
    {
      id: 29,
      name: 'Roy Nee',
      title: isEn ? 'FinTech Core Systems Architect' : '金融科技核心系统架构师',
      bio: isEn
        ? 'Master in Computer Science (BUPT), 15 years in FinTech; former core architect at top Chinese banks designing credit card and payment systems handling 250M+ daily requests; now architect at a public FinTech company in Australia.'
        : '北邮计算机硕士，15 年金融科技经验，曾任中国顶级银行总行核心架构师，设计支撑 2.5 亿日请求、上亿账户的信用卡与支付分布式系统，现任澳洲上市 FinTech 架构师。',
      expertise: isEn
        ? ['Core Banking', 'Payments', 'Distributed Architecture', 'Cloud-Native']
        : ['金融核心系统', '支付与清算', '分布式架构', '云原生'],
      image: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/cartoon_roynee.png',
      category: 'lecturer' as const
    },
    {
      id: 999,
      name: '',
      title: '',
      bio: '',
      expertise: [],
      image: 'https://images.unsplash.com/photo-1732532399621-afd080eb0b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: 'lecturer' as const,
      isInviteCard: true
    }
  ];

  const ITEMS_PER_PAGE = 6;
  const [activeCategory, setActiveCategory] = useState<'project' | 'lecturer'>('project');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [showApplyForm, setShowApplyForm] = useState(false);
  
  // 邀请码列表
  const VALID_INVITE_CODES = ['BEEVIP', 'BEE2A3W'];
  
  // 缓存键名
  const INVITE_VERIFIED_KEY = 'bee_invite_verified';
  
  // 检查是否已验证
  const isAlreadyVerified = () => {
    return sessionStorage.getItem(INVITE_VERIFIED_KEY) === 'true';
  };
  
  // 验证邀请码
  const handleVerifyCode = () => {
    if (VALID_INVITE_CODES.includes(inviteCode.toUpperCase().trim())) {
      // 保存验证状态到sessionStorage
      sessionStorage.setItem(INVITE_VERIFIED_KEY, 'true');
      
      toast.success(t.team.verifySuccess, {
        duration: 2000,
      });
      setTimeout(() => {
        navigate('/pacer');
      }, 500);
    } else {
      toast.error(t.team.verifyFailed, {
        duration: 3000,
      });
    }
  };

  // 获取当前分类的导师列表
  const currentTeam = activeCategory === 'project' ? projectMentors : professionalLecturers;
  
  // 响应式每页显示数量
  const [isMobile, setIsMobile] = useState(false);
  
  // 检测屏幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg断点
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // 移动端每页2个，桌面端每页6个
  const itemsPerPage = isMobile ? 2 : ITEMS_PER_PAGE;
  const shouldUseCarousel = currentTeam.length > itemsPerPage;

  // 计算总页数
  const totalPages = Math.ceil(currentTeam.length / itemsPerPage);

  // 获取当前页的导师
  const getCurrentPageTeam = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return currentTeam.slice(startIndex, endIndex);
  };

  // 切换分类时重置页码
  const handleCategoryChange = (category: 'project' | 'lecturer') => {
    setActiveCategory(category);
    setCurrentPage(0);
    setDirection(0);
  };

  // 切换到上一页
  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // 切换到下一页
  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // 渲染单个导师卡片
  const renderTeamCard = (member: typeof projectMentors[0]) => {
    // 如果是邀请卡片，渲染特殊样式
    if ((member as any).isInviteCard) {
      return (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            // 检查是否已验证
            if (isAlreadyVerified()) {
              // 已验证，直接跳转
              navigate('/pacer');
            } else {
              // 未验证,显示邀请码对话框
              setIsInviteDialogOpen(true);
            }
          }}
          className="group bg-white rounded-lg overflow-hidden border-2 border-[#FF6900]/30 hover:border-[#FF6900] transition-all cursor-pointer relative shadow-lg hover:shadow-xl mx-auto
                     flex flex-col sm:flex-row w-full sm:w-[400px] h-auto sm:h-[240px]"
        >
          {/* Image with overlay */}
          <div className="relative w-full h-[180px] sm:w-[160px] sm:h-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#FFF8F0] to-[#FFE8CC]">
            <img
              src={member.image}
              alt="邀请查看"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/80 to-white" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-10 h-10 text-[#FF6900] group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-4 flex flex-col flex-1 items-center justify-center text-center">
            <h3 className="text-[#101828] mb-2 text-base sm:text-lg">{t.team.viewAllInstructors}</h3>
            <p className="text-[#4a5565] text-sm mb-4 line-clamp-2">
              {t.team.moreInstructors}
            </p>
            <button className="px-4 py-2 bg-[#FF6900] text-white rounded-lg hover:bg-[#FF6900]/90 transition-colors font-medium text-sm cursor-pointer">
              {t.team.applyInviteCode}
            </button>
          </div>
        </motion.div>
      );
    }

    // 英文版按标签长度排序（短的在前），中文版保持原顺序
    const sortedExpertise = isEn 
      ? [...member.expertise].sort((a, b) => a.length - b.length)
      : member.expertise;
    
    // 限制标签数量，最多显示5个
    const maxTags = 5;
    const displayTags = sortedExpertise.slice(0, maxTags);

    // 普通导师卡片
    return (
      <motion.div
        key={member.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-lg overflow-hidden border border-[#FF6900]/10 hover:border-[#FF6900]/30 transition-all shadow-lg hover:shadow-xl mx-auto
                   flex flex-col sm:flex-row w-full sm:w-[400px] h-auto sm:h-[240px]"
      >
        {/* Image */}
        <div className="relative w-full h-[180px] sm:w-[160px] sm:h-full flex-shrink-0 bg-gradient-to-br from-[#FFF8F0] to-[#FFE8CC] overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            // 首字母占位符
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF6900]/20 to-[#FF6900]/5">
              <span className="text-[#FF6900] text-6xl font-bold group-hover:scale-105 transition-transform duration-500">
                {member.name.split(' ').pop()?.charAt(0) || 'G'}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-3 flex flex-col flex-1 min-w-0 overflow-hidden">
          <div className="flex items-start justify-between mb-1.5 flex-shrink-0">
            <div className="flex-1 min-w-0">
              <h3 
                className="text-[#101828] mb-1"
                style={{ fontSize: 'clamp(16px, 2.8vw, 18px)' }}
              >
                {member.name}
              </h3>
              <p 
                className="text-[#FF6900] line-clamp-1 sm:line-clamp-1"
                style={{ fontSize: 'clamp(12px, 2.2vw, 14px)' }}
              >
                {member.title}
              </p>
            </div>
            {/* <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-[#FF6900] transition-colors cursor-pointer" /> */}
          </div>

          <p 
            className="text-[#4a5565] mb-2 line-clamp-3 sm:line-clamp-4 flex-shrink-0"
            style={{ fontSize: 'clamp(11px, 2vw, 13px)' }}
          >
            {member.bio}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
            {displayTags.map((skill) => (
              <span
                key={skill}
                className="px-1.5 sm:px-2 py-0.5 bg-[#FF6900]/10 border border-[#FF6900]/20 rounded text-[#FF6900] whitespace-nowrap"
                style={{ fontSize: 'clamp(9px, 1.6vw, 11px)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // 定义滑动动画变体
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section id="team" className="pb-16 lg:pb-16 bg-[#fafafa]">
      {/* Section Title */}
      <SectionDivider 
        number="05" 
        title={t.team.title}
        titleHighlight={t.team.titleHighlight}
        subtitle={t.team.subtitle}
        highlightPosition="end"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => handleCategoryChange('project')}
              className={`px-8 py-3 rounded-md transition-all cursor-pointer ${
                activeCategory === 'project'
                  ? 'bg-gradient-to-r from-[#FF6900] to-[#FF8533] text-white'
                  : 'text-[#4a5565] hover:text-[#101828]'
              }`}
            >
              {t.team.projectMentors}
            </button>
            <button
              onClick={() => handleCategoryChange('lecturer')}
              className={`px-8 py-3 rounded-md transition-all cursor-pointer ${
                activeCategory === 'lecturer'
                  ? 'bg-gradient-to-r from-[#FF6900] to-[#FF8533] text-white'
                  : 'text-[#4a5565] hover:text-[#101828]'
              }`}
            >
              {t.team.professionalLecturers}
            </button>
          </div>
        </div>

        {/* Team Display */}
        {shouldUseCarousel ? (
          /* 轮播模式 - 移动端和桌面端 */
          <div className="relative">
            {/* 左箭头 - 仅桌面端显示 */}
            <button
              onClick={handlePrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 translate-x-[20px] xl:translate-x-[50px] z-10 w-[32px] h-[50px] rounded-l-full bg-white text-[#FF6900] hover:bg-gray-50 transition-all items-center justify-center shadow-md cursor-pointer"
              aria-label="上一页"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 导师网格 - 带动画 */}
            <div className={`relative ${isMobile ? 'min-h-[720px]' : 'min-h-[520px]'} max-w-[1300px] mx-auto`}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`${activeCategory}-${currentPage}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full top-0 place-items-center"
                >
                  {getCurrentPageTeam().map((member) => renderTeamCard(member))}
                </motion.div>
              </AnimatePresence>
              {/* 占位元素，保持容器高度 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 pointer-events-none place-items-center">
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div key={index} className="w-full sm:w-[400px] h-[330px] sm:h-[240px]">
                    <div className="h-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右箭头 - 仅桌面端显示 */}
            <button
              onClick={handleNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 -translate-x-[20px] xl:-translate-x-[50px] z-10 w-[32px] h-[50px] rounded-r-full bg-white text-[#FF6900] hover:bg-gray-50 transition-all items-center justify-center shadow-md cursor-pointer"
              aria-label="下一页"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 页面指示器 */}
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentPage
                      ? 'bg-[#FF6900] w-8'
                      : 'bg-gray-400 hover:bg-gray-500 w-2'
                  }`}
                  aria-label={`第 ${index + 1} 页`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* 网格模式 - 导师数量少时使用 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {getCurrentPageTeam().map((member) => renderTeamCard(member))}
          </div>
        )}

        {/* 邀码对话框 */}
        <Dialog open={isInviteDialogOpen} onOpenChange={(open) => {
          setIsInviteDialogOpen(open);
          if (!open) {
            setShowApplyForm(false);
            setInviteCode('');
          }
        }}>
          <DialogContent className={`${showApplyForm ? 'w-[85vw] !max-w-[85vw] h-[90vh] max-h-[90vh] overflow-y-auto' : 'w-[85vw] !max-w-[600px]'} bg-[#fafafa] border-2 border-[#FF6900]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
            <DialogHeader className="border-b border-[#FF6900]/20 pb-6 mb-8">
              <DialogTitle className="text-2xl lg:text-3xl text-[#101828]">
                {showApplyForm ? t.team.applyInviteCode : t.team.enterInviteCode}
              </DialogTitle>
              <DialogDescription className="text-[#4a5565] mt-3 text-base">
                {showApplyForm ? t.team.inviteDialogDescription : t.team.enterInviteCodeDescription}
              </DialogDescription>
            </DialogHeader>
            
            {!showApplyForm ? (
              /* 邀请码输入表单 */
              <div className="space-y-6">
                <div>
                  <label htmlFor="inviteCode" className="block text-[#4a5565] mb-2">
                    {t.team.inviteCodeLabel}
                  </label>
                  <input
                    type="text"
                    id="inviteCode"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleVerifyCode();
                      }
                    }}
                    className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors uppercase"
                    placeholder={t.team.inviteCodePlaceholder}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowApplyForm(true)}
                    variant="outline"
                    className="flex-1 border-[#FF6900]/30 text-[#FF6900] hover:text-[#FF6900]/80 hover:bg-[#FF6900]/10 hover:border-[#FF6900]/50 cursor-pointer"
                  >
                    {t.team.applyForCodeButton}
                  </Button>
                  <Button
                    onClick={handleVerifyCode}
                    className="flex-1 bg-[#FF6900] hover:bg-[#FF6900]/90 text-white cursor-pointer"
                    disabled={!inviteCode.trim()}
                  >
                    {t.team.verifyButton}
                  </Button>
                </div>
                
                <p className="text-center text-[#6b7280] text-sm">
                  {t.team.noCodeHint}
                </p>
              </div>
            ) : (
              /* 申请表单 */
              <div>
                <ContactSection 
                  isDialog={true}
                  source={t.team.title + t.team.titleHighlight + ' - ' + t.team.applyInviteCode}
                />
                <button
                  onClick={() => setShowApplyForm(false)}
                  className="mt-6 w-full text-[#4a5565] cursor-pointer hover:text-[#101828] transition-colors py-2"
                >
                  {t.team.backToEnterCode}
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}