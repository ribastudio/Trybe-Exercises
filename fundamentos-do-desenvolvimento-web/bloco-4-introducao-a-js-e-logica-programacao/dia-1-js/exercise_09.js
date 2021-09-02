// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let varA = 2;
let varB = 4;
let varC = 6;
let isEven = false;

if (varA % 2 !== 0 || varB % 2 !== 0 || varC % 2 !== 0) {
  isEven = true;
  console.log(isEven);
} else {
  console.log(isEven);
}