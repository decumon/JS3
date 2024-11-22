let foo=function(name, age){
    if (isNaN(document.getElementById("txt1").value)) return "Введите корректные данные"
    if (age<18) return name+ ', вы еще очень молоды!'
    if (+age<=50 ) return name+", добро пожаловать в личный кабинет!" 
    if (age>50) return name+", мое почтение!" 
}

document.getElementById("btn1").onclick=function(){
    document.getElementById("label1").textContent=foo(document.getElementById("txt2").value, document.getElementById("txt1").value)
}

