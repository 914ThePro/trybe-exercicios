let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log("\nMoradores do bloco 1\n");

for(index in moradores.blocoUm){
  console.log(moradores.blocoUm[index].nome,moradores.blocoUm[index].sobrenome);
}

console.log("\nMoradores do bloco 2\n");

for(index in moradores.blocoDois){
  console.log(moradores.blocoDois[index].nome,moradores.blocoDois[index].sobrenome);
}