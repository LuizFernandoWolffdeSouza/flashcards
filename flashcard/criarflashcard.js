const{ flashcards} = require ("../data")

function criarflash(flashcard) {
    flashcard.idFlashcard = flashcards.length + 1
    flashcard.iddobaralho = flashcards.length + 1
    flashcards.push(flashcard)
}
module.exports = criarflash