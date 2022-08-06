let inputBackgrouncColor;
let inputTextColor;
let inputFontSize;
let inputLineHeight;
let inputFontFamily;
let mainContent = document.getElementsByTagName("main");

window.onload = function(){
  inputBackgrouncColor = document.getElementById("backgroundColor");
  inputTextColor       = document.getElementById("textColor");
  inputFontSize        = document.getElementById("fontSize");
  inputLineHeight      = document.getElementById("lineHeight");
  inputFontFamily      = document.getElementById("fontFamily");

  inputBackgrouncColor.addEventListener("keyup", function (){
    mainContent[0].style.backgroundColor = inputBackgrouncColor.value;
    localStorage.setItem("backgroundColor", inputBackgrouncColor.value);
  });
  inputTextColor.addEventListener("keyup",function(){
    mainContent[0].style.color = inputTextColor.value;
    localStorage.setItem("textColor",inputTextColor.value);
  })
  inputFontSize.addEventListener("keyup",function(){
    mainContent[0].style.fontSize = inputFontSize.value+"px";
    localStorage.setItem("fontSize",inputFontSize.value);

    if(localStorage.getItem("fontSize") == ""){
      mainContent[0].style.fontSize = "16px";
    }
  })
  
  inputLineHeight.addEventListener("keyup",function(){
    mainContent[0].style.lineHeight = inputLineHeight.value;
    localStorage.setItem("lineHeight",inputLineHeight.value);
  })

  inputFontFamily.addEventListener("keyup",function(){
    mainContent[0].style.fontFamily = inputFontFamily.value;
    localStorage.setItem("fontFamily",inputFontFamily.value);
  })


  mainContent[0].style.backgroundColor = localStorage.getItem("backgroundColor");
  mainContent[0].style.color = localStorage.getItem("textColor");
  mainContent[0].style.fontSize = localStorage.getItem("fontSize")+"px";
  mainContent[0].style.lineHeight = localStorage.getItem("lineHeight");
  mainContent[0].style.fontFamily = localStorage.getItem("fontFamily");

  inputBackgrouncColor.value = localStorage.getItem("backgroundColor");
  inputTextColor.value = localStorage.getItem("textColor");
  inputFontSize.value = localStorage.getItem("fontSize");
  inputLineHeight.value = localStorage.getItem("lineHeight");
  inputFontFamily.value = localStorage.getItem("fontFamily");
}





