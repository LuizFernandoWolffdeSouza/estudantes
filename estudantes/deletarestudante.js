const {estudantes} = require("../data")

function deletarestudante(req,res) {
    const {id} = req.params
    const verificar = estudantes.findIndex(li => li.ides == id)

    if (verificar === -1) {
      return  res.status(400).send('Estudante não deletado')
        
    }
    const deletarestudante = estudantes.splice(verificar,1)
    res.status(200).send({
        message: " Estudante deletado com sucesso",
        estudante : deletarestudante
    })
}
module.exports = deletarestudante