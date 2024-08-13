const {baralhos} = require('../data')

function listar() {
    baralhos.forEach(bar => console.log(`
    ID: ${bar.idBaralho}
    Nome: ${bar.nome}`))



    
}
module.exports = listar