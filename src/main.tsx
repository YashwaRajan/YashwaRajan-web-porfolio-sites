import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {NavBar} from './components/navBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-white'>
    <div className=" min-h-screen p-6">
      {/* Hero Section */}
      <div className="bg-[#D8E2DC]  rounded-[32px] w-[calc(100%-48px)] overflow-hidden">
        <NavBar />
        <div className="text-center py-20 px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Lorem Ipsum</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">This is the hero section with a beautiful greenish background and rounded corners.</p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">The NavBar is positioned 24px from the top inside the hero section.</p>
            <p className="text-gray-700">As you scroll down, the NavBar will transform to have a transparent background with glass effect.</p>
          </div>
        </div>
      </div>
      <div className="pt-[70px] w-screen overflow-x-hidden">
  <section id="home" className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-0">
    <div className="text-center py-16 px-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Home Section</h1>
      <p className="text-xl text-gray-600 mb-8">Scroll down to see the progress indicator in action</p>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 w-full">
        <p className="text-gray-700 mb-4">
          This is the first section of content. As you scroll down, the circular loader in the navbar will track your progress through the page.
        </p>
        <p className="text-gray-700">The loader will fill up as you approach the bottom of the page.</p>
      </div>
    </div>
  </section>
     </div>
    </div>
    </div>
  </StrictMode>,
)
