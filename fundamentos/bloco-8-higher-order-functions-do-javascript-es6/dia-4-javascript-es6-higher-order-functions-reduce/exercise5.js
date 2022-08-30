const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names
    .reduce((acc, curr) => acc+curr)
    .split("")
    .filter(c => c.toLocaleLowerCase() == 'a')
    .length;
}

console.log(containsA());