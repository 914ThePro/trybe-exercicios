const a = 100;
const b = 400;
const c = -3;

if(a+b+c == 180){
  console.log("true");
}else{
  

  console.log("False");

  if(a < 0 || a > 360){
    console.log(a+" não é um ângulo valido");
  }

  if(b < 0 || b > 360){
    console.log(b+" não é um ângulo valido");
  }

  if(c < 0 || c > 360){
    console.log(c+" não é um ângulo valido");
  }


}