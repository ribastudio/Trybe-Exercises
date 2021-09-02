
/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */

function bigValue (numberArray) {
  let numberMore = 0;
  for (let indx in numberArray){
    if (numberArray[numberMore] < numberArray[indx]) {
      numberMore = indx;
    }
  }
  return numberMore;
}
console.log(bigValue([2, 3, 6, 7, 10, 1]));
