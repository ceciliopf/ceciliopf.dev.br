import AnimatedSection from "@/components/ui/AnimatedSection";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              Sobre mim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Quem sou eu
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Sou um{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  Desenvolvedor Full Stack
                </span>{" "}
                apaixonado por tecnologia e inovação, com experiência em
                construir aplicações robustas e escaláveis do backend ao
                frontend.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Minha jornada começou com Java e Spring Boot, mas ao longo do
                tempo me aprofundei em tecnologias como Node.js, React e
                Angular, sempre buscando entregar soluções de alta qualidade
                com foco na experiência do usuário.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou movido por desafios. Cada projeto é uma nova oportunidade
                de aprender, crescer e criar algo que faça a diferença. Busco
                constantemente as melhores práticas de desenvolvimento de
                software, arquitetura limpa e performance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "3+", label: "Anos de Experiência" },
                  { value: "20+", label: "Projetos Entregues" },
                  { value: "10+", label: "Tecnologias" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                  >
                    <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Tecnologias & Ferramentas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-400 dark:text-gray-600 mb-3 font-medium uppercase tracking-wide">
                  Categorias
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Backend", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400" },
                    { label: "Frontend", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400" },
                    { label: "Linguagem", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400" },
                    { label: "Banco de Dados", color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400" },
                    { label: "DevOps", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400" },
                  ].map((cat) => (
                    <span
                      key={cat.label}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${cat.color}`}
                    >
                      {cat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
