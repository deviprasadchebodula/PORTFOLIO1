import { BarChart3, Brain, Database, TrendingUp, Users, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="text-primary" size={48} />,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with comprehensive analysis and beautiful visualizations that tell compelling stories.",
      features: [
        "Statistical Analysis",
        "Data Cleaning & Preprocessing",
        "Interactive Charts & Graphs",
        "Trend Analysis & Forecasting"
      ]
    },
    {
      icon: <Brain className="text-primary" size={48} />,
      title: "Machine Learning Solutions",
      description: "Build intelligent systems that learn from data to solve complex problems and automate decision-making processes.",
      features: [
        "Predictive Modeling",
        "Classification & Regression",
        "Feature Engineering",
        "Model Optimization"
      ]
    },
    {
      icon: <TrendingUp className="text-primary" size={48} />,
      title: "Power BI Dashboards",
      description: "Create interactive business intelligence solutions that empower stakeholders to make data-driven decisions.",
      features: [
        "Interactive Dashboards",
        "Real-time Data Monitoring",
        "Custom Visualizations",
        "Automated Reporting"
      ]
    },
    {
      icon: <Database className="text-primary" size={48} />,
      title: "Database Design & Management",
      description: "Design efficient database structures and implement robust data management systems for optimal performance.",
      features: [
        "Database Architecture",
        "Query Optimization",
        "Data Migration",
        "Performance Tuning"
      ]
    },
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Research & Consulting",
      description: "Provide expert guidance on data science projects and research methodologies for academic and business applications.",
      features: [
        "Research Design",
        "Methodology Planning",
        "Project Consulting",
        "Technical Documentation"
      ]
    },
    {
      icon: <Zap className="text-primary" size={48} />,
      title: "Process Automation",
      description: "Streamline workflows and automate repetitive tasks to improve efficiency and reduce manual effort.",
      features: [
        "Workflow Automation",
        "Script Development",
        "Task Scheduling",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive data science and analytics solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="portfolio-card fade-in-up group h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-[var(--glow-soft)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <button className="w-full btn-hero-secondary text-sm py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="portfolio-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss how I can help you turn your data into valuable insights and build solutions that drive real business impact.
            </p>
            <button className="btn-hero-primary">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;