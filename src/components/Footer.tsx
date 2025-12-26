import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t.nav.home, sectionId: 'home', isInternal: true },
    { label: t.nav.courses, sectionId: 'courses', isInternal: true },
    { label: t.nav.works, sectionId: 'works', isInternal: true },
    { label: t.nav.team, sectionId: 'team', isInternal: true },
    { label: t.nav.about, sectionId: 'about', isInternal: true },
    { label: t.nav.faq, sectionId: 'faq', isInternal: true },
    { label: t.nav.contact, sectionId: 'contact', isInternal: true }
  ];

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    e.preventDefault();

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
    <footer className="bg-zinc-900 border-t border-[#ffc75a]/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              onClick={(e) => handleNavClick(item, e)}
              className="text-gray-300 hover:text-[#ffc75a] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}