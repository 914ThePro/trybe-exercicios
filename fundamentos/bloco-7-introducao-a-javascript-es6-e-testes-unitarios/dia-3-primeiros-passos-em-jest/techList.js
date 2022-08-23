const techList = (tecnologias, nome) => {

  if(tecnologias.length == 0){
    return 'Vazio!';
  }

  tecnologias.sort( (a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1 );
  let newArray = [];
  for(key in tecnologias){
    newArray[key] = {
      tech: tecnologias[key],
      name: nome
    }
  }

  return newArray;
}

let tecnologias = ['React', 'Jest', 'JavaScript', 'HTML', 'CSS', 'JavaScript'];
let nome = 'Eduardo';

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;