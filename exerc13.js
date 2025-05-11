// Fazer um algoritmo para receber números decimais até que o usuário
// digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")()

let media = 0
let nums = []

while (true) {
    let num = Number(prompt("Dígite um número decimal: "))
    
    if (num == 0) {
        for (let i = 0; i < nums.length; i++) {
            media += nums[i]
        }

        console.log("a média aritmética é: " + media / nums.length)
        break
    } else if (num % 1 !== 0 && !isNaN(num)) {
        nums.push(num)
    } else {
        console.log("dígite apenas números decimais!")
    }
}