const { flashcards } = require('../data')

function mostrarflash(flas,Pergunta) {
    const verifica = Number(flashcards.find(per => per.pergunta === Pergunta))

    flashcards.forEach(flas, index => {
        if (index  === verifica) {
            console.log(`
                ID: ${flas.idFlashcard}
                pergunta: ${flas.pergunta}
                id : ${flas.iddobaralho}`
            )

        }

    })

}
module.exports = mostrarflash