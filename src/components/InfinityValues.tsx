import { Crown, Users, MessageCircle, TrendingUp, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function InfinityValues() {
  const { language } = useLanguage();
  const t = translations[language];
  const infinityValues = t.courses.infinityValues;
  const isEn = language === 'en';

  const values = [
    {
      icon: Crown,
      title: infinityValues.founderMentorship.title,
      items: infinityValues.founderMentorship.items,
      accentColor: '#f59e0b',
      number: '01'
    },
    {
      icon: Users,
      title: infinityValues.engineerTeaching.title,
      items: infinityValues.engineerTeaching.items,
      accentColor: '#60B5FF',
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
      accentColor: '#FF6900',
      number: '05'
    }
  ];

  return (
    <div className="relative py-16 lg:py-20">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 -mt-4 lg:-mt-6">
        <div className="inline-flex items-center gap-0 relative">
          {/* 左侧垂直装饰条 */}
          <div className="flex flex-col items-center gap-2 pr-5 lg:pr-6">
            <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-[#FF6900]/60" />
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center relative" style={{
              background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 100%)',
            }}>
              {/* 无限符号 */}
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01-.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/>
              </svg>
              {/* 图标外框装饰 */}
              <div className="absolute -inset-1 border-2 border-[#FF6900]/20 rounded-lg" />
            </div>
            <div className="w-0.5 h-6 bg-gradient-to-t from-transparent to-[#FF6900]/60" />
          </div>
          
          {/* 主内容区 */}
          <div className="relative border-l-2 border-[#FF6900]/30 pl-5 lg:pl-6 pr-6 lg:pr-8 py-3 lg:py-4">
            {/* 顶部装饰角 */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FF6900]/40 -translate-x-px -translate-y-px" />
            
            {/* 底部装饰角 */}
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FF6900]/40 -translate-x-px translate-y-px" />
            
            {/* 文字内容 */}
            <div className="relative">
              <span className="text-[#FF6900] font-semibold tracking-wide text-sm lg:text-base block">
                {isEn 
                  ? 'BETA INFINITY CAMP — Unique Value'
                  : 'BETA 无界营（INFINITY）— 独特价值'
                }
              </span>
              
              {/* 底部装饰线 */}
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[#FF6900]/40 via-[#FF6900]/20 to-transparent" />
            </div>
            
            {/* 右侧小装饰点 */}
            <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[#FF6900]/30 -translate-y-1/2" />
          </div>
        </div>
        
        <p className="text-[#2d3748] text-base lg:text-lg leading-relaxed font-medium">
          {infinityValues.subtitle}
        </p>
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
                    className="text-6xl lg:text-7xl font-bold transition-opacity"
                    style={{ color: value.accentColor }}
                  >
                    {value.number}
                  </span>
                </div>
                
                {/* Icon */}
                <div 
                  className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl border-2 bg-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
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
                  className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border transition-all duration-300 hover:shadow-2xl overflow-hidden"
                  style={{
                    borderColor: `${value.accentColor}60`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${value.accentColor}80`;
                    e.currentTarget.style.boxShadow = `0 15px 50px ${value.accentColor}35`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${value.accentColor}60`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Corner decoration - Half circle */}
                  <div 
                    className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-24 h-24 opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      backgroundColor: `${value.accentColor}30`,
                      borderRadius: isEven ? '0 0 0 100%' : '0 0 100% 0'
                    }}
                  />
                  
                  {/* Background accent */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-8 blur-3xl pointer-events-none"
                    style={{ background: value.accentColor }}
                  />
                  
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 
                      className="text-xl lg:text-2xl font-bold mb-5 transition-colors text-[#101828]"
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
                          <span className="text-[#101828] text-sm lg:text-base leading-relaxed group-hover/item:text-[#FF6900] transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
  );
}