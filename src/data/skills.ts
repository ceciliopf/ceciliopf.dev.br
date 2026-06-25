export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "SQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "REST APIs", category: "backend" },
  { name: "Microsserviços", category: "backend" },
];
