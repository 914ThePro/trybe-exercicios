window.onload = function(){
 let submit = document.getElementById("submit");
 let nome = document.getElementById("inputName");
 let email = document.getElementById("inputEmail");
 let resposta = document.getElementById("inputResposta");
 let dadosValidos = true;


 let data = document.getElementById("inputDate");

 data.DatePickerX.init({
  mondayFirst: true,
  minDate    : function()
  {
      var date = new Date();
      return new Date().setDate(date.getDate() - 5);
  },
  maxDate    : function()
  {
      var date = new Date();
      return new Date().setDate(date.getDate() + 10);
  },
  clearButton: false
});




 
 const validation = new JustValidate('#form');

 validation
 .addField('#inputName', [
   {
     rule: 'minLength',
     value: 3,
     errorMessage: 'O nome precisa ter no minimo 3 caracteres'
   },
   {
     rule: 'maxLength',
     value: 40,
     errorMessage: 'O nome NÃO pode conter mais de 40 caracteres'
   },
   {
    rule: 'required',
    errorMessage:'É necessário informar seu nome'
   }
 ])
 .addField("#inputEmail",[
  {
    rule: 'email',
    errorMessage: 'Este e-mail não é valido'
  }
 ]).addField("#inputResposta",[
  {
  rule: 'maxLength',
  errorMessage: 'A resposta deve ter no maximo 500 caracteres'
  }
 ]);





/*
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
 });*/
}