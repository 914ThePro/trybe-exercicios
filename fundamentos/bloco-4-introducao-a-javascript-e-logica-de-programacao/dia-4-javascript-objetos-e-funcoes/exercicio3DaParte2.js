function menorNumeroArray(array){ //função que retorna o maior valor encontrado em um array; 
  let indexMenorNumero = 0;
  for(let index = 1; index < array.length; index++){
    
    if(array[index] < array[indexMenorNumero]){
      indexMenorNumero = index;
    }
  }

  return indexMenorNumero;
  
}

let test = [2, 4, 6, 7, 10, 0, -3];
console.log(menorNumeroArray(test));