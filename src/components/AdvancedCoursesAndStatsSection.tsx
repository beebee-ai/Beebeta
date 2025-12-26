import { Button } from './ui/button';
import { Clock, MessageSquare, Globe, Users, Globe2 } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { SectionDivider } from './SectionDivider';

export function AdvancedCoursesAndStatsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const { language } = useLanguage();
  const t = translations[language];

  const handleConsultClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsDialogOpen(true);
  };

  const teachingModes = [
    {
      icon: Clock,
      title: t.stats.mode1.title,
      description: t.stats.mode1.description
    },
    {
      icon: MessageSquare,
      title: t.stats.mode2.title,
      description: t.stats.mode2.description
    },
    {
      icon: Globe,
      title: t.stats.mode3.title,
      description: t.stats.mode3.description
    }
  ];

  return (
    <>
      <section className="pb-8 lg:pb-16 bg-[#fafafa]">
        {/* Section Title - Full Width Orange Background */}
        <div className="w-full max-w-[1300px] mx-auto relative overflow-hidden py-8 lg:py-12 mb-8 lg:mb-12"
             style={{
               background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 50%, #FF6900 100%)'
             }}>
          {/* 装饰层 - 蜂窝图案 */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
            <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 蜂窝六边形网格 - 标准正六边形 */}
              <pattern id="hexagons-advanced" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                <path d="M20 8 L28.66 13 L28.66 23 L20 28 L11.34 23 L11.34 13 Z" stroke="white" strokeWidth="1.5" fill="none"/>
              </pattern>
              <rect width="200" height="200" fill="url(#hexagons-advanced)"/>
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
          
          <div className="mx-auto relative z-10">
            <div className="flex flex-col items-center">
              {/* Chapter Marker */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
                {/* Left Line */}
                <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)]" />
                
                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide whitespace-nowrap">
                  <span className="mr-1 sm:mr-2">{t.advancedCoursesSection.title}</span>
                  {t.advancedCoursesSection.sectionTitle}
                </h2>
                
                {/* Right Line */}
                <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-l from-transparent via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)]" />
              </div>

              {/* Subtitle */}
              <p className="mt-6 text-white/90 text-lg lg:text-xl max-w-3xl text-center leading-relaxed font-light">
                {t.advancedCoursesSection.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Courses Container - 淡雅渐变背景 */}
          <div className="max-w-[1350px] mx-auto rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            style={{
              background: '#fafafa'
            }}
          >
            {/* 两个卡片并排 */}
            <div className="grid grid-cols-1 gap-6 lg:gap-8 relative z-10 max-w-4xl mx-auto">
              
              {/* Starry 繁星：专业进阶课 */}
              <div className="relative rounded-3xl p-4 sm:p-6 lg:p-8 group transition-all hover:scale-[1.02] duration-500 flex flex-col border-2 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F8F5FF 0%, #FFF8F5 30%, #FFF5F8 70%, #F5F8FF 100%)',
                  borderColor: '#E5D9FF'
                }}
              >
                {/* 星空背景层 */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  {/* 放射光芒 - 只保留右上角 */}
                  <div className="absolute top-8 right-12 w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-radial from-[#FF6900]/30 to-transparent rounded-full blur-2xl" />
                  </div>
                  
                  {/* 右上角星星群 - 保留 */}
                  <svg className="absolute top-12 right-16 w-20 h-20 text-[#FF6900]/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                  </svg>
                  <svg className="absolute top-8 right-32 w-12 h-12 text-[#FF8533]/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                  </svg>
                  <svg className="absolute top-24 right-24 w-16 h-16 text-[#FFB366]/45" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                  </svg>
                  <svg className="absolute top-16 right-8 w-7 h-7 text-[#FF6900]/25" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                  </svg>
                  <svg className="absolute top-32 right-40 w-10 h-10 text-[#FF6900]/35" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
                  </svg>
                </div>

                {/* 顶部装饰条 - 加强 */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FF6900] to-transparent opacity-60" />
                
                {/* 角落装饰 */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="absolute top-0 right-0 w-full h-full border-t-4 border-r-4 border-[#FF6900] rounded-tr-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-4 border-l-4 border-[#FF6900] rounded-bl-3xl" />
                </div>

                {/* 星星图标 */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                    style={{
                      background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)'
                    }}
                  >
                    <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-[#8B4513] mb-1 font-semibold">{t.advancedCoursesSection.starry.target}</div>
                    <h3 className="text-[#101828] text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 font-bold leading-tight">
                      {t.advancedCoursesSection.starry.subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-[#4a5565] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {t.advancedCoursesSection.starry.description}
                </p>

                {/* 信息行 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.starry.duration}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.starry.durationValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.starry.classSize}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.starry.classSizeValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.starry.language}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.starry.languageValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.starry.instructors}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.starry.instructorsValue}</div>
                    </div>
                  </div>
                </div>

                {/* 12门专业课程可选 */}
                <div className="mb-4 sm:mb-6 flex-1">
                  <h4 className="text-[#101828] mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold">{t.advancedCoursesSection.starry.courseOptions}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {t.advancedCoursesSection.starry.courses.map((course, index) => (
                      <div key={index} className="flex items-start gap-1.5 text-sm sm:text-base">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#FF6900"/>
                        </svg>
                        <span className="text-[#4a5565] leading-relaxed">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleConsultClick('Starry 繁星专业进阶课')}
                  className="w-full sm:w-auto sm:px-16 py-4 sm:py-5 text-base sm:text-lg cursor-pointer transition-all hover:scale-105 border-0 mx-auto"
                  style={{ 
                    background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)',
                    color: '#ffffff'
                  }}
                >
                  {t.advancedCoursesSection.starry.cta}
                </Button>
              </div>

              {/* Orbiter 伴星：1v1陪练课 */}
              <div className="relative rounded-3xl p-4 sm:p-6 lg:p-8 group transition-all hover:scale-[1.02] duration-500 flex flex-col border-2 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F5FBFF 0%, #F8FCFF 30%, #FAFCFF 70%, #F8FAFF 100%)',
                  borderColor: '#D9EBFF'
                }}
              >
                {/* 轨道装饰背景 - 增强版 */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  {/* 放射光晕 - 只保留右上角 */}
                  <div className="absolute top-8 right-12 w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-radial from-[#3399FF]/25 to-transparent rounded-full blur-2xl" />
                  </div>
                  
                  {/* 右上角装饰圆环 */}
                  <div className="absolute top-12 right-20 w-16 h-16 rounded-full border-2 border-[#3399FF]/25" />
                  <div className="absolute top-16 right-24 w-12 h-12 rounded-full border-2 border-[#66B3FF]/20" />
                  
                  {/* 右上角行星点 */}
                  <div className="absolute top-20 right-24 w-5 h-5 rounded-full bg-[#3399FF]/50 border-2 border-[#66B3FF]/40" />
                  <div className="absolute top-32 right-16 w-4 h-4 rounded-full bg-[#66B3FF]/45 border-2 border-[#3399FF]/35" />
                  <div className="absolute top-16 right-12 w-2.5 h-2.5 rounded-full bg-[#3399FF]/35" />
                  <div className="absolute top-40 right-36 w-3 h-3 rounded-full bg-[#66B3FF]/40" />
                  
                  {/* 右上角轨道路径装饰线 */}
                  <svg className="absolute top-8 right-8 w-24 h-24 opacity-40" viewBox="0 0 100 100">
                    <path d="M 10 50 Q 30 20, 50 50 T 90 50" fill="none" stroke="#3399FF" strokeWidth="1.5" strokeDasharray="3,3"/>
                  </svg>
                </div>

                {/* 顶部装饰条 - 加强 */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#3399FF] to-transparent opacity-60" />
                
                {/* 角落装饰 */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="absolute top-0 right-0 w-full h-full border-t-4 border-r-4 border-[#3399FF] rounded-tr-3xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-4 border-l-4 border-[#3399FF] rounded-bl-3xl" />
                </div>

                {/* 星球图标 */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                    style={{
                      background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)'
                    }}
                  >
                    <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2"/>
                      <ellipse cx="12" cy="12" rx="12" ry="5" fill="none" stroke="white" strokeWidth="2" opacity="0.6"/>
                      <circle cx="12" cy="12" r="2" fill="white"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-[#1a5490] mb-1 font-semibold">{t.advancedCoursesSection.orbiter.target}</div>
                    <h3 className="text-[#101828] text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 font-bold leading-tight">
                      {t.advancedCoursesSection.orbiter.subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-[#4a5565] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {t.advancedCoursesSection.orbiter.description}
                </p>

                {/* 信息行 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.orbiter.courseFormat}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.orbiter.courseFormatValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.orbiter.duration}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.orbiter.durationValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.orbiter.instructors}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.orbiter.instructorsValue}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6900] flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[#6b7280] text-xs sm:text-sm">{t.advancedCoursesSection.orbiter.eligibility}</div>
                      <div className="text-[#101828] text-sm sm:text-base truncate">{t.advancedCoursesSection.orbiter.eligibilityValue}</div>
                    </div>
                  </div>
                </div>

                {/* 课程特点列表 */}
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3 flex-1">
                  {(t.advancedCoursesSection.orbiter.features || [
                    '工程导师1对1个性化指导',
                    '目标导向实践，无理论宣讲',
                    '产品升级与优化陪伴式学习',
                    '仅对已学课程的强化陪练'
                  ]).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#FF6900"/>
                      </svg>
                      <span className="text-[#4a5565] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleConsultClick('Orbiter 伴星1v1陪练课')}
                  className="w-full sm:w-auto sm:px-16 py-4 sm:py-5 text-base sm:text-lg cursor-pointer transition-all hover:scale-105 border-0 mx-auto"
                  style={{ 
                    background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)',
                    color: '#ffffff'
                  }}
                >
                  {t.advancedCoursesSection.orbiter.cta}
                </Button>
              </div>

            </div>
          </div>

          {/* 全时段覆盖的教学模式 - 整合到课程卡片下方 */}
          <div className="mt-12 lg:mt-16">
            {/* 小板块标题 */}
            <div className="text-center mb-8 lg:mb-12">
              <h3 className="text-2xl lg:text-3xl">
                <span className="text-[#101828]">{t.stats.title}</span>
                <span className="text-[#FF6900]">{t.stats.titleHighlight}</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
              {teachingModes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <div key={index} className="text-center group flex flex-col items-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-[#FF6900]/10 hover:border-[#FF6900]/30">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mb-4 lg:mb-6 rounded-2xl bg-gradient-to-r from-[#FF6900] to-[#FF8533] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="text-[#101828] text-lg lg:text-xl mb-3 lg:mb-4">{mode.title}</div>
                    <div className="text-sm lg:text-base text-[#4a5565] leading-relaxed">{mode.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[95vh] max-h-[95vh] overflow-y-auto bg-[#fafafa] border-2 border-[#FF6900]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#FF6900]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-[#101828]">
              {selectedCourse}
            </DialogTitle>
            <DialogDescription className="text-[#4a5565] mt-3 text-base">
              {t.advancedCoursesSection.dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <div>
            <ContactSection 
              isDialog={true}
              source={selectedCourse || undefined}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}