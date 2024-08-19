const{ baralhos} = require ("../data")

function criar(baralho) {
    baralho.idBaralho = baralhos.lenght + 1

    baralhos.push(baralho)

    
}
module.exports = criar