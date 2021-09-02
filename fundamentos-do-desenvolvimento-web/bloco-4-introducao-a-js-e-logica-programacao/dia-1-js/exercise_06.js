// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chess = "casa";

switch (chess.toLowerCase()) {
  case 'rei':
    console.log('Rei - Uma casa por vez em qualquer direção');
    break;

  case 'bispo':
    console.log('Bispo - Prossegue apenas nas diagonais');
    break;

  case 'cavalo':
    console.log('Cavalo - Anda em L, sendo três casas para um lado e uma para cima ou para baixo. Ou uma casa e consecutivamente 3 casas.');
    break;

  case 'rainha':
    console.log('Rainha - Anda quantas casas quiser, em qualquer direção');
    break;

  case 'torre':
    console.log('Torre - Anda quantas casas quiser, somente em cruz - frente, trás, esquerda e direita');
    break;

  case 'peao':
    console.log('Peão - Na primera vez, pode andar até três casa a frente, e após isso, somente uma casa para a frente. Caso for pegar outra peça que esteja em diagonais à frente, pode fazer este movimento');
    break;
  
    default:
    console.log('Tem certeza que isso é do xadrez?');
    break;
}