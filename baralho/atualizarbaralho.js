const{ baralhos} = require ("../data")

function atualizar(id,novobaralho) {
    
    const index = baralhos.findIndex(bar => bar.idBaralho === id)
    baralhos[index] =  {idBaralho: id,nome: novobaralho};
      
        

        
    
    
    
}
module.exports = atualizar