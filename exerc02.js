// Crie um programa que classifica a idade de uma pessoa 
// em categorias (criança, adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma 
// estrutura de controle if-else.

const prompt = require('prompt-sync')()

console.log("-----dígite 0 para sair-----")

while (true) {
    let age = parseInt(prompt("dígite sua idade: "));

    if (isNaN(age) || age > 120 || age < 0) {
        console.log("dígite uma idade válida")
    } else if (age == 0) {
        break
    } else if (age <= 12) {
        console.log("você é uma criança")
    } else if (age > 12 && age < 18) {
        console.log("você é um adolescente")
    } else if (age >= 18 && age < 60) {
        console.log("você é um adulto(a)")
    } else {
        console.log("você é um idoso(a)")
    }
}