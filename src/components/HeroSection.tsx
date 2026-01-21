import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCourseClick = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-8 lg:pt-40 lg:pb-16 bg-[#fafafa]" style={{ overflow: 'hidden' }}>
      {/* Background Image - 铺满整个浏览器 */}
      <div className="absolute inset-0 z-0" style={{ overflow: 'hidden' }}>
        <img 
          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/banner_white.png"
          alt="" 
          className="opacity-80"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        {/* 蒙版层 */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/30"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full flex justify-center lg:justify-start">
          {/* Left aligned content on desktop, centered on mobile */}
          <div className="w-full lg:max-w-4xl lg:ml-20 text-center lg:text-left">
            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 
                className="mb-6 sm:mb-8 leading-[1.3] font-extrabold text-[#1a1a1a] lg:skew-x-[-5deg]"
                style={{ fontSize: 'clamp(32px, 8vw, 72px)' }}
              >
                {language === 'zh' ? (
                  <>
                    <span className="block">成为 <span className="bg-gradient-to-r from-[#FF6900] via-[#FF8533] to-[#FFA366] bg-clip-text text-transparent" style={{ fontSize: 'clamp(38px, 9.5vw, 84px)' }}>AI时代</span> 的创造者</span>
                    <span className="block">而不只是消费者</span>
                  </>
                ) : (
                  <>
                    <span className="block">Become an <span className="bg-gradient-to-r from-[#FF6900] via-[#FF8533] to-[#FFA366] bg-clip-text text-transparent" style={{ fontSize: 'clamp(38px, 9.5vw, 84px)' }}>AI Creator</span>,</span>
                    <span className="block">Not Just a Consumer</span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <p 
              className="leading-[1.5] text-[#4a5565] mb-8 sm:mb-12 whitespace-nowrap"
              style={{ fontSize: 'clamp(20px, 5vw, 40px)' }}
            >
              {language === 'zh' 
                ? 'BEE BETA 三阶课程体系 - 学AI,创未来' 
                : 'BEE BETA Three-Stage Course System - Learn AI, Shape the Future'}
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 sm:mb-16">
              <button 
                onClick={handleCourseClick}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-[#FF6900] to-[#FF8533] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,105,0,0.3)] hover:scale-105 text-white cursor-pointer border border-[#FF6900]/20 w-auto"
                style={{
                  boxShadow: '0 4px 20px rgba(255, 105, 0, 0.15)',
                  fontSize: 'clamp(14px, 3vw, 18px)'
                }}
              >
                {/* Soft glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FFA366] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                <span className="relative z-10 tracking-wide font-medium">
                  {language === 'zh' ? '了解课程详情' : 'Explore Courses'}
                </span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" style={{ fontSize: 'clamp(16px, 3.5vw, 20px)' }}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}