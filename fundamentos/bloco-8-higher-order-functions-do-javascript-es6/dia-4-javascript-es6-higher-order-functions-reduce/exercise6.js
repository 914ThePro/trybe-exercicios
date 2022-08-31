const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  return students
    .map( (s, i) => ({
      name: s,
      average: grades[i].reduce((acc, curr) => acc + curr)/grades[i].length
    }));
}

console.log(studentAverage());

