const hydrate = string => {
  let reg = /\d/g;
  let array = string.match(reg);
  let copos = 0;
  for(num of array){
    copos += parseInt(num);
  }
  
  return copos > 1 ? `${copos} copos de água` : `${copos} copo de água`;
}

module.exports = hydrate;