# Documentação do aplicativo Dog

## Visão geral

Bem-vindo ao repositório Dog App! Este é um aplicativo da web criado com React e Next.js que permite aos usuários visualizar informações sobre várias raças de cães e gerenciar suas raças favoritas. Este README fornece uma visão geral do projeto e sua estrutura.

## Visão Geral

O Dog App permite aos usuários:

* Ver informações detalhadas sobre diferentes raças de cães.
* Adicione raças de cães à sua lista de favoritos.
* Remover cães da lista de favoritos.
* O aplicativo usa React Context para gerenciamento de estado e Jest para testes de unidade.

## Getting Started
Para começar a usar o aplicativo Dog localmente, siga estas etapas:

### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados na sua máquina.

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/ramondavidev/Teste-Yduqs.git
cd Teste-Yduqs
```

2. Instale as dependências:
```bash
npm install
```

### Executando o aplicativo
Para executar o aplicativo localmente, use o seguinte comando:

```bash
npm run dev
```

Este comando inicia o servidor de desenvolvimento e você pode acessar o aplicativo no seu navegador em http://localhost:3000.

## Estrutura do Projeto

O projeto segue uma abordagem estruturada para desenvolvimento e organização de componentes. Cada componente é acompanhado por quatro arquivos essenciais:

1. Component File: Contains the main logic and JSX structure of the component.
   * Exemplo: Card.component.tsx
2. Arquivo de estilos: contém os estilos específicos do componente.
   * Exemplo: Card.styles.tsx
3. Arquivo de teste: contém testes de unidade para o componente.
   * Exemplo: Card.test.tsx
4. Arquivo de índice: serve como ponto de entrada para o componente e fornece um caminho de importação simplificado.
   * Exemplo: index.tsx

## Gerenciamento de Estado
### React Context
O aplicativo usa React Context para gerenciar o estado relacionado aos cães. O DogContext fornece um local centralizado para gerenciar e acessar cães em diferentes componentes.

## Testing
### Teste de unidade

O projeto usa Jest para testes unitários. Cada componente vem com seu próprio arquivo de teste (*.test.tsx) para garantir que funcione corretamente e conforme o esperado. Os arquivos de teste utilizam a React Testing Library para renderizar componentes e fazer asserções.

### Executando Testes
Para executar os testes, use o seguinte comando:

```bash
npm run test
```

> **Note:** Este comando iniciará o Jest e executará todos os casos de teste definidos nos arquivos *.test.tsx.

## Conclusão
Esta documentação fornece uma visão geral abrangente do projeto Dog App, incluindo sua estrutura, componentes, gerenciamento de estado e abordagem de teste. Ao aderir a esta estrutura, o projeto mantém uma separação clara de funcionalidades, tornando-o mais fácil de desenvolver, testar e manter.



