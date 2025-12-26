import { Clock, MessageSquare, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function StatsSection() {
  const { t } = useLanguage();
  
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
    <section className="py-8 lg:py-12 border-y border-[#ffc75a]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 小板块标题 */}
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-2xl lg:text-3xl">
            <span className="text-white">{t.stats.title}</span>
            <span className="text-[#ffc75a]">{t.stats.titleHighlight}</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4 lg:gap-12 max-w-7xl mx-auto">
          {teachingModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div key={index} className="text-center group flex flex-col items-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mb-3 lg:mb-4 rounded-2xl bg-[#ffc75a] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                </div>
                <div className="text-white text-base lg:text-xl mb-2 lg:mb-3">{mode.title}</div>
                <div className="text-xs lg:text-sm text-gray-400 leading-relaxed max-w-xs">{mode.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}