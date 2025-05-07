// Implemente um programa que recebe uma nota de 0 a 10 
// e classifica como "Aprovado", "Recuperação", 
// ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

console.log("-----dígite 0 para sair-----")

while (true) {
    let nota = Number(prompt("dígite a nota do aluno: "));

    if (nota == 0) {
        break
    } else if (isNaN(nota) || nota > 10) {
        console.log("dígite uma nota válida")
    } else if (nota < 6) {
        console.log("reprovado")
    } else if (nota >= 6 && nota < 7) {
        console.log("recuperação")
    } else {
        console.log("aprovado")
    }
}