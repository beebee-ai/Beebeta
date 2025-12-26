import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { SectionDivider } from './SectionDivider';

// 学员作品图片 - 使用网络链接
const pdSelectionImages = ['https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/pdselection.png'];
const rowingProImages = ['https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/ops/rowingProImage.jpg'];
const climateHubImages = ['https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/ops/climateHubImage.jpg'];
const hobbiImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_1.PNG',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_2.PNG',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_3.PNG'
];
const yummyYummyImages = [
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_1.jpg',
  'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_2.jpg'
];
const relabSEOImages = ['https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Relab_SEO_1.png'];

export function WorksSection() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const works = [
    {
      id: 1,
      title: 'Hobbi',
      student: t.works.projects.hobbi.student,
      camp: t.works.projects.hobbi.camp,
      background: t.works.projects.hobbi.background,
      description: t.works.projects.hobbi.description,
      image: hobbiImages,
      link: 'https://www.voiceto.me/'
    },
    {
      id: 2,
      title: 'Yummy Yummy',
      student: t.works.projects.yummyyummy.student,
      camp: t.works.projects.yummyyummy.camp,
      background: t.works.projects.yummyyummy.background,
      description: t.works.projects.yummyyummy.description,
      image: yummyYummyImages,
      link: 'https://yum.9top.org/'
    },
    {
      id: 3,
      title: 'Climate Intelligence Hub',
      student: t.works.projects.climatehub.student,
      camp: t.works.projects.climatehub.camp,
      background: t.works.projects.climatehub.background,
      description: t.works.projects.climatehub.description,
      image: climateHubImages,
      link: 'https://climate-intelligence-hub.org/'
    },
    {
      id: 4,
      title: 'Relab SEO',
      student: t.works.projects.relabseo.student,
      camp: t.works.projects.relabseo.camp,
      background: t.works.projects.relabseo.background,
      description: t.works.projects.relabseo.description,
      image: relabSEOImages,
      link: 'https://relabai.netlify.app'
    },
    {
      id: 5,
      title: language === 'zh' ? '纯素甄选' : 'PD Selection',
      student: t.works.projects.pdselection.student,
      camp: t.works.projects.pdselection.camp,
      background: t.works.projects.pdselection.background,
      description: t.works.projects.pdselection.description,
      image: pdSelectionImages,
      link: 'https://www.pdselection.com'
    },
    {
      id: 6,
      title: 'RowingPro',
      student: t.works.projects.rowingpro.student,
      camp: t.works.projects.rowingpro.camp,
      background: t.works.projects.rowingpro.background,
      description: t.works.projects.rowingpro.description,
      image: rowingProImages,
      link: 'https://crew-trainer.com'
    }
  ];

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 用于判断滑动方向
  const shouldUseCarousel = works.length > 6;
  
  // 计算总页数
  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);
  
  // 获取当前页的作品
  const getCurrentPageWorks = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
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

  // 渲染单个作品卡片
  const renderWorkCard = (work: typeof works[0]) => {
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            
            {/* Title Overlay on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-white drop-shadow-lg">{work.title}</h3>
              {hasMultipleImages && (
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                  <span className="text-white/90 text-xs">{images.length} {language === 'zh' ? '张图片' : 'images'}</span>
                </div>
              )}
            </div>
            
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
                  {images.map((_, index) => (
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
            {/* Student Info Section */}
            <div className="space-y-3 mb-4">
              {/* Student Name with Icon */}
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-[#FF6900] mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-xs text-[#FF6900]/70 mb-0.5">{language === 'zh' ? '作者' : 'Author'}</p>
                  <p className="text-[#101828] text-sm leading-relaxed">{work.student}</p>
                </div>
              </div>
              
              {/* Background/Occupation */}
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-[#FF6900] mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-xs text-[#FF6900]/70 mb-0.5">{language === 'zh' ? '背景' : 'Background'}</p>
                  <p className="text-[#4a5565] text-sm leading-relaxed">{work.background}</p>
                </div>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mt-auto pt-4 border-t border-gray-100">
              <p className="text-xs text-[#FF6900]/70 mb-2">{language === 'zh' ? '产品介绍' : 'About'}</p>
              <p className="text-[#4a5565] text-sm leading-relaxed">{work.description}</p>
            </div>
          </div>
        </a>
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
    <section id="works" className="py-16 lg:py-24 bg-[#fafafa]">
      {/* Section Title */}
      <SectionDivider 
        number="04" 
        title={t.works.title}
        titleHighlight={t.works.titleHighlight}
        subtitle={t.works.subtitle}
        highlightPosition="end"
      />
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        {/* Works Display */}
        {shouldUseCarousel ? (
          /* 轮播模式 - 当作品数量超过6个时 */
          <div className="relative">
            {/* 左箭头 */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] text-white hover:opacity-90 transition-all flex items-center justify-center shadow-lg"
              aria-label="上一页"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 作品网格 - 带动画 */}
            <div className="relative min-h-[600px]">
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 absolute w-full"
                >
                  {getCurrentPageWorks().map((work) => renderWorkCard(work))}
                </motion.div>
              </AnimatePresence>
              {/* 占位元素，保持容器高度 - 始终显示6个占位 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 opacity-0 pointer-events-none">
                {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <div className="h-64"></div>
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-[#101828] mb-1">占位标题</h3>
                        <p className="text-[#FF6900] text-sm">占位学生</p>
                      </div>
                      <p className="text-[#4a5565] text-sm mb-3">占位描述</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右箭头 */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] text-white hover:opacity-90 transition-all flex items-center justify-center shadow-lg"
              aria-label="下一页"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 页面指示器 */}
            <div className="flex items-center justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {works.map((work) => renderWorkCard(work))}
          </div>
        )}
      </div>
    </section>
  );
}