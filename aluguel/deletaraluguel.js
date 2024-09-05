const {aluguel} = require("../data")

function deletaraluguel(req,res) {
    const {id} = req.params
    const verificar = aluguel.findIndex(al => al.idaluguel == id)

    if (verificar === -1) {
      return  res.status(400).send('Aluguel não deletado')
        
    }
    const deletaraluguel= aluguel.splice(verificar,1)
    res.status(200).send({
        message: " Aluguel deletado com sucesso",
        aluguel : deletaraluguel
    })
}
module.exports = deletaraluguel