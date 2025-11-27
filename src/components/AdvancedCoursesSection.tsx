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
      <section className="py-8 lg:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Courses Container */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Starry 繁星：专业进阶课 */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-400/30 rounded-2xl overflow-hidden hover:border-indigo-400/50 transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-1 bg-white/20 rounded-full text-white text-sm backdrop-blur-sm">
                    {t.advancedCoursesSection.starry.target}
                  </span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl mb-2">
                  {t.advancedCoursesSection.starry.subtitle}
                </h3>
                <p className="text-indigo-50">
                  {t.advancedCoursesSection.starry.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* 课程时长 */}
                  <div className="bg-indigo-950/40 rounded-lg p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
                    <div className="text-indigo-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.duration}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.durationValue}</div>
                  </div>

                  {/* 班级规模 */}
                  <div className="bg-indigo-950/40 rounded-lg p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
                    <div className="text-indigo-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.classSize}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.classSizeValue}</div>
                  </div>

                  {/* 授课语言 */}
                  <div className="bg-indigo-950/40 rounded-lg p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
                    <div className="text-indigo-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.language}</div>
                    <div className="text-white">{t.advancedCoursesSection.starry.languageValue}</div>
                  </div>

                  {/* 讲师团队 */}
                  <div className="bg-indigo-950/40 rounded-lg p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-colors">
                    <div className="text-indigo-300 text-sm mb-2 uppercase">{t.advancedCoursesSection.starry.instructors}</div>
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
                        className="px-4 py-2 bg-indigo-500/10 border border-indigo-400/30 rounded-lg text-indigo-200 text-sm text-center hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all cursor-pointer"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleConsultClick('Starry 繁星专业进阶课')}
                  className="w-full lg:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-6 text-lg shadow-lg shadow-indigo-500/30"
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
                  className="w-full lg:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-6 text-lg shadow-lg shadow-cyan-500/30"
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
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[95vh] max-h-[95vh] overflow-y-auto bg-zinc-950 border-2 border-[#ffc75a]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#ffc75a]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-white">
              {selectedCourse}
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-3 text-base">
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