let tamanhoQuadrado = 10;
let linha;


if(tamanhoQuadrado > 1){

  for(let index = 0; index < tamanhoQuadrado; index ++){
    
    
    linha = "";
    for(let index2 = 0; index2 < tamanhoQuadrado; index2++){
      linha += "*  ";
    }
    console.log(linha);
    
  }

}else{
  console.log(tamanhoQuadrado+" não é um valor válido");
}