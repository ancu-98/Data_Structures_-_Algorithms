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
PSEUDCODIGO
1. Recorremos el arreglo al menos una vez.
2. Comparamos elementos adyacentes.
3. Si están fuera de orden, los intercambiamos.
4. Si hubo intercambios, repetimos el proceso.
5. Si no hubo intercambios en una iteración, el arreglo está ordenado.
*/

function bubbleSort(arr) {
    // arr -> representa el arreglo a ordenar
    // Creamos variable para verificar si hay elementos intercambiados
    let slopped
    do {
        // Recorremos el arreglo al menos una vez
        slopped = false
        for(let i = 0; i < arr.length - 1; i++){
            // Dentro del cuerpo comparamos el elemento con el elemento adyacente
            if (arr[i] > arr[i + 1]){
                // Y los intercambiamos si están fuera de orden
                // Usando una variable temporal
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                // Estas tres líneas intercambian dos valores
                // Si hubo un intercambio -> slopped se mantendra en true
                slopped = true
            }
        }
        // Mientras slopped = true, el bucle se ejecutara
    }while(slopped)

}

/*
Sí arr = [5, 2, 9, 1, 6]

Iteramos al menos un vez

-----> Primer recorrido
slopped = false

    -------------> iteracion 1
    for(let i = 0; i < arr.length - 1; i++ -> i + 1)
                   i < 5 - 1
                   i < 4 -> True

        El primer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[0] > arr[0 + 1])
        if (arr[0] > arr[1])
        if (5 > 2) -> True
            temp = arr[i]
            temp = arr[0]
            temp = 5
            arr[i] = arr[i+1]
            arr[0] = arr[0+1]
            arr[0] = arr[1]
            arr[0] = 2
            arr[i+1] = temp
            arr[0+1] = temp
            arr[0] = 5

            stopped = true

    -------------> iteracion 2
    i   =  0  1  2  3  4
    arr = [2, 5, 9, 1, 6]

    for(let i = 1; i < 4 -> True; i++ -> i + 1)

        El segundo elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[1] > arr[1 + 1])
        if (arr[1] > arr[2])
        if (5 > 9) -> False

    -------------> iteracion 3
    i   =  0  1  2  3  4
    arr = [2, 5, 9, 1, 6]

    for(let i = 2; i < 4 -> True; i++)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[2] > arr[2 + 1])
        if (arr[2] > arr[3])
        if (9 > 1) -> True
            temp = arr[i]
            temp = arr[2]
            temp = 9
            arr[i] = arr[i+1]
            arr[2] = arr[2+1]
            arr[2] = arr[3]
            arr[2] = 1
            arr[i+1] = temp
            arr[2+1] = temp
            arr[3] = 9

            stopped = true

    -------------> iteracion 4
    i   =  0  1  2  3  4
    arr = [2, 5, 1, 9, 6]

    for(let i = 3; i < 4 -> True; i++ -> i + 1)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[3] > arr[3 + 1])
        if (arr[3] > arr[4])
        if (9 > 6) -> True
            temp = arr[3]
            temp = arr[3]
            temp = 9
            arr[i] = arr[i+1]
            arr[3] = arr[3+1]
            arr[3] = arr[4]
            arr[3] = 6
            arr[i+1] = temp
            arr[3+1] = temp
            arr[4] = 9

            stopped = true

    -------------> iteracion 5
    i   =  0  1  2  3  4
    arr = [2, 5, 1, 6, 9]

    for(let i = 4; i < 4 -> False; i++)

    No hay mas elementos por recorrer
    Hubo elementos intercambiados
    slopped sigue siendo = true

-----> Segundo recorrido
slopped = false

    -------------> iteracion 1
    i   =  0  1  2  3  4
    arr = [2, 5, 1, 6, 9]

    for(let i = 0; i < arr.length - 1; i++ -> i + 1)
                   i < 5 - 1
                   i < 4 -> True

        El primer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[0] > arr[0 + 1])
        if (arr[0] > arr[1])
        if (2 > 5) -> False

    -------------> iteracion 2
    i   =  0  1  2  3  4
    arr = [2, 5, 1, 6, 9]

    for(let i = 1; i < 4 -> True; i++ -> i + 1)

        El segundo elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[1] > arr[1 + 1])
        if (arr[1] > arr[2])
        if (5 > 1) -> True
            temp = arr[i]
            temp = arr[1]
            temp = 5
            arr[i] = arr[i+1]
            arr[1] = arr[1+1]
            arr[1] = arr[2]
            arr[1] = 1
            arr[i+1] = temp
            arr[1+1] = temp
            arr[2] = 5

            slopped = true

    -------------> iteracion 3
    i   =  0  1  2  3  4
    arr = [2, 1, 5, 6, 9]

    for(let i = 2; i < 4 -> True; i++)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[2] > arr[2 + 1])
        if (arr[2] > arr[3])
        if (5 > 6) -> False

    -------------> iteracion 4
    i   =  0  1  2  3  4
    arr = [2, 1, 5, 6, 9]

    for(let i = 3; i < 4 -> True; i++ -> i + 1)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[3] > arr[3 + 1])
        if (arr[3] > arr[4])
        if (6 > 9 ) -> False

    -------------> iteracion 5
    i   =  0  1  2  3  4
    arr = [2, 1, 5, 6, 9]

    for(let i = 4; i < 4 -> False; i++)

    No hay mas elementos por recorrer
    Hubo elementos intercambiados
    slopped sigue siendo = true

-----> Tercer recorrido
slopped = false

    -------------> iteracion 1
    i   =  0  1  2  3  4
    arr = [2, 1, 5, 6, 9]

    for(let i = 0; i < arr.length - 1; i++ -> i + 1)
                   i < 5 - 1
                   i < 4 -> True

        El primer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[0] > arr[0 + 1])
        if (arr[0] > arr[1])
        if (2 > 1) -> True
            temp = arr[i]
            temp = arr[0]
            temp = 2
            arr[i] = arr[i+1]
            arr[0] = arr[0+1]
            arr[0] = arr[1]
            arr[0] = 1
            arr[i+1] = temp
            arr[0+1] = temp
            arr[1] = 2

            slopped = true

    -------------> iteracion 2
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 1; i < 4 -> True; i++ -> i + 1)

        El segundo elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[1] > arr[1 + 1])
        if (arr[1] > arr[2])
        if (2 > 5) -> False

    -------------> iteracion 3
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 2; i < 4 -> True; i++)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[2] > arr[2 + 1])
        if (arr[2] > arr[3])
        if (5 > 6) -> False

    -------------> iteracion 4
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 3; i < 4 -> True; i++ -> i + 1)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[3] > arr[3 + 1])
        if (arr[3] > arr[4])
        if (6 > 9 ) -> False

    -------------> iteracion 5
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 4; i < 4 -> False; i++)

    No hay mas elementos por recorrer
    Hubo elementos intercambiados
    slopped sigue siendo = true

-----> Cuarto recorrido
slopped = false

    -------------> iteracion 1
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 0; i < arr.length - 1; i++ -> i + 1)
                   i < 5 - 1
                   i < 4 -> True

        El primer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[0] > arr[0 + 1])
        if (arr[0] > arr[1])
        if (1 > 2) -> False

    -------------> iteracion 2
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 1; i < 4 -> True; i++ -> i + 1)

        El segundo elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[1] > arr[1 + 1])
        if (arr[1] > arr[2])
        if (2 > 5) -> False

    -------------> iteracion 3
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 2; i < 4 -> True; i++)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[2] > arr[2 + 1])
        if (arr[2] > arr[3])
        if (5 > 6) -> False

    -------------> iteracion 4
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 3; i < 4 -> True; i++ -> i + 1)

        El tercer elemento es mayor que el elemento adyacente?
        if (arr[i] > arr[i + 1])
        if (arr[3] > arr[3 + 1])
        if (arr[3] > arr[4])
        if (6 > 9 ) -> False

    -------------> iteracion 5
    i   =  0  1  2  3  4
    arr = [1, 2, 5, 6, 9]

    for(let i = 4; i < 4 -> False; i++)

    No hay mas elementos por recorrer
    No hubo elementos intercambiados

slopped = false
Salimos del bucle Do-while

retorna el arreglo ordenado [1, 2, 5, 6, 9]
*/

// Big-O = O(n²) -> Cuadrática

const arr = [-6, 20, 8, -2 ,4]
bubbleSort(arr)
console.log(arr) //[-6,-2,4,8,20]

const arr1 = [5, 2, 9, 1, 6]
bubbleSort(arr1)
console.log(arr1) //[1, 2, 5, 6, 9]