import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Prodigy InfoTech",
      period: "August 2024",
      type: "Internship",
      description: "Hands-on data analysis, ML models, Python workflows. Worked on real-world projects involving data preprocessing, feature engineering, and predictive modeling.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      achievements: [
        "Developed machine learning models with 85% accuracy",
        "Automated data processing workflows",
        "Created insightful data visualizations"
      ]
    },
    {
      title: "Research Intern",
      company: "Innomatics Research Labs",
      period: "September - October 2024",
      type: "Internship",
      description: "Applied analytics tools and contributed to data-centric projects. Focused on research methodologies and advanced analytics techniques.",
      technologies: ["R", "Power BI", "SQL", "Statistical Analysis"],
      achievements: [
        "Contributed to 3 research projects",
        "Mastered advanced Power BI techniques",
        "Improved data processing efficiency by 40%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card fade-in-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                  
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-chip text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;