import { Dogs, dogsDatabase } from "./mock";

// Rotas de API no Next.js fornecem uma maneira poderosa e conveniente de adicionar funcionalidade de backend aos seus aplicativos.
// Elas facilitam o manuseio da lógica do lado do servidor, garantem a segurança, otimizam o desempenho e mantêm uma base de código coesa.
// Como parte da arquitetura moderna do Jamstack, elas desempenham um papel crítico na construção de aplicativos da web dinâmicos, escaláveis ​​e eficientes.
// Então sempre que trabalho com requests, eu tenho preferencia de manusear tudo com as rotas de API no Next.js

// aqui temos um simples retorno, mas imagine que podemos tratar autenticação, configuração de parâmetros e queries, validações, etc...
export async function GET(request: Request) {
  return Response.json({ dogs: dogsDatabase });
}
