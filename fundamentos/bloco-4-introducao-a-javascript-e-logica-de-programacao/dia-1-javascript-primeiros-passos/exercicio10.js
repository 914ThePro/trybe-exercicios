const custo = 5;
const valorVenda = 15;
const impostoSobreCusto = custo*0.20;

let lucroPorUnidade = valorVenda-custo-impostoSobreCusto;


if(custo <= 0 || valorVenda <= 0){
  console.log("Valores de custo ou valor de venda abaixo de zero não são válidos");
}else{
  console.log("O lucro a cada mil unidades vendidas sera de "+lucroPorUnidade*1000);
}
