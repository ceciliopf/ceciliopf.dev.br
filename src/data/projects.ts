export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão de Tarefas",
    description:
      "Aplicação full stack para gerenciamento de tarefas com autenticação JWT, CRUD completo e interface responsiva. Backend em Spring Boot e frontend em React.",
    imageUrl: "/images/project1.jpg",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/ceciliopf",
    liveUrl: "https://github.com/ceciliopf",
  },
  {
    id: 2,
    title: "API RESTful de E-commerce",
    description:
      "API completa para plataforma de e-commerce com gestão de produtos, pedidos, pagamentos e notificações em tempo real via WebSocket.",
    imageUrl: "/images/project2.jpg",
    technologies: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis"],
    githubUrl: "https://github.com/ceciliopf",
  },
  {
    id: 3,
    title: "Dashboard Financeiro",
    description:
      "Painel analítico com visualização de dados financeiros em tempo real, relatórios interativos e integração com múltiplas APIs bancárias.",
    imageUrl: "/images/project3.jpg",
    technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/ceciliopf",
    liveUrl: "https://github.com/ceciliopf",
  },
  {
    id: 4,
    title: "Microsserviços com Kafka",
    description:
      "Arquitetura de microsserviços com comunicação assíncrona via Apache Kafka, orquestração com Docker Compose e monitoramento com Prometheus.",
    imageUrl: "/images/project4.jpg",
    technologies: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/ceciliopf",
  },
  {
    id: 5,
    title: "Plataforma de Agendamentos",
    description:
      "Sistema web de agendamentos online com calendário interativo, notificações por e-mail, gestão de clientes e relatórios gerenciais.",
    imageUrl: "/images/project5.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    githubUrl: "https://github.com/ceciliopf",
    liveUrl: "https://github.com/ceciliopf",
  },
  {
    id: 6,
    title: "App de Monitoramento IoT",
    description:
      "Aplicação para monitoramento de dispositivos IoT com dashboard em tempo real, alertas automáticos e histórico de dados com gráficos interativos.",
    imageUrl: "/images/project6.jpg",
    technologies: ["Angular", "Node.js", "MQTT", "InfluxDB", "Grafana"],
    githubUrl: "https://github.com/ceciliopf",
  },
];
