import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe — Desenvolvedor Full Stack",
  description:
    "Portfolio de Felipe, Desenvolvedor Full Stack especializado em Java, Spring Boot, Node.js e React. Construindo soluções escaláveis e de alto impacto.",
  keywords: [
    "desenvolvedor full stack",
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Felipe" }],
  openGraph: {
    title: "Felipe — Desenvolvedor Full Stack",
    description:
      "Portfolio de Felipe, Desenvolvedor Full Stack especializado em Java, Spring Boot, Node.js e React.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
