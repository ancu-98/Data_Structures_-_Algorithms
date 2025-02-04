// Problema
// Dado un número natural 'n' determinar si el número es primo o no
// Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1. 
// Esto significa que no puede ser dividido por ningún otro número natural sin dejar un resto.

//---------Solucion 1-----------
function isPrime(n) {
    // ¿Qué sabemos de los números primos?
    // Sabemos que es un número natural mayor mayor que 1.
    // Sí n es menor que 2 devuelve false
    if (n < 2) {
        // así que si llamamos a la función pasando 1,0 o cualquier número negativo devolvemos false de inmediato
        return false
    }
    // si n es mayor que 1 tenemos que comprobar si es divisible por un número menor
    // para ello usamos un bucle for que empieza en 2 ya que todo número es divisible por 1
    for (let i = 2; i < n; i++) {
        // La condición es menor que n (i < n) y no menor o igual que n (i <= n) ya que n es siempre divisible por sí mismo
        // En cada iteración comprobamos si el número es divisible por i
        if(n % i == 0) {
            // si n el módulo i es igual a cero y si este es el caso, 'n' no es un número primo y devolvemos false
            return false
        }
    }
    // si el bucle se ha completado y ningún número podría dividir a n, es primo y devolvemos true
    return true
}

/* Solucion sin Math.sqrt(n)
Sí n = 5

¿n es mayor que 2?
------> 5 < 2 --> True

Iteramos desde i = 2, i < 5? -> True, i++ -> i + 1
    n % i == 0
    5÷2=2(cociente entero),residuo =5−(2×2)=1
    5 % 2 == 1
    return false

    -------------> i = 3, i < 5? -> True, i++ -> i + 1
    n % i == 0
    5÷3=1(cociente entero),residuo =5−(3×1)=2
    5 % 3 == 2
    return false

    -------------> i = 4, i < 5? -> True, i++ -> i + 1
    n % i == 0
    5÷4=1(cociente entero),residuo =5−(4×1)=1
    5 % 4 == 1
    return false
    -------------> i = 5, i < 5? -> False
Hasta que i < 5 --------> (i sea menor que 5)

Como ningún número menor que 'n'(5) es divisible sin dejar un resto
El Número es Primo
return true
*/

// Big-O = O(n)

console.log('Solución 1')
console.log(isPrime(1)) // False
console.log(isPrime(5)) // True
console.log(isPrime(4)) // False

//---------Solucion 2-----------
function isPrime1(n) {
    // ¿Qué sabemos de los números primos?
    // Sabemos que es un número natural mayor mayor que 1.
    // Sí n es menor que 2 devuelve false
    if (n < 2) {
        // así que si llamamos a la función pasando 1,0 o cualquier número negativo devolvemos false de inmediato
        return false
    }
    // si n es mayor que 1 tenemos que comprobar si es divisible por un número menor
    // para ello usamos un bucle for que empieza en 2 ya que todo número es divisible por 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Iteramos desde 2 hasta la raíz cuadrada de n
        // En cada iteración comprobamos si el número es divisible por i
        if(n % i == 0) {
            // si n el módulo i es igual a cero y si este es el caso, 'n' no es un número primo y devolvemos false
            return false
        }
    }
    // si el bucle se ha completado y ningún número podría dividir a n, es primo y devolvemos true
    return true
}

/* Solucion Optimizada con el Math.sqrt(n)
Sí n = 5

¿n es mayor que 2?
------> 5 < 2 --> True

---------------------Math.sqrt(5) = 2.23606797749979 = 2.24
Iteramos desde i = 2, i <= 2.24? -> True                   ,i++ -> i + 1
    2 es menor o igual que 2.24? = True

    n % i == 0
    5÷2=2(cociente entero),residuo =5−(2×2)=1
    5 % 2 == 1
    return false

    -------------> i = 3 i <= 2.24? -> False
    3 es menor o igual que 2.24 = False

Hasta que i <= 2.24 --------> (i sea menor o igual que 2.24)

Como ningún número menor que 'n'(5) es divisible sin dejar un resto
El Número es Primo
return true

En esta solución solo iteramos hasta la raíz cuadrada de n, y no hasta n
*/

//Big-O = O(sqrt(n))

console.log('Solución Optimizada')
console.log(isPrime1(1)) // False
console.log(isPrime1(5)) // True
console.log(isPrime1(4)) // False
