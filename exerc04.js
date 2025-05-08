// Crie um menu interativo no console que oferece ao usuário a escolha 
// de três opções. Utilize switch-case para implementar 
// a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

const valorAlcool = 4.5
const valorGasolinaAditivada = 6.5
const valorGasolinaComum = 5.5

console.log("-----bem-vindo ao posto romano, veja nossas opções de combustíveis-----")
console.log("| 1 - álcool - R$ 4,50 | 2 - gasolina aditivada - R$ 6,50 | 3 - gasolina comum - R$ 5,50 |")

let opcaoCombustivel = Number(prompt("com qual combustível você vai abastecer o seu veículo (1, 2 ou 3)? "));
let litrosCombustivel = Number(prompt("quantos litros você vai abastecer? "));

let valor = 0

if (!isNaN(litrosCombustivel)) {
    switch(opcaoCombustivel) {
        case 1:
            valor = litrosCombustivel * valorAlcool
            console.log("você abasteceu " + litrosCombustivel + " litros de álcool e o valor total deu: R$ " + valor)
            break
        case 2:
            valor = litrosCombustivel * valorGasolinaAditivada
            console.log("você abasteceu " + litrosCombustivel + " litros de gasolina aditivada e o valor total deu: R$ " + valor)
            break
        case 3:
            valor = litrosCombustivel * valorGasolinaComum
            console.log("você abasteceu " + litrosCombustivel + " litros de gasolina comum e o valor total deu: R$ " + valor)
            break
        default:
            console.log("escolha uma opção válida! 1, 2 ou 3")
    }
} else {
    console.log("dígite apenas números")
}

