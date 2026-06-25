import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Uma seleção dos meus projetos mais relevantes — desde APIs
              robustas até interfaces modernas e intuitivas.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects grid — 5 cards: 3 top row, 2 centered bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        {projects.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:max-w-[calc(66.666%+12px)] lg:mx-auto">
            {projects.slice(3).map((project, index) => (
              <AnimatedSection key={project.id} delay={(index + 3) * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Quer ver mais projetos?
            </p>
            <a
              href="https://github.com/ceciliopf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver mais no GitHub
              <span>→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
