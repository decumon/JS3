let typeData=function(n){
    return typeof n;
}

console.log(typeData(5));
console.log(typeData("str"));
console.log(typeData(typeData));
console.log(typeData(true));