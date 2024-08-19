const { flashcards } = require('../data')

function mostrarflash(pergunta) {
    return flashcards.filter(flashcard=> flashcard.pergunta.toLowerCase().includes(pergunta))
     
    
}


module.exports = mostrarflash

/*flashcards.forEach((fla,index) => {

    if (verifica === flashcards.pergunta) {
        console.log(`
            
         ${index + 1}
        ID: ${fla.idFlashcard}
        pergunta: ${fla.pergunta}
        id : ${fla.iddobaralho}`
        )

    }


})*/