let tamanhoForma = 4;
let linha;

if(tamanhoForma > 1){

  for(let index = 0; index < tamanhoForma; index ++){
  
    linha = "";
    pixelsDesconsiderados = tamanhoForma - 1 - index;
    
    for(let index2 = 0; index2 < tamanhoForma; index2++){
      if(pixelsDesconsiderados > 0){
        linha += "   ";
        pixelsDesconsiderados--;
      }else{
        linha += "*  ";
      }
    }
    console.log(linha); 
  }

}else{
  console.log(tamanhoForma+" não é um valor válido");
}