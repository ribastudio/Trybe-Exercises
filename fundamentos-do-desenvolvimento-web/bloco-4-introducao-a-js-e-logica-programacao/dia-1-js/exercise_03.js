// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.  

let varA = 200;
let varB = 3;
let varC = 45;

if (varA > varB && varA > varC) {
    console.log('O número maior é ' + varA);
} else if (varB > varA && varB > varC) {
    console.log('O número maior é ' + varB);
} else {
    console.log('O número maior é ' + varC);
}