const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  
  for(let i = 0; i < array.length; i++){
    for (let i2 = 0; i2 < array.length-i; i2++){
      if(array[i2] > array[i2+1]){
        let temp = array[i2];
        array[i2] = array[i2+1];
        array[i2+1] = temp;
      }
    }
  }



  return array;
};

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉