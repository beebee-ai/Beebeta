import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CourseSection } from '../components/CourseSection';
import { InfinityValuesSection } from '../components/InfinityValuesSection';
import { LearningPathSection } from '../components/LearningPathSection';
import { AdvancedCoursesSection } from '../components/AdvancedCoursesSection';
import { WorksSection } from '../components/WorksSection';
import { TeamSection } from '../components/TeamSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { SectionDivider } from '../components/SectionDivider';
import { useLanguage } from '../contexts/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* 首页 */}
        <HeroSection />
        
        {/* 第一章：参加 BEE Beta 你能得到什么？ */}
        <SectionDivider 
          number="01" 
          title={t.features.title} 
          titleHighlight={t.features.titleHighlight}
          subtitle={t.features.subtitle}
        />
        <FeaturesSection />
        
        {/* 第二章：完整课程体系 */}
        <SectionDivider 
          number="02" 
          title={t.courses.title} 
          titleHighlight={t.courses.titleHighlight}
          subtitle={t.courses.subtitle}
        />
        <CourseSection />
        <InfinityValuesSection />
        <LearningPathSection />
        
        {/* 第三章：进阶与陪练课程 */}
        <SectionDivider 
          number="03" 
          title=""
          titleHighlight={t.advancedCoursesSection.title}
          subtitle={t.advancedCoursesSection.description}
        />
        <AdvancedCoursesSection />
        <StatsSection />
        
        {/* 第四章：学员作品展示 */}
        <SectionDivider 
          number="04" 
          title={t.works.title} 
          titleHighlight={t.works.titleHighlight}
          subtitle={t.works.subtitle}
        />
        <WorksSection />
        
        {/* 第五章：导师团队 */}
        <SectionDivider 
          number="05" 
          title={t.team.title}
          titleHighlight={t.team.titleHighlight}
          subtitle={t.team.subtitle}
        />
        <TeamSection />
        
        {/* 第六章：关于我们 */}
        <SectionDivider 
          number="06" 
          title={t.about.title}
          titleHighlight={t.about.titleHighlight}
          // No subtitle for About section
        />
        <AboutSection />
        
        {/* 第七章：常见问题 */}
        <SectionDivider 
          number="07" 
          title={t.faq.title}
          titleHighlight={t.faq.titleHighlight}
          subtitle={t.faq.subtitle}
          highlightPosition="start"
        />
        <FAQSection />
        
        {/* 第八章：联系我们 */}
        <SectionDivider 
          number="08" 
          title={t.contact.title}
          titleHighlight={t.contact.titleHighlight}
          subtitle={t.contact.subtitle}
          highlightPosition="start"
        />
        <ContactSection source={t.contact.titleHighlight + t.contact.title} />
      </main>
      <Footer />
    </div>
  );
}