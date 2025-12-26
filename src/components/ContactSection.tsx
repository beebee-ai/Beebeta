import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { toast } from 'sonner@2.0.3';
import { SectionDivider } from './SectionDivider';

interface ContactSectionProps {
  isDialog?: boolean;
  source?: string; // 留言来源，例如："第一阶段 - Pin 专业公开课"
}

export function ContactSection({ isDialog = false, source }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    email: '',
    message: t.contact.form.defaultMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update default message when language changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      message: t.contact.form.defaultMessage
    }));
  }, [t.contact.form.defaultMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        age: formData.age || t.contact.form.noAge,
        country: formData.country,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        source: source || t.contact.form.defaultSource // 添加来源信息
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        console.log('✅ Email sent successfully, showing toast...');
        toast.success(t.contact.form.successMessage, {
          duration: 2000, // 显示2秒
        });
        // Reset form
        setFormData({
          name: '',
          age: '',
          country: '',
          email: '',
          message: t.contact.form.defaultMessage
        });
      }
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      toast.error(t.contact.form.errorMessage, {
        duration: 3000, // 错误信息显示3秒
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const emails = [
    {
      email: 'internprogram@beebee.ai',
      description: t.contact.emails.email1Description
    },
    {
      email: 'brinny@beebee.ai',
      description: t.contact.emails.email2Description
    }
  ];

  const content = (
    <div className={isDialog ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isDialog ? '' : 'max-w-6xl mx-auto'}`}>
        {/* Contact Info */}
        <div>
          <h3 className="text-[#101828] mb-8">{t.contact.contactInfoTitle}</h3>
          <div className="space-y-6">
            {/* Email Contacts */}
            {emails.map((info) => (
              <div
                key={info.email}
                className="flex gap-4 p-6 bg-white rounded-lg border border-[#FF6900]/20 hover:border-[#FF6900]/40 transition-all hover:shadow-lg hover:shadow-[#FF6900]/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6900]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#FF6900]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#101828] mb-1">{t.contact.emailLabel}</h4>
                  <a 
                    href={`mailto:${info.email}`}
                    className="text-[#FF6900] mb-1 block hover:underline"
                  >
                    {info.email}
                  </a>
                  <p className="text-[#6b7280] text-sm">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links - WeChat Only */}
          {/* <div className="mt-8 p-6 bg-white rounded-lg border border-[#FF6900]/20">
            <h4 className="text-[#101828] mb-4">{t.contact.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#FF6900]/10 rounded-lg flex items-center justify-center hover:bg-[#FF6900]/20 transition-colors"
                title={t.contact.wechat}
              >
                <span className="text-[#FF6900]">微</span>
              </a>
            </div>
          </div> */}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-[#101828] mb-8">{t.contact.form.title}</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 同学姓名和年龄 - 左右排列 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[#4a5565] mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-[#4a5565] mb-2">
                  {t.contact.form.age}
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors"
                  placeholder={t.contact.form.agePlaceholder}
                />
              </div>
            </div>

            {/* 所在国家和电子邮件 - 左右排列 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-[#4a5565] mb-2">
                  {t.contact.form.country} *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors"
                  placeholder={t.contact.form.countryPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#4a5565] mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
            </div>

            {/* 咨询说明 - 单独一行 */}
            <div>
              <label htmlFor="message" className="block text-[#4a5565] mb-2">
                {t.contact.form.message} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#FF6900]/20 rounded-lg text-[#101828] placeholder-gray-400 focus:border-[#FF6900] focus:outline-none transition-colors resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF6900] hover:bg-[#FF6900]/90 text-white cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  if (isDialog) {
    return content;
  }

  return (
    <section id="contact" className="pb-8 lg:pb-16 bg-[#fafafa]">
      {/* Section Title */}
      <SectionDivider 
        number="08" 
        title={t.contact.title}
        titleHighlight={t.contact.titleHighlight}
        subtitle={t.contact.subtitle}
        highlightPosition="end"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}