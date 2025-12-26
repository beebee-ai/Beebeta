import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer
    },
    {
      question: t.faq.q4.question,
      answer: t.faq.q4.answer
    },
    {
      question: t.faq.q5.question,
      answer: t.faq.q5.answer
    },
    {
      question: t.faq.q6.question,
      answer: t.faq.q6.answer
    },
    {
      question: t.faq.q7.question,
      answer: t.faq.q7.answer
    },
    {
      question: t.faq.q8.question,
      answer: t.faq.q8.answer
    }
  ];

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={index} className="text-[#ffc75a] font-bold">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  const renderAnswer = (answer: string) => {
    return (
      <div className="space-y-2 text-gray-400 leading-relaxed">
        {answer.split('\n').map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-2" />;

          if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
            const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
            const isNested = leadingSpaces >= 2;
            
            return (
              <div key={i} className={`flex items-start gap-3 ${isNested ? 'pl-6' : 'pl-1'}`}>
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#ffc75a] flex-shrink-0 opacity-80" />
                <span className="flex-1">{renderText(trimmed.substring(2))}</span>
              </div>
            );
          }

          return <div key={i} className="pl-1">{renderText(line)}</div>;
        })}
      </div>
    );
  };

  return (
    <section id="faq" className="py-8 lg:py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg border border-[#ffc75a]/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <h3 className="text-white pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ffc75a] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    {renderAnswer(faq.answer)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">{t.faq.moreQuestions}</p>
          <button
            onClick={() => setIsContactDialogOpen(true)}
            className="inline-flex items-center gap-2 text-[#ffc75a] hover:text-[#ffc75a]/80 transition-colors cursor-pointer"
          >
            {t.faq.contactUs}
            <ChevronDown className="w-4 h-4 transform -rotate-90" />
          </button>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[90vh] max-h-[90vh] overflow-y-auto bg-zinc-950 border-2 border-[#ffc75a]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#ffc75a]/20 pb-6 mb-8">
            <DialogTitle className="text-2xl lg:text-3xl text-white">
              {t.contact.dialogTitle}
            </DialogTitle>
            <DialogDescription className="text-gray-400 mt-3 text-base">
              {t.contact.dialogDescription}
            </DialogDescription>
          </DialogHeader>
          <div>
            <ContactSection 
              isDialog={true}
              source={t.faq.title + t.faq.titleHighlight + ' - ' + t.contact.dialogTitle}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}