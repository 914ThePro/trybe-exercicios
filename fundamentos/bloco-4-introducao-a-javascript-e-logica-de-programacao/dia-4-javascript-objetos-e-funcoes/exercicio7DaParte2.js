function verificaFimPalavra(word, ending){
  let igualdade = true;

  if(ending.length > word.length){
    return false;
  }else{
    for(let index = ending.length-1; index >= 0; index --){
      if(ending[index] != word[index+(word.length-ending.length)]){
        igualdade = false;
      }
    }

    return igualdade;
  }
}

console.log(verificaFimPalavra('trybe', 'be'));
