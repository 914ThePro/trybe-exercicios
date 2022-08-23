function encode(string) {

  let encodedString = "";
  // seu código aqui
  let chave = {
    a:'1',
    e:'2',
    i:'3',
    o:'4',
    u:'5'
  }
  for(word in string){
    if(chave[string[word]] == null){
      encodedString += string[word];
    }else{
      encodedString += chave[string[word]];
    }
  }
  return encodedString;
}
function decode(string) {
  // seu código aqui

  let decodedString = "";
  // seu código aqui
  let chave = {
    '1':'a',
    '2':'e',
    '3':'i',
    '4':'o',
    '5':'u'
  }
  for(word in string){
    if(chave[string[word]] == null){
      decodedString += string[word];
    }else{
      decodedString += chave[string[word]];
    }
  }
  return decodedString;
}

console.log(encode("testando"));

module.exports = {encode, decode}