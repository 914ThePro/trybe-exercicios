function arrayOfNumbers(vector){
  let numerosPares = [];

  for(let index = 0; index < vector.length; index++){
    for(let index2 = 0; index2 < vector[index].length; index2 ++){
      if(vector[index][index2] % 2 == 0){
        numerosPares.push(vector[index][index2]);
      }
    }
  }

  return numerosPares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));