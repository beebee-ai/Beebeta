import { Button } from './ui/button';
import { BookOpen, Target, Sparkles, GraduationCap, ArrowRight, ArrowDown, Crown, Users, MessageCircle, TrendingUp, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { InfinityValues } from './InfinityValues';
import { LearningPath } from './LearningPath';

interface Course {
  title: string;
  subtitle: string;
  ageLimit: string;
  suitableFor: string;
  duration: string;
  requirements: string;
  content: string[];
  icon: typeof GraduationCap;
  color: string;
  scrollbarColor?: string;
  badge?: string;
}

export function CourseSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === 'en';

  // Pin 专业公开课 - 入门课程
  const foundationCourse: Course = {
    title: t.courses.stage1.title,
    subtitle: t.courses.stage1.subtitle,
    ageLimit: t.courses.stage1.ageLimit,
    suitableFor: t.courses.stage1.suitableFor,
    duration: t.courses.stage1.duration,
    requirements: t.courses.stage1.requirements,
    content: t.courses.stage1.content,
    icon: BookOpen,
    color: '#60B5FF',
    scrollbarColor: '#60B5FF'
  };

  // 三个并列的进阶课程
  const advancedCourses: Course[] = [
    {
      title: t.courses.stage2a.title,
      subtitle: t.courses.stage2a.subtitle,
      ageLimit: t.courses.stage2a.ageLimit,
      suitableFor: t.courses.stage2a.suitableFor,
      duration: t.courses.stage2a.duration,
      requirements: t.courses.stage2a.requirements,
      content: t.courses.stage2a.content,
      icon: Sparkles,
      color: '#10b981',
      scrollbarColor: '#6b8070'
    },
    {
      title: t.courses.stage2b.title,
      subtitle: t.courses.stage2b.subtitle,
      ageLimit: t.courses.stage2b.ageLimit,
      suitableFor: t.courses.stage2b.suitableFor,
      duration: t.courses.stage2b.duration,
      requirements: t.courses.stage2b.requirements,
      content: t.courses.stage2b.content,
      icon: Target,
      color: '#8b5cf6',
      scrollbarColor: '#6b5c8b'
    },
    {
      title: t.courses.stage3.title,
      subtitle: t.courses.stage3.subtitle,
      ageLimit: t.courses.stage3.ageLimit,
      suitableFor: t.courses.stage3.suitableFor,
      duration: t.courses.stage3.duration,
      requirements: t.courses.stage3.requirements,
      content: t.courses.stage3.content,
      icon: GraduationCap,
      color: '#ffc75a',
      scrollbarColor: '#8b7355'
    }
  ];

  const handleConsultClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  // Format title to make parentheses content smaller
  const formatTitle = (title: string) => {
    const parts = title.split(/(\([^)]+\))/);
    return (
      <>
        {parts.map((part, idx) => {
          if (part.match(/\([^)]+\)/)) {
            // Parentheses content - smaller
            return (
              <span key={idx} className="text-lg lg:text-xl text-[24px]">
                {part}
              </span>
            );
          }
          // Main text - also smaller
          return <span key={idx} className="text-2xl lg:text-3xl">{part}</span>;
        })}
      </>
    );
  };

  const renderCourseCard = (course: Course, index: number, isFoundation = false) => {
    const Icon = course.icon;
    // 判断是否为无界营（Infinity）卡片 - 在进阶课程中的第三个（advancedCourses[2]），传入时index+1=3
    const isInfinity = index === 3;
    
    return (
      <div
        key={index}
        className={`group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all border flex flex-col h-full ${isFoundation ? 'max-w-[650px] mx-auto' : 'max-w-[650px]'}`}
        style={{
          borderColor: index === 0 ? 'rgba(255, 105, 0, 0.5)' :
                       index === 1 ? 'rgba(59, 130, 246, 0.3)' :
                       index === 2 ? 'rgba(139, 92, 246, 0.3)' :
                       'rgba(245, 158, 11, 0.3)',
          boxShadow: index === 0 ? `0 2px 8px rgba(255, 105, 0, 0.18), 0 1px 3px rgba(255, 105, 0, 0.12)` :
                     index === 1 ? `0 2px 8px rgba(59, 130, 246, 0.12), 0 1px 3px rgba(59, 130, 246, 0.08)` :
                     index === 2 ? `0 2px 8px rgba(139, 92, 246, 0.12), 0 1px 3px rgba(139, 92, 246, 0.08)` :
                     `0 2px 8px rgba(245, 158, 11, 0.12), 0 1px 3px rgba(245, 158, 11, 0.08)`
        }}
      >
        {/* 顶部装饰条 - 每个营使用不同的几何图案 */}
        <div className="h-2 relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: index === 0
                ? 'linear-gradient(90deg, #FF6900 0%, #FF8533 50%, #FF6900 100%)'
                : index === 1 
                ? 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 25%, #3B82F6 50%, #60A5FA 75%, #3B82F6 100%)'
                : index === 2
                ? 'linear-gradient(90deg, #8B5CF6 0%, #A78BFA 50%, #8B5CF6 100%)'
                : 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)'
            }}
          />
          {/* 几何图案装饰 */}
          {index === 0 && (
            <div className="absolute inset-0 flex justify-around items-center">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-0.5 h-1 bg-white/40"
                  style={{ marginTop: i % 3 === 0 ? '2px' : i % 3 === 1 ? '0' : '1px' }}
                />
              ))}
            </div>
          )}
          {index === 1 && (
            <div className="absolute inset-0 flex justify-around items-center">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 bg-white/40 transform rotate-45"
                  style={{ marginTop: i % 2 === 0 ? '2px' : '0' }}
                />
              ))}
            </div>
          )}
          {index === 2 && (
            <div className="absolute inset-0 flex justify-around items-center">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 rounded-full bg-white/40"
                />
              ))}
            </div>
          )}
          {index === 3 && (
            <div className="absolute inset-0 flex justify-around items-center">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-0.5 bg-white/40"
                />
              ))}
            </div>
          )}
        </div>

        <div 
          className="p-6 lg:p-8 relative overflow-hidden"
          style={{
            background: index === 0
              ? 'linear-gradient(135deg, rgba(255, 105, 0, 0.15) 0%, rgba(255, 133, 51, 0.12) 100%)'
              : index === 1 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.12) 100%)'
              : index === 2
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(167, 139, 250, 0.12) 100%)'
              : 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(251, 191, 36, 0.15) 100%)'
          }}
        >
          
          {course.badge && (
            <div 
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm border z-10 text-[#FF6900]"
              style={{ 
                borderColor: 'rgba(255, 105, 0, 0.4)'
              }}
            >
              {course.badge}
            </div>
          )}
          
          <div 
            className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 relative z-10"
            style={{ 
              border: '1.5px solid',
              borderColor: index === 0 ? 'rgba(255, 105, 0, 0.6)' : index === 1 ? 'rgba(59, 130, 246, 0.6)' : index === 2 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(245, 158, 11, 0.6)'
            }}
          >
            <span 
              className="font-semibold"
              style={{ 
                color: index === 0 ? '#FF6900' : index === 1 ? '#3B82F6' : index === 2 ? '#8B5CF6' : '#F59E0B',
                fontSize: 'clamp(12px, 2vw, 14px)'
              }}
            >
              {course.ageLimit}
            </span>
          </div>
          
          {/* 标题区域 */}
          <div className="mb-3 relative z-10">
            <h3 
              className="text-[#101828] font-bold"
              style={{ fontSize: 'clamp(20px, 3.5vw, 28px)' }}
            >
              {formatTitle(course.title)}
            </h3>
          </div>
          
          <p 
            className="text-[#2d3748] relative z-10"
            style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
          >
            {t.courses.labels.suitableFor}: {course.suitableFor}
          </p>
        </div>

        <div 
          className="mx-4 lg:mx-6 -mt-4 mb-6 bg-white rounded-2xl p-4 lg:p-6 shadow-sm relative z-10 flex items-start"
          style={{ 
            border: `1px solid ${
              index === 0 ? 'rgba(255, 105, 0, 0.15)' :
              index === 1 ? 'rgba(59, 130, 246, 0.2)' :
              index === 2 ? 'rgba(139, 92, 246, 0.2)' :
              'rgba(245, 158, 11, 0.2)'
            }` 
          }}
        >
          <div className="space-y-3 lg:space-y-4">
            <div className="leading-relaxed">
              <span 
                className="text-[#101828] font-semibold"
                style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
              >
                {t.courses.labels.duration}: 
              </span>
              <span 
                className="text-[#2d3748]"
                style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
              >
                {course.duration}
              </span>
            </div>
            <div className="leading-relaxed">
              <span 
                className="text-[#101828] font-semibold"
                style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
              >
                {t.courses.labels.requirements}: 
              </span>
              <span 
                className="text-[#2d3748]"
                style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
              >
                {course.requirements}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-8 pb-6 lg:pb-8 flex-1 flex flex-col min-h-0">
          <div className="relative mb-6 flex-shrink-0">
            <div 
              className={`h-[200px] lg:h-[240px] overflow-y-auto pr-2 scrollbar-course-${index}`}
            >
              <style>{`
                .scrollbar-course-${index}::-webkit-scrollbar {
                  width: 6px;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-track {
                  background: ${
                    index === 0 ? 'rgba(255, 105, 0, 0.1)' :
                    index === 1 ? 'rgba(59, 130, 246, 0.1)' :
                    index === 2 ? 'rgba(139, 92, 246, 0.1)' :
                    'rgba(245, 158, 11, 0.1)'
                  };
                  border-radius: 3px;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-thumb {
                  background: ${
                    index === 0 ? 'rgba(255, 105, 0, 0.5)' :
                    index === 1 ? 'rgba(59, 130, 246, 0.5)' :
                    index === 2 ? 'rgba(139, 92, 246, 0.5)' :
                    'rgba(245, 158, 11, 0.5)'
                  };
                  border-radius: 3px;
                  transition: background 0.3s ease;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-thumb:hover {
                  background: ${
                    index === 0 ? 'rgba(255, 105, 0, 0.7)' :
                    index === 1 ? 'rgba(59, 130, 246, 0.7)' :
                    index === 2 ? 'rgba(139, 92, 246, 0.7)' :
                    'rgba(245, 158, 11, 0.7)'
                  };
                }
              `}</style>
              <ul className="space-y-2 lg:space-y-3">
                {course.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 lg:gap-3">
                    <svg 
                      className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ 
                        color: index === 0 ? '#FF6900' :
                               index === 1 ? '#3B82F6' :
                               index === 2 ? '#8B5CF6' :
                               '#F59E0B'
                      }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="text-[#101828]"
                      style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 移除底部渐变遮罩 */}
          </div>
          
          {course.content.length > 6 && (
            <div className="text-center mb-4 lg:mb-6 flex-shrink-0">
              <span 
                className="text-xs"
                style={{ 
                  color: index === 0 ? 'rgba(255, 105, 0, 0.6)' :
                         index === 1 ? 'rgba(59, 130, 246, 0.6)' :
                         index === 2 ? 'rgba(139, 92, 246, 0.6)' :
                         'rgba(245, 158, 11, 0.6)'
                }}
              >
                ↕ {t.courses.labels.viewMore}
              </span>
            </div>
          )}

          <div className="mt-auto flex-shrink-0 flex justify-center">
            <Button
              onClick={() => handleConsultClick(course)}
              className={`w-full transition-all group cursor-pointer font-bold relative overflow-hidden ${
                index === 1 
                  ? 'py-2.5 px-6 sm:py-4 sm:px-8 sm:px-10 lg:py-6 lg:px-12'
                  : 'py-3 px-8 sm:py-4 sm:px-10 lg:py-6 lg:px-12'
              }`}
              style={{ 
                background: index === 0 ? 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)' :
                           index === 1 ? 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)' :
                           index === 2 ? 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' :
                           index === 3 ? 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' :
                           'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                color: '#ffffff',
                border: 'none',
                fontSize: 'clamp(14px, 3vw, 18px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* 按钮装饰光晕 */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)`
                }}
              />
              <span className="relative z-10 flex items-center justify-center">
                {t.courses.labels.consult}
                <Sparkles className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="courses" className="py-8 lg:py-16 pb-8 lg:pb-12" style={{ background: '#fafafa' }}>
        {/* Chapter Header - Full Width Orange Background */}
        <div className="w-full max-w-[1300px] mx-auto relative overflow-hidden py-8 lg:py-12 mb-12 lg:mb-16"
             style={{
               background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 50%, #FF6900 100%)'
             }}>
          {/* 装饰层 - 蜂窝图案 */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
            <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 蜂窝六边形网格 - 标准正六边形 */}
              <pattern id="hexagons-courses" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                <path d="M20 8 L28.66 13 L28.66 23 L20 28 L11.34 23 L11.34 13 Z" stroke="white" strokeWidth="1.5" fill="none"/>
              </pattern>
              <rect width="200" height="200" fill="url(#hexagons-courses)"/>
            </svg>
          </div>
          
          {/* 装饰层 - 左侧波浪曲线 */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none">
            <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 50 Q 50 30, 100 50 T 200 50" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
              <path d="M 0 100 Q 60 80, 120 100 T 200 100" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5"/>
              <path d="M 0 150 Q 40 130, 80 150 T 200 150" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
            </svg>
          </div>
          
          {/* 装饰层 - 几何图形点缀 */}
          <div className="absolute inset-0 opacity-8 pointer-events-none">
            {/* 右上角圆形 */}
            <div className="absolute top-8 right-20 w-20 h-20 rounded-full border-2 border-white/30" />
            <div className="absolute top-12 right-24 w-12 h-12 rounded-full border-2 border-white/20" />
            
            {/* 左下角三角形装饰 */}
            <svg className="absolute bottom-8 left-16 w-16 h-16" viewBox="0 0 100 100">
              <polygon points="50,10 90,90 10,90" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>
            
            {/* 右下角方形 */}
            <div className="absolute bottom-10 right-32 w-14 h-14 border-2 border-white/25 rotate-12" />
            
            {/* 顶部小圆点 */}
            <div className="absolute top-6 left-1/4 w-3 h-3 rounded-full bg-white/30" />
            <div className="absolute top-10 left-1/3 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute top-14 right-1/3 w-2.5 h-2.5 rounded-full bg-white/25" />
          </div>
          
          {/* 顶部和底部装饰线 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center relative z-10">
              {/* Chapter Marker */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
                {/* Left Line */}
                <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)]" />
                
                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide whitespace-nowrap">
                  <span className="mr-1 sm:mr-2">{t.courses.titleHighlight}</span>
                  {t.courses.title}
                </h2>
                
                {/* Right Line */}
                <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-l from-transparent via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)]" />
              </div>

              {/* Subtitle */}
              <p 
                className="mt-6 text-white/90 max-w-3xl text-center leading-relaxed font-light"
                style={{ fontSize: 'clamp(16px, 2.8vw, 20px)' }}
              >
                {t.courses.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
            {/* Foundation Course - Pin 专业公开课 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-0 relative">
                  {/* 左侧垂直装饰条 */}
                  <div className="flex flex-col items-center gap-2 pr-4 lg:pr-5">
                    <div 
                      className="bg-gradient-to-b from-transparent to-[#FF6900]/60"
                      style={{ 
                        width: 'clamp(1.5px, 0.15vw, 2px)',
                        height: 'clamp(16px, 2vw, 18px)'
                      }}
                    />
                    <div 
                      className="rounded-lg flex items-center justify-center relative"
                      style={{
                        width: 'clamp(26px, 4vw, 32px)',
                        height: 'clamp(26px, 4vw, 32px)',
                        background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)',
                      }}
                    >
                      {/* 书本图标 */}
                      <BookOpen 
                        className="text-white relative z-10"
                        style={{
                          width: 'clamp(14px, 2.2vw, 18px)',
                          height: 'clamp(14px, 2.2vw, 18px)'
                        }}
                      />
                      {/* 图标外框装饰 */}
                      <div className="absolute -inset-1 border-2 border-[#FF6900]/20 rounded-lg" />
                    </div>
                    <div 
                      className="bg-gradient-to-t from-transparent to-[#FF6900]/60"
                      style={{ 
                        width: 'clamp(1.5px, 0.15vw, 2px)',
                        height: 'clamp(16px, 2vw, 18px)'
                      }}
                    />
                  </div>
                  
                  {/* 主内容区 */}
                  <div className="relative border-l-2 border-[#FF6900]/30 pl-4 lg:pl-5 pr-5 lg:pr-6 py-2 lg:py-3">
                    {/* 顶部装饰角 */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#FF6900]/40 -translate-x-px -translate-y-px" />
                    
                    {/* 底部装饰角 */}
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#FF6900]/40 -translate-x-px translate-y-px" />
                    
                    {/* 文字内容 */}
                    <div className="relative">
                      <span 
                        className="text-[#FF6900] font-semibold tracking-wide block"
                        style={{ fontSize: 'clamp(13px, 2.2vw, 15px)' }}
                      >
                        {isEn ? 'Foundation: Pin Professional Open Course' : '入门课程：Pin 专业公开课'}
                      </span>
                      
                      {/* 底部装饰线 */}
                      <div className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-[#FF6900]/40 via-[#FF6900]/20 to-transparent" />
                    </div>
                    
                    {/* 右侧小装饰点 */}
                    <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[#FF6900]/30 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              
              {renderCourseCard(foundationCourse, 0, true)}
              
              {/* Arrow Indicator */}
              <div className="flex justify-center mt-8 lg:mt-12">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#4a5565] text-sm lg:text-base text-center">
                    {isEn ? 'Choose Your Path' : '选择你的方向'}
                  </p>
                  <ArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-[#FF6900] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Advanced Courses - 三个并列选择 */}
            <div className="relative -mt-8 lg:-mt-12">
              <div className="flex items-center justify-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-0 relative">
                  {/* 左侧垂直装饰条 */}
                  <div className="flex flex-col items-center gap-2 pr-4 lg:pr-5">
                    <div 
                      className="bg-gradient-to-b from-transparent to-[#FF6900]/60"
                      style={{ 
                        width: 'clamp(1.5px, 0.15vw, 2px)',
                        height: 'clamp(16px, 2vw, 18px)'
                      }}
                    />
                    <div 
                      className="rounded-lg flex items-center justify-center relative"
                      style={{
                        width: 'clamp(26px, 4vw, 32px)',
                        height: 'clamp(26px, 4vw, 32px)',
                        background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)',
                      }}
                    >
                      {/* 学位帽图标 */}
                      <GraduationCap 
                        className="text-white relative z-10"
                        style={{
                          width: 'clamp(14px, 2.2vw, 18px)',
                          height: 'clamp(14px, 2.2vw, 18px)'
                        }}
                      />
                      {/* 图标外框装饰 */}
                      <div className="absolute -inset-1 border-2 border-[#FF6900]/20 rounded-lg" />
                    </div>
                    <div 
                      className="bg-gradient-to-t from-transparent to-[#FF6900]/60"
                      style={{ 
                        width: 'clamp(1.5px, 0.15vw, 2px)',
                        height: 'clamp(16px, 2vw, 18px)'
                      }}
                    />
                  </div>
                  
                  {/* 主内容区 */}
                  <div className="relative border-l-2 border-[#FF6900]/30 pl-4 lg:pl-5 pr-5 lg:pr-6 py-2 lg:py-3">
                    {/* 顶部装饰角 */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#FF6900]/40 -translate-x-px -translate-y-px" />
                    
                    {/* 底部装饰角 */}
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#FF6900]/40 -translate-x-px translate-y-px" />
                    
                    {/* 文字内容 */}
                    <div className="relative">
                      <span 
                        className="text-[#FF6900] font-semibold tracking-wide block"
                        style={{ fontSize: 'clamp(13px, 2.2vw, 15px)' }}
                      >
                        {isEn ? 'Advanced Programs: Choose One Path' : '进阶课程：选择一个方向'}
                      </span>
                      
                      {/* 底部装饰线 */}
                      <div className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-[#FF6900]/40 via-[#FF6900]/20 to-transparent" />
                    </div>
                    
                    {/* 右侧小装饰点 */}
                    <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[#FF6900]/30 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8 lg:mb-10">
                <p className="text-[#4a5565] text-sm lg:text-base mx-auto mt-4 italic max-w-3xl">
                  {isEn
                    ? 'Note: China courses use localized tech stack (Trae/Qoder replacing Cursor, etc.). Consult for details.'
                    : '注：中国课程会使用更适合本地环境的完整技术栈（例如将 Cursor 替换为 Trae 或 Qoder 等）。如需细节,请咨询。'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" style={{ lineHeight: '1.6' }}>
                {advancedCourses.map((course, index) => (
                  <div key={index} className="relative">
                    {renderCourseCard(course, index + 1)}
                  </div>
                ))}
              </div>
            </div>

            {/* BETA 无营（INFINITY）— 独特价值 */}
            <div className="-mt-16 lg:-mt-24">
              <InfinityValues />
            </div>

            {/* 学习径和路径建议 */}
            <div className="-mt-12 lg:-mt-16">
              <LearningPath />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[95vh] max-h-[95vh] overflow-y-auto bg-[#fafafa] border-2 border-[#FF6900]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#FF6900]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-[#101828]">
              {selectedCourse && (
                <div className="flex items-center gap-3">
                  <span className="text-[#FF6900]">{selectedCourse.title}</span>
                  <span className="text-gray-600">-</span>
                  <span>{selectedCourse.subtitle}</span>
                </div>
              )}
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-3 text-base">
              {t.courses.dialog.description}
            </DialogDescription>
          </DialogHeader>
          <div>
            <ContactSection 
              isDialog={true}
              source={selectedCourse ? `${selectedCourse.title} - ${selectedCourse.subtitle}` : undefined}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}