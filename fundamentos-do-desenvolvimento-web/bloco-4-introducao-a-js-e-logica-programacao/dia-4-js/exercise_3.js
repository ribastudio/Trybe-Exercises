/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 
[2, 4, 6, 7, 10, 0, -3] */

function menorValor(numero) {
  let numeroMenor = 0;
  for (let index in numero) {
    if (numero[index] < numero[numeroMenor])
      numeroMenor = index;
  }
  return numeroMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));