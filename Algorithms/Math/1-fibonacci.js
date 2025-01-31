// Problema
// Dado un número 'n', hallar los primeros 'n' elementos de la secuencia de fibonacci

// La función tendrá un parámetro n
// que indica cuántos números de la secuencia tenemos que mostrar
function fibonacci(n){
    // Sabemos que los dos primeros números de la secuencia son 0 y 1
    const fib = [0,1]
    // A continuación tenemos que rellenar los elementos desde el tercer elemento hasta n
    // Cumpliendo la condición de que:
    // Cada número sea la suma de los dos números anteriores
    // Para rellenar los elementos restantes utilizamos un bucle for:
    // Que comienza en índice igual a 2 e iteramos hasta tener n elementos
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

/*
Sí n = 4, index:i 0 1
array ---------> [0,1]
fib[0] = 0
fib[1] = 1
Iteramos desde i = 2
fib[2] = fib[2-1] + fib[2-2]
       = fib[1]   + fib[0]
       = 1        + 0       = 1
array ---------> [0,1,1]
fib[3] = fib[3-1] + fib[3-2]
       = fib[2]   + fib[1]
       = 1        + 1       = 2
array ---------> [0,1,1,2]
n = 4 --------->  0,1,2,3
*/

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4)) // [0,1,1,2]
console.log(fibonacci(7))

//Big-O = O(n)