const express = require("express")
const app = express();

//Sinalizar para o express que estamos usando o JSON no body das requisições

app.use(express.json());

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
app.post("/pontuacoes", function(req,res) {
  const item = req.body;
 //console.log(item);

 //Adicionar o item na lista
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  })

  res.send("Item Criado com sucesso");
});

app.listen(3000);
