import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "3º Semestre • 2º Ano",
    description: "Lógica de programação, estrutura de dados e engenharia de software.",
    type: "degree",
  },
  {
    icon: Award,
    title: "Fullstack Club",
    subtitle: "Intensivo de Programação",
    description: "Formação completa em desenvolvimento web moderno.",
    type: "course",
  },
  {
    icon: BookOpen,
    title: "Curso em Vídeo",
    subtitle: "Fundamentos Web",
    description: "Base sólida em HTML, CSS e JavaScript.",
    type: "course",
  },
];

export const EducationSection = () => {
  return (
    <section id="educacao" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">{"// formação"}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educação<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-4 max-w-2xl">
          {education.map((item, index) => (
            <div key={index} className="bento-card flex gap-4">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  item.type === "degree" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p
                  className={`text-sm font-mono mb-1 ${
                    item.type === "degree" ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
