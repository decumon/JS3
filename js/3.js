function max(ch1, ch2, ch3){
    return  Math.max(ch1, ch2, ch3);
}

function min(ch1, ch2, ch3){
    return Math.min(ch1, ch2, ch3);
}

document.getElementById("btn1").onclick=function(chislo1){
    document.getElementById("label1").textContent="Максимальное число="+max(document.getElementById("txt1").value,
     document.getElementById("txt2").value, document.getElementById("txt3").value)
}

document.getElementById("btn2").onclick=function(){
    document.getElementById("label1").textContent="Минимальное число="+min(document.getElementById("txt1").value,
     document.getElementById("txt2").value, document.getElementById("txt3").value
    )
}

