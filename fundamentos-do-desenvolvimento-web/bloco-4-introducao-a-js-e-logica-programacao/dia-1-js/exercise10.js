// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto
//     lucro = valorVenda - valorCustoTotal (lucro de um produto)

let productValue = 3;
let productSale = 30;
let twentyPercent = 20/100 * productValue;
let totalValue = productValue + twentyPercent;
let gainMoney = productSale - totalValue;

if (productSale == 0 || productValue == 0) {
  console.log('Existe algum erro nos valores');
} else {
  console.log(gainMoney * 1000);
}