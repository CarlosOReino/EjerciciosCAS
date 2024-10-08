let num1= parseInt(prompt("Ingrese un número entero: "));
let num2= parseInt(prompt("Ingrese otro número entero"));
let hacer=prompt("Quiere sumar o restar ? ");
let resultado;
if(hacer == "sumar" ){
    resultado = num1 + num2;
}else if(hacer == "restar"){
    resultado = num1 - num2;
}else{
    alert("Elige bien!")
}
alert("La operación es: " + resultado);