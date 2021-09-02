const btnClean = document.getElementById('btnClean');
const btnSubmit = document.getElementById('btnSubmit');
const forms = document.getElementById('formy');
const listOptions = document.getElementById('state-opt');

let items = [
	{ key: "AC", value: "Acre" },
	{ key: "AL", value: "Alagoas" },
	{ key: "AP", value: "Amapá" },
	{ key: "AM", value: "Amazonas" },
	{ key: "BA", value: "Bahia" },
	{ key: "CE", value: "Ceará" },
	{ key: "DF", value: "Distrito Federal" },
	{ key: "ES", value: "Espírito Santo" },
	{ key: "GO", value: "Goiás" },
	{ key: "MA", value: "Maranhão" },
	{ key: "MT", value: "Mato Grosso" },
	{ key: "MS", value: "Mato Grosso do Sul" },
	{ key: "MG", value: "Minas Gerais" },
	{ key: "PA", value: "Pará" },
	{ key: "PB", value: "Paraíba" },
	{ key: "PR", value: "Paraná" },
	{ key: "PE", value: "Pernambuco" },
	{ key: "PI", value: "Piauí" },
	{ key: "RJ", value: "Rio de Janeiro" },
	{ key: "RN", value: "Rio Grande do Norte" },
	{ key: "RS", value: "Rio Grande do Sul" },
	{ key: "RO", value: "Rondônia" },
	{ key: "RR", value: "Roraima" },
	{ key: "SC", value: "Santa Catarina" },
	{ key: "SP", value: "São Paulo" },
	{ key: "SE", value: "Sergipe" },
	{ key: "TO", value: "Tocantins" }
];


/* for (let index = 0; index < states.length; index += 1) {
let options = document.createElement('option');
options.value = stateInitials[index];
options.innerText = states[index];
stateOptions.appendChild(options);
}  */



items.forEach(function(key, value) {
  listOptions.appendChild(new Option(key, value));
})



function eraseFields() {
  forms.reset(); // referência aqui https://forum.imasters.com.br/topic/309946-limpando-campos-do-formulario-no-onclick/
}


// Ações dos botões do formulário

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateString = document.querySelector('#input-date').value;
  let dateParts = dateString.split("/");
  
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);
  
  
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  monthLength[1] = 29;
  }
  
  if(year < 1950 || year > 2021 || month < 1 || month > 12 || day < 1 || day > monthLength[month]) {
  alert('Insira uma data válida!')
  }
  }) 

btnClean.addEventListener('click', eraseFields);
