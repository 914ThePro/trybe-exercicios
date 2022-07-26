let tamanhoQuadrado = 5;
let linha;

for(let index = 0; index < tamanhoQuadrado; index ++){
  linha = "";
  for(let index2 = 0; index2 < tamanhoQuadrado; index2++){
    linha += "*  ";
  }
  console.log(linha);
}