import { Download, MapPin, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm Deviprasad, a highly motivated Data Science student with expertise in data analysis, 
              visualization, and problem-solving. I aim to create impactful software solutions that 
              blend functionality and elegance.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey in technology is driven by curiosity and a passion for turning complex data 
              into meaningful insights. I believe in the power of clean code, beautiful design, and 
              user-centered development.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-muted-foreground">Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-primary" size={20} />
                <span className="text-muted-foreground">English, Telugu</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-primary" size={20} />
                <span className="text-muted-foreground">ML, Web Apps</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <button className="btn-hero-secondary flex items-center gap-2">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Skills Preview */}
          <div className="fade-in-up">
            <div className="portfolio-card">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Competencies</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Data Analysis</span>
                    <span className="text-primary">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Python Development</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Power BI</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">Machine Learning</span>
                    <span className="text-primary">75%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;