import { AboutMe } from "../components/AboutMe"
import HeroSection from "../components/HeroSection"
import { NavBar } from "../components/navBar"



export const LandingPage = () => {
    return(
        <>
        <div className='bg-white'>
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <div className="bg-[#D8E2DC] rounded-[32px] w-[calc(100%-48px)] overflow-hidden">
        <NavBar />
        <HeroSection />
      </div>
      <AboutMe />
    </div>
    </div>
        </>
    )
}