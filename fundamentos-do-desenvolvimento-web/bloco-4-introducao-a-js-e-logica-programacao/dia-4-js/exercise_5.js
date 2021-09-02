
/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function recebArray(numero) {
  let compare = 0;
  let contador = 0;
  for(let i in numero){
    if (numero[i] == numero[compare]){
      compare = numero[i];
      contador += 1;
    }
  }
  return 'O número ' + compare + ' foi repetido ' + contador + ' vezes';
}

console.log(recebArray([2, 3, 2, 5, 8, 2, 3]));