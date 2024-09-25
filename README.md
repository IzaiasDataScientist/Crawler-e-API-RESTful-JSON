Crawler e API RESTful JSON
Este projeto consiste na criação de um crawler que é uma API RESTful em formato JSON. O crawler foi desenvolvido utilizando Node.js em conjunto com a biblioteca Playwright, enquanto a API foi criada com Express.js, adotando o paradigma de orientação a objetos para a organização do código.
Como executar o projeto
Após clonar o repositório, no diretório do projeto, você pode iniciar o servidor executando o comando:
node server.js
Melhorias futuras
Aqui estão algumas possíveis melhorias que podem ser implementadas no projeto:
    • Persistência de dados: Armazenar os dados coletados em um banco de dados como o MongoDB.
    • Segurança e autenticação: Implementar autenticação usando jsonwebtoken e melhorar a segurança das requisições com CORS.
    • Melhorias na performance do scraping: Atualmente, as URLs são acessadas uma de cada vez. A performance pode ser aprimorada integrando um banco de dados para capturar os dados coletados.
Endpoints da API
Abaixo estão os principais endpoints disponíveis para acessar os dados via API:
    • Listar todos os produtos:
GET http://localhost:3000/api/productsAll
    • Filtrar produtos da marca Lenovo:
GET http://localhost:3000/api/productsLenovo
    • Filtrar produtos com uma quantidade mínima de estrelas:
GET http://localhost:3000/api/products/stars?stars=3
    • Buscar produto por ID:
GET http://localhost:3000/api/products/45
