// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

// Problema 1
/* Escribe un bucle for que recorra un arreglo de números e imprima cada número. */

console.log("Solucion 1")

for(var i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

// Problema 2
/* Escribe un ciclo for que recorra un arreglo de números e imprima la suma del número y el índice del número en el arreglo. */

console.log(" ")
console.log("Solucion 2")

for(var i = 0, sum = 0; i < arr2.length; i++){

    sum += arr2[i];

    console.log("Suma Actual: " + sum)
    console.log("Indice: " + i);
}

// Problema 3
/* Escribe un bucle for que recorra un arreglo de números e imprima SOLO los números mayores a 5.*/
console.log(" ")
console.log("Solucion 3")

for(var i = 0; i < arr3.length; i++){

    if(arr3[i] > 5){

    console.log(arr3[i])

        }
}

// Problema Ninja
/* modifica tu solución para el #3 para que cualquier número en el arreglo que NO sea mayor que 5 se reemplace con una cadena de "No hay dados". Esta cadena NO debe imprimirse.*/

console.log(" ")
console.log("Solucion Ninja")

for(var i = 0; i < arr3.length; i++){

    if(arr3[i] > 5){

    console.log(arr3[i])

        }
    else{
        arr3[i] = "No hay dados";
    }
}

console.log(arr3)