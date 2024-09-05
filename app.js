const express = require("express")
const app = express()
const porta = 2000
app.use(express.json())
app.get("/",(req,res) =>{
    res.send("bem vindo")
})

app.listen( porta, () =>{
    console.log(`Rodando aqui ${porta}`)
}
)

// 1- livros
const criarlivro = require("./livros/criarlivro")
const listarlivro = require("./livros/listarlivro")
const atualizarlivro = require ("./livros/atualizarlivro")
const deletarlivro = require("./livros/deletarlivro")

app.post("/livrocriar", criarlivro)
app.get("/listar", listarlivro)
app.delete("/deletar/:id", deletarlivro)
app.put("/atualizar/:id", atualizarlivro)

//2-estudantes
const criarestudante = require("./estudantes/criarestudante")
const listarestudante = require ("./estudantes/listarestudante")
const atualizarestudante = require("./estudantes/atualizarestudante")
const deletarestudante = require ("./estudantes/deletarestudante")

app.post("/criarestudante", criarestudante)
app.get("/listarestudante", listarestudante)
app.put("/atualizarestudante/:id", atualizarestudante)
app.delete("/deletarestudante/:id", deletarestudante)

//3-Aluguéis
const criaraluguel = require("./aluguel/criaraluguel")
const listaraluguel = require("./aluguel/listaraluguel")
const atualizaraluguel = require("./aluguel/atualizaraluguel")
const deletaraluguel = require("./aluguel/deletaraluguel")

app.post("/criaraluguel", criaraluguel)
app.get("/listaraluguel", listaraluguel)
app.put("/atualizaraluguel", atualizaraluguel)
app.delete("/deletaraluguel", deletaraluguel)




