const {flashcard} = require('../data')

function listarflashcard() {
    flashcard.forEach(bar => console.log(`
    ID: ${bar.idFlashcard}
    pergunta: ${bar.pergunta}
    id : ${bar.iddobaralho }`))



    
}
module.exports = listarflashcard