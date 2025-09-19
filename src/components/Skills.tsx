import { Code, Database, BarChart, Brain, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-primary" size={32} />,
      skills: ["Java", "Python", "OOP", "R", "SQL", "JavaScript"]
    },
    {
      title: "Data Tools",
      icon: <BarChart className="text-primary" size={32} />,
      skills: ["Power BI", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={32} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Data Modeling", "ETL", "Data Warehousing"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-primary" size={32} />,
      skills: ["Scikit-learn", "TensorFlow", "Regression", "Classification", "Clustering", "Deep Learning"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-primary" size={32} />,
      skills: ["Analytical Thinking", "Problem Solving", "Communication", "Team Collaboration", "Leadership"]
    },
    {
      title: "Other Tools",
      icon: <Lightbulb className="text-primary" size={32} />,
      skills: ["Git", "Jupyter", "Excel", "Tableau", "SPSS", "Research Methods"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card fade-in-up group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-chip"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;