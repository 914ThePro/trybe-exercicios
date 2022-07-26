let array = ['java', 'javascript', 'python', 'html', 'css'];
let indexMaiorPalavra = 0;
let indexMenorPalavra = 0;

for(index = 1; index < array.length; index++){
  if(array[index].length > array[indexMaiorPalavra].length){
    indexMaiorPalavra = index;
  }
}

for(index = 1; index < array.length; index++){
  if(array[index].length < array[indexMenorPalavra].length){
    indexMenorPalavra = index;
  }
}

console.log("A maior palavra encontrada foi "+array[indexMaiorPalavra]);
console.log("A menor palavra encontrada foi "+array[indexMenorPalavra]);