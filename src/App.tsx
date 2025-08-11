
import { NavBar } from "./components/navBar.tsx";
function App() {
  
  return (
    <>
      {/* Navbar */}
     {/* <NavBar/> */}

     {/* Dummy Sections for Scroll Demo */}
     <div className="pt-[70px]">
       <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h1 className="text-5xl font-bold text-gray-800 mb-6">Home Section</h1>
           <p className="text-xl text-gray-600 mb-8">Scroll down to see the progress indicator in action</p>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">This is the first section of content. As you scroll down, the circular loader in the navbar will track your progress through the page.</p>
             <p className="text-gray-700">The loader will fill up as you approach the bottom of the page.</p>
           </div>
         </div>
       </section>
       
       <section id="about" className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-6">About Section</h2>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">This is the second section. Notice how the circular loader continues to track your scroll progress.</p>
             <p className="text-gray-700 mb-4">The loader is linked to your position on the page, filling up as you scroll down and emptying as you scroll up.</p>
             <p className="text-gray-700">This creates a visual indicator of how far you've scrolled through the content.</p>
           </div>
         </div>
       </section>
       
       <section id="services" className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-6">Services Section</h2>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">You're now one-third of the way through the page. The loader should be about one-third filled.</p>
             <p className="text-gray-700 mb-4">The smooth transition makes the progress indicator feel natural and responsive.</p>
             <p className="text-gray-700">Keep scrolling to see the loader continue to track your progress.</p>
           </div>
         </div>
       </section>
       
       <section id="contact" className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Section</h2>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">You've reached the final section! The loader should now be completely filled.</p>
             <p className="text-gray-700 mb-4">Scroll back up to see the loader decrease proportionally.</p>
             <p className="text-gray-700">This scroll-linked indicator provides visual feedback on your position in the document.</p>
           </div>
         </div>
       </section>
       
       <section className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-6">Extra Section</h2>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">This is an additional section to provide more scrolling content.</p>
             <p className="text-gray-700 mb-4">The loader will continue to track your scroll position accurately.</p>
             <p className="text-gray-700">Try scrolling to the very top and bottom to see the loader at 0% and 100% respectively.</p>
           </div>
         </div>
       </section>
       
       <footer className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center p-8">
         <div className="max-w-4xl text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-6">Footer</h2>
           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
             <p className="text-gray-700 mb-4">You've reached the end of the page!</p>
             <p className="text-gray-700 mb-4">The loader should now be completely filled (100%).</p>
             <p className="text-gray-700">Scroll back up to see the loader decrease proportionally.</p>
           </div>
         </div>
       </footer>
     </div>
    </>
  );
}

export default App;