const prompt = require('prompt-sync')()
const {baralhos} = require('../data')
const listar = require('./listarbaralhos')
const listarflashcard = require('./listarflashcards')
const atualizarbaralho = require('./atualizarbaralho')

menu()
function menu(params) {
    console.log(`
1. Criar Baralho
2. Criar Flashcard
3. Listar Baralhos
4. Listar Flashcards
5. Listar Flashcards por Baralho
6. Atualizar Baralho
7. Atualizar Flashcard
8. Deletar Baralho
9. Deletar Flashcard
10. Buscar Flashcards por Pergunta
11. Buscar Flashcards por Baralho
0. Sair`)
    let resposta = prompt("Escolha uma opção: ")
    switch (resposta) {
        case "1":

            break;
        case "2":

            break;
        case "3":
            listar()
           menu()

            break;
        case "4":
            listarflashcard()
            menu()
            break;
        case "5":

            break;
        case "6":
            listar()
            let index = baralhos.find(bar => bar.idBaralho === baralhos.idBaralho)
            index = prompt("Digite o id do baralho que deseja editar: ")
            let index2 = prompt("Deseja realmente editar: ")
            if (index2 == "sim") {
                let novoBaralho = prompt("Digite o nome do novo baralho")
                atualizarbaralho({ nome:novoBaralho})

                
            }
           menu()
            break;
        case "7":

            break;
        case "8":

            break;
        case "9":

            break;
        case "10":

            break;


        default:
            break;
    }

}

