function romanToDecimal(romanNum){
  romanNum = romanNum.toUpperCase();
  let decimalNumber = 0;
  let lastDecimalNumber = 0;
  let somaDosAlgarismos = 0;

  for(index = 0; index < romanNum.length; index++){
    decimalNumber = retrieveDecimalAlgarism(romanNum[index]);

    if(decimalNumber <= lastDecimalNumber){
      somaDosAlgarismos += decimalNumber
    }else{
      somaDosAlgarismos -= lastDecimalNumber;
      somaDosAlgarismos += decimalNumber-lastDecimalNumber;
    }

    lastDecimalNumber = decimalNumber;
  }

  return somaDosAlgarismos;
}

function retrieveDecimalAlgarism(romanAlg){
  let romanAlgarisms = [];
  let numToReturn = 0;

  romanAlgarisms[1] = 'I';
  romanAlgarisms[5] = 'V';
  romanAlgarisms[10] = 'X';
  romanAlgarisms[50] = 'L';
  romanAlgarisms[100] = 'C';
  romanAlgarisms[500] = 'D';
  romanAlgarisms[1000] = 'M';

  for(num in romanAlgarisms){
    if(romanAlg == romanAlgarisms[num]){
      numToReturn = num;
    }
  }

  return parseInt(numToReturn);
}

console.log(romanToDecimal("xiv"));