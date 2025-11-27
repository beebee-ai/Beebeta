import { Button } from './ui/button';
import { BookOpen, Target, Sparkles, GraduationCap, ArrowRight, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

interface Course {
  title: string;
  subtitle: string;
  ageLimit: string;
  suitableFor: string;
  duration: string;
  requirements: string;
  content: string[];
  icon: typeof GraduationCap;
  color: string;
  scrollbarColor?: string;
  badge?: string;
}

export function CourseSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === 'en';

  // Pin 专业公开课 - 入门课程
  const foundationCourse: Course = {
    title: t.courses.stage1.title,
    subtitle: t.courses.stage1.subtitle,
    ageLimit: t.courses.stage1.ageLimit,
    suitableFor: t.courses.stage1.suitableFor,
    duration: t.courses.stage1.duration,
    requirements: t.courses.stage1.requirements,
    content: t.courses.stage1.content,
    icon: BookOpen,
    color: '#42a5f5',
    scrollbarColor: '#42a5f5'
  };

  // 三个并列的进阶课程
  const advancedCourses: Course[] = [
    {
      title: t.courses.stage2a.title,
      subtitle: t.courses.stage2a.subtitle,
      ageLimit: t.courses.stage2a.ageLimit,
      suitableFor: t.courses.stage2a.suitableFor,
      duration: t.courses.stage2a.duration,
      requirements: t.courses.stage2a.requirements,
      content: t.courses.stage2a.content,
      icon: Sparkles,
      color: '#10b981',
      scrollbarColor: '#6b8070'
    },
    {
      title: t.courses.stage2b.title,
      subtitle: t.courses.stage2b.subtitle,
      ageLimit: t.courses.stage2b.ageLimit,
      suitableFor: t.courses.stage2b.suitableFor,
      duration: t.courses.stage2b.duration,
      requirements: t.courses.stage2b.requirements,
      content: t.courses.stage2b.content,
      icon: Target,
      color: '#8b5cf6',
      scrollbarColor: '#6b5c8b'
    },
    {
      title: t.courses.stage3.title,
      subtitle: t.courses.stage3.subtitle,
      ageLimit: t.courses.stage3.ageLimit,
      suitableFor: t.courses.stage3.suitableFor,
      duration: t.courses.stage3.duration,
      requirements: t.courses.stage3.requirements,
      content: t.courses.stage3.content,
      icon: GraduationCap,
      color: '#ffc75a',
      scrollbarColor: '#8b7355'
    }
  ];

  const handleConsultClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  // Format title to make parentheses content smaller
  const formatTitle = (title: string) => {
    const parts = title.split(/(\([^)]+\))/);
    return (
      <>
        {parts.map((part, idx) => {
          if (part.match(/\([^)]+\)/)) {
            // Parentheses content - smaller
            return (
              <span key={idx} className="text-lg lg:text-xl text-[24px]">
                {part}
              </span>
            );
          }
          // Main text - also smaller
          return <span key={idx} className="text-2xl lg:text-3xl">{part}</span>;
        })}
      </>
    );
  };

  const renderCourseCard = (course: Course, index: number, isFoundation = false) => {
    const Icon = course.icon;
    return (
      <div
        key={index}
        className={`group bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden hover:shadow-2xl transition-all border flex flex-col h-full ${isFoundation ? 'max-w-3xl mx-auto' : ''}`}
        style={{
          borderColor: `${course.color}20`,
          boxShadow: `0 0 0 1px ${course.color}10`
        }}
      >
        <div 
          className="p-6 lg:p-8 relative"
          style={{
            background: `linear-gradient(135deg, ${course.color}20, rgb(24, 24, 27), rgb(0, 0, 0))`
          }}
        >
          {course.badge && (
            <div 
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm border"
              style={{ 
                color: course.color,
                borderColor: `${course.color}50`
              }}
            >
              {course.badge}
            </div>
          )}
          
          <div 
            className="inline-block bg-black/40 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4"
            style={{ border: `1px solid ${course.color}80` }}
          >
            <span style={{ color: course.color }} className="text-sm">{course.ageLimit}</span>
          </div>
          
          <h3 className="text-white text-3xl lg:text-4xl font-bold mb-3">
            {formatTitle(course.title)}
          </h3>
          
          <p className="text-gray-300 text-sm lg:text-base">
            {t.courses.labels.suitableFor}: {course.suitableFor}
          </p>
        </div>

        <div 
          className="mx-4 lg:mx-6 -mt-4 mb-6 bg-zinc-900/80 rounded-2xl p-4 lg:p-6 shadow-lg relative z-10 flex items-start"
          style={{ border: `1px solid ${course.color}30` }}
        >
          <div className="space-y-3 lg:space-y-4">
            <div className="leading-relaxed">
              <span className="text-white text-sm lg:text-base">{t.courses.labels.duration}: </span>
              <span className="text-gray-400 text-sm lg:text-base">{course.duration}</span>
            </div>
            <div className="leading-relaxed">
              <span className="text-white text-sm lg:text-base">{t.courses.labels.requirements}: </span>
              <span className="text-gray-400 text-sm lg:text-base">{course.requirements}</span>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-8 pb-6 lg:pb-8 flex-1 flex flex-col min-h-0">
          <div className="relative mb-6 flex-shrink-0">
            <div 
              className={`h-[200px] lg:h-[240px] overflow-y-auto pr-2 scrollbar-course-${index}`}
            >
              <style>{`
                .scrollbar-course-${index}::-webkit-scrollbar {
                  width: 6px;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-track {
                  background: rgba(0, 0, 0, 0.3);
                  border-radius: 3px;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-thumb {
                  background: ${course.scrollbarColor || course.color};
                  border-radius: 3px;
                  transition: background 0.3s ease;
                }
                .scrollbar-course-${index}::-webkit-scrollbar-thumb:hover {
                  background: ${course.scrollbarColor || course.color}ee;
                }
              `}</style>
              <ul className="space-y-2 lg:space-y-3">
                {course.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 lg:gap-3">
                    <svg 
                      className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: course.color }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {course.content.length > 6 && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
            )}
          </div>
          
          {course.content.length > 6 && (
            <div className="text-center mb-4 lg:mb-6 flex-shrink-0">
              <span style={{ color: `${course.color}99` }} className="text-xs">↕ {t.courses.labels.viewMore}</span>
            </div>
          )}

          <div className="mt-auto flex-shrink-0">
            <Button
              onClick={() => handleConsultClick(course)}
              className="w-full text-black hover:opacity-90 transition-all group py-5 lg:py-6 text-base lg:text-lg"
              style={{ backgroundColor: course.color }}
            >
              {t.courses.labels.consult}
              <Sparkles className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="courses" className="py-8 lg:py-16 bg-gradient-to-b from-black to-[#ffc75a]/5 pb-8 lg:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
            {/* Foundation Course - Pin 专业公开课 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 border-2 rounded-full" style={{
                  backgroundColor: 'rgba(66, 165, 245, 0.1)',
                  borderColor: 'rgba(66, 165, 245, 0.3)'
                }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#42a5f5' }} />
                  <span className="font-semibold text-sm lg:text-base" style={{ color: '#42a5f5' }}>
                    {isEn ? 'Foundation: Pin Professional Open Course' : '入门课程：Pin 专业公开课'}
                  </span>
                </div>
              </div>
              
              {renderCourseCard(foundationCourse, 0, true)}
              
              {/* Arrow Indicator */}
              <div className="flex justify-center mt-8 lg:mt-12">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-gray-400 text-sm lg:text-base text-center">
                    {isEn ? 'Choose Your Path' : '选择你的方向'}
                  </p>
                  <ArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-500 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Advanced Courses - 三个并列选择 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 border-2 rounded-full bg-gradient-to-r from-[#10b981]/10 via-[#ffc75a]/10 to-[#10b981]/10" style={{
                  borderColor: 'rgba(255, 199, 90, 0.3)'
                }}>
                  <GraduationCap className="w-5 h-5 text-[#ffc75a]" />
                  <span className="font-semibold text-sm lg:text-base text-[#ffc75a]">
                    {isEn ? 'Advanced Programs: Choose One Path' : '进阶课程：选择一个方向'}
                  </span>
                </div>
              </div>
              
              <div className="text-center mb-8 lg:mb-10">
                <p className="text-gray-400 text-sm lg:text-base max-w-3xl mx-auto">
                  {isEn 
                    ? 'Three parallel tracks designed for different goals: Galaxy for product development, Cosmos for technical depth, and Infinity for elite entrepreneurship'
                    : '三条并列路径，针对不同目标：星空营注重产品开发，深空营专注技术深度，无界营面向精英创业'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" style={{ lineHeight: '1.6' }}>
                {advancedCourses.map((course, index) => (
                  <div key={index} className="relative">
                    {renderCourseCard(course, index + 1)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[95vh] max-h-[95vh] overflow-y-auto bg-zinc-950 border-2 border-[#ffc75a]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#ffc75a]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-white">
              {selectedCourse && (
                <div className="flex items-center gap-3">
                  <span className="text-[#ffc75a]">{selectedCourse.title}</span>
                  <span className="text-gray-600">-</span>
                  <span>{selectedCourse.subtitle}</span>
                </div>
              )}
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-3 text-base">
              {t.courses.dialog.description}
            </DialogDescription>
          </DialogHeader>
          <div>
            <ContactSection 
              isDialog={true}
              source={selectedCourse ? `${selectedCourse.title} - ${selectedCourse.subtitle}` : undefined}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}