import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const Portfolio = () => {
  const projects = [{
    title: "Power BI Dashboard Project",
    category: "Data Visualization",
    description: "Interactive Power BI dashboard providing comprehensive business insights with real-time KPI tracking and data visualization.",
    technologies: ["Power BI"],
    image: "/placeholder.svg",
    github: "",
    highlights: ["Interactive visualizations", "Business insights", "Real-time tracking"]
  }, {
    title: "Data Analysis with Anaconda & Jupyter",
    category: "Data Science",
    description: "Data analysis projects using Anaconda and Jupyter Notebooks for exploratory data analysis and visualization.",
    technologies: ["Python", "Anaconda", "Jupyter", "Pandas", "Matplotlib"],
    image: "/placeholder.svg",
    github: "",
    highlights: ["Data exploration", "Statistical analysis", "Visualization"]
  }, {
    title: "TechHive Blogging Website",
    category: "Full Stack",
    description: "A modern blogging website developed during internship at Brainwave Matrix. Built with JavaScript and React.js, offering a user-friendly interface with Home, Services, and content management features.",
    technologies: ["JavaScript", "React.js"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/brainmatrix_tache-2",
    highlights: ["Modern interface", "Content management", "Responsive design"]
  }, {
    title: "Full Stack Food Delivery Website",
    category: "Full Stack",
    description: "Complete food delivery platform with ordering system, payment integration using Stripe, and real-time order tracking.",
    technologies: ["React.js", "MongoDB", "Express", "Node.js", "Stripe"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Full-Stack-Food-Delivery-Website-In-React-JS-MongoDB-Express-Node-JS-Stripe",
    highlights: ["Payment integration", "Order tracking", "Full MERN stack"]
  }, {
    title: "Cosmetic Product E-Commerce",
    category: "Full Stack",
    description: "Cosmetic product ordering and delivery website developed during Brainwave Matrix internship. Features smooth shopping experience with product catalog and order management.",
    technologies: ["JavaScript", "React", "MongoDB"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Brainwave_Matrix_Intern",
    highlights: ["E-commerce features", "Product management", "Dynamic interface"]
  }, {
    title: "Koffa - Fresh Products Delivery",
    category: "Full Stack",
    description: "Fresh products delivery website with email notifications and file upload capabilities. Complete ordering and delivery platform.",
    technologies: ["JavaScript", "Node.js", "XAMPP", "MySQL", "Express.js", "Nodemailer", "Multer"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Koffa-Fresh-Products-Delivery-Website-",
    highlights: ["Email notifications", "File uploads", "Order management"]
  }, {
    title: "Client Management System",
    category: "Full Stack",
    description: "Simple but effective management application for tracking and managing client lists with a visual alert system.",
    technologies: ["JavaScript", "XAMPP", "MySQL", "HTML"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Client-Management-System-with-Alerts-JS-XAMPP-MySQL",
    highlights: ["Client tracking", "Alert system", "Database management"]
  }, {
    title: "Koffa Website Design",
    category: "UI/UX",
    description: "Complete website design for Koffa fresh products delivery platform, creating an intuitive ordering experience.",
    technologies: ["Figma"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Koffa-Website-Design-in-Figma-",
    highlights: ["User-friendly", "Complete design system", "Responsive layout"]
  }, {
    title: "Koffa Mobile App Design",
    category: "UI/UX",
    description: "Mobile app design for Koffa platform, optimized for seamless mobile experience and easy ordering.",
    technologies: ["Figma"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Koffa-Mobile-App-Design-with-Figma-",
    highlights: ["Mobile-first", "Intuitive interface", "Modern design"]
  }, {
    title: "Pixeo Homepage Design",
    category: "UI/UX",
    description: "UI/UX design for Pixeo's homepage, showcasing their innovative digital solutions with an engaging interface.",
    technologies: ["Figma"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/UI-UX-Design-for-Pixeo-s-Homepage-",
    highlights: ["Engaging design", "Digital solutions showcase", "Professional layout"]
  }, {
    title: "Family Farmhouse Email Design",
    category: "UI/UX",
    description: "Email template design for Farmhouse company, featuring modern and professional layout.",
    technologies: ["Figma"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Family-Farmhouse-Design-in-Figma-",
    highlights: ["Email template", "Professional design", "Brand consistency"]
  }, {
    title: "Secure Login Page Design",
    category: "UI/UX",
    description: "Secure login page design with user authentication fields, session management, and modern security features.",
    technologies: ["HTML", "CSS"],
    image: "/placeholder.svg",
    github: "https://github.com/fatmaabchouk/Secure-Login-Page-for-the-company-Frontend",
    highlights: ["Security-focused", "Clean interface", "User authentication"]
  }];
  const getCategoryColor = (category: string) => {
    const colors: {
      [key: string]: string;
    } = {
      "Data Science": "bg-primary/10 text-primary border-primary/20",
      "Full Stack": "bg-secondary/10 text-secondary border-secondary/20",
      "Data Visualization": "bg-accent-foreground/10 text-accent-foreground border-accent-foreground/20",
      "UI/UX": "bg-purple-500/10 text-purple-600 border-purple-500/20"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const getCategoryBackground = (category: string) => {
    const backgrounds: {
      [key: string]: string;
    } = {
      "Data Science": "linear-gradient(135deg, hsl(207 90% 54% / 0.05) 0%, hsl(207 90% 54% / 0.15) 100%)",
      "Full Stack": "linear-gradient(135deg, hsl(174 72% 56% / 0.05) 0%, hsl(174 72% 56% / 0.15) 100%)",
      "Data Visualization": "linear-gradient(135deg, hsl(207 90% 54% / 0.05) 0%, hsl(174 72% 56% / 0.1) 100%)",
      "UI/UX": "linear-gradient(135deg, hsl(280 70% 60% / 0.05) 0%, hsl(280 70% 60% / 0.15) 100%)"
    };
    return backgrounds[category] || "linear-gradient(135deg, hsl(210 40% 96% / 0.5) 0%, hsl(210 40% 98% / 0.5) 100%)";
  };
  return <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-primary bg-clip-text text-gray-800">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work in AI/ML, full stack development, and data visualization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="shadow-soft hover:shadow-strong transition-smooth group animate-fade-in overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-0">
                  {/* Project Header with Gradient */}
                  <div className="h-2 gradient-primary" />
                  
                  {/* Background gradient based on category */}
                  <div 
                    className="p-6 relative"
                    style={{
                      background: getCategoryBackground(project.category)
                    }}
                  >
                    {/* Category Badge */}
                    <Badge className={`${getCategoryColor(project.category)} mb-4`}>
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-3">Key Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, hIndex) => <span key={hIndex} className="text-xs px-3 py-1 bg-accent rounded-full text-foreground/80">
                            {highlight}
                          </span>)}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-3">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => <Badge key={tIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>)}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {project.github && (
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 group/btn"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-smooth" />
                          View on GitHub
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;