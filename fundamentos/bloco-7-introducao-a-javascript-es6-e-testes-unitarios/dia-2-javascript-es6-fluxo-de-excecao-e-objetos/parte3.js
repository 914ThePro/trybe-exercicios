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

const adicionarChave = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

const listarKeys = objeto => Object.keys(objeto);

const tamanhoObjeto = objeto => Object.keys(objeto).length;

const valoresObjeto = objeto => Object.values(objeto);

let allLessions = {};
Object.assign(allLessions,{lesson1,lesson2,lesson3});

const numeroTotalAlunos = objeto => objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;

const getValueByNumber = (objeto, key) => Object.values(objeto)[key];

const verifyPair = (objeto, chave, valor) => {
  if(objeto[chave] == valor){
    return true;
  }else{
    return false;
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));