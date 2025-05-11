// Crie um programa que calcula o fatorial de um número fornecido 
// pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")()

let num = Number(prompt("Dígite um número para calcular o seu fatorial: "))

if (!isNaN(num) && num > 0 && num % 1 == 0) {
    for (let temp = num - 1; temp > 0; temp--) {
        num *= temp
    }
    console.log("o fatorial é: " + num)
} else {
    console.log("dígite um número válido (inteiro e positivo)")
}