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
    <section id="home" className="relative pt-32 pb-8 lg:pt-40 lg:pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffc75a]/10 via-black to-black"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#ffc75a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffc75a]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center -mt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffc75a]/10 border border-[#ffc75a]/20 mb-8 -mt-8">
            <Sparkles className="w-4 h-4 text-[#ffc75a]" />
            <span className="text-[#ffc75a] text-sm">
              {language === 'zh' ? 'AI时代的创新教育平台' : 'Innovative AI Education Platform'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-relaxed">
            {language === 'zh' ? (
              <>
                <span className="text-white">成为</span>
                <span className="text-[#ffc75a]"> AI时代 </span>
                <span className="text-white">的创造者 而不只是消费者</span>
              </>
            ) : (
              <>
                <span className="text-white">Become an </span>
                <span className="text-[#ffc75a]">AI Creator</span>
                <span className="text-white">, Not Just a Consumer</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg lg:text-xl mb-10 lg:mb-12 max-w-3xl mx-auto">
            {language === 'zh' 
              ? 'BEE Beta 三阶课程体系 - 学AI，创未来' 
              : 'BEE Beta Three-Stage Course System - Learn AI, Shape the Future'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#ffc75a] hover:bg-[#ffc75a]/90 text-black px-8 py-6 text-lg group w-full sm:w-auto"
              onClick={handleCourseClick}
            >
              {language === 'zh' ? '了解课程详情' : 'Explore Courses'}
              <Sparkles className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#ffc75a] rounded-full"></div>
              <span>{language === 'zh' ? 'AI驱动课程' : 'AI-Driven Courses'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#ffc75a] rounded-full"></div>
              <span>{language === 'zh' ? '实战项目导向' : 'Project-Based Learning'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#ffc75a] rounded-full"></div>
              <span>{language === 'zh' ? '终身学习社区' : 'Lifelong Learning Community'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}