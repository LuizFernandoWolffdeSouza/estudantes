const {livros} = require("../data")

function atualizarlivro(req, res) {
    const {id} = req.params
    const novotitulo = req.body.titulo
    const novoautor = req.body.autor
    const novoano = req.body.ano
    const novogenero = req.body.genero

    const verifica = livros.find(li => li.id == id)
    if (!verifica) {
        res.status(400).send("Livro não encontrado")
    }
verifica.titulo = novotitulo
verifica.autor = novoautor
verifica.ano = novoano
verifica.genero = novogenero

res.status(200).send({
    mensagem: "Livro atualizado com sucesso",
    titulo: novotitulo,
    autor: novoautor,
    ano: novoano,
    genero: novogenero



})
}
module.exports = atualizarlivro