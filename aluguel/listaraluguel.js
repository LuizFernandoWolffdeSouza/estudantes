const { aluguel} = require("../data")

function listaraluguel(req,res) {
    res.status(200).send(aluguel)
    
}
module.exports = listaraluguel