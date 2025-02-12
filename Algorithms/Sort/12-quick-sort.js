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
1. Se comienza identificando el elemento pivote, que es el último elemento del array
2. Dividir el array:
    - Se recorre el array desde el primer elemento hasta el penúltimo.
    - Se coloca todo lo que sea menor al pivote en un array izquierdo.
    - Se coloca todo lo mayor al pivote en un array derecho.
3. Repetir el proceso
    - Se repite el proceso para los arrays individuales izquierdo y derecho,
    hasta que tengas un array de longitud 1 por definición. <-- Caso base
    - Un array de longitud 1 ya está ordenado por definición.
        Una vez alcanzada esta condición base
4. Combinar los resultados
    - se concatena el array izquierdo, el pivote y el array derecho en ese orden.
    - Se repite este proceso hasta obtener un único array completamente ordenado.
*/

function quickSort(arr) {
    if (arr.length < 2){
        // Si el array tiene longitud 1, ya está ordenado por definición
        return arr
    }
    // Manejamos el caso base al comienzo de la función
    // Ya que de aquí para abajo se manejará la recursividad

    // Encontrar el elemento pivote, sabemos que es el último elemento del array
    let pivot = arr[arr.length - 1]
    // Recorremos el array y ponemos los elementos en una matriz izquierda y derecha
    // Para ello primer creamos dos arreglos vacíos
    let left = []
    let rigth = []
    // Luego agregamos un bucle para recorrer el arreglo
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            //Se coloca todo lo que sea menor al pivote en el array izquierdo.
            left.push(arr[i])
        } else {
            //Se coloca todo lo mayor al pivote en el array derecho
            rigth.push(arr[i])
        }
    }
    // Esto se repite para las submatrices izquierda y derecha
    // Y eventualmente concatenarlo con el elemento hasta llegar al caso base
    // Devolvemos una matriz donde llamamos recursivamente a la función quickSort() para cada arreglo
    // Con el elemento pivote en medio de los dos arrays
    return [...quickSort(left), pivot,...quickSort(rigth)]
}

/*
indice:   0  1  2  3  4
Sí arr = [5, 2, 9, 1, 6]

-------------> llamado 1 a la función
quickSort(arr)
quickSort([5, 2, 9, 1, 6])

La longitud del arreglo es menor que 1?
if (arr.length < 2)
if (5 < 2) --> False

Econtramos el elemento pivote
pivot = arr[arr.length - 1]
pivot = arr[5 - 1]
pivot = arr[4]
pivot = 6

Creamos sub-arrays
left = []
rigth = []

    -------------> iteracion 1 - Bucle for
    for(let i = 0; i < arr.length - 1; i++ -> i + 1)
                   0 < 5 - 1
                   0 < 4 -> True

        El elemento en la posición i es menor que el pivote?
        if(arr[i] < pivot)
           arr[0] < pivot
                5 < 6 --> True

            Se agrega el elemento del indice i al arreglo izquierdo
            left.push(arr[i])
            left.push(arr[0])
            left.push(5)

        De lo contrario, el elemento en la posición i es mayor que el pivote
        else
            Se agrega el elemento del indice i al arreglo derecho

    indice:0  1  2  3  4
    arr = [5, 2, 9, 1,|6|]
    left = [5]  , pivot = |6| , rigth = []

    -------------> iteracion 2 - Bucle for
    for(let i = 1; i < arr.length - 1; i++ -> i + 1)
                   1 < 5 - 1
                   1 < 4 -> True

        El elemento en la posición i es menor que el pivote?
        if(arr[i] < pivot)
           arr[1] < pivot
                2 < 6 --> True

            Se agrega el elemento del indice i al arreglo izquierdo
            left.push(arr[i])
            left.push(arr[1])
            left.push(2)

        De lo contrario, el elemento en la posición i es mayor que el pivote
        else
            Se agrega el elemento del indice i al arreglo derecho

    indice:0  1  2  3  4
    arr = [5, 2, 9, 1,|6|]
    left = [5,2]  , pivot = |6| , rigth = []

    -------------> iteracion 3 - Bucle for
    for(let i = 2; i < arr.length - 1; i++ -> i + 1)
                   2 < 5 - 1
                   2 < 4 -> True

        El elemento en la posición i es menor que el pivote?
        if(arr[i] < pivot)
           arr[2] < pivot
                9 < 6 --> False

            Se agrega el elemento del indice i al arreglo izquierdo

        De lo contrario, el elemento en la posición i es mayor que el pivote
        else
            Se agrega el elemento del indice i al arreglo derecho
            rigth.push(arr[i])
            rigth.push(arr[2])
            rigth.push(9)

    indice:0  1  2  3  4
    arr = [5, 2, 9, 1,|6|]
    left = [5,2]  , pivot = |6| , rigth = [9]

    -------------> iteracion 4 - Bucle for
    for(let i = 3; i < arr.length - 1; i++ -> i + 1)
                   3 < 5 - 1
                   3 < 4 -> True

        El elemento en la posición i es menor que el pivote?
        if(arr[i] < pivot)
           arr[3] < pivot
                1 < 6 --> True

            Se agrega el elemento del indice i al arreglo izquierdo
            left.push(arr[i])
            left.push(arr[3])
            left.push(1)

        De lo contrario, el elemento en la posición i es mayor que el pivote
        else
            Se agrega el elemento del indice i al arreglo derecho

    indice:0  1  2  3  4
    arr = [5, 2, 9, 1,|6|]
    left = [5,2,1]  , pivot = |6| , rigth = [9]

    -------------> iteracion 5 - Bucle for
    for(let i = 4; i < arr.length - 1; i++ -> i + 1)
                   4 < 5 - 1
                   4 < 4 -> False

    Salimos del bucle for

return [...quickSort(left), pivot,...quickSort(rigth)]

-------------> llamado 2 y 3 a la función
    return [...quickSort(left), pivot,...quickSort(rigth)]
    return [...quickSort([5,2,1]), 6,...quickSort([9])]

        --------> llamado 2 a la función              --------> llamada 3 a la funcion
        quickSort([5,2,1])                            quickSort([9]




*/


const arr = [-6, 20, 8, -2 ,4]
console.log(quickSort(arr)) //[-6,-2,4,8,20]

const arr1 = [5, 2, 9, 1, 6]
console.log(quickSort(arr1)) //[1, 2, 5, 6, 9]