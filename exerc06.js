// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os 
// lados fornecidos formam realmente um triângulo. Caso forme, 
// deve ser indicado o tipo de triângulo: Isósceles, 
// escaleno ou eqüilátero.

const prompt = require("prompt-sync")()

let ladoA = Number(prompt("dígite um valor para o lado A: "))
let ladoB = Number(prompt("dígite um valor para o lado B: "))
let ladoC = Number(prompt("dígite um valor para o lado C: "))

let isTriangulo = false

if (!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC)) {
    if (ladoA + ladoB > ladoC) {
        if (ladoB + ladoC > ladoA) {
            if (ladoA + ladoC > ladoB) {
                isTriangulo = true
            }
        }
    }
} else {
    console.log("dígite valores válidos")
}

if (isTriangulo) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("é um triângulo equilátero")
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("é um triângulo isósceles")
    } else if (ladoA !== ladoB && ladoB !== ladoC) {
        console.log("é um triângulo escaleno")
    }
} else {
    console.log("os valores dados não representam um triângulo")
}