const{ flashcards} = require ("../data")

function deletarflash(id) {
    const verifica2 =Number( flashcards.findIndex(fla => fla.idFlashcard === id))
    flashcards.splice(verifica2)
    
}
module.exports = deletarflash