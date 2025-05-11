// Escreva um algoritmo para ler 2 valores 
// (considere que não serão lidos 
// valores iguais)e escreve-los 
// em ordem crescente.

const prompt = require('prompt-sync')()

let nums = []

while (true) {
    let num1 = Number(prompt("Dígite o primeiro número: "))
    let num2 = Number(prompt("Dígite o segundo número: "))

    if (num1 !== num2) {
        nums.push(num1, num2)
        break
    } else {
        console.log("os números são iguais! Dígite outros")
    }
}
      
for (let i = 0; i < nums.length - 1; i++) {              
    for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j]
            nums[j] = nums[j + 1]
            nums[j + 1] = temp
        }
    }
}

console.table(nums)