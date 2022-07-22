let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

let Inss;
let porcentagemInss; 

let Ir;
let porcentagemIr;
let valorADeduzirDoIr;


if(salarioBruto <= 1556.94){
  porcentagemInss = 0.08;
}else if(salarioBruto <= 2594.92){
  porcentagemInss = 0.09;
}else if(salarioBruto <= 5189.82){
  porcentagemInss = 0.11;
}else if( salarioBruto > 5189.82){
  porcentagemInss = 0;
}

if(porcentagemInss != 0){
  Inss = salarioBruto*porcentagemInss;
}else{
  Inss = 570.88;
}

salarioBase = salarioBruto - Inss;


if(salarioBase <= 1903.98){
  porcentagemIr = 0;
  valorADeduzirDoIr = 0;
}else if(salarioBase <= 2826.65){
  porcentagemIr = 0.075;
  valorADeduzirDoIr = 142.80;
}else if(salarioBase <= 3751.05){
  porcentagemIr = 0.15;
  valorADeduzirDoIr = 354.8;
}else if(salarioBase <= 4664.68){
  porcentagemIr = 0.225;
  valorADeduzirDoIr = 636.13;
}else{
  porcentagemIr = 0.275;
  valorADeduzirDoIr = 869.36;
}

Ir = (salarioBase*porcentagemIr)-valorADeduzirDoIr;

salarioLiquido = salarioBase-Ir;

console.log(salarioLiquido);

