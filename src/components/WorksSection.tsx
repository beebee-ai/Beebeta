import React, { useState, useEffect, type MouseEvent } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { SectionDivider } from './SectionDivider';

// 学员产品图片 - 使用网络链接
const sleepSerenityImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/SleepSerenity1.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/SleepSerenity2.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/SleepSerenity3.png'
];
const morningEdgeImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/MorningEdge1.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/MorningEdge2.png'
];
const pdSelectionImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Climate_Intelligence_Hub_1.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Climate_Intelligence_Hub_2.png'
];
const rowingProImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_1.PNG',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_2.PNG',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_3.PNG'
];
const climateHubImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/vivian-andon-01.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/vivian-andon-02.jpg'
];
const hobbiImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/sixseven-jokes-01.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/sixseven-jokes-02.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/sixseven-jokes-03.jpg'
];
const yummyYummyImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/spark-up-01.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/spark-up-02.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/spark-up-03.jpg'
];
const relabSEOImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/supp-check-01.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/supp-check-02.jpg'
];
const yummymealImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_3.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_4.png'
];
const veganSelectionImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/pdselection.png'
];
const rowingProProjectImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/RowingPro_1.png',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/RowingPro_2.png'
];
const glidoImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Glido.png'
];

// 单个作品卡片组件
const WorkCard: React.FC<{ work: any; globalImageCounter: number; workImageOffset: number; onImageChange: (workId: number, direction: number, imageCount: number) => void; onImageIndicatorClick: (workId: number, targetIndex: number, imageCount: number) => void; onHoverChange: (workId: number | null) => void }> = ({ work, globalImageCounter, workImageOffset, onImageChange, onImageIndicatorClick, onHoverChange }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const images = work.image;
  const hasMultipleImages = images.length > 1;
  
  // 根据全局计数器、偏移量和图片数量计算当前显示的图片索引
  const currentImageIndex = hasMultipleImages ? ((globalImageCounter + workImageOffset) % images.length + images.length) % images.length : 0;
  
  // 处理悬停状态变化
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(work.id);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(null);
  };

  // 切换到上一张图片
  const handlePrevImage = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onImageChange(work.id, -1, images.length);
  };

  // 切换到下一张图片
  const handleNextImage = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onImageChange(work.id, 1, images.length);
  };

  // 解析背景信息，用竖线分隔
  const backgroundParts = work.background ? work.background.split(/[，,]/).map((s: string) => s.trim()) : [];
  const tags = work.tags || [];

  return (
    <motion.div
      key={work.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#FF6900]/50 transition-all hover:shadow-xl hover:shadow-[#FF6900]/10 cursor-pointer flex flex-col h-full relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Gallery */}
        <div className="relative h-56 overflow-hidden">
          {/* Current Image with fade transition */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${work.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          
          {/* Image Navigation - Only show if multiple images */}
          {hasMultipleImages && (
            <>
              {/* Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#FF6900] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                aria-label="上一张图片"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#FF6900] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                aria-label="下一张图片"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </>
          )}

          {/* Image Indicators - Always show, even for single image */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-[50] pointer-events-auto">
            {images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (hasMultipleImages) {
                    onImageIndicatorClick(work.id, index, images.length);
                  }
                }}
                className={`transition-all ${
                  index === currentImageIndex
                    ? 'bg-[#FF6900] w-6 h-1.5 rounded-full shadow-md'
                    : 'bg-white/90 hover:bg-white w-1.5 h-1.5 rounded-full shadow-sm border border-white/50'
                }`}
                aria-label={`图片 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title with Share Button */}
          <div className="flex items-center justify-between mb-4">
            <h3 
              className="text-[#FF6900] font-bold"
              style={{ fontSize: 'clamp(12px, 2vw, 18px)' }}
            >
              {work.title}
            </h3>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-6 h-6 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#FF6900]" />
            </a>
          </div>

          {/* Student Info */}
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-3.5 h-3.5 text-[#101828] flex-shrink-0" />
            <p 
              className="text-[#101828]"
              style={{ fontSize: 'clamp(12px, 1.8vw, 13px)' }}
            >
              {work.student}
            </p>
          </div>
          
          {/* Background with separator */}
          {backgroundParts.length > 0 && (
            <p 
              className="text-[#4a5565] mb-3 pl-6"
              style={{ fontSize: 'clamp(12px, 1.8vw, 13px)' }}
            >
              {backgroundParts.join(' | ')}
            </p>
          )}

          {/* Tags / Keywords */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-0.5 rounded-full bg-[#FF6900]/10 text-[#FF6900]"
                  style={{ fontSize: 'clamp(11px, 1.4vw, 12px)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Product Description */}
          <div className="mt-auto pt-2">
            <p 
              className="text-[#4a5565] leading-relaxed"
              style={{ fontSize: 'clamp(12px, 1.6vw, 16px)' }}
            >
              {work.description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export function WorksSection() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const works = [
    {
      id: 11,
      title: 'Morning Edge',
      student: t.works.projects.morningedge.student,
      camp: t.works.projects.morningedge.camp,
      background: t.works.projects.morningedge.background,
      description: t.works.projects.morningedge.description,
      image: morningEdgeImages,
      link: 'https://morning-edge.vercel.app/',
      tags: t.works.projects.morningedge.tags
    },
    {
      id: 0,
      title: 'Sleep Serenity',
      student: t.works.projects.sleepserenity.student,
      camp: t.works.projects.sleepserenity.camp,
      background: t.works.projects.sleepserenity.background,
      description: t.works.projects.sleepserenity.description,
      image: sleepSerenityImages,
      link: 'https://calm-tonight-plan.lovable.app/',
      tags: t.works.projects.sleepserenity.tags
    },
    {
      id: 1,
      title: 'SixSeven Jokes',
      student: t.works.projects.hobbi.student,
      camp: t.works.projects.hobbi.camp,
      background: t.works.projects.hobbi.background,
      description: t.works.projects.hobbi.description,
      image: hobbiImages,
      link: 'https://sixsevenfirebase-663636424984.us-west1.run.app/',
      tags: t.works.projects.hobbi.tags
    },
    {
      id: 2,
      title: 'SparkUp',
      student: t.works.projects.yummyyummy.student,
      camp: t.works.projects.yummyyummy.camp,
      background: t.works.projects.yummyyummy.background,
      description: t.works.projects.yummyyummy.description,
      image: yummyYummyImages,
      link: 'https://sparkup.deepelevate.com/?ref=producthunt',
      tags: t.works.projects.yummyyummy.tags
    },
    {
      id: 3,
      title: 'Andon — Trust Gate for AI Agents',
      student: t.works.projects.climatehub.student,
      camp: t.works.projects.climatehub.camp,
      background: t.works.projects.climatehub.background,
      description: t.works.projects.climatehub.description,
      image: climateHubImages,
      link: 'https://andon-fullstack.vercel.app/',
      tags: t.works.projects.climatehub.tags
    },
    {
      id: 4,
      title: 'SuppCheck',
      student: t.works.projects.relabseo.student,
      camp: t.works.projects.relabseo.camp,
      background: t.works.projects.relabseo.background,
      description: t.works.projects.relabseo.description,
      image: relabSEOImages,
      link: 'https://supplements-advisor.martianspace.uk/',
      tags: t.works.projects.relabseo.tags
    },
    {
      id: 5,
      title: 'Hobbi',
      student: t.works.projects.rowingpro.student,
      camp: t.works.projects.rowingpro.camp,
      background: t.works.projects.rowingpro.background,
      description: t.works.projects.rowingpro.description,
      image: rowingProImages,
      link: 'https://www.voiceto.me/',
      tags: t.works.projects.rowingpro.tags
    },
    {
      id: 6,
      title: 'Yummy Yummy',
      student: t.works.projects.yummymeal.student,
      camp: t.works.projects.yummymeal.camp,
      background: t.works.projects.yummymeal.background,
      description: t.works.projects.yummymeal.description,
      image: yummymealImages,
      link: 'https://yum.9top.org/',
      tags: t.works.projects.yummymeal.tags
    },
    {
      id: 12,
      title: 'Glido',
      student: t.works.projects.glido.student,
      camp: t.works.projects.glido.camp,
      background: t.works.projects.glido.background,
      description: t.works.projects.glido.description,
      image: glidoImages,
      link: 'https://chromewebstore.google.com/detail/glido-ai-flow-starter/ohbnkeppibpgmjfhjhdpfdcmagjfmcgg',
      tags: t.works.projects.glido.tags
    },
    {
      id: 7,
      title: 'Climate Intelligence Hub',
      student: t.works.projects.pdselection.student,
      camp: t.works.projects.pdselection.camp,
      background: t.works.projects.pdselection.background,
      description: t.works.projects.pdselection.description,
      image: pdSelectionImages,
      link: 'https://climate-intelligence-hub.org/',
      tags: t.works.projects.pdselection.tags
    },
    {
      id: 8,
      title: 'Relab SEO',
      student: language === 'en' ? 'K (Student)' : 'K 同学',
      camp: t.works.projects.relabseo.camp,
      background: language === 'en'
        ? 'CEO of a real estate data company with sales and marketing background, zero engineering experience.'
        : '房地产大数据公司 CEO，销售市场背景，0 工程经验',
      description: language === 'en'
        ? 'A platform integrating content clustering, AI generation, and SEO scoring. Supports visual analysis and optimization suggestions to help marketers efficiently build content strategies.'
        : '集内容聚类、AI 生成与 SEO 评分于一体的平台，支持可视化分析与优化建议，帮助营销人员高效构建内容策略。',
      image: [
        'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Relab_SEO_1.png'
      ],
      link: 'https://relabai.netlify.app/',
      tags: t.works.projects.relabseo.tags
    },
    {
      id: 9,
      title: language === 'en' ? 'Vegan Curated Hub' : '纯素甄选',
      student: language === 'en' ? 'Z (Student)' : 'Z 同学',
      camp: t.works.projects.pdselection.camp,
      background: language === 'en'
        ? 'Investor background, zero engineering experience.'
        : '投资背景，零工程经验',
      description: language === 'en'
        ? 'Curated selection of high-quality vegan restaurants, recipes, and products. AI-powered recommendations help you find quality resources, making vegan living simpler, healthier, and more refined.'
        : '精选高质量素食餐厅、食谱与产品，通过 AI 精准推荐优质资源，让素食生活更简单、更健康、更有品质。',
      image: veganSelectionImages,
      link: 'https://pdselection.com/',
      tags: language === 'en'
        ? ['Vegan Lifestyle', 'Curated Selection', 'AI Recommendations']
        : ['纯素生活', '精选推荐', 'AI 推荐']
    },
    {
      id: 10,
      title: 'RowingPro',
      student: language === 'en' ? 'V (Student)' : 'V 同学',
      camp: language === 'en' ? 'BETA Galaxy Camp' : 'BETA 星空营（Galaxy）',
      background: language === 'en'
        ? '16 years old, based in the US, multiple gold medal winner in math and programming competitions.'
        : '16岁，美国，多项数学/编程金牌得主',
      description: language === 'en'
        ? 'Track training progress, analyze movement details, and connect with the community. AI provides clear improvement suggestions, combining plans and video analysis to help you steadily improve performance.'
        : '追踪训练进度，分析动作细节，并与社区交流。AI 提供清晰改进建议，结合计划与视频分析，帮助你稳步提升表现。',
      image: rowingProProjectImages,
      link: 'https://crew-trainer.com/',
      tags: language === 'en'
        ? ['Rowing Training', 'Motion Analysis', 'AI Coach']
        : ['划船训练', '动作分析', 'AI 教练']
    }
  ];

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

  const ITEMS_PER_PAGE = 6;
  // 移动端每页2个，桌面端每页6个
  const itemsPerPage = isMobile ? 2 : ITEMS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 用于判断滑动方向
  const shouldUseCarousel = works.length > itemsPerPage;
  
  // 全局图片切换计数器 - 所有作品同步切换
  const [globalImageCounter, setGlobalImageCounter] = useState(0);
  const [hoveredWorkId, setHoveredWorkId] = useState<number | null>(null);
  // 每个作品的图片偏移量（用于点击指示器时只影响该作品）
  const [workImageOffsets, setWorkImageOffsets] = useState<Record<number, number>>({});
  
  // 统一管理所有作品的图片自动切换
  useEffect(() => {
    // 如果有作品被悬停，暂停自动切换
    if (hoveredWorkId !== null) return;
    
    const interval = setInterval(() => {
      setGlobalImageCounter((prev) => prev + 1);
    }, 3000); // 每3秒切换一次
    
    return () => clearInterval(interval);
  }, [hoveredWorkId]);
  
  // 处理手动切换图片（只影响特定作品）
  const handleImageChange = (workId: number, direction: number, imageCount: number) => {
    // 只更新该作品的偏移量，不影响全局计数器
    setWorkImageOffsets((prev) => ({
      ...prev,
      [workId]: (prev[workId] || 0) + direction
    }));
  };
  
  // 处理点击图片指示器
  const handleImageIndicatorClick = (workId: number, targetIndex: number, imageCount: number) => {
    // 计算需要调整的偏移量，使该作品显示目标图片
    const currentIndex = (globalImageCounter + (workImageOffsets[workId] || 0)) % imageCount;
    const offset = (targetIndex - currentIndex + imageCount) % imageCount;
    setWorkImageOffsets((prev) => ({
      ...prev,
      [workId]: (prev[workId] || 0) + offset
    }));
  };
  
  // 处理悬停状态变化
  const handleHoverChange = (workId: number | null) => {
    setHoveredWorkId(workId);
  };
  
  // 计算总页数
  const totalPages = Math.ceil(works.length / itemsPerPage);
  
  // 获取当前页的作品
  const getCurrentPageWorks = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return works.slice(startIndex, endIndex);
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
    <section id="works" className="pt-16 pb-32 lg:pt-24 lg:pb-40 bg-[#fafafa] relative z-10">
      {/* Section Title */}
      <SectionDivider 
        number="04" 
        title={t.works.title}
        titleHighlight={t.works.titleHighlight}
        subtitle={t.works.subtitle}
        highlightPosition="end"
      />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        {/* Works Display */}
        {shouldUseCarousel ? (
          /* 轮播模式 - 当作品数量超过6个时 */
          <div className="relative">
            {/* 作品网格 - 带动画 */}
            <div className="relative max-w-[1300px] mx-auto pb-8">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-start"
                >
                  {getCurrentPageWorks().map((work) => (
                    <WorkCard 
                      key={work.id} 
                      work={work} 
                      globalImageCounter={globalImageCounter}
                      workImageOffset={workImageOffsets[work.id] || 0}
                      onImageChange={handleImageChange}
                      onImageIndicatorClick={handleImageIndicatorClick}
                      onHoverChange={handleHoverChange}
                    />
                  ))}
                  {/* 占位卡片：保证即使当前页作品不足 itemsPerPage，也占满高度 */}
                  {Array.from({ length: itemsPerPage - getCurrentPageWorks().length })
                    .filter((_, index) => itemsPerPage - getCurrentPageWorks().length > 0)
                    .map((_, index) => (
                      <div
                        key={`placeholder-${index}`}
                        className="h-0 md:h-[360px] lg:h-[380px] opacity-0 pointer-events-none"
                      >
                        <div className="h-full" />
                      </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 分页控件 - 参考专业导师团队分页按钮，增加与下方区块的间距 */}
            <div className="flex items-center justify-center gap-3 mt-6 mb-12 lg:mb-16">
              {/* 左箭头按钮 */}
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="上一页"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 页面指示器 */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentPage ? 1 : -1);
                      setCurrentPage(index);
                    }}
                    className={`transition-all cursor-pointer ${
                      index === currentPage
                        ? 'bg-[#FF6900] w-8 h-2 rounded-full'
                        : 'bg-gray-400 hover:bg-gray-500 w-2 h-2 rounded-full'
                    }`}
                    aria-label={`第 ${index + 1} 页`}
                  />
                ))}
              </div>

              {/* 右箭头按钮 */}
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="下一页"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* 网格模式 - 当作品数量不超过6个时 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {works.map((work) => (
              <WorkCard 
                key={work.id} 
                work={work} 
                globalImageCounter={globalImageCounter}
                workImageOffset={workImageOffsets[work.id] || 0}
                onImageChange={handleImageChange}
                onImageIndicatorClick={handleImageIndicatorClick}
                onHoverChange={handleHoverChange}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}