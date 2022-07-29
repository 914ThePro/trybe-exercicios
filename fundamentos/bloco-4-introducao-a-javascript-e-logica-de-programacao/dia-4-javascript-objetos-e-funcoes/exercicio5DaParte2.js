function numeroMaisRepetido(array){
  let repeticoes = [];
let indexMaiorNumero;

for(index = 0; index < array.length; index++){
  if(repeticoes[array[index]] == null){
    repeticoes[array[index]] = 1;
  }else{
    repeticoes[array[index]] += 1;
  }
}

indexMaiorNumero = repeticoes.length-1;

for(let key in repeticoes){
  if(repeticoes[key] > repeticoes[indexMaiorNumero]){
    indexMaiorNumero = key;
  }
}

return indexMaiorNumero; 
}

let test = [2, 3, 2, 5, 8, 2, 3];

console.log(numeroMaisRepetido(test));