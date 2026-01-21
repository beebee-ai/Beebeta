import { Globe, Bot, Rocket, BookOpen, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Globe,
      title: t.features.globalExperience.title,
      description: t.features.globalExperience.description,
      gradient: 'from-[#60B5FF] via-[#4DA8F5] to-[#3A9BEB]',
      shadow: 'shadow-[#60B5FF]/30'
    },
    {
      icon: Bot,
      title: t.features.deepUnderstanding.title,
      description: t.features.deepUnderstanding.description,
      gradient: 'from-[#155dfc] via-[#2b7fff] to-[#4189ff]',
      shadow: 'shadow-[#155dfc]/30'
    },
    {
      icon: Users,
      title: t.features.community.title,
      description: t.features.community.description,
      gradient: 'from-[#2DD4BF] via-[#5EEAD4] to-[#99F6E4]',
      shadow: 'shadow-[#2DD4BF]/30'
    },
    {
      icon: BookOpen,
      title: t.features.paperReading.title,
      description: t.features.paperReading.description,
      gradient: 'from-[#6B8CFF] via-[#7F9FFF] to-[#93B2FF]',
      shadow: 'shadow-[#6B8CFF]/30'
    },
    {
      icon: Award,
      title: t.features.recommendation.title,
      description: t.features.recommendation.description,
      gradient: 'from-[#FF9D42] via-[#FFB366] to-[#FFC98A]',
      shadow: 'shadow-[#FF9D42]/30'
    },
    {
      icon: Rocket,
      title: t.features.fullStackProject.title,
      description: t.features.fullStackProject.description,
      gradient: 'from-[#1f9dc9] via-[#33c1e9] to-[#4dc9ec]',
      shadow: 'shadow-[#1f9dc9]/30'
    }
  ];

  return (
    <section id="features" className="relative pt-16 lg:pt-20 pb-16 lg:pb-24 overflow-hidden bg-[#fafafa]">
      {/* Background glow - removed for pure white background */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          {/* Chapter Marker */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
            {/* Left Line */}
            <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(255,105,0,0.2)] to-[rgba(255,105,0,0.4)]" />
            
            {/* Title */}
            <h2 
              className="font-bold text-[#101828] tracking-wide whitespace-nowrap"
              style={{ fontSize: 'clamp(20px, 3.5vw, 40px)' }}
            >
              {t.features.title} <span className="text-[#FF6900] mr-1 sm:mr-2">{t.features.titleHighlight}</span>
            </h2>
            
            {/* Right Line */}
            <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-l from-transparent via-[rgba(255,105,0,0.2)] to-[rgba(255,105,0,0.4)]" />
          </div>

          {/* Subtitle */}
          <p 
            className="mt-6 text-[#4a5565] max-w-3xl text-center leading-relaxed font-light"
            style={{ fontSize: 'clamp(16px, 2.8vw, 20px)' }}
          >
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid - No Card Style */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 max-w-7xl mx-auto">{/* Mobile: 2 cols, Tablet: 2 cols, Desktop: 3 cols */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                {/* Icon with decorative background elements */}
                <div className="relative mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">{/* Responsive icon container */}
                  {/* Gray background decorative elements - diverse shapes matching theme */}
                  <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-90 lg:scale-100">{/* Scale decorative elements */}
                    {/* Globe - World map with circles and location pins */}
                    {index === 0 && (
                      <>
                        {/* Large circle representing globe */}
                        <div className="absolute top-3 left-2 w-16 h-16 rounded-full bg-gray-200/70 border-2 border-gray-300/40">
                          {/* Continents as irregular blobs */}
                          <div className="absolute top-2 left-3 w-6 h-5 bg-gray-300/60 rounded-full transform -rotate-12" />
                          <div className="absolute bottom-4 right-2 w-5 h-4 bg-gray-300/60" style={{borderRadius: '40% 60% 60% 40%'}} />
                        </div>
                        {/* Location pins as teardrops */}
                        <div className="absolute bottom-6 right-4 w-3 h-4 bg-[#FF6900]/25 rounded-t-full rounded-b-sm" />
                        <div className="absolute top-5 right-2 w-2.5 h-3.5 bg-[#FF6900]/20 rounded-t-full rounded-b-sm" />
                        {/* Map markers as small circles */}
                        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-gray-300/70" />
                      </>
                    )}
                    
                    {/* Bot - Chat bubbles and AI brain (mixed rounded rectangles) */}
                    {index === 1 && (
                      <>
                        {/* Large chat bubble - rounded rectangle */}
                        <div className="absolute top-2 left-3 w-16 h-12 rounded-2xl bg-gray-100/80 border-2 border-gray-300/40">
                          {/* Text lines */}
                          <div className="absolute top-2.5 left-2 w-9 h-0.5 bg-gray-300/60 rounded-full" />
                          <div className="absolute top-5 left-2 w-7 h-0.5 bg-gray-300/50 rounded-full" />
                          {/* AI indicator dot */}
                          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#FF6900]/30" />
                        </div>
                        {/* Small response bubble - square with tail */}
                        <div className="absolute bottom-5 right-3 w-10 h-8 bg-gray-200/70 border-2 border-gray-300/35">
                          <div className="absolute top-2 left-2 flex gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-gray-400/60" />
                            <div className="w-1 h-1 rounded-full bg-gray-400/60" />
                            <div className="w-1 h-1 rounded-full bg-gray-400/60" />
                          </div>
                        </div>
                        {/* Neural network node - small square */}
                        <div className="absolute bottom-10 left-10 w-3.5 h-3.5 bg-[#FF6900]/18 rounded" />
                      </>
                    )}
                    
                    {/* Rocket - Stars (polygons) and trajectory (curves) */}
                    {index === 5 && (
                      <>
                        {/* Planet as organic blob */}
                        <div className="absolute top-3 right-3 w-14 h-14 bg-gray-200/70 border-2 border-gray-300/40 rounded-full">
                          <div className="absolute top-2.5 left-2.5 w-4 h-4 rounded-full bg-gray-300/50" />
                          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-gray-300/40" />
                        </div>
                        {/* Star shapes - 5-point stars */}
                        <div className="absolute bottom-6 left-4 w-6 h-6 bg-gray-100/80" 
                             style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} />
                        <div className="absolute top-6 left-3 w-3.5 h-3.5 bg-[#FF6900]/20" 
                             style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} />
                        {/* Trajectory curve - arc line */}
                        <div className="absolute bottom-3 right-6 w-12 h-12 border-2 border-dashed border-gray-300/40 rounded-full" style={{clipPath: 'polygon(0 100%, 0 0, 100% 100%)'}} />
                      </>
                    )}
                    
                    {/* BookOpen - Stacked papers (rectangles) with wavy pages */}
                    {index === 3 && (
                      <>
                        {/* Main document - rectangle */}
                        <div className="absolute top-2 right-2 w-16 h-18 bg-gray-100/80 border-2 border-gray-300/40 transform -rotate-6 rounded-lg">
                          {/* Text lines */}
                          <div className="absolute top-3 left-2 w-10 h-0.5 bg-gray-300/60 rounded" />
                          <div className="absolute top-6 left-2 w-8 h-0.5 bg-gray-300/50 rounded" />
                          <div className="absolute top-9 left-2 w-9 h-0.5 bg-gray-300/55 rounded" />
                          <div className="absolute top-12 left-2 w-7 h-0.5 bg-gray-300/50 rounded" />
                        </div>
                        {/* Second paper - organic wavy edge */}
                        <div className="absolute bottom-5 left-3 w-12 h-14 bg-gray-200/60 border border-gray-300/35 rounded-md transform rotate-3" 
                             style={{borderRadius: '8px 40% 8px 8px'}} />
                        {/* Bookmark - thin rectangle */}
                        <div className="absolute top-3 right-5 w-1.5 h-8 bg-[#FF6900]/25 rounded-full" />
                        {/* Corner fold - triangle */}
                        <div className="absolute top-2 right-2 w-5 h-5 bg-gray-300/50" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}} />
                      </>
                    )}
                    
                    {/* Award - Badge (hexagon), seal (circle), ribbon (rectangle) */}
                    {index === 4 && (
                      <>
                        {/* Certificate badge - hexagon shape */}
                        <div className="absolute top-5 left-3 w-14 h-14 bg-gray-200/70 border-2 border-gray-300/40 transform rotate-12" 
                             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                          {/* Inner star */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300/60" 
                               style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} />
                        </div>
                        {/* Seal stamp - circle */}
                        <div className="absolute bottom-3 right-5 w-9 h-9 rounded-full bg-gray-100/80 border-2 border-gray-300/35 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full border-2 border-dashed border-gray-400/50" />
                        </div>
                        {/* Ribbon - rectangles */}
                        <div className="absolute bottom-2 left-7 w-1.5 h-8 bg-[#FF6900]/20 transform -rotate-12" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'}} />
                        {/* Achievement star */}
                        <div className="absolute top-10 right-2 w-4 h-4 bg-[#FF6900]/18" 
                             style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} />
                      </>
                    )}
                    
                    {/* Users - Profile cards (rounded rectangles) and avatars (circles) */}
                    {index === 2 && (
                      <>
                        {/* Gray Users icon copy as decorative element */}
                        <Users className="absolute top-2 left-2 w-20 h-20 text-gray-300/50 z-10" />
                      </>
                    )}
                  </div>
                  
                  {/* Main orange icon - pure icon without background */}
                  <Icon className={`relative z-10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#FF6900] ${index === 5 ? 'translate-x-3 md:translate-x-4 lg:translate-x-5' : ''}`} />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-[#FF6900] mb-4"
                  style={{ fontSize: 'clamp(12px, 2.2vw, 20px)' }}
                >
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-[#999999] leading-relaxed max-w-xs"
                  style={{ fontSize: 'clamp(12px, 2vw, 16px)' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}