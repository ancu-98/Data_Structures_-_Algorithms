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
Sí arr = [5, 2, 9, 1, 5, 6]

slopped = false

Iteramos al menos un vez

-------------> iteracion 1
for(let i = 0; i < arr.length - 1; i++)
               i < 6 - 1

El primer elemento es mayor que el elemento adyacente?
if (arr[i] > arr[i + 1])
if (arr[0] > arr[0 + 1])
if (arr[0] > arr[1])
if (5 > 2) -> True







*/

const arr = [-6, 20, 8, -2 ,4]
bubbleSort(arr)
console.log(arr)
