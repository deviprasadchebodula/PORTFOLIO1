import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full hover:bg-primary-glow transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-soft)]"
          >
            <ArrowUp className="text-primary-foreground" size={20} />
          </button>
        </div>

        {/* Footer Content */}
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary">DC</div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Building innovative solutions through data science and modern web technologies.
          </p>

          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made </span>
           
            <span>by Deviprasad Chebodula</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;