//Problema
//Dado un número n hallar el enésimo elemento de la sucesión de fibonacci
/*
Por ejemplo:
Si la función fibonacciRecursive() recibe:

- fibonaccirecursivo(0) = 0
- fibonaccirecursivo(1) = 1
- fibonaccirecursivo(6) = 8
*/

/*
Veamoslo de la siguiente forma, sólo nos interesa el número presente en una determinada posición de la secuencia:

Indice:                    0 1 2 3 4 5 6
Secuencia Fibonacci:      (0,1,1,2,3,5,8)

El primer elemento es 0 y sexto elemento es 8, ya que empezamos con índice cero

Sabemos que la secuencia de fibonacci es una secuencia en la que cada número es la suma de los dos anteriores.

Así que, si F representa una función para calcular el número de fibonacci,  entonces:

Fn = Fn-1 + Fn-2

Por lo tanto, sabemos que:
    Fn = Fn-1 + Fn-2
    * F0 = 0
    * F1 = 1
    Tomamos F0 y F1 ----> Casos base
De modo que:
    * F2 = F2-1 + F2-2
        F2 = F1 + F0
        F2 = 1 + 0
        F2 = 1
    * F7 = F7-1 + F7-2
        F7 = F6 + F5
        F7 = 8 + 5
        F7 = 13

Indice:                    F0|F1|F2|F3|F4|F5|F6|F7
Secuencia Fibonacci:      (0 |1 |1 |2 |3 |5 |8 |13)
*/

function recursiveFibonacci(n) {
    // Iniciamos la función con el caso base para que la recursividad se detenga y no se ejecute infinitamente
    if(n < 2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

/*
Al tratar con recursividad, debemos tener en cuenta
el concepto de BackTracking en la recursión.

Cuando usamos recursión, las llamadas se apilan en la memoria (CallStack)
y se resuelven en orden inverso una vez que se alcanza el caso base.

- Fase de ida: La recursión sigue llamando a sí misma hasta alcanzar el caso base.
- Fase de retorno (Backtracking): Se devuelven los valores calculados
y se resuelven las operaciones en orden inverso.

El arbol de llamadas se vería de la siguiente manera:

Sí n = 6

6 < 2? -> False

recursiveFibonacci(6-1) + recursiveFibonacci(6-2)
recursiveFibonacci(5) + recursiveFibonacci(4)

    n = 5

    5 < 2? -> False

    recursiveFibonacci(5-1) + recursiveFibonacci(5-2)
    recursiveFibonacci(4) + recursiveFibonacci(3)

        n = 4

        4 < 2? -> False

        recursiveFibonacci(4-1) + recursiveFibonacci(4-2)
        recursiveFibonacci(3) + recursiveFibonacci(2)

            n = 3

            3 < 2? -> False

            recursiveFibonacci(3-1) + recursiveFibonacci(3-2)
            recursiveFibonacci(2) + recursiveFibonacci(1)

                n = 2

                2 < 2? -> False

                recursiveFibonacci(2-1) + recursiveFibonacci(2-2)
                recursiveFibonacci(1) + recursiveFibonacci(0)

                    n = 1

                    1 < 2? -> True

                    return 1 --> Llegamos al caso base

                    n = 0

                    0 < 2? -> True

                    return 0 --> Llegamos al caso base
                1 + 0 = 1

            1 + 1 = 2

        2 + 1 = 3

    3 + 2 = 5

5 + 3 = 8

return 8
*/

/*
Resumen:
Cada función espera el resultado de la siguiente, y solo puede resolverse cuando llega al caso base:
* La recursión usa una pila (stack) en memoria para gestionar las llamadas.
* La fase de ida apila las llamadas hasta llegar al caso base.
* La fase de retorno (backtracking) desapila y resuelve las llamadas en orden inverso.
*/

// Big-O = O(2^n) - Recursive
// Big-O = O(n) - Iterative

console.log(recursiveFibonacci(0)) //0
console.log(recursiveFibonacci(1)) //1
console.log(recursiveFibonacci(6)) //8
console.log(recursiveFibonacci(7)) //13