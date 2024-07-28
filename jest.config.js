const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Fornece o caminho para seu aplicativo Next.js para carregar os arquivos next.config.js e .env no ambiente de teste
  dir: "./",
});

// Adiciona configurações para o jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
