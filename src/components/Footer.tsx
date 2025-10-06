import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    href: "https://github.com/fatmaabchouk",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/in/fatma-abchouk",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:fatma.abchouk@example.com",
    label: "Email"
  }];
  return <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-primary bg-clip-text text-zinc-900">
                Fatma Abchouk
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Data Scientist, Full Stack Developer, and UI/UX Designer passionate about creating 
                innovative solutions that bridge technology and business.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Services", "Portfolio", "Contact"].map(link => <li key={link}>
                    <a href={`#${link.toLowerCase()}`} onClick={e => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({
                    behavior: "smooth"
                  });
                }} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth group">
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-smooth" />
                  </a>)}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Fatma Abchouk. Built with
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;