const {estudantes} = require("../data")

function atualizarlivro(req, res) {
    const {id} = req.params
    const novonome = req.body.nome
    const novamatricula = req.body.matricula
    const novocurso= req.body.curso
    const novoano = req.body.ano

    const verifica = estudantes.find(li => li.ides == id)
    if (!verifica) {
        res.status(400).send("Estudante não encontrado")
    }
verifica.nome = novonome
verifica.autor = novamatricula
verifica.curso = novocurso
verifica.ano = novoano

res.status(200).send({
    mensagem: "Estudante atualizado com sucesso",
    nome: novonome,
    autor: novamatricula,
    curso: novocurso,
    genero: novoano



})
}
 module.exports = atualizarlivro