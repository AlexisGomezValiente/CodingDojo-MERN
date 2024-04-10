// Siempre hambriento
// Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.
function siempreHambriento(arr) {
    if(arr.includes('comida')){
        arr.forEach(e => {
            if(e == 'comida') console.log('delicioso')
        });
    }else{
        console.log('Tengo hambre');
    }
} 
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

// Filtro paso alto
// Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
function highPass(arr, cutoff) {
    var filteredArr = arr.filter(e => e > cutoff);
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// Mejor que el promedio
// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    var sum = 0;
    var prom = 0;
    arr.forEach(e => {
        sum += e;
    });
    prom = sum / arr.length;

    var count = 0
    arr.forEach(e => {
        if(e > prom) count += 1;
    });

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// Arreglo invertido
// Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    return arr.reverse();
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// Arreglo de Fibonacci
// Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(let i = 0; i < n - 2; i++){
        fibArr.push(fibArr[i] + fibArr[i + 1])
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
