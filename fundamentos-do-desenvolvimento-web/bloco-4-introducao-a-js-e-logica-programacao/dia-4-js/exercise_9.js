let nameP = 'ArarA'.toLowerCase();

function isPalindrome (nameP) {
  nameP.toLowerCase();

  for (let i = 1; i <= nameP.length; i += 1) {
    if (nameP[i - 1] != nameP[nameP.length - i]) {
      return ' não é um palindromo!';
    }
  }
  return ' é um palindromo!';
}
console.log(nameP + isPalindrome(nameP));

/* String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
} //Função que o Michael encontrou sobre como deixar a primeira letra da palavra maiúscula.
let word = 'arara'.toLowerCase();

function isPalindrome (a) {
  for (let index = 1; index <= a.length; index += 1) {
      if (a[index - 1] != a[a.length - index]) {
          return ' não é um palíndromo!';
      }
  }
return ' é um palíndromo!';
}
console.log(word.capitalize() + isPalindrome(word)); */