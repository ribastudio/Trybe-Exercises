const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (object, turn, value) => {
  object[turn] = value;
}

addTurno(lesson2, 'turno','manhã');
console.log(lesson2);

const keysObj = (objects) => {
  let objts = Object.keys(objects);
  return objts;
}

console.log(keysObj(lesson1));

const objSize = (objects) => {
  const list = keysObj(objects);
  return list.length;
}

console.log(objSize(lesson2));

const objValues = (objects) => {
  let objts = Object.values(objects);
  return objts;
}

console.log(objValues(lesson1));

/* questão 4 */

let allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}

Object.assign(allLessons['lesson1'], lesson1);
Object.assign(allLessons['lesson2'], lesson2);
Object.assign(allLessons['lesson3'], lesson3);

console.log(allLessons);
