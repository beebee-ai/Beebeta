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
    <section id="home" className="relative pt-32 pb-8 lg:pt-40 lg:pb-16 overflow-hidden bg-[#fafafa]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/banner_white.jpg"
          alt="" 
          className="w-full h-full object-cover object-right opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full">
          {/* Left aligned content */}
          <div className="w-full lg:max-w-4xl lg:ml-20">
            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-[26px] sm:text-[48px] lg:text-[72px] mb-6 sm:mb-8 leading-[1.3] font-extrabold text-[#1a1a1a] lg:skew-x-[-5deg]">
                {language === 'zh' ? (
                  <>
                    <span className="block">成为 <span className="text-[30px] sm:text-[56px] lg:text-[84px] bg-gradient-to-r from-[#FF6900] via-[#FF8533] to-[#FFA366] bg-clip-text text-transparent">AI时代</span> 的创造者</span>
                    <span className="block">而不只是消费者</span>
                  </>
                ) : (
                  <>
                    <span className="block">Become an <span className="text-[30px] sm:text-[56px] lg:text-[84px] bg-gradient-to-r from-[#FF6900] via-[#FF8533] to-[#FFA366] bg-clip-text text-transparent">AI Creator</span>,</span>
                    <span className="block">Not Just a Consumer</span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[24px] lg:text-[32px] leading-[1.5] text-[#4a5565] mb-8 sm:mb-12">
              {language === 'zh' 
                ? 'BEE Beta 三阶课程体系 - 学AI，创未来' 
                : 'BEE Beta Three-Stage Course System - Learn AI, Shape the Future'}
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 sm:mb-16">
              <button 
                onClick={handleCourseClick}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-[#FF6900] to-[#FF8533] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,105,0,0.3)] hover:scale-105 text-white text-[18px] sm:text-[22px] cursor-pointer border border-[#FF6900]/20 w-full sm:w-auto"
                style={{
                  boxShadow: '0 4px 20px rgba(255, 105, 0, 0.15)'
                }}
              >
                {/* Soft glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FFA366] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                <span className="relative z-10 tracking-wide font-medium">
                  {language === 'zh' ? '了解课程详情' : 'Explore Courses'}
                </span>
                <span className="relative z-10 text-[20px] group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}