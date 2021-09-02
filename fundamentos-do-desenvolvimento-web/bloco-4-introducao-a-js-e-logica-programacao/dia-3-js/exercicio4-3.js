// Exercício 1

// let n = 5;

// for (let i = 1; i <= n; i += 1) {
//   let coluna = "";
  
//   for (let j = 1; j <= n; j += 1) {
//     coluna += "*";
//   }
//   console.log(coluna);
// }

// Exercício 2

// let n = 5;
// let coluna = "";

// for (let i = 1; i <= n; i += 1) {
//     coluna += "*";
    
// 		console.log(coluna);
  
// 	}

// Exercicio 3
let n = 5;

for (let i = 1; i <= n; i += 1) {

  let line = '';
  let symbol = n - i;
  
  for (let j = 0; j < n; j += 1) {
    if (line.length < symbol) {
      line += '';
    } else {
      line += '*';
    }
  }

  console.log(line);

}

// Exercicio 4

