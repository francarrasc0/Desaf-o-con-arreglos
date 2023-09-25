//1.- Siempre hambriento

function siempreHambriento(arr) {
    // tu código aquí 
    var comida = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("Delicioso");
            comida++;
        }
    }
    if (comida == 0) {
        console.log("Tengo hambre")
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"])
siempreHambriento([4, 1, 5, 7, 2]);

//2.- Filtro paso alto

function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//3.- Mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // calcula el promedio
    var promedio = sum / arr.length;
    var count = 0
    // cuenta cuántas variables son mayores que el promedio
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > promedio) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);

console.log(result); // esperamos 4 de vuelta

//4.- Arreglo invertido

function reverse(arr) {
    // tu código aquí
    var left= 0;
    var right = arr.length-1;
    while(left<right){
        var temp = arr[left];
        arr[left]=arr[right];
        arr [right]= temp;
        left++;
        right--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//5.- Arreglo de Fibonacci

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    while(fibArr.length < n){
        var x = fibArr[fibArr.length-1];
        var y = fibArr[fibArr.length-2];
        fibArr.push(x+y)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

