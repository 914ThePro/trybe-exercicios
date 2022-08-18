function substituaX(nome){
  const frase = "Tryber x aqui";
  let resultado;
  resultado = frase.split(" ");
  resultado[1] = nome;

  return resultado.join(' ');
}

console.log(substituaX("Eduardo"));