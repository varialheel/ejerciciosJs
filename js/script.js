/*Completar las condiciones de los if del siguiente script para que los mensajes de 
los alert() se muestren siempre de forma correcta 
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

/*Realizar un programa que acepte valores hasta que se introduzca el valor 0. El programa 
nos mostrará:
a. Cuantos valores pares e impares se han introducido.
b. La suma de los valores pares.
c. Cuantos valores positivos y negativos se han introducido.
d. El producto de los valores positivos.
e. Cuantos valores se han introducido.
let pares = 0, impares = 0, total = 0,positivo = 0, negativo = 0, producto=1,n = parseInt(prompt("dime un numero"));
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
/* Realizar un programa que calcule el salario de un trabajador, para ello pediremos el 
número de horas trabajadas y el precio de la hora. Si el trabajador trabajas más de 40 
horas semanales, se considera que trabaja horas extras. Las horas extras se pagan a 1.5 
veces la hora normal.
let horas = parseInt(prompt("dime el numemro de horas")), precio =  parseFloat(prompt("dime el precio de las horas")),salario=0;
if(horas>40){
    salario=precio*40+((horas-40)*(precio*1.5));
} else {
    salario=precio*horas;
}
console.log(salario);
*/



/*Pedir dos números. Si los valores son numéricos e impares, mostrar la siguiente 
información:
a. Valores pares entre los dos números introducidos.
let n1 = parseInt(prompt("dime un numero")),n2 = parseInt(prompt("dime un numero"));
if(n1%2!==0 && n2%2!==0){
    if(n1>n2){
        for (let i = n2; i <= n1; i++) {
            if(i%2===0){
                document.write(i+" ");
            }
        }
    } else if(n2>n1){
        for (let i = n1; i <= n2; i++) {
            if(i%2===0){
                document.write(i+" ");
            }
        }
    } else {
        document.write("los numeros no pueden ser iguales");
    }
} else {
    document.write("uno o los dos numeros son pares");
}*/

/*Programa que pide 2 números y halla su potencia. 
a. La potencia se debe realizar mediante productos y debemos asegurarnos de que los 
valores con los que trabajamos son numéricos.
b. No admitiremos valores negativos
let n1 = parseInt(prompt("dime un numero")),n2 = parseInt(prompt("dime la potencia")), potencia=1;
if(isNaN(parseInt(n1))||isNaN(parseInt(n2))||n1<=0||n2<=0){
    document.write("hay que introducir numeros positivos");
} else {
    for (let i = 1; i <= n2; i++) {
        potencia*=n1;
    }
    document.write(potencia);
}
*/
/*Realizar un programa que pida un número y compruebe si es un valor numérico, positivo y 
menor que 10. Si el valor es válido:
a. Mostrar la tabla de multiplicar el número introducido.
b. Mostrar todas las tablas de multiplicar desde el 1 hasta el valor introducido 
let n1 = parseInt(prompt("dime un numero"));
if(isNaN(parseInt(n1))||n1<=0||n1>10){
    document.write("numero incorrecto")
} else {
document.write(`tabla de multiplicar del numero ${n1}<br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${n1}X${i}=${n1*i}<br>`);
}
document.write(`las tablas de multiplicar del 1 al ${n1}<br>`);
for (let i = 1; i <= n1; i++) {
    document.write(`tabla de multiplicar del numero ${i}<br>`);
    for (let u = 1; u <= 10; u++) {
        document.write(`${i}X${u}=${i*u}<br>`);
    }
}
}*/
/*Calcula la factorial de un número entero n.
Utilizando un for y también utilizando un while.
El valor que nos introduzcan no podrá ser negativo, ni mayor de 150.
let n1 = parseInt(prompt("dime un numero")),factorial=1;
if(isNaN(parseInt(n1))||n1<=0||n1>150){
    document.write("numero incorrecto")
} else {
    for (let i = 1; i <= n1; i++) {
        factorial*=i;
    }
    document.write(`el numero factorial de ${n1} es ${factorial}`);
}
 */
/* Realizar un programa que “implemente” el funcionamiento de un Cajero Automático, con 
las siguientes características:
a. Las operaciones que se podrán realizar son:
MENU DEL CAJERO
1. Sacar dinero.
2. Ingresar dinero.
3. Consultar saldo.
4. Cambiar Contraseña.
5. Salir.
b. La operación para introducir la contraseña se realizará de forma automática 
siempre que el usuario comience a utilizar el cajero. 
c. Cada vez que el usuario realice una operación, se mostrará el resultado y volverá 
aparecer el menú.
d. El cliente no podrá cometer más de tres errores en la introducción de la 
contraseña. En el caso de que el usuario cometa más de tres errores al introducir la 
contraseña, el programa acabará y no permitirá que el usuario acceda el menú del 
cajero.
e. Cada vez que comience el programa el cliente del cajero siempre tendrá la misma 
contraseña. (por ejemplo: DAW2) A no ser que la cambie.
f. Siempre que el usuario comience a utilizar el cajero tendrá 6.000 Euros en su 
cuenta.
g. El cliente podrá sacar dinero siempre que tenga dinero suficiente. 
Intenta minimizar todo lo que puedas el uso de variables. 
Intenta utilizar variables locales siempre que puedas.
 */
// let pass,password="daw",intentos=3,saldo=0,login=false;
// const sacarDinero=(cant)=>{
//     if(saldo<cant){
//         alert("operacion no permitida");
//     } else {
//         saldo-=cant;
//         alert(`tu saldo es ${saldo}`);
//     }
// }
// const ingrDinero=(cant)=>{
//     saldo+=cant;
//     alert(`tu saldo es ${saldo}`);
// }
// const consSaldo=()=>{
//     alert(`tu saldo es ${saldo}`);
// }
// const cambContra = ()=>{
//     password=prompt("dime la nueva contraseña");
// }
// const contrasena=()=>{
//     intentos=3;
//     while (intentos>0 && !login) {
//         pass= prompt("introduzca la contraseña");
//         if (pass==password) {
//             menu();
//         }
//     }
// }
// Sumatorio
// const sumatorio = (num1, cb) => {
//     console.log(num1);
//     console.log(cb(num1, 5));
// }

// sumatorio(10, (num2, num3) => {
//     return num2 + num3;
//    })

let n = [];
for (let i = 0; i < 10; i++) {
    n.push(i);
    
}
n.forEach(numero=>{
    console.log(numero);
})