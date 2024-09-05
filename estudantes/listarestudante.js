const { estudantes} = require("../data")

function listarestudante(req,res) {
    res.status(200).send(estudantes)
    
}
module.exports = listarestudante