import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionDivider } from './SectionDivider';

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
        return <span key={index} className="text-[#FF6900] font-bold">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  const renderAnswer = (answer: string) => {
    return (
      <div className="space-y-2 text-[#4a5565] leading-relaxed" style={{ fontSize: 'clamp(14px, 2.4vw, 16px)' }}>
        {answer.split('\n').map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-2" />;

          if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
            const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
            const isNested = leadingSpaces >= 2;
            
            return (
              <div key={i} className={`flex items-start gap-3 ${isNested ? 'pl-6' : 'pl-1'}`}>
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#FF6900] flex-shrink-0 opacity-80" />
                <span className="flex-1">{renderText(trimmed.substring(2))}</span>
              </div>
            );
          }

          return <div key={i} className="pl-1">{renderText(line)}</div>;
        })}
      </div>
    );
  };

  const formatAnswer = (answer: string) => {
    return (
      <div className="space-y-2 text-[#4a5565] leading-relaxed" style={{ fontSize: 'clamp(14px, 2.4vw, 16px)' }}>
        {answer.split('\n').map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-2" />;

          if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
            const leadingSpaces = line.match(/^\s*/)?.[0].length || 0;
            const isNested = leadingSpaces >= 2;
            
            return (
              <div key={i} className={`flex items-start gap-3 ${isNested ? 'pl-6' : 'pl-1'}`}>
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#FF6900] flex-shrink-0 opacity-80" />
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
    <section id="faq" className="pb-8 lg:pb-16 bg-[#fafafa]">
      {/* Section Title */}
      <SectionDivider 
        number="07" 
        title={t.faq.titleHighlight}
        titleHighlight={t.faq.title}
        subtitle={t.faq.subtitle}
        highlightPosition="start"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#FF6900]/20 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#FF6900]/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer bg-white hover:bg-gray-50 transition-all border-b border-[#FF6900]/10"
                >
                  <span 
                    className="text-[#101828] pr-8"
                    style={{ fontSize: 'clamp(15px, 2.6vw, 18px)' }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4a5565] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[2000px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-[#4a5565] leading-relaxed space-y-3">
                    {formatAnswer(faq.answer)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p 
            className="text-[#6b7280] mb-4"
            style={{ fontSize: 'clamp(14px, 2.4vw, 16px)' }}
          >
            {t.faq.moreQuestions}
          </p>
          <button
            onClick={() => setIsContactDialogOpen(true)}
            className="inline-flex items-center gap-2 text-[#FF6900] hover:text-[#FF6900]/80 transition-colors cursor-pointer"
            style={{ fontSize: 'clamp(14px, 2.4vw, 16px)' }}
          >
            {t.faq.contactUs}
            <ChevronDown className="w-4 h-4 transform -rotate-90" />
          </button>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="w-[85vw] !max-w-[85vw] h-[90vh] max-h-[90vh] overflow-y-auto bg-[#fafafa] border-2 border-[#FF6900]/30 p-8 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader className="border-b border-[#FF6900]/20 pb-6 mb-8">
            <DialogTitle 
              className="text-2xl lg:text-3xl text-[#101828]"
              style={{ fontSize: 'clamp(20px, 3.5vw, 28px)' }}
            >
              {t.contact.dialogTitle}
            </DialogTitle>
            <DialogDescription 
              className="text-[#6b7280] mt-3 text-base"
              style={{ fontSize: 'clamp(14px, 2.4vw, 16px)' }}
            >
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