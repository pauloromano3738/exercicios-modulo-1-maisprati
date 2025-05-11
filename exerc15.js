// Escreva um programa que gera e imprime os primeiros 10 números 
// da sequência de Fibonacci utilizando um loop for.

let x = 0;
let y = 1;

console.log(x); 
console.log(y); 

for (let i = 2; i < 10; i++) {
  let proximo = x + y;
  console.log(proximo);
  x = y;
  y = proximo;
}