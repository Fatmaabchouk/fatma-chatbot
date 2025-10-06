import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "fatma.abchouk@example.com",
    href: "mailto:fatma.abchouk@example.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+216 52 086 967",
    href: "tel:+21652086967"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fatma-abchouk",
    href: "https://linkedin.com/in/fatma-abchouk"
  }, {
    icon: Github,
    label: "GitHub",
    value: "github.com/fatmaabchouk",
    href: "https://github.com/fatmaabchouk"
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-primary bg-clip-text text-zinc-800">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-soft animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required />
                  </div>

                  <Button type="submit" className="w-full group shadow-medium">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => <a key={index} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 group hover:translate-x-2 transition-smooth">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                            {info.value}
                          </p>
                        </div>
                      </a>)}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft gradient-primary">
                <CardContent className="p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">Let's Collaborate!</h3>
                  <p className="mb-6 leading-relaxed">
                    I'm always excited to work on innovative projects and collaborate with passionate 
                    individuals and teams. Whether you have a specific project in mind or just want to 
                    explore possibilities, don't hesitate to reach out!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                      Open to Opportunities
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                      Available for Consulting
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                      Remote Friendly
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;