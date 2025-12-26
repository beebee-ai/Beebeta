import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#f0f4ff]/80 via-[#f5f7ff]/80 to-[#f8f4ff]/80 backdrop-blur-md border-b border-white/30 shadow-[0_1px_10px_rgba(96,181,255,0.08)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/beebee_ai_black.png" alt="BEE Beta" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isInternal ? (
                <a
                  key={item.sectionId}
                  href={`#${item.sectionId}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-lg text-[#101828] hover:text-[#60B5FF] transition-colors cursor-pointer font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href!}
                  className="text-lg text-[#101828] hover:text-[#60B5FF] transition-colors cursor-pointer font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="group relative flex flex-row items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-[#FF6900]/20 hover:border-[#FF6900]/50 hover:bg-[#FFF5ED] transition-all duration-300 cursor-pointer"
            >
              {/* Globe Icon with rotation effect */}
              <Globe className="w-4 h-4 text-[#FF6900] group-hover:rotate-180 transition-transform duration-500" />
              
              {/* Language text - on the right of icon */}
              <span className="text-sm font-medium text-[#FF6900]">
                {language === 'zh' ? 'EN' : 'ZH'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#60B5FF] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/30 bg-gradient-to-r from-[#f0f4ff]/70 via-[#f5f7ff]/70 to-[#f8f4ff]/70 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isInternal ? (
                  <a
                    key={item.sectionId}
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className="text-lg text-[#101828] hover:text-[#60B5FF] transition-colors cursor-pointer font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-[#101828] hover:text-[#60B5FF] transition-colors cursor-pointer font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}