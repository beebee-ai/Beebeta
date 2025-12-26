import { Button } from './ui/button';
import { BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function AdvancedCoursesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const { language } = useLanguage();
  const t = translations[language];

  const handleConsultClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section className="py-8 lg:py-16 bg-[#f7f9fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Courses Container */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Starry 繁星：专业进阶课 */}
            <div className="relative bg-gradient-to-br from-[#0a1128] via-[#1a2851] to-[#0a1128] rounded-2xl overflow-hidden border-2 border-blue-400/20 hover:border-blue-400/40 transition-all">
              {/* Starry Background Effect */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-20 w-40 h-40 bg-blue-500 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-500 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400 rounded-full blur-[60px]"></div>
              </div>
              
              {/* Stars pattern */}
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white, transparent), radial-gradient(2px 2px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 10%, white, transparent), radial-gradient(2px 2px at 90% 60%, white, transparent), radial-gradient(1px 1px at 33% 80%, white, transparent), radial-gradient(1px 1px at 15% 55%, white, transparent)',
                backgroundSize: '200% 200%',
                backgroundPosition: '0% 0%'
              }}></div>

              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600/50 via-indigo-600/50 to-purple-600/50 backdrop-blur-sm p-6 lg:p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-1 bg-white/20 rounded-full text-white text-sm backdrop-blur-sm">
                    {t.advancedCoursesSection.starry.target}
                  </span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl mb-2">
                  {t.advancedCoursesSection.starry.subtitle}
                </h3>
                <p className="text-blue-100">
                  {t.advancedCoursesSection.starry.description}
                </p>
              </div>

              {/* Content */}
              <div className="relative p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* 课程时长 */}
                  <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-950/80 transition-all">
                    <div className="text-blue-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.duration}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.durationValue}</div>
                  </div>

                  {/* 班级规模 */}
                  <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-950/80 transition-all">
                    <div className="text-blue-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.classSize}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.classSizeValue}</div>
                  </div>

                  {/* 授课语言 */}
                  <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-950/80 transition-all">
                    <div className="text-blue-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.language}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.languageValue}</div>
                  </div>

                  {/* 讲师团队 */}
                  <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-950/80 transition-all">
                    <div className="text-blue-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.instructors}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.instructorsValue}</div>
                  </div>
                </div>

                {/* 12门专业课程可选 */}
                <div className="mb-8">
                  <h4 className="text-white mb-4">{t.advancedCoursesSection.starry.courseOptions}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {t.advancedCoursesSection.starry.courses.map((course, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg text-blue-200 text-sm text-center hover:bg-blue-500/20 hover:border-blue-400/50 transition-all cursor-pointer"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleConsultClick('Starry 繁星专业进阶课')}
                  className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/30 cursor-pointer"
                >
                  {t.advancedCoursesSection.starry.cta}
                </Button>
              </div>
            </div>

            {/* Orbiter 伴星：1v1陪练课 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-400/30 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-1 bg-white/20 rounded-full text-white text-sm backdrop-blur-sm">
                    {t.advancedCoursesSection.orbiter.target}
                  </span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl mb-2">
                  {t.advancedCoursesSection.orbiter.subtitle}
                </h3>
                <p className="text-cyan-50">
                  {t.advancedCoursesSection.orbiter.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* 课程形式 */}
                  <div className="bg-cyan-950/40 rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="text-cyan-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.orbiter.courseFormat}</div>
                    <div className="text-white">{t.advancedCoursesSection.orbiter.courseFormatValue}</div>
                  </div>

                  {/* 每次时长 */}
                  <div className="bg-cyan-950/40 rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="text-cyan-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.orbiter.duration}</div>
                    <div className="text-white">{t.advancedCoursesSection.orbiter.durationValue}</div>
                  </div>

                  {/* 指导导师 */}
                  <div className="bg-cyan-950/40 rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="text-cyan-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.orbiter.instructors}</div>
                    <div className="text-white">{t.advancedCoursesSection.orbiter.instructorsValue}</div>
                  </div>

                  {/* 招生对象 */}
                  <div className="bg-cyan-950/40 rounded-lg p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="text-cyan-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.orbiter.eligibility}</div>
                    <div className="text-white">{t.advancedCoursesSection.orbiter.eligibilityValue}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleConsultClick('Orbiter 伴星1v1陪练课')}
                  className="w-full lg:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-6 text-lg shadow-lg shadow-cyan-500/30 cursor-pointer"
                >
                  {t.advancedCoursesSection.orbiter.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[95vh] max-h-[95vh] overflow-y-auto bg-white border-2 border-[#FF6900]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#FF6900]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-[#101828]">
              {selectedCourse}
            </DialogTitle>
            <DialogDescription className="text-[#4a5565] mt-3 text-base">
              {t.advancedCoursesSection.dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <div>
            <ContactSection 
              isDialog={true}
              source={selectedCourse || undefined}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}