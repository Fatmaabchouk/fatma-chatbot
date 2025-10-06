import { Cpu, Globe, Sparkles, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Services = () => {
  const services = [{
    icon: Cpu,
    title: "End-to-End AI/ML Solutions",
    description: "From problem definition to deployment, I build complete machine learning pipelines including data preprocessing, model development, training, and production deployment.",
    features: ["Custom ML model development", "Credit scoring & risk assessment", "NLP & text analytics", "Computer vision solutions", "Model monitoring & maintenance"]
  }, {
    icon: Globe,
    title: "Full Stack Web Development",
    description: "Creating modern, responsive web applications with seamless user experiences. From e-commerce platforms to content management systems and custom web tools.",
    features: ["React & Next.js applications", "RESTful API development", "Database design & optimization", "Authentication & security", "Responsive, mobile-first design"]
  }, {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Crafting intuitive, user-centered designs that balance aesthetics with functionality. Every interface is designed with your users and business goals in mind.",
    features: ["User research & personas", "Wireframing & prototyping", "Design system creation", "Usability testing", "Accessibility compliance"]
  }, {
    icon: BarChart,
    title: "Data Visualization & BI",
    description: "Transform your data into compelling visual stories. I create interactive dashboards and reports that empower data-driven decision making across your organization.",
    features: ["Power BI & Tableau dashboards", "Interactive data visualizations", "KPI tracking & reporting", "Real-time analytics", "Custom data storytelling"]
  }];
  return <section id="services" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-primary bg-clip-text text-gray-800">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions that bridge technical innovation with business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="shadow-soft hover:shadow-strong transition-smooth group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground/80">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Card className="shadow-medium bg-gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-950">
                  Ready to Transform Your Ideas into Reality?
                </h3>
                <p className="mb-6 max-w-2xl mx-auto text-gray-950">
                  Let's collaborate to create innovative solutions that drive your business forward. 
                  Whether it's AI, web development, or data visualization, I'm here to help.
                </p>
                <a href="#contact" onClick={e => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth"
                });
              }} className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-smooth shadow-medium">
                  Let's Talk
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;