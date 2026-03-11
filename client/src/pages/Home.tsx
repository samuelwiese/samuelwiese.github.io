import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Moderno
 * - Paleta neutra com accent azul profundo
 * - Tipografia hierárquica (Poppins para títulos, Inter para corpo)
 * - Espaçamento generoso e respiro visual
 * - Hover elegante com transições suaves
 */

export default function Home() {
  const profileImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663153429080/m5uXq8p3utxFyTGSYbpi9u/profile-samuel_0cb2ba32.png";
  
  const links = [
    {
      title: "GitHub",
      url: "https://github.com/samuelwiese",
      icon: Github,
      description: "Veja meus projetos e contribuições"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/wiesesamuel/",
      icon: Linkedin,
      description: "Conecte-se comigo profissionalmente"
    },
    {
      title: "Email",
      url: "mailto:samuel@example.com",
      icon: Mail,
      description: "Entre em contato direto"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Container principal */}
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={profileImage}
                alt="Samuel Wiese"
                className="w-32 h-32 rounded-full object-cover border-2 border-border shadow-sm"
              />
            </div>
          </div>

          {/* Nome e Bio */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Samuel Wiese
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Analista de Redes e Infraestrutura
            </p>
            <div className="h-px bg-border mt-6 mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especializado em infraestrutura de rede, segurança e soluções escaláveis.
              Apaixonado por tecnologia e inovação.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 mb-8">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 bg-card border border-border rounded-lg transition-all duration-300 hover:border-accent hover:shadow-md hover:bg-secondary"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-accent group-hover:text-accent transition-colors" />
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {link.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Rodapé */}
          <div className="text-center border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © 2026 Samuel Wiese. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
