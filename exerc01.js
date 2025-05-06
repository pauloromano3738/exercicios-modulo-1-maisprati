// Escreva um programa que recebe um número inteiro 
// e verifica se ele é par ou ímpar utilizando 
// uma estrutura de controle if.

const prompt = require('prompt-sync')();

console.log("-----dígite 0 para sair-----")

while (true) {
    let num = parseInt(prompt("dígite um número: "));

    if (isNaN(num)) {
        console.log("dígite um número válido")
    } else if (num == 0) {
        break
    } else if (num % 2 == 0) {
        console.log(num + " é um número par")
    } else {
        console.log(num + " é um número ímpar")
    }
}