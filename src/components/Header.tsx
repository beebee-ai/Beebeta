import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

// BEE Beta Logo - 使用网络链接
const logoImage = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/bee_beta.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const t = translations[language];

  const navItems = [
    { label: t.nav.home, sectionId: 'home', isInternal: true },
    { label: t.nav.courses, sectionId: 'courses', isInternal: true },
    { label: t.nav.works, sectionId: 'works', isInternal: true },
    { label: t.nav.team, sectionId: 'team', isInternal: true },
    { label: t.nav.about, sectionId: 'about', isInternal: true },
    { label: t.nav.faq, sectionId: 'faq', isInternal: true },
    { label: t.nav.contact, sectionId: 'contact', isInternal: true },
    { label: t.nav.ceoLetter, href: '/ceo-letter', isInternal: false }
  ];

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.isInternal && item.sectionId) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#ffc75a]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="BEE Beta" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.isInternal ? (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-gray-300 hover:text-[#ffc75a] transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="text-gray-300 hover:text-[#ffc75a] transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-300 hover:text-[#ffc75a] transition-colors"
              title={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language === 'zh' ? '中' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#ffc75a] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#ffc75a]/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isInternal ? (
                  <a
                    key={item.label}
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className="text-gray-300 hover:text-[#ffc75a] transition-colors px-2 py-1 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#ffc75a] transition-colors px-2 py-1"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-2 mt-4 px-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#ffc75a] transition-colors py-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'zh' ? '中文 / English' : 'English / 中文'}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}