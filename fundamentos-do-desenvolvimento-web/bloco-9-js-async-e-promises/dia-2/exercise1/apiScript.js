// const fetch = require('node-fetch');
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const arrayNum = [];
for (i = 0; i < 10; i +=1) {
  arrayNum.push(Math.round(Math.random() * 50) + 1);
}

const squared = arrayNum.map((number) => Math.pow(number, 2)).reduce((acc, eachNumber) => acc += eachNumber);

const promise = new Promise((resolve, reject) => {
  if (squared < 8000) {
    resolve(squared);
  }
  reject(squared);
})
.then((numberTot) => {
  console.log(`Promise resolvida. O número ${numberTot} obedece à regra`);
  const fourDivisors = [2, 3, 5, 10];
  const result = fourDivisors.map((eachNumber) => {
    return Math.round(numberTot / eachNumber);
  });
  // Esta parte não entendi como encadear. Resolver amanhã
  const newPromise = new Promise((resolve, reject) => {
    resolve(result.map((totEachNum) => totEachNum += totEachNum));
    reject(console.log(`Soma não efetuada.`))
  })
})
.catch((numberTot) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!. O número ${numberTot} ultrapassa 8000`));

const fetchJoke = () => {
  const h2Joke = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2Joke.innerText = data.joke);
};

window.onload = () => fetchJoke();
