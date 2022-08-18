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

let allLessons = {};
Object.assign(allLessons,{lesson1,lesson2,lesson3});

const numeroTotalAlunos = objeto => objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;

const getValueByNumber = (objeto, key) => Object.values(objeto)[key];

const verifyPair = (objeto, chave, valor) => {
  if(objeto[chave] == valor){
    return true;
  }else{
    return false;
  }
}

const estudantesMatematica = objeto => {
  let totalEstudantes = 0;
  for(let key in objeto){
    if(objeto[key].materia == 'Matemática'){
      totalEstudantes += objeto[key].numeroEstudantes;
    }
  }

  return totalEstudantes;
}


const createReport = (objeto, nomeProfessor) => {
  let report = {
    professor: nomeProfessor,
    aulas: [],
    estudantes: 0
  }

  for(let key in objeto){
    if(objeto[key].professor == nomeProfessor){
      report.aulas.push(objeto[key].materia)
      report.estudantes += objeto[key].numeroEstudantes;
    }
  }

  return report
}

console.log(createReport(allLessons, 'Maria Clara'))