function getDay(day)
{
    if (isNaN(day)){        
            return "Вы ввели не число, попробуйте еше раз";
        }
        else{
            if (day<=0 ||  day >7)
            {
                return "Вы ввели число меньше 0 или больше 7, а в недели 7 дней, их отсчет начинается с 1. Вы что, окончили 8 классов?";
            }
            else{
                switch (day)
                {
                    case '1': return "Понедельник";
                    case '2': return "Вторник";
                    case '3': return "Среда";
                    case '4': return "Четверг";
                    case '5': return "Пятница";
                    case '6': return "Суббота";
                    case '7': return "Воскресенье";
                }
            }
        }
}


document.getElementById("btn1").onclick=function(){
    document.getElementById("label2").textContent=getDay(document.getElementById("txt1").value)
}