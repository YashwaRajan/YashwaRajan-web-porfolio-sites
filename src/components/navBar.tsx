import React, { useState, useEffect, useRef } from 'react';
import { Avatar } from '../assets/img/Mainsvg';

// Modal component with glass effect overlay
const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glass overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal content */}
      <div 
        ref={modalRef}
        className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-1 bg-transparent hover:bg-gray-100/50 rounded-full transition-colors"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export const NavBar:any = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

 return (
    <>
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
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsModalOpen(true)}
              >
                <Avatar width="30" height="30" />
              </div>
            </div>
          </div>
          <ul className={`flex list-none m-0 p-0 transition-all duration-300 ${scrolled ? 'mx-auto' : ''}`}>
            <li className="mx-[15px]">
              <a href="#home" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Blogs
              </a>
            </li>
            <li className="mx-[15px]">
              <a href="#about" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Work
              </a>
            </li>
            <li className="mx-[15px]">
              <a href="#services" className="text-gray-800 text-base font-medium no-underline transition-colors duration-300 py-2.5 px-[15px] rounded-[25px] hover:text-[#646cff] hover:bg-[#646cff1a]">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
            <Avatar width="48" height="48" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Profile</h3>
          <p className="text-gray-600 mb-6">Welcome to your profile!</p>
          <div className="space-y-3">
            <a 
              href="#" 
              className="block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Profile
            </a>
            <a 
              href="#" 
              className="block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Settings
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}