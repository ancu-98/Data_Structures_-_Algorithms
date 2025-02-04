// Problema
// Dado un número entero 'n' encontrar el factorial de ese número
// En matemáticas el factorial de un entero no negativo n , denotado n!
// es el producto de todos los enteros positivos menores o iguales que n

function factorial(n) {
    // Sabemos que el factorial de 0 y 1 es = 1
    let result = 1
    // si n es mayor que 1 tenemos que encontrar el producto de todos los números menores o iguales a n
    // para ello usamos un bucle for que empieza en 2 ya que multiplicar por 1 no tiene efecto
    for(let i = 2; i<= n; i++){
        // En cada iteración multiplicamos el resultado actual por i
        // resultado es igual al resultado multiplicado por i
        result = result * i
    }
    return result
}

/*
Sí n = 5

result = 1

Iteramos desde i = 2, i <= 5? -> True, i++ -> i + 1
    result = result * i
    result = 1 * 2 = 2

    -------------> i = 3, i <= 5? -> True, i++ -> i + 1
    result = result * i
    result = 2 * 3 = 6

    -------------> i = 4, i <= 5? -> True, i++ -> i + 1
    result = result * i
    result = 6 * 4 = 24

    -------------> i = 5, i <= 5? -> True, i++ -> i + 1
    result = result * i
    result = 24 * 5 = 120

Hasta que i <= 5 --------> (i sea menor o igual que 5)

return result = 120
*/

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120

// Big-O = O(n)