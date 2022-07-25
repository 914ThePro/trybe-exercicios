let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaDosValores = 0;
let mediaAritimetica;
let indexMaiorNumero;
let quantidadeNumerosImpares = 0;
let indexMenorNumero;

console.log("O array contém os seguintes números:")
for(let index=0; index < numbers.length; index++){
  console.log(numbers[index]);

  somaDosValores += numbers[index];
}

console.log("A soma dos números nele contidos é igual a: "+somaDosValores);

mediaAritimetica = somaDosValores/numbers.length;
console.log("A média aritimética desses valores é igual a: "+mediaAritimetica);

if(mediaAritimetica > 20){
  console.log("Média essa que é maior que 20");
}else{
  console.log("Média essa que não é maior que 20");
}

indexMaiorNumero = 0;
for(let index = 0; index < numbers.length; index++){
  if(numbers[index] > numbers[indexMaiorNumero]){
    indexMaiorNumero = index;
  }
}

console.log("O maior numero encontrado nesse array é "+numbers[indexMaiorNumero]);

quantidadeNumerosImpares = 0;
for(let index = 0; index < numbers.length; index++){
  if(numbers[index]%2 != 0){
    quantidadeNumerosImpares++;
  }
}

console.log(quantidadeNumerosImpares+" numeros impares foram encontrados");


indexMenorNumero = 0;
for(index = 0; index < numbers.length; index++){
  if(numbers[index] < numbers[indexMenorNumero]){
    indexMenorNumero = index;
  }
}

console.log("O menor numero encontrado nesse array é "+ numbers[indexMenorNumero]);