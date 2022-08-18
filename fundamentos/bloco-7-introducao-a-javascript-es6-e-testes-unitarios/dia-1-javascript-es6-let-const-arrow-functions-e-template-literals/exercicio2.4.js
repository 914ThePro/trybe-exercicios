function substituaX(nome){
  const frase = "Tryber x aqui";
  let resultado;
  resultado = frase.split(" ");
  resultado[1] = nome;

  return resultado.join(' ');
}

function minhasSkills(retornoDaOutraFuncao){
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `${retornoDaOutraFuncao}
Minhas três principais abilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`;

  return resultado;
}

console.log(minhasSkills(substituaX("Eduardo")));