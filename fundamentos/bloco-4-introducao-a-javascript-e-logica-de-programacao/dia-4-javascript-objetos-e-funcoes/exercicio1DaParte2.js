function verificaPalindromo(valor){
  return valor == valor.split('').reverse().join('');
}

console.log(verificaPalindromo('tenet'));