let info = [{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
},{
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
}

];


console.log("Bem-vinda, "+info[0].personagem);


for(let key in info[0]){
  console.log(key);
}

for(let key in info[0]){
  console.log(info[0][key]);
}

for(let key in info[0]){

  if(key != 'recorrente'){
    console.log(info[0][key],"e",info[1][key]);
  }else if(info[0][key] == 'sim' && info[1][key] == 'sim'){
    console.log("ambos recorrentes");
  }
  
}
