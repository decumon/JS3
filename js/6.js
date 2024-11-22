let randomFoo = () => Math.floor(Math.random()*100%20+10); 

ch1=randomFoo();
ch2=randomFoo();

let otvet=prompt(ch1 +"+"+ch2+"=?")
if (otvet==ch1+ch2) alert("Правильно")
    else alert("Неправильно")