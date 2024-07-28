import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { DogProvider } from "./context";

// Inicializa a fonte com "latin". Isso fornece uma classe Google Fonts.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Yduqs",
  description: "Projeto listagem de dogs",
};

// Defina o componente RootLayout que será usado como um wrapper para todo o aplicativo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Envolva os componentes com o DogProvider para dar a eles acesso ao contexto */}
        <DogProvider>{children}</DogProvider>
      </body>
    </html>
  );
}
