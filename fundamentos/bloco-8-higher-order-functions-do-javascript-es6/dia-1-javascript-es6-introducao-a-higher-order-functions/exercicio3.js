const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calcularNota = (gabarito,respostasAluno) => {
  let nota = 0;
  for(let key in respostasAluno){
    if(respostasAluno[key] == gabarito[key]){
      nota += 1;
    }else if(respostasAluno[key] != 'N.a'){
      nota -= 0.5;
    }
  }
  return nota;
}

const computarNota = (gabarito, respostasAluno, calcularNota) => {
  return calcularNota(gabarito, respostasAluno);
}

console.log(computarNota(RIGHT_ANSWERS, STUDENT_ANSWERS, calcularNota));