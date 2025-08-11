import  { useState, useEffect } from 'react';
import { Avatar } from '../assets/img/Mainsvg';

export const NavBar:any = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 return(
     <nav className={`fixed top-6 left-6 right-6 h-[70px] bg-transparent transition-all duration-300 z-1000 px-5 ${scrolled ? 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg top-5 w-[80%] left-1/2 -translate-x-1/2 rounded-[50px] px-[30px]' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center w-full h-full max-w-[1300px] mx-auto">
          <div className="text-gray-800 text-xl font-semibold relative">
            {/* Circular progress loader */}
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-12 h-12" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="2"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="#646cff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  strokeDashoffset={125.6 - (scrollProgress / 100) * 125.6}
                  transform="rotate(-90 25 25)"
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar width="30" height="30" />
              </div>
            </div>
          </div>
          <ul className={`flex list-none m-0 p-0 transition-all duration-300 ${scrolled ? 'mx-auto' : ''}`}>
            <li className="mx-[15px]">
              <a href="#home" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Home
              </a>
            </li>
            <li className="mx-[15px]">
              <a href="#about" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                About
              </a>
            </li>
            <li className="mx-[15px]">
              <a href="#services" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Services
              </a>
            </li>
            <li className="mx-[15px]">
              <a href="#contact" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}