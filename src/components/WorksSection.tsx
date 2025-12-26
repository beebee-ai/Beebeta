import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

// 学员作品图片 - 使用网络链接
const propertyAIImage = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/ops/propertyAIImage.jpg';
const rowingProImage = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/ops/rowingProImage.jpg';
const climateHubImage = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/ops/climateHubImage.jpg';

export function WorksSection() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const works = [
    {
      id: 1,
      title: 'PropertyAI NZ',
      student: t.works.projects.propertyai.student,
      camp: t.works.projects.propertyai.camp,
      background: t.works.projects.propertyai.background,
      description: t.works.projects.propertyai.description,
      image: propertyAIImage,
      link: 'https://aipropertyagent.netlify.app/'
    },
    {
      id: 2,
      title: 'RowingPro',
      student: t.works.projects.rowingpro.student,
      camp: t.works.projects.rowingpro.camp,
      background: t.works.projects.rowingpro.background,
      description: t.works.projects.rowingpro.description,
      image: rowingProImage,
      link: 'https://crew-trainer.com'
    },
    {
      id: 3,
      title: 'Climate Intelligence Hub',
      student: t.works.projects.climatehub.student,
      camp: t.works.projects.climatehub.camp,
      background: t.works.projects.climatehub.background,
      description: t.works.projects.climatehub.description,
      image: climateHubImage,
      link: 'https://climate-intelligence-hub.org/'
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
  const renderWorkCard = (work: typeof works[0]) => (
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
        className="block group bg-zinc-900 rounded-lg overflow-hidden border border-[#ffc75a]/10 hover:border-[#ffc75a]/30 transition-all hover:shadow-xl hover:shadow-[#ffc75a]/10 cursor-pointer flex flex-col h-full relative"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
          
          {/* Hover Overlay with Link Icon */}
          <div className="absolute inset-0 bg-[#ffc75a]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#ffc75a] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
              <ExternalLink className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Camp Tag - Larger Font */}
          <div className="inline-flex items-center gap-2 mb-4 self-start">
            <div className="w-2 h-2 rounded-full bg-[#ffc75a] animate-pulse"></div>
            <span className="text-[#ffc75a] text-base tracking-wide">{work.camp}</span>
          </div>
          
          {/* Title and Student Info */}
          <div className="mb-4">
            <h3 className="text-white mb-3 group-hover:text-[#ffc75a] transition-colors">{work.title}</h3>
            <div className="space-y-2">
              {/* Student Name */}
              <p className="text-gray-200 text-sm">
                <span className="text-[#ffc75a]/80">{language === 'zh' ? '作者:' : 'Author:'}</span> {work.student}
              </p>
              {/* Background/Occupation */}
              <p className="text-gray-400 text-sm">
                <span className="text-[#ffc75a]/80">{language === 'zh' ? '背景:' : 'Background:'}</span> {work.background}
              </p>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="mt-auto pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm leading-relaxed">{work.description}</p>
          </div>
          
          {/* Link Icon in Corner */}
          <div className="absolute top-4 right-4">
            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#ffc75a] transition-colors" />
          </div>
        </div>
      </a>
    </motion.div>
  );

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
    <section id="works" className="py-8 lg:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Works Display */}
        {shouldUseCarousel ? (
          /* 轮播模式 - 当作品数量超过6个时 */
          <div className="relative">
            {/* 左箭头 */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#ffc75a] text-black hover:bg-[#ffc75a]/90 transition-all flex items-center justify-center shadow-lg"
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute w-full"
                >
                  {getCurrentPageWorks().map((work) => renderWorkCard(work))}
                </motion.div>
              </AnimatePresence>
              {/* 占位元素，保持容器高度 - 始终显示6个占位 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 pointer-events-none">
                {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden border border-[#ffc75a]/10">
                    <div className="h-64"></div>
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-white mb-1">占位标题</h3>
                        <p className="text-[#ffc75a] text-sm">占位学生</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">占位描述</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右箭头 */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#ffc75a] text-black hover:bg-[#ffc75a]/90 transition-all flex items-center justify-center shadow-lg"
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
                      ? 'bg-[#ffc75a] w-8'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                  aria-label={`第 ${index + 1} 页`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* 网格模式 - 当作品数量不超过6个时 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => renderWorkCard(work))}
          </div>
        )}
      </div>
    </section>
  );
}