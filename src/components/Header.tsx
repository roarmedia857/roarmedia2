import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-[#ff4c00]">Roar</span>
              <span className="text-white">Media</span>
            </h1>
          </div>
          
          {isMobile ? (
            <div>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </Button>
              
              {menuOpen && (
                <div className="fixed inset-0 top-16 bg-black z-40 p-4">
                  <nav className="flex flex-col space-y-4">
                    <a href="#" className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10">About</a>
                    <a href="#" className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10">Services</a>
                    <a href="#" className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10">Our Work</a>
                    <a href="#" className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10">Pricing</a>
                    <a href="#" className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10">Contact</a>
                    <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 mt-4" onClick={scrollToContact}>Get in Touch</Button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="font-medium text-white hover:text-[#ff4c00]">About</a>
                <a href="#" className="font-medium text-white hover:text-[#ff4c00]">Services</a>
                <a href="#" className="font-medium text-white hover:text-[#ff4c00]">Our Work</a>
                <a href="#" className="font-medium text-white hover:text-[#ff4c00]">Pricing</a>
                <a href="#" className="font-medium text-white hover:text-[#ff4c00]">Contact</a>
              </nav>
              <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90" onClick={scrollToContact}>Get in Touch</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
