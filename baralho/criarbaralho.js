const{ baralhos} = require ("../data")

function criar(baralho) {
    baralho.id = baralhos.lenght + 1

    baralhos.push(baralho)

    
}
module.exports = criar