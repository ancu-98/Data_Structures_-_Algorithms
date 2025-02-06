//Problem
// Dada una matriz ordenada de n elementos y un elemento objetivo t, hallar el índice de t en la matriz.
// Devuelve —1 si el elemento no es encontrado.
// Debemos tener en cuenta para búsqueda binaria el array debe estar ordenado.
// Encontrar el elemento del medio es clave para este algoritmo.
/*
Por ejemplo:

    indice:   0  1  2  3  4
    array = [-5, 2, 4, 6, 10], t = 10, -> deberia retornar 4

- Si tienes un array con cinco números: -5, 2, 4, 6 y 10
y el elemento objetivo t = 10, nuestra solución debería devolver 4, ya que 10 está en el índice 4 de la matriz.

De igual forma:

    array = [-5, 2, 4, 6, 10], t = 6, -> deberia retornar 3.
    array = [-5, 2, 4, 6, 10], t =20, -> deberia retornar -1, ya que 20 no se encuentra en la matriz.
*/

/* PSEUDOCÓDIGO
1. Encontrar el elemento medio
2. Comparar y eliminar la mitad de la matriz basándote en dónde puede estar el elemento objetivo.
3. Si el objetivo es menor que el centro, puedes deshacerte de la segunda mitad.
4. Si el elemento de destino es mayor que el elemento medio, puedes deshacerte de la primera mitad.

El elemento medio sirve como buen punto de comparación para decidir qué camino tomar.
*/

function binarySearch(arr, target){
    //arr -> representa el arreglo ordenado
    //target -> representa el elemento que debemos encontrar
    //El elemento del medio es clave para buscar el elemento objetivo.
    //Y para es haremos uso de 2 punteros
    //Los dos punteros apuntaran a los extremos: izquierdo y derecho del array
    let leftIndex = 0 // El indice izquierdo de la matriz siempre empieza en cero
    let rigthIndex = arr.length - 1

    //El siguiente conjunto de operaciones lo repetimos mientras el array no sea vacío.
    while (leftIndex <= rigthIndex){
        // Ejecutamos el bucle mientras el índice izquierdo sea menor o igual que el índice derecho
        // En cada iteración encontramos el medio elemento
        let middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
        // Si tenemos un número par de elementos, el índice medio puede ser un decimal, así que usamos Math.floor para devolver el valor entero inferior.
        // Ahora verificamos si el elemento del medio es igual al elemento objetivo
        if (target === arr[middleIndex]){
            // si lo es, devolvemos el indice del medio
            return middleIndex
        }
        // Ahora decidimos si debemos seguir la mitad izquierda de la matriz o la mitad derecha
        if(target < arr[middleIndex]) {
            //Si el objetivo es menor que el elemento del medio, cambiamos el índice derecho al índice del medio - 1.
            rigthIndex = middleIndex - 1
        } else {
            // Por el contrario, si el objetivo es mayor que elemento del medio, cambiamos el indice izquierdo al indice del medio + 1
            leftIndex = middleIndex + 1
        }
    }
    // En el escenario que nuestro bucle while no encuentre el elemento objetivo
    // Devolvemos -1
    return -1

}

/*
           0  1  2  3  4
Sí arr = [-5, 2, 4, 6, 10] y target = 10

leftIndex = 0
rigthIndex = arr.length - 1
rigthIndex = 5 - 1 = 4

Mientras (leftIndex <= rigthIndex)
         (0 <= 4 )? El indice izquierdo(0), es menor o igual al indice derecho(4)?
         (0 <= 4 )? -> True
    Se ejecuta el bucle

    -------------> iteracion 1
    Encontramos el indice del medio del array
    middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
    middleIndex = Math.floor(0 + 4 / 2)
    middleIndex = Math.floor(4 / 2)
    middleIndex = Math.floor(2)
    middleIndex = 2

    rigthIndex ---------------> *
    leftIndex ----> *           |
    middleIndex ----|---> *     |
                    0  1  2  3  4
            arr = [-5, 2, 4, 6, 10]

    target es igual al elemento del medio?
    (target === arr[middleIndex])?
    (10 === arr[2])?
    (10 === 4)? -> False

    Decidimos si debemos seguir la mitad izquierda de la matriz o la mitad derecha:

    target es es menor al elemento del medio?
    (target < arr[middleIndex])?
    (10 < arr[2])?
    (10 < 4)? -> False -> target es mayor que el elemento del medio

        cambiamos el indice izquierdo al indice del medio + 1
        leftIndex = middleIndex + 1
        leftIndex = 2 + 1
        leftIndex = 3
        ahora buscamos en la mitad derecha del arreglo

    -------------> iteracion 2
    (leftIndex <= rigthIndex)?
    (3 <= 4 )? El indice izquierdo(3), es menor o igual al indice derecho(4)?
    (3 <= 4 )? -> True

    Encontramos el indice del medio del array
    middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
    middleIndex = Math.floor(3 + 4 / 2)
    middleIndex = Math.floor(7 / 2)
    middleIndex = Math.floor(3.5)
    middleIndex = 3

    rigthIndex ---------------> *
    leftIndex -------------> *  |
    middleIndex -----------> *  |
                    0  1  2  3  4
            arr = [-5, 2, 4, 6, 10]

    target es igual al elemento del medio?
    (target === arr[middleIndex])?
    (10 === arr[3])?
    (10 === 6)? -> False

    Seguimos buscando en la mitad derecha del array

    target es es menor al elemento del medio?
    (target < arr[middleIndex])?
    (10 < arr[3])?
    (10 < 6)? -> False -> target es mayor que el elemento del medio

        cambiamos el indice izquierdo al indice del medio - 1
        leftIndex = middleIndex + 1
        leftIndex = 3 + 1
        leftIndex = 4

    -------------> iteracion 3
    (leftIndex <= rigthIndex)?
    (4 <= 4 )? El indice izquierdo(4), es menor o igual al indice derecho(4)?
    (4 <= 4 )? -> True

    Encontramos el indice del medio del array
    middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
    middleIndex = Math.floor(4 + 4 / 2)
    middleIndex = Math.floor(8 / 2)
    middleIndex = Math.floor(4)
    middleIndex = 4

    leftIndex ----------------> *
    leftIndex ----------------> *
    middleIndex --------------> *
                    0  1  2  3  4
            arr = [-5, 2, 4, 6, 10]

    target es igual al elemento del medio?
    (target === arr[middleIndex])?
    (10 === arr[4])?
    (10 === 10)? -> True

    devolvemos el indice del elemento del medio
    return middleIndex = 4
*/

//Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6))  //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) //-1