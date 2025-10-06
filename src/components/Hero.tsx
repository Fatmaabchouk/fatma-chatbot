import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-fatma.jpg";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{
        backgroundImage: `url(${heroBg})`
      }} />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary px-4 py-2 bg-primary/10 rounded-full">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Fatma <span className="gradient-primary bg-clip-text text-gray-800">Abchouk</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Data Scientist | IBM Certified Python for Data Science & AI | KNIME Certified
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground">
              Full Stack Developer | UI/UX Designer
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground max-w-2xl">
              Bridging data science, AI, and full stack solutions for impactful business results.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("#portfolio")} className="shadow-medium hover:shadow-strong transition-smooth group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")} className="group">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-smooth" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{
              animationDelay: "1s"
            }} />
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-strong border-4 border-background">
                  <img src={profileImage} alt="Fatma Abchouk - Data Scientist and Full Stack Developer" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;