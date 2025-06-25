# PokeApp

Este projeto foi desenvolvido como parte de uma avaliação técnica, utilizando Ionic com Angular e a API pública PokeAPI.

A proposta era criar uma aplicação que exibisse informações de Pokémons de forma organizada, funcional e responsiva.

Implementei uma tela principal com visual estilo retrô, exibindo um Pokémon por vez com nome, imagem, tipos, habilidades e um botão para navegar entre os cards.

Os dados são carregados via serviço separado usando HttpClient, com injeção de dependência seguindo boas práticas.

O usuário pode marcar Pokémons como favoritos, e as informações são salvas no `localStorage` com persistência local.

Implementei também uma tela de detalhes com informações adicionais como altura, peso, experiência base e estatísticas.

A interface foi desenhada com foco em responsividade, mantendo legibilidade e adaptação em diferentes tamanhos de tela.

Não consegui concluir a entrega a tempo, mas optei por publicar o projeto como aprendizado e demonstração de habilidades técnicas.

Para rodar o projeto localmente:
```bash
npm install
ionic serve
