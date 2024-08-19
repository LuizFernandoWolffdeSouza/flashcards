const {flashcards} = require('../data')

function listarflash() {
    flashcards.forEach(bar => console.log(`
    ID: ${bar.idFlashcard}
    pergunta: ${bar.pergunta}
    id : ${bar.iddobaralho }`))



    
}
module.exports = listarflash