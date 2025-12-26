import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CourseSection } from '../components/CourseSection';
import { AdvancedCoursesAndStatsSection } from '../components/AdvancedCoursesAndStatsSection';
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
    <div className="min-h-screen relative">
      {/* 多色融合渐变背景 */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 10%, rgba(96, 181, 255, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.063) 0%, transparent 50%),
            radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.056) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(147, 197, 253, 0.063) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(167, 139, 250, 0.056) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
            linear-gradient(135deg, #fcfeff 0%, #fdfeff 25%, #fefeff 50%, #ffffff 75%, #ffffff 100%)
          `
        }}
      />
      
      <Header />
      <main>
        {/* 首页 */}
        <HeroSection />
        
        {/* 第一章：参加 BEE Beta 你能得到什么？ */}
        <FeaturesSection />
        
        {/* 第二章：完整课程体系 */}
        <CourseSection />
        
        {/* 第三章：进阶与陪练课程 - 标题已在组件内部 */}
        <AdvancedCoursesAndStatsSection />
        
        {/* 第四章：学员作品展示 - 标题已在组件内部 */}
        <WorksSection />
        
        {/* 第五章：导师团队 - 标题已在组件内部 */}
        <TeamSection />
        
        {/* 第六章：关于我们 - 标题已在组件内部 */}
        <AboutSection />
        
        {/* 第七章：常见问题 - 标题已在组件内部 */}
        <FAQSection />
        
        {/* 第八章：联系我们 - 标题已在组件内部 */}
        <ContactSection source={t.contact.titleHighlight + t.contact.title} />
      </main>
      <Footer />
    </div>
  );
}