
const HeroSection = () => {

  return (
    <>
       <div className="text-center py-20 px-4">
          {/* <div className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            Hi there, <span className="waving-hand">🫶</span>
          </div> */}
          <h1 className="text-5xl font-bold text-gray-800 mb-6"> Yeshwanthini Saravanan</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Business Intelligence FrontEnd Engineer</p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">I'm currently working at <span className="text-blue-600">Ramco Cements - BI Team</span></p>
            <p className="text-gray-700">Working in tranforming data into value through great user experiences with actionable insights.</p>
          </div>
        </div>
    </>
  );
};

export default HeroSection;
