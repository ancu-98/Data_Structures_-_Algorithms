//Problema
//Dado un número n hallar el enésimo elemento de la sucesión de fibonacci

/*
Por ejemplo:
Si la función fibonacciRecursive() recibe:

- fibonaccirecursivo(0) = 0
- fibonaccirecursivo(1) = 1
- fibonaccirecursivo(6) = 8

Veamoslo de la siguiente forma, sólo nos interesa el número presente en una determinada posición de la secuencia:

Indice:                    0 1 2 3 4 5 6
Secuencia Fibonacci:      (0,1,1,2,3,5,8)

El primer elemento es 0 y sexto elemento es 8, ya que empezamos con índice cero

Sabemos que la secuencia de fibonacci es una secuencia en la que cada número es la suma de los dos anteriores.

Así que, si F representa una función para calcular el número de fibonacci,  entonces:

Fn = Fn-1 + Fn-2
*/

function recursiveFibonacci(n) {
    // Iniciamos la función con el caso base para que la recursividad se detenga y no se ejecute infinitamente
    if(n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

/*
Fn = Fn-1 + Fn-2

Indice:                    F0|F1|F2|F3|F4|F5|F6
Secuencia Fibonacci:      (0 |1 |1 |2 |3 |5 |8)

Sí n = 7

- F7 = F7-1 + F7-2
- F7 = F6 + F5
- F7 = 8 + 5
- F7 = 13
*/

// Big-O = O(2^n) - Recursive
// Big-O = O(n) - Iterative

console.log(recursiveFibonacci(0)) //0
console.log(recursiveFibonacci(1)) //1
console.log(recursiveFibonacci(6)) //8
console.log(recursiveFibonacci(7)) //13