const  {estudantes} = require("../data")

function criarestudante(req,res) {
    console.log(req.body)
    const novoestudante ={
        ides: estudantes.length + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    }
    const verifica = aluguel.findIndex
    if (!novoestudante) {
        res.status(404).send("Estudante Não encontrado")
        
    }
    estudantes.push(novoestudante)
    res.status(200).send({ message: "Estudante criado com sucesso",
    estudante: novoestudante
    })
  
}
module.exports = criarestudante
    
