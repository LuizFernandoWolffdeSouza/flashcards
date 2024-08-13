const{ baralhos} = require ("../data")

function atualizar(id,novobaralho) {
    let verificar = baralhos.find(bar => bar.idBaralho === id)
        baralhos[verificar] =  {id,novobaralho}
        

        
    
    
    
}
module.exports = atualizar