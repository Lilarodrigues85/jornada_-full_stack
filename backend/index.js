const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("Hello, World!")
})

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!")
});

// Nosso backend armazena as pontuações das jogadas
// Criar a lista com as pontuações

const lista = [
  {
    id: 1,
    nome: "Dalila",
    pontos: 90,
  },
{
  id: 2,
  nome: "Felipe",
  pontos: 52,
},

{
  id: 3,
  nome: "Dalila",
  pontos: 97,
},
];

// Endpoint READ ALL - [GET] / pontuacoes
app.get("/pontuacoes", function(req,res) {
  res.send(lista);
});

// Endpoint CREAT - [POST] / pontuacoes

app.listen(3000);
