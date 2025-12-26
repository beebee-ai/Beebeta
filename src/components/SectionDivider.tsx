interface SectionDividerProps {
  number: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  highlightPosition?: 'start' | 'end';
  className?: string;
}

export function SectionDivider({ number, title, titleHighlight, subtitle, highlightPosition = 'end', className }: SectionDividerProps) {
  return (
    <div className={`relative pt-16 lg:pt-20 pb-8 lg:pb-10 overflow-hidden ${className || ""}`}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#ffc75a] opacity-[0.02] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Chapter Marker */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
            {/* Left Line */}
            <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-r from-transparent via-[#ffc75a]/20 to-[#ffc75a]/40" />
            
            {/* Title Only */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide whitespace-nowrap">
              {highlightPosition === 'start' && titleHighlight && (
                <span className="text-[#ffc75a] mr-1 sm:mr-2">{titleHighlight}</span>
              )}
              {title}
              {highlightPosition === 'end' && titleHighlight && (
                <span className="text-[#ffc75a] ml-1 sm:ml-2">{titleHighlight}</span>
              )}
            </h2>
            
            {/* Right Line */}
            <div className="flex-1 min-w-[40px] sm:min-w-[80px] lg:min-w-[120px] h-[2px] bg-gradient-to-l from-transparent via-[#ffc75a]/20 to-[#ffc75a]/40" />
          </div>

          {/* Optional Subtitle - Rendered below the divider */}
          {subtitle && (
            <p className="mt-6 text-gray-400 text-lg lg:text-xl max-w-3xl text-center leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}