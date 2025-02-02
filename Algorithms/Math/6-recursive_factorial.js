// Problema
// Dado un número entero 'n' encontrar el factorial de ese número
// En matemáticas el factorial de un entero no negativo n , denotado n!
// es el producto de todos los enteros positivos menores o iguales que n
// Por ejemplo: 3! = 3*2*1 = 6

/*
Sabemos que.
    n! = n*(n-1)!
    0! = 1   -----> Caso base
De modo que:
    * 1! = 1*(1-1)!
    1! = 1*0!
    1! = 1*1
    1! = 1
    * 5! = 5*(5-1)!
    5! = 5*4! ---> 4! = 4*3*2*1 = 24
    5! = 5*24
    5! = 120
*/

function recursiveFactorial(n) {
    if (n == 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
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

Sí n = 5

n = 0? -> False

5 * recursiveFactorial (5-1)
5 * recursiveFactorial (4)

    n = 4

    n = 0? -> False

    4 * recursiveFactorial (4-1)
    4 * recursiveFactorial (3)

        n = 3

        n = 0? -> False

        3 * recursiveFactorial (3-1)
        3 * recursiveFactorial (2)

            n = 2

            n = 0? -> False

            2 * recursiveFactorial (2-1)
            2 * recursiveFactorial (1)

                n = 1

                n = 0? -> False

                1 * recursiveFactorial (1-1)
                1 * recursiveFactorial (0)

                    n = 0

                    n = 0? -> True

                    return 1 () Llegamos al caso base
                1 * 1 = 1

            2 * 1 = 2

        3 * 2 = 6

    4 * 6 = 24

5 * 24 = 120

return 120

*/

/*
Resumen:
Cada función espera el resultado de la siguiente, y solo puede resolverse cuando llega al caso base:
* La recursión usa una pila (stack) en memoria para gestionar las llamadas.
* La fase de ida apila las llamadas hasta llegar al caso base.
* La fase de retorno (backtracking) desapila y resuelve las llamadas en orden inverso.
*/

//Big-O = O(n)

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(5)) //120