/* 
    Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
 */

function recebeArray (palavra) {
  let nomeMaior = palavra[0];
 
  for (let i in palavra) {
    if (nomeMaior.length < palavra[i].length) {
      nomeMaior = palavra[i];
    }
  }
  return nomeMaior;
}

console.log(recebeArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

