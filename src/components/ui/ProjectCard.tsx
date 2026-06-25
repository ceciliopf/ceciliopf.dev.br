"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full h-48 shrink-0 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[3.75rem] line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-1 min-h-[2.5rem] items-start">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions — always pinned to the bottom */}
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <FiExternalLink className="w-4 h-4" />
              Ver Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
