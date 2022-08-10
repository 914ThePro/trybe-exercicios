window.onload = function(){
 let submit = document.getElementById("submit");
 let nome = document.getElementById("inputName");
 let email = document.getElementById("inputEmail");
 let resposta = document.getElementById("inputResposta");
 let dadosValidos = true;

 submit.addEventListener("click", function(e){
  e.preventDefault();


  if(nome.value.length < 10 || nome.value.length > 40) 
    dadosValidos = false;

  if(email.value.length < 10 || nome.value.length > 50)
    dadosValidos = false;

  if(resposta.value.length > 500)
    dadosValidos = false;

  if(dadosValidos)
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
  else
    alert("Dados Inválidos");

  dadosValidos = true;
 });
}