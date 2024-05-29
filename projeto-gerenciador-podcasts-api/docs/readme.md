# Podcast Manager

### Descrição
Um app estilo netflix, onde possa centralizar diferentes episodios podcasts separados por categoria

### Domínio
Podcast feito em video

### Features
- Listar os episodios podcasts em sessoes de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episodios por nome de podcast

## Como

#### Feature
Listar os episodios podcasts em sessoes de categorias

### Como vou implementar:
GET: Retorna lista de episodios

response:

```js
    [
        {
            podcastName:"flow",
            episode:"CBUM - FLOW #319",
            videoId:"pQSuQmUfS30",
            cover:"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=pQSuQmUfS30",
            category:["esporte","saúde","bodybuilder"]
        },
        {
            podcastName:"flow",
            episode:"RUBENS BARRICHELLO - Flow #339",
            videoId:"4KDGTdiOV4I",
            cover:"https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=4KDGTdiOV4I",
            category:["esporte","corrida"]
        }
    ]
```

GET: Retorna lista de episodios baseado em um parametro pelo cliente do nome do podcast