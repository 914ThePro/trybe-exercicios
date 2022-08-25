const newEmployees = (newEmp) => {
  const employees = {
    id1: newEmp('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmp('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmp('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newEmployee = (nome) =>  ({nomeCompleto: nome, email: `${nome.split(' ').join('_')}@trybe.com`});


console.log(newEmployees(newEmployee));