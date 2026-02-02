import { ExternalLink, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { SectionDivider } from './SectionDivider';

// 学员作品图片 - 使用网络链接
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

// 单个作品卡片组件
function WorkCard({ work }: { work: any }) {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = work.image;
  const hasMultipleImages = images.length > 1;

  // 自动轮播效果
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, images.length]);

  // 切换到上一张图片
  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 切换到下一张图片
  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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

              {/* Image Indicators */}
              <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                {images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/70 w-1.5'
                    }`}
                    aria-label={`图片 ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Hover Overlay with Link Icon */}
          <div className="absolute inset-0 bg-[#FF6900]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Link Icon in Corner */}
          <div className="absolute top-3 left-3 z-10">
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#FF6900]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 
            className="text-[#FF6900] font-bold mb-4"
            style={{ fontSize: 'clamp(12px, 2vw, 18px)' }}
          >
            {work.title}
          </h3>

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
              className="text-[#4a5565] leading-relaxed text-sm md:text-base"
              style={{ fontSize: 'clamp(12px, 1.5vw, 15px)' }}
            >
              {work.description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function WorksSection() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const works = [
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
      title: 'Climate Intelligence Hub',
      student: t.works.projects.pdselection.student,
      camp: t.works.projects.pdselection.camp,
      background: t.works.projects.pdselection.background,
      description: t.works.projects.pdselection.description,
      image: pdSelectionImages,
      link: 'https://climate-intelligence-hub.org/',
      tags: t.works.projects.pdselection.tags
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
    <section id="works" className="py-16 lg:py-24 bg-[#fafafa]">
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
            {/* 左箭头 - 仅桌面端显示 */}
            <button
              onClick={handlePrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 translate-x-[20px] xl:translate-x-[50px] z-10 w-[32px] h-[50px] rounded-l-full bg-white text-[#FF6900] hover:bg-gray-50 transition-all items-center justify-center shadow-md cursor-pointer"
              aria-label="上一页"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 作品网格 - 带动画 */}
            <div className={`relative ${isMobile ? 'min-h-[1000px]' : 'min-h-[600px]'} max-w-[1300px] mx-auto`}>
              <AnimatePresence initial={false} custom={direction}>
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full top-0 place-items-center"
                >
                  {getCurrentPageWorks().map((work) => <WorkCard key={work.id} work={work} />)}
                </motion.div>
              </AnimatePresence>
              {/* 占位元素，保持容器高度 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 pointer-events-none place-items-center">
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div key={index} className="w-full sm:w-[400px] h-[480px]">
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
          /* 网格模式 - 当作品数量不超过6个时 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {works.map((work) => <WorkCard key={work.id} work={work} />)}
          </div>
        )}
      </div>
    </section>
  );
}