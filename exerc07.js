// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, 
// e R$ 0,25 se forem compradas pelo menos doze. Escreva um 
// algoritmo que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let macasCompradas = Number(prompt("Quantas maças você vai comprar? "))

let valorTotal = 0

if (!isNaN(macasCompradas) && macasCompradas > 0) {
    if (macasCompradas >= 12) {
        valorTotal = macasCompradas * 0.25
    } else {
        valorTotal = macasCompradas * 0.30
    }

    console.log("o valor total da sua compra é: R$ " + valorTotal)
} else {
    console.log("dígite um valor válido!")
}

if (num1 !== num2) {
    if (num1 > num2) {
        console.log(num1)
        console.log(num2)
    } else {
        console.log(num2)
        console.log(num1)
    }
} else {
    console.log("os números são iguais! Dígite outros números")
}