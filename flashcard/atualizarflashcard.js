const{ flashcards} = require ("../data")

function atualizarflash(id,novoFlashcard) {
    const verifica = flashcards.findIndex(flash => flash.idFlashcard === id)
    flashcards[verifica] = {idFlashcard:id, pergunta: novoFlashcard}
}
module.exports = atualizarflash