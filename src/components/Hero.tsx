import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8">
            <img
              src="/uploads/12ad124c-b199-4e12-a36c-7320fa512aea.png"
              alt="Deviprasad Chebodula"
              className="w-48 h-48 sm:w-56 sm:h-56 profile-glow mx-auto object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="fade-in-up animate">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              DEVIPRASAD CHEBODULA
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary font-semibold mb-4">
              B.Tech Data Science Student • Aspiring Software Engineer
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about creating data-driven solutions with a focus on clean design and usability. 
              Building the future through innovative technology and analytical thinking.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-hero-primary flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hero-secondary flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.47</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-primary" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;