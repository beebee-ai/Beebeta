import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl
}: SEOProps) {
  const { language } = useLanguage();

  // 默认SEO内容
  const defaultSEO = {
    zh: {
      title: 'BEE BETA - 用 AI 创造未来',
      description: 'BEE BETA 提供专业 AI 产品与工程课程，面向大学生与进阶学习者，聚焦 AI 全栈开发、RAG、Agent、爬虫与 Product Hunt 全球发布，用真实产品验证能力。',
      keywords: 'AI工程课程, AI产品训练营, BETA课程, 全栈AI开发, RAG架构, Agent开发, Product Hunt发布, Cursor AI, BEE BETA',
      ogTitle: 'BEE BETA AI｜BETA 级 AI 产品工程训练营',
      ogDescription: '以产品落地为目标的 BETA 级 AI 工程课程，覆盖全栈开发、RAG、Agent、爬虫与商业化发布。'
    },
    en: {
      title: 'BEE BETA - Build the Future with AI',
      description: 'BEE BETA offers professional AI product and engineering courses for college students and advanced learners, focusing on full-stack AI development, RAG, Agent, web crawling, and global Product Hunt launches, validating capabilities through real products.',
      keywords: 'AI engineering courses, AI product bootcamp, BETA courses, full-stack AI development, RAG architecture, Agent development, Product Hunt launch, Cursor AI, BEE BETA',
      ogTitle: 'BEE BETA AI | BETA-Level AI Product Engineering Bootcamp',
      ogDescription: 'BETA-level AI engineering courses focused on product delivery, covering full-stack development, RAG, Agent, web crawling, and commercialization.'
    }
  };

  const seo = language === 'zh' ? defaultSEO.zh : defaultSEO.en;

  const finalTitle = title || seo.title;
  const finalDescription = description || seo.description;
  const finalKeywords = keywords || seo.keywords;
  const finalOgTitle = ogTitle || seo.ogTitle;
  const finalOgDescription = ogDescription || seo.ogDescription;
  const finalOgImage = ogImage || 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/beebee_beta.png';
  const finalCanonicalUrl = canonicalUrl || 'https://bee-beta.com/';

  useEffect(() => {
    // 设置页面标题
    document.title = finalTitle;

    // 设置或更新meta标签
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic SEO
    setMetaTag('description', finalDescription);
    setMetaTag('keywords', finalKeywords);
    setMetaTag('author', 'BEE BETA AI');
    setMetaTag('robots', 'index, follow');

    // Open Graph
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', finalOgTitle, true);
    setMetaTag('og:description', finalOgDescription, true);
    setMetaTag('og:url', finalCanonicalUrl, true);
    setMetaTag('og:site_name', 'BEE BETA', true);
    setMetaTag('og:image', finalOgImage, true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalOgTitle);
    setMetaTag('twitter:description', finalOgDescription);
    setMetaTag('twitter:image', finalOgImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = finalCanonicalUrl;

    // Apple Touch Icon
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.sizes = '180x180';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/apple-touch-icon.png';

    // Manifest
    let manifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.rel = 'manifest';
      document.head.appendChild(manifest);
    }
    manifest.href = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/icons/web-app-manifest-512x512.png';

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://beebee.ai/#organization",
          "name": "BEEBEE AI",
          "url": "https://beebee.ai",
          "logo": {
            "@type": "ImageObject",
            "url": "https://beebee.ai/logo.png",
            "width": 512,
            "height": 512
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://bee-beta.com/#website",
          "url": "https://bee-beta.com",
          "name": "BEEBEE AI BETA 实训营",
          "publisher": {
            "@id": "https://beebee.ai/#organization"
          }
        },
        {
          "@type": "Course",
          "@id": "https://bee-beta.com/#course",
          "name": "BEEBEE AI BETA 专业级 AI 产品工程营",
          "description": "面向大学生与专业人士的高阶 AI 产品工程课程体系，通过真实产品驱动学习，覆盖 AI Native 产品设计、全栈工程、RAG、Agent、爬虫与全球产品发布。",
          "url": "https://bee-beta.com",
          "provider": {
            "@id": "https://beebee.ai/#organization"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "18岁以上大学生、工程师、创业者"
          },
          "hasCourseInstance": [
            {
              "@type": "CourseInstance",
              "@id": "https://bee-beta.com/#galaxy",
              "name": "BETA 星空营（Galaxy）",
              "description": "初阶 AI Native 产品工程实践，从提问到产品落地，完成可上线、可发布的 AI 产品。6 周 · 约 15 小时。适合有 STEM 背景的大学生与研究生。",
              "courseMode": "Online",
              "timeRequired": "PT15H",
              "audience": {
                "@type": "Audience",
                "audienceType": "18岁以上大学生 / 研究生，STEM 背景"
              }
            },
            {
              "@type": "CourseInstance",
              "@id": "https://bee-beta.com/#cosmos",
              "name": "BETA 深空营（Cosmos）",
              "description": "高阶 AI 全栈深度实战，涵盖 RAG、AI 爬虫、Agent、多模态数据处理与生产级系统设计。8 周 · 约 24 小时。要求具备一定编程能力。",
              "courseMode": "Online",
              "timeRequired": "PT24H",
              "audience": {
                "@type": "Audience",
                "audienceType": "18岁以上，具备编程基础的工程向学员"
              }
            },
            {
              "@type": "CourseInstance",
              "@id": "https://bee-beta.com/#infinity",
              "name": "BETA 无界营（Infinity）",
              "description": "创始人引领的顶级 AI 产品工程营，完成生产级 AI 产品与市场验证，适合高强度工程经验或创业型学员。12 周 · 约 36 小时。需 1v1 面试。",
              "courseMode": "Online",
              "timeRequired": "PT36H",
              "audience": {
                "@type": "Audience",
                "audienceType": "具备扎实工程或学术背景的进阶学员"
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://bee-beta.com/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": language === 'zh' ? "首页" : "Home",
              "item": "https://bee-beta.com"
            }
          ]
        }
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [finalTitle, finalDescription, finalKeywords, finalOgTitle, finalOgDescription, finalOgImage, finalCanonicalUrl, language]);

  return null; // This component doesn't render anything
}
