// Problem
// Dado un arreglo de números enteros, ordenar el arreglo.
/*
Por ejemplo,
si tenemos un arreglo con cinco números enteros:

arr = [-6, 20, 8, -2 ,4]

Pasar este arreglo a una función de ordenamiento de burbuja debería devolver el mismo arreglo en orden ascendente.

bubbleSort(arr) => debería retornar [-6,-2,4,8,20]
*/

/*
PSEUDOCODIGO
1. El primer elemento del arreglo se considera como ordenado
2. Se divide virtualmente el arreglo en una parte ordenada y una parte desordenada
3. Seleccionamos un elemento desordenado y lo comparamos con todos los elementos en la parte ordenada.
4. Si el elemento en la parte ordenada es menor que el elemento seleccionado, pasamos al siguiente elemento en la parte desordenada.
5. Si el elemento en la parte ordenada es mayor, lo desplazamos hacia la derecha para hacer espacio para el nuevo elemento.
6. Repetimos los pasos anteriores para todos los elementos desordenados en el arreglo.
*/

function insertionSort(arr){
    // arr -> representa el arreglo a ordenar
    // Asumimos el primer elemento del array como ordenado
    // El resto de array se considera desorneado
    // Necesitamos recorrer la parte desordenada de la matriz
    for(let i = 1; i < arr.length ; i++){
        // Seleccionamos un elemento desordenado, que pasa a ser el número a insertar
        // Guardamos el número a insertar en una variable, para luego insertarlo en el lugar correcto
        let numberToInsert = arr[i]
        // El número a insertar necesita compararse con cada elemento de la parte ordenada
        // Sabemos que la parte ordenada siempre se encuentra a la izquierda de la parte desordenada
        let j = i - 1  // j se refiere al indice del elemento ordenado

        // Necesitamos otro bucle para iterar sobre la parte ordenada del arreglo
        // Mientras j sea mayor o igual a 0, para asegurarnos que iterar hasta el primer elemento
        // Debemos verificar sí el elemento ordenado es mayor que el número a insertar
        // De lo contrario, no hay más necesidad de iterar hacia la izquierda
        while(j >= 0 && arr[j] > numberToInsert){
            // Si el elemento ordenado es mayor que el número a insertar
            // Desplazamos el elemento ordenado un indice a la derecha
            arr[j + 1] = arr[j]
            // Decrementamos j en cada iteración
            j = j-1
        }
        // Este bucle while asegura que todos los elementos mayores que el número a insertar sean desplazados a la derecha en 1 indice.
        // Un vez hecho esto, j apuntará al indice donde falló o  el elemento ordenado es menor que el número a insertar
        // En ese caso, seleccionamos el siguiente elemento que pasaría a ser el número a insertar en la parte desordenada
        // o donde el número actual es menor que el número a insertar
        // Por lo tanto, insertamos el número a insertar en su posición correcta:
        arr[j+1] = numberToInsert // Insertamos el número a insertar a la derecha del número actual
        //Volvemos a seleccionar el siguiente elemento desordenado
    }
}

/*
Sí arr = [5, 2, 9, 1, 6]
NTI = numberToInsert , SE = sortedElement

Asumimos el primer elemento del array como ordenado

indice:          0  1  2  3  4
arr-ordenado -> [5| 2, 9, 1, 6]   <- arr-desordenado
NTI = ?   , SE = 5

-------------> iteracion 1 - Bucle for
for(let i = 1; i < arr.length ; i++ -> i + 1)
               1 < 5 -> True

numberToInsert = arr[i]
numberToInsert = arr[1]
numberToInsert = 2

j = i - 1
j = 1 - 1
j = 0  --> Indica el indice del elemento ordenado

indice:          0  1  2  3  4
arr-ordenado -> [5| 2, 9, 1, 6]   <- arr-desordenado
NTI = 2   , SE = 5

    -------------> iteracion 1 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          0 >= 0 && arr[0] > numberToInsert
          0 >= 0 && 5 > 2
          True   && True --> True

    Desplazamos el elemento ordenado un indice a la derecha
    arr[j + 1] = arr[j]
    arr[0 + 1] = arr[0]
    arr[1] = 5

    Decrementamos j en cada iteración
    j = j-1
    j = 0-1
    j = -1 --> Indica el indice del elemento ordenado

    indice:          0  1  2  3  4
    arr-ordenado -> [5| 5, 9, 1, 6]   <- arr-desordenado
    NTI = 2   , SE = ?

    -------------> iteracion 2 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          -1 >= 0 && arr[-1] > numberToInsert
          -1 >= 0 && undefined > 2
          False   && False --> False

    Salimos del bucle while

arr[j+1] = numberToInsert
arr[-1+1] = 2
arr[0] = 2

indice:          0  1  2  3  4
arr-ordenado -> [2  5| 9, 1, 6]   <- arr-desordenado
    NTI = ?   , SE = ?

-------------> iteracion 2 - Bucle for
for(let i = 2; i < arr.length ; i++ -> i + 1)
               2 < 5 -> True

numberToInsert = arr[i]
numberToInsert = arr[2]
numberToInsert = 9

j = i - 1
j = 2 - 1
j = 1 --> Indica el indice del elemento ordenado

indice:          0  1  2  3  4
arr-ordenado -> [2  5| 9, 1, 6]   <- arr-desordenado
    NTI = 9   , SE = 5

    -------------> iteracion 3 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          1 >= 0 && arr[1] > numberToInsert
          1 >= 0 && 5 > 9
          True   && False --> False

    Salimos del bucle while

arr[j+1] = numberToInsert
arr[1+1] = 9
arr[2] = 9

indice:          0  1  2  3  4
arr-ordenado -> [2  5  9| 1, 6]   <- arr-desordenado
    NTI = ?   , SE = ?

-------------> iteracion 3 - Bucle for
for(let i = 3; i < arr.length ; i++ -> i + 1)
               3 < 5 -> True

numberToInsert = arr[i]
numberToInsert = arr[3]
numberToInsert = 1

j = i - 1
j = 3 - 1
j = 2 --> Indica el indice del elemento ordenado

indice:          0  1  2  3  4
arr-ordenado -> [2  5  9| 1, 6]   <- arr-desordenado
    NTI = 1   , SE = 9

    -------------> iteracion 4 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          2 >= 0 && arr[2] > numberToInsert
          2 >= 0 && 9 > 1
          True   && True --> True

    Desplazamos el elemento ordenado un indice a la derecha
    arr[j + 1] = arr[j]
    arr[2 + 1] = arr[2]
    arr[3] = 9

    Decrementamos j en cada iteración
    j = j-1
    j = 2-1
    j = 1 --> Indica el indice del elemento ordenado

    indice:          0  1  2  3  4
    arr-ordenado -> [2  5  9| 9, 6]   <- arr-desordenado
    NTI = 1   , SE = 5

    -------------> iteracion 5 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          1 >= 0 && arr[1] > numberToInsert
          1 >= 0 && 5 > 1
          True   && True --> True

    Desplazamos el elemento ordenado un indice a la derecha
    arr[j + 1] = arr[j]
    arr[1 + 1] = arr[1]
    arr[2] = 5

    Decrementamos j en cada iteración
    j = j-1
    j = 1-1
    j = 0 --> Indica el indice del elemento ordenado

    indice:          0  1  2  3  4
    arr-ordenado -> [2  5  5| 9, 6]   <- arr-desordenado
    NTI = 1   , SE = 2

    -------------> iteracion 6 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          0 >= 0 && arr[0] > numberToInsert
          0 >= 0 && 2 > 1
          True   && True --> True

    Desplazamos el elemento ordenado un indice a la derecha
    arr[j + 1] = arr[j]
    arr[0 + 1] = arr[0]
    arr[1] = 2

    Decrementamos j en cada iteración
    j = j-1
    j = 0-1
    j = -1 --> Indica el indice del elemento ordenado

    indice:          0  1  2  3  4
    arr-ordenado -> [2  2  5| 9, 6]   <- arr-desordenado
    NTI = 1   , SE = ?

    -------------> iteracion 7 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          -1 >= 0 && arr[-1] > numberToInsert
          -1 >= 0 && undefined > 1
          False   && False --> False

    Salimos del bucle while

arr[j+1] = numberToInsert
arr[-1+1] = 1
arr[0] = 1

indice:          0  1  2  3  4
arr-ordenado -> [1  2  5| 9, 6]   <- arr-desordenado
    NTI = ?   , SE = ?

-------------> iteracion 4 - Bucle for
for(let i = 4; i < arr.length ; i++ -> i + 1)
               4 < 5 -> True

numberToInsert = arr[i]
numberToInsert = arr[4]
numberToInsert = 6

j = i - 1
j = 4 - 1
j = 3 --> Indica el indice del elemento ordenado

indice:          0  1  2  3  4
arr-ordenado -> [1  2  5  9| 6]   <- arr-desordenado
    NTI = 6   , SE = 9

    -------------> iteracion 8 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          3 >= 0 && arr[3] > numberToInsert
          3 >= 0 && 9 > 6
          True   && True --> True

    Desplazamos el elemento ordenado un indice a la derecha
    arr[j + 1] = arr[j]
    arr[3 + 1] = arr[3]
    arr[4] = 9

    Decrementamos j en cada iteración
    j = j-1
    j = 3-1
    j = 2 --> Indica el indice del elemento ordenado

    indice:          0  1  2  3  4
    arr-ordenado -> [1  2  5  9| 9]   <- arr-desordenado
    NTI = 6   , SE = 5

    -------------> iteracion 9 - Bucle while
    Mientras j sea mayor o igual que 0 y arr[j] (sorted element) sea mayor que el número a insertar
    while(j >= 0 && arr[j] > numberToInsert)
          2 >= 0 && arr[2] > numberToInsert
          2 >= 0 && 5 > 6
          True   && False --> False

    Salimos del bucle while

arr[j+1] = numberToInsert
arr[2+1] = 6
arr[3] = 6

indice:          0  1  2  3  4
arr-ordenado -> [1  2  5  6  9|]   <- arr-desordenado
NTI = ?   , SE = ?

-------------> iteracion 4 - Bucle for
for(let i = 5; i < arr.length ; i++ -> i + 1)
               5 < 5 -> False

Salimos del bucle for

retorna el arreglo ordenado [1, 2, 5, 6, 9]
*/

// Big-O = O(n²) -> Cuadrática

const arr = [-6, 20, 8, -2 ,4]
insertionSort(arr)
console.log(arr) //[-6,-2,4,8,20]

const arr1 = [5, 2, 9, 1, 6]
insertionSort(arr1)
console.log(arr1) //[1, 2, 5, 6, 9]
