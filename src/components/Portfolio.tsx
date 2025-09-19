import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "Built a predictive model using Python & ML techniques to predict heart disease risk. Implemented various algorithms and visualized key metrics for medical insights.",
      image: "https://cdn.dribbble.com/userupload/16996978/file/original-0e329057e9298ba26cb957dba3cc2038.png?resize=1600x1200",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      category: "Machine Learning",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Personal Portfolio Website",
      description: "Fully responsive personal portfolio built with React and modern web technologies. Features dark theme, smooth animations, and optimized performance.",
      image: "https://tint.creativemarket.com/1AVcJe9tMzUchRWXIAhQqQU0WDZud_N9uI_UVZQmGwk/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUyNTIvNTI1MjAvNTI1MjA0MDAvdGh1bWJuYWlsLTgtc3ByZWFkcy1jb3B5LW8uanBnIzE3MzY1NDQ5Mzg?1736544938",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      category: "Web Development",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard providing comprehensive sales insights with real-time data visualization and automated reporting capabilities.",
      image: "https://graphicdesigneye.com/images/group-bundle-shots.jpg",
      technologies: ["Power BI", "SQL", "Excel", "DAX"],
      category: "Data Analytics",
      links: {
        github: "#",
        live: "#"
      }
    },
    // {
    //   title: "Student Performance Analysis",
    //   description: "Comprehensive analysis of student performance data using statistical methods and machine learning to identify factors affecting academic success.",
    //   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
    //   technologies: ["R", "Python", "Statistical Analysis", "Data Visualization"],
    //   category: "Data Science",
    //   links: {
    //     github: "#",
    //     live: "#"
    //   }
    // },
    // {
    //   title: "COVID-19 Data Tracker",
    //   description: "Real-time data tracking and visualization of COVID-19 statistics with interactive maps and trend analysis across different regions.",
    //   image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=300&fit=crop",
    //   technologies: ["Python", "APIs", "Plotly", "Streamlit"],
    //   category: "Data Visualization",
    //   links: {
    //     github: "#",
    //     live: "#"
    //   }
    // },
    // {
    //   title: "E-commerce Recommendation System",
    //   description: "Built a collaborative filtering recommendation system for e-commerce platform to suggest products based on user behavior and preferences.",
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    //   technologies: ["Python", "Collaborative Filtering", "Pandas", "NumPy"],
    //   category: "Machine Learning",
    //   links: {
    //     github: "#",
    //     live: "#"
    //   }
    // }
  ];

  const categories = ["All", "Machine Learning", "Web Development", "Data Analytics", "Data Science", "Data Visualization"];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my latest work in data science, machine learning, and web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`skill-chip ${index === 0 ? 'border-primary text-primary' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card fade-in-up group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-2 bg-primary rounded-full hover:bg-primary-glow transition-colors">
                    <Github className="text-white" size={20} />
                  </button>
                  <button className="p-2 bg-primary rounded-full hover:bg-primary-glow transition-colors">
                    <ExternalLink className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="btn-hero-secondary">
            <span>View All Projects</span>
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;