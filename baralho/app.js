const prompt = require('prompt-sync')()
const {flashcards} = require('../data')
const { baralhos } = require('../data')
const criar = require('./criarbaralho')
const listar = require('./listarbaralhos')
const atualizar = require('./atualizarbaralho')
const deletar = require('./deletarbaralho')
const criarflash = require('../flashcard/criarflashcard')
const listarflash = require('../flashcard/listarflashcards')
const atualizarflash = require('../flashcard/atualizarflashcard')
const deletarflash = require('../flashcard/deletarflashcard')
const mostrarflash = require('../flashcard/buscarpflash')


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
            let nome1 = prompt("Digite o nome do baralho: ")
            criar({nome: nome1})
            console.log("Baralho cadastrado com sucesso")
            menu()
        case "2":
            
            let nome2 = prompt("Digite o nome da pergunta do flashcard: ").toLowerCase()
            criarflash({ pergunta:nome2})
            console.log("Flashcard cadastrado com sucesso")
            menu()

            break;
        case "3":
            listar()
            menu()

            break;
        case "4":
            listarflash()
            menu()
            break;
        case "5":

            break;
        case "6":
            listar()

            let index = Number(prompt("Digite o id do baralho que deseja editar: "))
            let index2 = prompt("Deseja realmente editar: ").toLowerCase()
            if (index2 === "sim") {
                let novoBaralho = prompt("Digite o nome do novo baralho: ")
                atualizar(index, novoBaralho)


            }
            else if(index2 === "não"){
                console.log("Nada editado")
            }
            menu()
            break;
        case "7":
            listarflash()
            let verifica = Number(prompt("Digite o id do flashcard que deseja editar: "))
            let index3 = prompt("Deseja realmente editar: ").toLowerCase()
            if (index3 === "sim") {
                let novoflashcard = prompt("Digite o nome da pergunta do novo flashcard: ")
                atualizarflash(verifica ,novoflashcard )
                console.log("Pergunta cadastrada com sucesso")


            }
            else if(index3 === "não"){
                console.log("Nada editado")
            }
            menu()
            break;
        case "8":
            let excluir = Number(prompt('digite o Id do baralho que deseja excluir: '))
            let decisão = prompt("Deseja realmente excluir?: ")
            if (decisão === 'sim' && 'Sim' && 'SIM') {
                deletar(excluir)
                console.log("Baralho excluido com sucesso")

            }
           menu()

            break;
        case "9":
            listarflash()
            let excluirflash = Number(prompt(" Digite o número do id que deseja excluir: "))
            let decisão2 = prompt("Deseja realmente excluir: ").toLowerCase()
            if (decisão2 === 'sim') {
                deletarflash(excluirflash)
                console.log("Flashcard excluido com sucesso")

            }
             menu()
            break;
        case "10":
            let verificar = Number(prompt("Digite o número da pergunta: "))
            mostrarflash({verificar})
          menu()
            break;


        default:
            break;
    }

}

