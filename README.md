<p align="center">
  <strong>ceciliopf.dev.br</strong>
</p>

<p align="center">
  Portfólio pessoal de Felipe — Desenvolvedor Full Stack
</p>

<p align="center">
  <a href="https://ceciliopf.dev.br">🌐 Ver ao vivo</a> ·
  <a href="https://linkedin.com/in/ceciliopf">💼 LinkedIn</a> ·
  <a href="https://github.com/ceciliopf">🐙 GitHub</a>
</p>

---

## ✨ Sobre

Site pessoal e portfólio de desenvolvedor, construído do zero com foco em **performance**, **design moderno** e **experiência do usuário**. Apresenta meus projetos, habilidades técnicas e um formulário de contato funcional com envio de e-mail.

---

## 🖥️ Preview

| Light Mode | Dark Mode |
|:-:|:-:|
| ![Light](https://via.placeholder.com/400x250/f8fafc/4f46e5?text=Light+Mode) | ![Dark](https://via.placeholder.com/400x250/030712/818cf8?text=Dark+Mode) |

> Substitua as imagens acima por screenshots reais do seu site.

---

## 🚀 Tech Stack

| Categoria | Tecnologia | Versão |
|-----------|-----------|--------|
| **Framework** | [Next.js](https://nextjs.org/) | 16.2 |
| **UI Library** | [React](https://react.dev/) | 19.2 |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) | 12.x |
| **E-mail** | [Resend](https://resend.com/) | 6.x |
| **Tema** | [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 |
| **Ícones** | [React Icons](https://react-icons.github.io/react-icons/) | 5.6 |

---

## 📋 Funcionalidades

- 🏠 **Hero Section** — Apresentação com animações de entrada e gradient animado
- 👤 **Sobre mim** — Bio, estatísticas e grid de tecnologias com badges categorizados
- 💼 **Projetos** — Grid responsivo de cards com imagem, descrição, tecnologias e links
- 📬 **Formulário de Contato** — Envio real de e-mail via API Route + Resend
- 🌗 **Dark / Light Mode** — Alternância de tema com persistência via `next-themes`
- 📱 **Totalmente Responsivo** — Mobile-first, adaptável a qualquer tamanho de tela
- ⚡ **Animações** — Scroll animations com Framer Motion
- 🔍 **SEO** — Meta tags, Open Graph e HTML semântico

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API Route — envio de e-mail via Resend
│   ├── globals.css               # Estilos globais + Tailwind
│   ├── layout.tsx                # Layout raiz (Navbar + Footer + Providers)
│   └── page.tsx                  # Página principal (Home)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Navegação responsiva
│   │   ├── Footer.tsx            # Rodapé com links sociais
│   │   └── Providers.tsx         # Theme provider (next-themes)
│   ├── sections/
│   │   ├── HeroSection.tsx       # Seção hero com animações
│   │   ├── AboutSection.tsx      # Seção sobre + skills
│   │   ├── ProjectsSection.tsx   # Grid de projetos
│   │   └── ContactSection.tsx    # Formulário de contato
│   └── ui/
│       ├── AnimatedSection.tsx   # Wrapper de animação (scroll)
│       ├── ProjectCard.tsx       # Card de projeto
│       ├── SkillBadge.tsx        # Badge de tecnologia
│       └── ThemeToggle.tsx       # Botão de tema
└── data/
    ├── projects.ts               # Dados dos projetos
    └── skills.ts                 # Dados das tecnologias
```

---

## ⚙️ Rodando Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ceciliopf/ceciliopf.dev.git
cd ceciliopf.dev

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_sua_chave_aqui
CONTACT_EMAIL=seu@email.com
```

> Obtenha sua chave em [resend.com/api-keys](https://resend.com/api-keys)

### Executando

```bash
# Modo de desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 📬 Formulário de Contato

O formulário de contato utiliza a API Route do Next.js (`/api/contact`) integrada com o **Resend** para envio de e-mails. Quando um visitante envia uma mensagem:

1. Os dados são validados no servidor
2. Um e-mail HTML formatado é enviado via Resend
3. O remetente recebe feedback visual de sucesso ou erro

Não é necessário backend separado — tudo roda como serverless function.

---

## 🎨 Design

- **Paleta**: Indigo, Purple e tons de cinza
- **Tipografia**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Efeitos**: Glassmorphism, gradients animados, orbs decorativos
- **Animações**: Fade-in on scroll, hover effects, micro-interações

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência ou inspiração.

---

<p align="center">
  Feito com ❤️ por <a href="https://github.com/ceciliopf">Felipe</a>
</p>
