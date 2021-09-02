// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

let ladoA = 200;
let ladoB = 34;
let ladoC = 25;
let isTriangle;

if (ladoA + ladoB + ladoC == 180) {
        isTriangle = true;
        console.log(isTriangle);

    } else if (ladoA < 1 || ladoB < 1 || ladoC < 1) {
        console.log('Este ângulo é inválido!');
    } else {
    isTriangle = false;
    console.log(isTriangle);
}

