function maiorStringArray(array){ //função que retorna o maior valor encontrado em um array; 
  let indexMaiorString = 0;
  for(let index = 1; index < array.length; index++){
    
    if(array[index].length > array[indexMaiorString].length){
      indexMaiorString = index;
    }
  }

  return array[indexMaiorString];
  
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorStringArray(test));