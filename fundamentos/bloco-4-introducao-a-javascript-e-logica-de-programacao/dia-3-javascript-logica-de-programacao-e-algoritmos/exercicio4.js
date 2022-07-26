let numerosPrimos = [];

for(let index = 0; index <= 50; index++){
  if(ePrimo(index)){
    numerosPrimos.push(index);
  }
}

console.log(maiorNumeroArray(numerosPrimos));


function maiorNumeroArray(array){ //função que retorna o maior valor encontrado em um array; 
  let indexMaiorNumero = 0;
  for(let index = 1; index < array.length; index++){
    
    if(array[index] > array[indexMaiorNumero]){
      indexMaiorNumero = index;
    }
  }

  return array[indexMaiorNumero];
  
}

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