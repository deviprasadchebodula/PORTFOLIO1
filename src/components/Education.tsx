import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Data Science",
      institution: "Aditya Institute of Technology and Management",
      period: "2022 - 2026 (Expected)",
      cgpa: "8.47/10.0",
      icon: <GraduationCap className="text-primary" size={24} />,
      description: "Specialized in data science, machine learning, and statistical analysis with hands-on experience in Python, R, and modern data tools."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      cgpa: "Completed",
      icon: <Award className="text-primary" size={24} />,
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical foundation."
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Navodaya Model School",
      period: "2020",
      cgpa: "Completed",
      icon: <Calendar className="text-primary" size={24} />,
      description: "Strong academic foundation with focus on mathematics and science subjects."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12 fade-in-up">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full shadow-[var(--glow-primary)] border-4 border-background"></div>
                
                {/* Content Card */}
                <div className="ml-20">
                  <div className="portfolio-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {edu.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                          <span className="text-primary font-medium">{edu.cgpa}</span>
                        </div>
                        
                        <h4 className="text-lg text-primary font-medium mb-2">{edu.institution}</h4>
                        
                        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                          <Calendar size={16} />
                          {edu.period}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;