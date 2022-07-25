let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let holder;
console.log(numbers);

for(index = 0; index < numbers.length; index++){
  for(index2 = 0; index2 < numbers.length-1-index; index2++){
    if(numbers[index2] < numbers[index2+1]){
      holder = numbers[index2];
      numbers[index2] = numbers[index2+1];
      numbers[index2+1] = holder;
      
    }
  }
}

console.log(numbers);