interface SectionDividerProps {
  number: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  highlightPosition?: 'start' | 'end';
  className?: string;
  theme?: 'light' | 'dark';
}

export function SectionDivider({ number, title, titleHighlight, subtitle, highlightPosition = 'end', className, theme = 'light' }: SectionDividerProps) {
  // 根据主题选择颜色
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#101828]';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-[#4a5565]';
  
  return (
    <div className={`py-8 lg:py-12 mb-8 lg:mb-12 w-full max-w-[1300px] mx-auto relative overflow-hidden ${className || ""}`}
         style={{
           background: 'linear-gradient(135deg, #FF6900 0%, #FF8533 50%, #FF6900 100%)'
         }}>
      {/* 装饰层 - 蜂窝图案 */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 蜂窝六边形网格 - 标准正六边形 */}
          <pattern id="hexagons" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
            <path d="M20 8 L28.66 13 L28.66 23 L20 28 L11.34 23 L11.34 13 Z" stroke="white" strokeWidth="1.5" fill="none"/>
          </pattern>
          <rect width="200" height="200" fill="url(#hexagons)"/>
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
            
            {/* Title Only */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide whitespace-nowrap">
              {highlightPosition === 'start' && titleHighlight && (
                <span className="mr-1 sm:mr-2">{titleHighlight}</span>
              )}
              {title}
              {highlightPosition === 'end' && titleHighlight && (
                <span className="ml-1 sm:mr-2">{titleHighlight}</span>
              )}
            </h2>
            
            {/* Right Line */}
            <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-l from-transparent via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.5)]" />
          </div>

          {/* Optional Subtitle - Rendered below the divider */}
          {subtitle && (
            <p 
              className="mt-6 text-white/90 max-w-3xl text-center leading-relaxed font-light"
              style={{ fontSize: 'clamp(16px, 2.8vw, 20px)' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}