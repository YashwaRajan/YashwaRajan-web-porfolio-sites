import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {NavBar} from './components/navBar.tsx'
import HeroSection from './components/HeroSection.tsx'
import {AboutMe} from './components/AboutMe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-white'>
    {/* <style>
      {`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .waving-hand {
          display: inline-block;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          margin-left: 8px;
        }
      `}
    </style> */}
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <div className="bg-[#D8E2DC] rounded-[32px] w-[calc(100%-48px)] overflow-hidden">
        <NavBar />
        <HeroSection />
      </div>
      <AboutMe />
    </div>
    </div>
  </StrictMode>,
)
