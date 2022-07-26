let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for(index = 0; index < numbers.length; index++){

  if(numbers[index+1] == null){
    newNumbers[index] = numbers[index]*2;
  }else{
    newNumbers[index] = numbers[index]*numbers[index+1];
  }

}

console.log(numbers);
console.log(newNumbers);