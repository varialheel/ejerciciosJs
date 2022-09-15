/* ej 1
let n1 = 5;
let n2 = 8;
if(n1<n2) {
alert("numero1 no es mayor que numero2");
}
if(n2>=0) {
alert("numero2 es positivo");
}
if(n2<0 || n2 !=0) {
alert("numero1 es negativo o distinto de cero");
}
if(n1++ < n2) {
alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que
numero2");
}*/

/*let pares = 0, impares = 0, total = 0,positivo = 0, negativo = 0, producto=1,n = parseInt(prompt("dime un numero"));
while (n!==0){
    if(n<0){
        negativo++;
    } else {
        positivo++;
        producto*=n;
    } 
    if(n%2==0){
        pares++;
        total+=n;
    } else {
        impares++;
    }
    n = parseInt(prompt("dime otro numero"));
};
document.write(`el total de numeros positivos es ${pares}, el numero total de numeros impares es ${impares}, la suma de los numeros pares es ${total},
el numero total de numeros negativos es ${negativo},el numero total de numeros positivos es ${positivo}, el producto de los numeros positivos es 
${producto}`);*/


let horas = parseInt(prompt("dime el numemro de horas")), precio =  parseFloat(prompt("dime el precio de las horas")),salario=0;
if(horas>40){
    salario=precio*40+((horas-40)*(precio*1.5));
} else {
    salario=precio*horas;
}
console.log(salario);