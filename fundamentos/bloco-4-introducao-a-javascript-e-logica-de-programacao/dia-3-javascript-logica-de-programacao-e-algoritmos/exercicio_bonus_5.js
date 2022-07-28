let tamanhoBase = 21;
let tamanhoLinha;
let linhas = [];
let linhaAtual;
let pixelsDesconsiderados = 0;

for(tamanhoLinha = tamanhoBase; tamanhoLinha > 0; tamanhoLinha-=2){
  linhaAtual = "";

  for(let index2 = 0; index2 < pixelsDesconsiderados; index2++){
    linhaAtual += "   ";
  }


  if(tamanhoLinha > 2 && tamanhoLinha < tamanhoBase){
    for(let index = 0; index < tamanhoLinha; index++){
      if(index == 0 || index == tamanhoLinha-1){
        linhaAtual += "*  ";
      }else{
        linhaAtual += "   ";
      }
    }
  }else{
    for(let index = 0; index < tamanhoLinha; index++){
      linhaAtual += "*  ";
    }
  }

  linhas.push(linhaAtual);
  pixelsDesconsiderados += 1;
}

for(let index = linhas.length-1; index >= 0; index--){
  console.log(linhas[index]);
}