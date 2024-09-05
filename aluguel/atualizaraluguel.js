const { aluguel } = require("../data")

function atualizaraluguel(req, res) {
    const { id } = req.params
    const novadataaluguel = req.body.dataAluguel
    const novadatadevolucao = req.body.datadevolucao

    const verifica = aluguel.find(li => li.idaluguel == id)
    if (!verifica) {
        res.status(400).send("Aluguel não encontrado")
    }
    verifica.dataAluguel = novadataaluguel
    verifica.datadevolucao = novadatadevolucao

    res.status(200).send({
        mensagem: "Estudante atualizado com sucesso",
        aluguel: novadataaluguel,
        datadevolucao: novadatadevolucao,

    })
}
module.exports = atualizaraluguel