// Escreva um algoritmo para ler um número inteiro 
// e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let num = Number(prompt("Dígite um número inteiro: "))

if (num % 1 === 0) {
    let i = 0
    while (i < 10) {
        console.log(num)
        i++
    }
}