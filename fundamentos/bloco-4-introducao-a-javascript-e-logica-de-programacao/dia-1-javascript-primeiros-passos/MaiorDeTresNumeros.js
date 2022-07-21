const a = 3;
const b = 1;
const c = 2;

let maiorNumeroEncontrado;

if(a > b && a > c){
  maiorNumeroEncontrado = a;
}

if(b > a && b > c){
  maiorNumeroEncontrado = b;
}

if(c > a && c > b){
  maiorNumeroEncontrado = c;
}


console.log("O maior número encontrado é "+maiorNumeroEncontrado);