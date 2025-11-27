import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function LearningPathSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const isEn = language === 'en';

  return (
    <section className="pt-0 pb-16 bg-zinc-950 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Simple Text Layout */}
          <div className="text-center space-y-3">
            {/* Learning Path */}
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="text-gray-400">
                {isEn ? 'Learning Path: ' : '学习路径：'}
              </span>
              {isEn 
                ? 'Pin Professional Open Course → Choose One: BETA Galaxy Camp (Galaxy) / BETA Cosmos Camp (Cosmos) / BETA Infinity Camp (Infinity)'
                : 'Pin 专业公开课 → 三选一：BETA 星空营（Galaxy）/ BETA 深空营（Cosmos）/ BETA 无界营（Infinity）'
              }
            </p>

            {/* Path Recommendations */}
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="text-gray-400">
                {isEn ? 'Path Recommendations: ' : '路径建议：'}
              </span>
              {isEn 
                ? 'Choose Galaxy Camp if you have no/low coding experience and want to build real AI products; choose Cosmos Camp if you have a strong engineering foundation and aim for production-level projects; choose Infinity Camp if you have solid academics and 3+ years of intensive engineering experience (requires 1-on-1 interview with the founder).'
                : '无/低编码经验且想做出真实AI产品选择星空营；具备较强工程基础且追求生产级项目选择深空营；学术扎实且有3年以上高强度工程经验选择无界营（需通过创始人1v1面试）。'
              }
            </p>

            {/* Consultation Note */}
            <p className="text-[#ffc75a] text-sm">
              {isEn 
                ? 'For course and instructor details, please consult our staff' 
                : '如需课程及导师详情，请向我们工作人员咨询'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}