const { aluguel } = require("../data")

function criaraluguel(req, res) {
    console.log(req.body)
    const novoaluguel = {
        idaluguel: aluguel.length + 1,
        idlivro: aluguel.length + 1,
        idestudante: aluguel.length + 1,
        dataAluguel: req.body.dataAluguel,
        datadevolucao: req.body.datadevolucao
    }
    if (!novoaluguel) {
        res.status(404).send("Aluguel Não encontrado")

    }
    aluguel.push(novoaluguel)
    res.status(200).send({
        message: "Aluguel criado com sucesso",
        aluguel: novoaluguel
    })

}
module.exports = criaraluguel