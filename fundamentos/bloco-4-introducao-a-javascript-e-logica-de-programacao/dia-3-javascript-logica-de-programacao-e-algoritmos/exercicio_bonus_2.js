let tamanhoForma = 5;
let linha;

let pixels = 1;


if(tamanhoForma > 1){

  for(let index = 0; index < tamanhoForma; index ++){
  
    linha = "";

    for(let index2 = 0; index2 < pixels; index2++){
      
      linha += "*  ";
    }

    pixels++;
    console.log(linha); 
  }

}else{
  console.log(tamanhoForma+" não é um valor válido");
}