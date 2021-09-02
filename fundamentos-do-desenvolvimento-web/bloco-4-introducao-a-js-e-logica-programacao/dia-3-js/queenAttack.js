let queenRowPosition = 6;
let queenColumnPosition = 4;

// posição peça oponente
let opponentRowPosition = 3;
let opponentColumnPosition = 6;

//Pode atacar
let canAttack = false;

// cálculo para entender se o ataque foi ou não foi
if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
  canAttack = true;
}

console.log('Ataque bem sucedido? '+ canAttack);
// SE a Rainha está na mesma linha que a peça oponente, OU SE a rainha está na mesma coluna que a peça oponente, significa que o ataque foi bem sucedido.
//Diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition - index;

  if (currentQueenColumn === 0 || currentQueenRow === 0) {
    console.log('A Rainha chegou ao fim do tabuleiro');
    break;
  } 

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Ataque bem sucedido na diagonal inferior esquerda');
    break;
  }
  
}