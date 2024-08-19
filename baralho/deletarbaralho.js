const {baralhos} = require('../data')
function deletar (id) {
    const index =Number( baralhos.findIndex(bar => bar.idBaralho === id))
    baralhos.splice(index)
    
}
module.exports = deletar
