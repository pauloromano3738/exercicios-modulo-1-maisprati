// Escreva um programa que calcula o Índice de Massa Corporal (IMC) 
// de uma pessoa e determina a categoria de peso (baixo peso, 
// peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

let peso = Number(prompt("dígite o seu peso em kilos (KG): "));
let altura = Number(prompt("dígite a sua altura em metros (M): "))

if (!isNaN(peso) && !isNaN(altura)) {
    let imc = peso / (altura * altura)
    if (imc < 18.5) {
        console.log("baixo peso")
    } else if (imc > 18.5 && imc < 24.9) {
        console.log("peso normal")
    } else if (imc > 24.9 && imc < 29.9) {
        console.log("sobrepeso")
    } else if (imc < 29.9 && imc < 34.9) {
        console.log("obesidade grau I")
    } else if (imc > 34.9 && imc < 39.9) {
        console.log("obesidade grau II")
    } else {
        console.log("obesidade extrema")
    }
} else {
    console.log("dígite valores válidos")
}

