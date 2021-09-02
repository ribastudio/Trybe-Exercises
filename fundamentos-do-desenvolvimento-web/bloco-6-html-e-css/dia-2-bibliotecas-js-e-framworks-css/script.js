const btnClean = document.getElementById('btnClean');
const btnSubmit = document.getElementById('btnSubmit');
const forms = document.getElementById('formy');
const listOptions = document.getElementById('state-opt');

let picker = new Pikaday({ field: document.getElementById('datepicker'),
format: 'D/M/YYYY',
toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

let stateItems = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]; 

let statesInitials = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

for (let index = 0; index < stateItems.length; index += 1) {
  let options = document.createElement('option');
  options.value = statesInitials[index];
  options.innerText = stateItems[index];
  listOptions.appendChild(options);
}

/* validation.init(forms); */


function eraseFields() {
  forms.reset(); // referência aqui https://forum.imasters.com.br/topic/309946-limpando-campos-do-formulario-no-onclick/
}

function getFormData() {
  let dataForm = document.querySelectorAll("[required]"); // selecionar por atributo. Vi em https://www.youtube.com/watch?v=GTMEuHxh8aQ&t=1339s //
  console.log(dataForm);
  let ListFields = document.getElementById('listFormData');
  for (let i = 0; i < forms.children; i += 1) {
    let listForm = document.createElement('p');
    listForm.innerText = forms.innerHTML.valueOf(i);
    ListFields.appendChild(listForm);
  }
}

// Código desenvolvido na monitoria, adaptado de um código do StakcOverflow
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateString = document.querySelector('#datepicker').value;
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
  getFormData();
}) 

// função de validação com o campo que está no evento
function customValid(event) {
  const fieldFocus = event.targe;
  fieldFocus.setCustomValidity("Este campo é obrigatório");
}


// Ações dos botões do formulário
btnClean.addEventListener('click', eraseFields);

// Inserção do modal pelo MaterializeCSS
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);
  console.log(instances);
});

