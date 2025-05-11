// Crie um programa que exibe a tabuada de um número fornecido 
// pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")()

let multiplicando = Number(prompt("Dígite um número: "))

if (multiplicando % 1 === 0 && !isNaN(multiplicando)) {
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        console.log(multiplicando + " X " + multiplicador + " = " + multiplicando * multiplicador)
    }
}