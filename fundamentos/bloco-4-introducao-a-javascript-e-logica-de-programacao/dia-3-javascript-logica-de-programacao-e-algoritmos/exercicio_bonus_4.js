let tamanhoBase = 5;
let tamanhoLinha;
let linhas = [];
let linhaAtual;
let pixelsDesconsiderados = 0;

for(tamanhoLinha = tamanhoBase; tamanhoLinha > 0; tamanhoLinha-=2){
  linhaAtual = "";

  for(let index2 = 0; index2 < pixelsDesconsiderados; index2++){
    linhaAtual += "   ";
  }

  for(let index = 0; index < tamanhoLinha; index++){
    linhaAtual += "*  ";
  }
  linhas.push(linhaAtual);
  pixelsDesconsiderados += 1;
}

for(let index = linhas.length-1; index >= 0; index--){
  console.log(linhas[index]);
}