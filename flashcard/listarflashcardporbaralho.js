const {flashcards, baralhos} = require("../data")

function listarflashcardporbaralhoid(vetor) {
    vetor = flashcards.filter(carta => carta.iddobaralho === baralhos.id)
    flashcards.forEach((flashcard) => {console.log(
        `Id. ${baralhos.id}. ${baralhos.nome} ${flashcard.pergunta}
         `
    )})
    
}
module.exports = listarflashcardporbaralhoid