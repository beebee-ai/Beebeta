import { Crown, Users, MessageCircle, TrendingUp, Briefcase, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function InfinityValuesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const infinityValues = t.courses.infinityValues;
  const isEn = language === 'en';

  const values = [
    {
      icon: Crown,
      title: infinityValues.founderMentorship.title,
      items: infinityValues.founderMentorship.items,
      accentColor: '#ffc75a',
      number: '01'
    },
    {
      icon: Users,
      title: infinityValues.engineerTeaching.title,
      items: infinityValues.engineerTeaching.items,
      accentColor: '#42a5f5',
      number: '02'
    },
    {
      icon: MessageCircle,
      title: infinityValues.industryDialogue.title,
      items: infinityValues.industryDialogue.items,
      accentColor: '#10b981',
      number: '03'
    },
    {
      icon: TrendingUp,
      title: infinityValues.marketValidation.title,
      items: infinityValues.marketValidation.items,
      accentColor: '#a855f7',
      number: '04'
    },
    {
      icon: Briefcase,
      title: infinityValues.careerOpportunities.title,
      items: infinityValues.careerOpportunities.items,
      accentColor: '#ffc75a',
      number: '05'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffc75a] rounded-full opacity-[0.03] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ffc75a] rounded-full opacity-[0.03] blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 199, 90, 0.05) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 lg:-mt-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffc75a]/10 via-[#ffc75a]/20 to-[#ffc75a]/10 border border-[#ffc75a]/30">
            <span className="text-[#ffc75a] font-semibold tracking-wider">
              {isEn 
                ? 'BETA INFINITY CAMP — Unique Value'
                : 'BETA 无界营（INFINITY）— 独特价值'
              }
            </span>
          </div>
          
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            {infinityValues.subtitle}
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ffc75a]/50" />
            <div className="w-2 h-2 rounded-full bg-[#ffc75a]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ffc75a]/50" />
          </div>
        </div>

        {/* Values List - Vertical Timeline Style */}
        <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`group relative flex flex-col lg:flex-row items-start gap-6 lg:gap-10 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number & Icon Side */}
                <div className={`flex-shrink-0 flex items-center gap-4 lg:gap-6 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Large Number */}
                  <div className="relative">
                    <span 
                      className="text-6xl lg:text-7xl font-bold opacity-50 group-hover:opacity-70 transition-opacity"
                      style={{ color: value.accentColor }}
                    >
                      {value.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border-2 bg-black/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `${value.accentColor}40` }}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ background: `radial-gradient(circle, ${value.accentColor}20, transparent)` }}
                    />
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 relative z-10" style={{ color: value.accentColor }} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full lg:w-0 group">
                  <div 
                    className="relative bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
                    style={{
                      borderColor: `${value.accentColor}30`,
                      boxShadow: `0 0 0 1px ${value.accentColor}15`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${value.accentColor}60`;
                      e.currentTarget.style.boxShadow = `0 10px 40px ${value.accentColor}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${value.accentColor}30`;
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${value.accentColor}15`;
                    }}
                  >
                    {/* Background accent */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-8 blur-3xl"
                      style={{ background: value.accentColor }}
                    />
                    
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 
                        className="text-xl lg:text-2xl font-bold mb-5 transition-colors"
                        style={{ color: 'white' }}
                      >
                        {value.title}
                      </h3>

                      {/* Items */}
                      <ul className="space-y-4">
                        {value.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 group/item">
                            <div className="flex-shrink-0 mt-1.5">
                              <div 
                                className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:w-2 group-hover/item:h-2"
                                style={{ backgroundColor: value.accentColor }}
                              />
                            </div>
                            <span className="text-gray-300 text-sm lg:text-base leading-relaxed group-hover/item:text-gray-200 transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corner decoration */}
                    <div 
                      className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        background: `radial-gradient(circle at ${isEven ? 'top right' : 'top left'}, ${value.accentColor}20, transparent)`,
                        borderRadius: isEven ? '0 1.5rem 0 100%' : '1.5rem 0 100% 0'
                      }}
                    />
                  </div>
                </div>

                {/* Connecting Line for desktop */}
                <div className="hidden lg:block absolute top-10 w-full h-[1px] opacity-10" style={{
                  background: `linear-gradient(to ${isEven ? 'right' : 'left'}, transparent, ${value.accentColor}, transparent)`
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}