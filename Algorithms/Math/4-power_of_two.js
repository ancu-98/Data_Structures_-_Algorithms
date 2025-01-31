//Problem
// Dado un número entero positivo n, determinar si el número es una potencia de dos o no
// Un número entero es potencia de 2 si existe un número entero x tal que n es igual a 2 potencia x.

// Por ejemplo:

// - isPowerOfTwo(1) devuelve verdadero ya que es igual a 2⁰.
// - Del mismo modo, es isPowerOfTwo(2) también devuelve verdadero ya que es igual a 2¹.
// - isPowerOfTwo(5), en cambio, devuelve falso ya que no podemos encontrar un entero x que satisfaga la igualdad.

//---------Solucion 1-----------
function isPowerOfTwo(n) {
    // ¿qué sabemos a partir del enunciado de nuestro problema?
    // Sabemos que n es un número entero positivo
    if(n < 1) {
        return false
    }
    // El bucle debe ejecutarse mientras n sea mayor que uno, así que la condición es n mayor que uno.
    while(n > 1){
        // Dentro del bucle, comprobamos si el resto al dividir n entre dos no es igual a cero
        if (n % 2 !== 0){
            // si n módulo dos no es igual a 0
            // devolvemos false.
            return false
        }
        //En caso contrario, dividimos n por 2 y repetimos el bucle:
        // n es igual a n dividido por 2.
        n = n/2
    }
    // Al salir del bucle, sólo puede significar que n es igual a 1 y que el resto siempre ha sido 0.
    // En ese caso, el número es una potencia de 2, y devolvemos true.
    return true
}

/*
Sí n = 5

5 es menor que 1? = false

Mientras n(5) sea mayor que 1
Se ejecuta el bucle

El resto/residuo al dividir n entre 2 (5/2) es diferente de 0? = True
n % 2 !== 0
5÷2=2(cociente entero),residuo =5−(2×2)= 5-(4)=1
5 % 2 == 1
Como el resto/residuo al dividir n entre 2 (5/2) es diferente de 0
devolvemos false

Lo que significa que 5 no es una potencia de 2
*/

/*
Sí n = 8

8 es menor que 1? = false

Mientras n(8) sea mayor que 1
Se ejecuta el bucle

El resto/residuo al dividir n entre 2 (8/2) es diferente de 0? = False
n % 2 !== 0
8÷2=4(cociente entero),residuo =8−(2×4)= 8-(8)= 0
8 % 2 == 0
Como el resto/residuo al dividir n entre 2 (8/2) es igual a 0
salimos del if, la condicion no se cumple

Actualizamos el valor de n
n = n/2
n = 8/2 = 4

Se vuelve a ejecutar el bucle while

----------------> n = 2
Mientras n(4) sea mayor que 1
Se ejecuta el bucle

El resto/residuo al dividir n entre 2 (4/2) es diferente de 0? = False
n % 2 !== 0
4÷2=2(cociente entero),residuo =4−(2×2)= 4-(4)= 0
4 % 2 == 0
Como el resto/residuo al dividir n entre 2 (4/2) es igual a 0
salimos del if, la condicion no se cumple

Actualizamos el valor de n
n = n/2
n = 4/2 = 2

Se vuelve a ejecutar el bucle while

----------------> n = 2
Mientras n(2) sea mayor que 1
Se ejecuta el bucle

El resto/residuo al dividir n entre 2 (2/2) es diferente de 0? = False
n % 2 !== 0
2÷2=1(cociente entero),residuo =2−(1×2)= 2-(2)= 0
2 % 2 == 0
Como el resto/residuo al dividir n entre 2 (2/2) es igual a 0
salimos del if, la condicion no se cumple

Actualizamos el valor de n
n = n/2
n = 2/2 = 1

Se vuelve a ejecutar el bucle while

----------------> n = 1
Mientras n(1) sea mayor que 1
1 no es mayor 1, es igual

Se sale del bucle while

Devolvemos True

Lo que significa que 8 sí es una potencia de 2
ya que el resto siempre a sido 0
*/

// Big-O = O(log n)

console.log('Solución 1')
console.log(isPowerOfTwo(1)) // True
console.log(isPowerOfTwo(2)) // True
console.log(isPowerOfTwo(3)) // False
console.log(isPowerOfTwo(4)) // True
console.log(isPowerOfTwo(5)) // False

//---------Solucion 2-----------
function isPowerOfTwoBitWise(n) {
    // Comprobamos si n es menor que uno.
    if(n > 1){
        //Si lo es, devolvemos false.
        return false
    }
    // Sin embargo, para comprobar si n es una potencia de dos, devolvemos:
    // n bitwise y el operador and, n menos uno.
    // Lo comparamos con cero.
    // Si es cero, n es efectivamente una potencia de 2.
    return (n & (n-1) == 0)
}

/*
(n & (n-1) == 0)

Sí n = 1
- n = 1, binario: 0001
    (1 & (1-1) == 0)
    posición:       0123    0123
    (1 & 0 == 0)   (0001 & 0000 = 0000)
    - posición del bit 0: 0
    - posición del bit 1: 0
    - posición del bit 2: 0
    - posición del bit 3: 0
    - 0000 → Número 0
    (0 == 0) → True

Sí n = 2
- n = 2, binario: 0010
    (2 & (2-1) == 0)
    posición:      0123    0123
    (2 & 1 == 0)  (0010 & 0001 == 0000)
    - posición del bit 0: 0
    - posición del bit 1: 0
    - posición del bit 2: 0
    - posición del bit 3: 0
    - 0000 → Número 0
    0 == 0 ? → True

Sí n = 3
- n = 3, binario: 0011
    (3 & (3-1) == 0)
    posición:      0123    0123
    (3 & 2 == 0)  (0011 & 0010 == 0000)
    - posición del bit 0: 0
    - posición del bit 1: 0
    - posición del bit 2: 1
    - posición del bit 3: 0
    - 0010 → Número 2
    2 == 0 ? → False
*/

//Big O = O(1)

console.log('Solución Optimizada')
console.log(isPowerOfTwo(1)) // True
console.log(isPowerOfTwo(2)) // True
console.log(isPowerOfTwo(3)) // False
console.log(isPowerOfTwo(4)) // True
console.log(isPowerOfTwo(5)) // False