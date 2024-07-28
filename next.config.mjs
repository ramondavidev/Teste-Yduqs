/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configurando padrões de carregamento de imagem remota
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-ninjas.com",
        port: "",
        // Padrão de caminho para corresponder às imagens a serem carregadas
        // O asterisco duplo (**) é um curinga que corresponde a quaisquer subdiretórios ou nomes de arquivo
        pathname: "/images/dogs/**",
      },
    ],
  },
};

export default nextConfig;
