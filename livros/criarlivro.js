const { livros} = require("../data")

function  criarlivro(req, res) {
    console.log(req.body)
    const novolivro ={
        id: livros.length + 1,
        nome: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
    }
    if (!novolivro) {
        res.status(404).send("Não encontrado")
        
    }
    livros.push(novolivro)
    res.status(200).send({ message: "Livro criado com sucesso",
    livro: novolivro
    })
  
}
module.exports = criarlivro