const { livros} = require("../data")

function listarlivro(req,res) {
    res.status(200).send(livros)
    
}
module.exports = listarlivro