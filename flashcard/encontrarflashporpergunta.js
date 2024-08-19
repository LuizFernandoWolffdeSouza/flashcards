const{ flashcards} = require ("../data")

function Buscarporpergunta(Pergunta) {
   return flashcards.find(per => per.pergunta === Pergunta)
    
}
module.exports ={Buscarporpergunta}