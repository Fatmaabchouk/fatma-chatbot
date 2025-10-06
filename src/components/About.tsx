import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const education = [{
    degree: "Master's in Professional Data Science",
    institution: "ISAE Gafsa",
    year: "2024 – Present"
  }, {
    degree: "Bachelor's in Business Information Systems",
    institution: "ISAE Gafsa",
    year: "2024"
  }, {
    degree: "Baccalaureate in Experimental Sciences",
    institution: "",
    year: "2021"
  }];
  return <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-primary bg-clip-text text-gray-800">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate professional combining technical expertise with business acumen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Professional Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a hybrid professional who seamlessly bridges the worlds of data science, artificial intelligence, 
                  and full stack development. My unique blend of technical expertise and business understanding allows 
                  me to create end-to-end solutions that deliver real impact.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With certifications from IBM in Python for Data Science & AI and KNIME, combined with hands-on 
                  experience in full stack development and UI/UX design, I bring a comprehensive approach to every project.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in transforming complex data into actionable insights and building user-centered 
                  applications that solve real business challenges. I thrive in collaborative environments where 
                  innovation meets practical implementation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {["End-to-end AI/ML solution development", "Leadership and team collaboration", "Fast learner with entrepreneurial mindset", "Strong focus on user experience", "Business-oriented technical solutions"].map((strength, index) => <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {strength}
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                          {edu.institution && <p className="text-muted-foreground mb-1">{edu.institution}</p>}
                          <p className="text-sm text-primary font-medium">{edu.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;