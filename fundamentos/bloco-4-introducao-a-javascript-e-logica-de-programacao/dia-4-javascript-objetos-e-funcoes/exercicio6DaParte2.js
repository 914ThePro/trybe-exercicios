function bolaDeNeve(num){
  let soma = 0;
  for(let index = 1; index <= num; index++){
    soma += index;
  }

  return soma;
}

console.log(bolaDeNeve(5));