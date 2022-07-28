function maiorNumeroArray(array){ //função que retorna o maior valor encontrado em um array; 
  let indexMaiorNumero = 0;
  for(let index = 1; index < array.length; index++){
    
    if(array[index] > array[indexMaiorNumero]){
      indexMaiorNumero = index;
    }
  }

  return indexMaiorNumero;
  
}

let test = [2, 3, 6, 7, 10, 1];
console.log(maiorNumeroArray(test));