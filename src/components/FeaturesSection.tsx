import { Globe, Cpu, Rocket, BookOpen, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Globe,
      title: t.features.globalExperience.title,
      description: t.features.globalExperience.description
    },
    {
      icon: Cpu,
      title: t.features.deepUnderstanding.title,
      description: t.features.deepUnderstanding.description
    },
    {
      icon: Rocket,
      title: t.features.fullStackProject.title,
      description: t.features.fullStackProject.description
    },
    {
      icon: BookOpen,
      title: t.features.paperReading.title,
      description: t.features.paperReading.description
    },
    {
      icon: Award,
      title: t.features.recommendation.title,
      description: t.features.recommendation.description
    },
    {
      icon: Users,
      title: t.features.community.title,
      description: t.features.community.description
    }
  ];

  return (
    <section id="features" className="py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#ffc75a]/10 to-transparent border border-[#ffc75a]/20 hover:border-[#ffc75a]/50 transition-all hover:shadow-lg hover:shadow-[#ffc75a]/10"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#ffc75a] flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                </div>
                <h3 className="text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}