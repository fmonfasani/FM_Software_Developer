
import { ArrowDown, Code, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 flex items-center justify-center relative">
              <img 
                src="/lovable-uploads/bdbb690f-cc4f-4ccf-96bb-50cdc7c9b63a.png" 
                alt="Federico Monfasani Logo"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400">
              FEDERICO
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400">
              MONFASANI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-2 max-w-3xl mx-auto font-medium tracking-wide">
            FULL-STACK DEVELOPER
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Desarrollador de Software Full Stack apasionado por crear soluciones digitales innovadoras
            y experiencias de usuario excepcionales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 hover:from-teal-400 hover:to-emerald-400"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
            >
              Contactar
            </button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
              <Coffee size={20} />
              <span>Café lover</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
              <Code size={20} />
              <span>Clean Code</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
