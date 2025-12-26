import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CEOLetterPage } from './pages/CEOLetterPage';
import { PacerPage } from './pages/PacerPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from 'sonner@2.0.3';
import { useEffect } from 'react';

export default function App() {
  // 设置网站图标和标题
  useEffect(() => {
    // 设置 favicon
    const setFavicon = (href: string) => {
      let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = href;
    };
    
    setFavicon('https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/icon/icon.png');
    
    // 设置默认标题
    document.title = 'Bee-Beta';
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ceo-letter" element={<CEOLetterPage />} />
          <Route path="/pacer" element={<PacerPage />} />
        </Routes>
      </Router>
      <Toaster 
        position="top-center" 
        richColors 
        expand={true}
        duration={2000}
        closeButton
        style={{
          zIndex: 99999,
        }}
      />
    </LanguageProvider>
  );
}