const {livros} = require("../data")

function deletarlivro(req,res) {
    const {id} = req.params
    const verificar = livros.findIndex(li => li.id == id)

    if (verificar === -1) {
      return  res.status(400).send('Livro não deletado')
        
    }
    const deletarlivro = livros.splice(verificar,1)
    res.status(200).send({
        message: " Livro deletado com sucesso",
        livro : deletarlivro
    })
}
module.exports = deletarlivro