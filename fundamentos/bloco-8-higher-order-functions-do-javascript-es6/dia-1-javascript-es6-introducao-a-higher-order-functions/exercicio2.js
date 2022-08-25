const Sortear = (numeroApostado, checarNumero) => {
  let randomNumber = Math.floor(1 + Math.random() * 5);
  console.log(`Numero apostado: ${numeroApostado} numero sorteado: ${randomNumber}`);
  if(checarNumero(randomNumber,numeroApostado)){
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

const checarNumero = (num1, num2) => {
  return num1 == num2;
}

console.log(Sortear(3, (num1, num2) => num1 == num2));

