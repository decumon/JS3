function polometr(pol){
    document.getElementById("btn1").hidden=true;
    if (document.getElementById("txt1").value=="М") return("Ваш пол мужской")
    if (document.getElementById("txt1").value=="Ж") return("Ваш пол женский")
         else return("Ваш пол не определен")
}

document.getElementById("btn1").onclick=function(){
    document.getElementById("label2").textContent=polometr(document.getElementById("txt1").value);  
}          

