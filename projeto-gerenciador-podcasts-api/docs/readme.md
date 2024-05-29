# Podcast Manager

### Descrição
Um app estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo.

### Features
- Listar os episódios de podcasts em sessões de categorias: Os episódios são organizados em categorias como saúde, bodybuilder, mentalidade e humor, permitindo aos usuários explorar facilmente os conteúdos disponiveis.
- Filtrar episódios por nome de podcast: Os episódios podem realizar buscar especificas por nome de podcast, facilitando o acesso aos episódios desejados.

## Implementação

### Listar os episódios de podcasts em sessões de categorias

- **Endpoint:** `GET /list`
- **Descrição:** Retorna uma lista de episodios de podcasts organizados por categorias.
- **Exemplo de resposta:**

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - FLOW #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "category": ["esporte", "saúde", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "category": ["esporte", "corrida"]
    }
]
```

### Filtrar episódios por nome de podcast

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna uma lista de episodios de podcasts com base no nome do podcast fornecido.
- **Exemplo de requisição:** `GET /episode?podcastName=flow`

### Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Plataforma de desenvolvimento para construir a API.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a segurança e a qualidade do código.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta para construir pacotes TypeScript, usada para criar a versão de distribuição do projeto.
- **[Tsx](https://www.npmjs.com/package/tsx):** Ferramenta de execução de TypeScript, utilizada para iniciar o servidor em modo de desenvolvimento e em modo de observação (watch mode).
- **[@types/node](https://www.npmjs.com/package/@types/node):** Tipagens para Node.js, proporcionando suporte ao desenvolvimento em TypeScript com autocompletar e verificação de tipos para APIs Node.js.

### Como Rodar o Projeto
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o servidor em modo de desenvolvimento com `npm run start:dev`
4. Execute o servidor em modo de observação com `npm run start:watch`
5. Crie a versão de distribuição com `npm run dist`
6. Execute a versão de distribuição com `npm run start:dist`

### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

### Licença
Este projeto está licenciado sob a ISC License.