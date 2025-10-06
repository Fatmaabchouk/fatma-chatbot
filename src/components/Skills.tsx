import { Brain, Code, Palette, Database, Cloud, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Skills = () => {
  const skillCategories = [{
    icon: Brain,
    title: "Data Science & AI",
    skills: ["Machine Learning Pipelines", "Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Generative AI", "Predictive Analytics", "Model Deployment", "Anaconda & Jupyter Notebooks"]
  }, {
    icon: Code,
    title: "Full Stack Development",
    skills: ["React.js & Next.js", "Node.js & Express", "MongoDB & SQL", "RESTful APIs", "TypeScript", "Version Control (Git)"]
  }, {
    icon: Database,
    title: "Data Engineering",
    skills: ["KNIME Analytics Platform", "ETL Pipelines", "Data Warehousing", "Big Data Processing", "Data Quality & Governance", "SQL & NoSQL Databases"]
  }, {
    icon: TrendingUp,
    title: "Data Visualization",
    skills: ["Power BI Dashboards", "Tableau", "Data Storytelling", "Interactive Reports", "KPI Development", "Business Intelligence"]
  }, {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["Figma & Design Tools"]
  }];
  return <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-primary bg-clip-text text-gray-950">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive skill set spanning data science, development, and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  {category.skills.length > 0 && (
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>)}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <Card className="shadow-soft bg-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Professional Competencies</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold mb-2">Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Leading teams and driving projects to successful completion
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="font-semibold mb-2">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Thriving in team environments and cross-functional partnerships
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-semibold mb-2">Fast Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Quickly adapting to new technologies and methodologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;