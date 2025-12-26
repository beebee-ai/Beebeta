import { Globe, Award, Brain, GraduationCap, Briefcase, Quote, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-8 lg:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="mb-8">
            <h3 className="text-white mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-[#ffc75a]" />
              {t.about.companyTitle}
            </h3>
          </div>
          
          <div className="bg-zinc-900 rounded-lg p-8 lg:p-12 border border-[#ffc75a]/10">
            <div className="space-y-8 text-gray-300 leading-loose">
              <p>
                {t.about.companyIntro.paragraph1}
              </p>
              <p>
                {t.about.companyIntro.paragraph2.part1}<span className="text-[#ffc75a]">{t.about.companyIntro.paragraph2.highlight1}</span>{t.about.companyIntro.paragraph2.part2}<span className="text-[#ffc75a]">{t.about.companyIntro.paragraph2.highlight2}</span>{t.about.companyIntro.paragraph2.part3}
              </p>
              <p>
                {t.about.companyIntro.paragraph3}
              </p>
            </div>
          </div>
        </div>

        {/* Founder Introduction */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#ffc75a]" />
              {t.about.founderTitle}
            </h3>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg p-8 lg:p-12 border border-[#ffc75a]/20">
            {/* CEO Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png"
                  alt={t.about.founder.name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-[#ffc75a]/30"
                />
                <div>
                  <h4 className="text-white text-xl mb-1">{t.about.founder.name}</h4>
                  <p className="text-[#ffc75a]">{t.about.founder.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t.about.founder.bio}
              </p>
            </div>

            {/* Career Experience */}
            <div className="mb-8 bg-black/30 rounded-lg p-6 border border-[#ffc75a]/10">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#ffc75a]" />
                <h5 className="text-white">{t.about.founder.careerTitle}</h5>
              </div>
              <ul className="space-y-3 text-gray-300">
                {t.about.founder.career.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#ffc75a] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <span className="text-[#ffc75a]">{item.company}</span> - {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entrepreneurial Vision */}
            <div className="mb-6 bg-black/30 rounded-lg p-6 border border-[#ffc75a]/10">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#ffc75a]" />
                <h5 className="text-white">{t.about.founder.visionTitle}</h5>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  {t.about.founder.vision}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-[#ffc75a]/5 to-transparent rounded-lg p-6 border-l-4 border-[#ffc75a]">
              <Quote className="w-8 h-8 text-[#ffc75a]/30 mb-3" />
              <p className="text-gray-200 italic leading-relaxed mb-3">
                "{t.about.founder.quote}"
              </p>
              <p className="text-[#ffc75a] text-right">— {t.about.founder.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}