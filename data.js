let livros = [
    { id: 1, titulo: "habitos", autor: "Fernando Prestes", ano: 2020, genero: "autoajuda"},
    { id: 1, titulo: "god of war", autor: "cacaetada", ano: 2010, genero: "ficção"},
]
let estudantes = [
    {ides :1, nome: "Luiz Wolff", matricula: 8924, curso: "dev", ano: 1900},
    {ides :2, nome: "Carlos", matricula: 8924, curso: "dev", ano: 1900},
]

let aluguel = [
    {idaluguel: 1, idlivro: 1, idestudante:1, dataAluguel: "2024-02-01", datadevolucao: "2023-05"},
    {idaluguel: 2, idlivro: 2, idestudante:2, dataAluguel: "2024-02-01", datadevolucao: "2023-05"}
]
module.exports = { livros, aluguel, estudantes}