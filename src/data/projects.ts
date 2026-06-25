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
    title: "Fire Alert",
    description:
      "Sistema de monitoramento e alerta de incêndios em tempo real. Plataforma para gerenciar ocorrências, coordenar equipes de combate e emitir notificações automáticas com localização das focos de incêndio.",
    imageUrl: "/images/project1.jpg",
    technologies: ["Java", "Spring Boot", "REST API", "MySQL"],
    githubUrl: "https://github.com/ceciliopf/fire_alert",
  },
  {
    id: 2,
    title: "Bolão Copa",
    description:
      "API REST para gerenciamento de bolão de Copa do Mundo. Permite criar palpites para as partidas, calcular pontuações dos participantes e exibir o ranking geral do bolão em tempo real.",
    imageUrl: "/images/project2.jpg",
    technologies: ["Java", "Spring Boot", "REST API", "H2 Database"],
    githubUrl: "https://github.com/ceciliopf/bolao_copa",
  },
  {
    id: 3,
    title: "Patas Unidas",
    description:
      "Aplicativo Android para adoção responsável de pets. Conecta tutores de animais a possíveis adotantes, com listagem de pets disponíveis, perfil detalhado de cada animal e sistema de contato direto.",
    imageUrl: "/images/project3.jpg",
    technologies: ["Kotlin", "Android", "Jetpack Compose", "Material 3"],
    githubUrl: "https://github.com/ceciliopf/Patas_Unidas",
  },
  {
    id: 4,
    title: "Loja de Games",
    description:
      "Aplicativo Android de loja de jogos com catálogo interativo, detalhes dos produtos, carrinho de compras e integração com pagamento via PIX, gerado dinamicamente por QR Code.",
    imageUrl: "/images/project4.jpg",
    technologies: ["Kotlin", "Android", "Jetpack Compose", "REST API", "PIX"],
    githubUrl: "https://github.com/ceciliopf/LojaDeGames_frontend",
  },
  {
    id: 5,
    title: "Product API",
    description:
      "API RESTful para gerenciamento de produtos com operações completas de CRUD. Desenvolvida com Spring Boot e banco de dados H2 em memória, documentada via Swagger e pronta para integração com frontends.",
    imageUrl: "/images/project5.jpg",
    technologies: ["Java", "Spring Boot", "H2 Database", "Swagger"],
    githubUrl: "https://github.com/ceciliopf/productapi",
  },
];
