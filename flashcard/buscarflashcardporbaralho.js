const { flashcards} = require ("../data")
function buscarflashcardporbaralho(idBaralho) {
    return flashcards.filter(flashcard => flashcard.iddobaralho === idBaralho)
}
module.exports = buscarflashcardporbaralho
