function ePrimo(numero){  //função que verifica se um numero é primo
  let divisores = 0;

  if(numero >= 2 && numero % 1 == 0){

    for(let index = 0; index <= numero; index++){
      if(numero % index == 0){
        divisores++;
      }
    }
  }else{
    return false;
  }

  return divisores == 2;
}


let numero = 5;

if(ePrimo(numero)){
  console.log(numero+" é um numero primo");
}else{
  console.log(numero+" não é um numero primo");
}