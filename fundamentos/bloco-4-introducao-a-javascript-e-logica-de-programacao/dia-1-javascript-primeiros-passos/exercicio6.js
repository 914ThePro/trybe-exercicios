let peca = "REI";
peca = peca.toLowerCase();

switch(peca){
  case "peao":
    console.log("O peão é a única peça que não pode mover-se para trás. O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente.");
    break;
  
  case "cavalo":
    console.log("No xadrez o movimento o cavalo é sempre em L (letra ele), ou seja, duas casas num sentido (vertical ou horizontal) e uma casa no outro sentido (horizontal ou vertical)");
    break;
  
  case "torre":
    console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária.");
    break;

  case "bispo":
    console.log("O bispo pode mover-se por qualquer número de casas, mas somente nas diagonais e até que outra peça esteja no caminho. Se essa peça for uma peça do oponente, o bispo pode removê-la e captura-la. MOVIMENTO DO BISPO: Diferentemente da torre, o bispo controla mais ou menos casas dependendo da sua localização no tabuleiro.");
    break;

  case "rei":
    console.log("O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor.");
    break;

  case "rainha":
    console.log("A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.");
    break;
  

  default:
    console.log("Esta peça não existe");
}