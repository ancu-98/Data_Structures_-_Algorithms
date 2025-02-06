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
Los dos primeros puntos en el pseudocódigo abordan el caso base para nuestra recursión.
Y los dos últimos puntos ayudan a descomponer el problema en versiones más pequeñas del mismo problema.

1. Si la matriz está vacía o si el elemento objetivo no es encontrado, retornamos -1 → Caso base
2. Si el arreglo tiene elementos, encuentra el elemento del medio en el array.
   Si el elemento objetivo es igual al elemento del medio, retornamos el indice del elemento del medio → Caso base
3. Si el elemento objetivo es menor que el elemento medio, tomamos solo la mitad izquierda del array y realizamos la búsqueda binaria.
4. Si el objetivo es mayor que el elemento del medio, tomamos solo la mitad derecha del array y realizamos la búsqueda binaria.

El elemento medio sirve como buen punto de comparación para decidir qué camino tomar.
*/

function recursiveBinarySearch(arr, target) {
    //arr -> representa el arreglo ordenado
    //target -> representa el elemento que debemos encontrar
    return search(arr, target, 0, arr.length - 1)
    // 0 -> representa leftIndex, que apunta al primer elemento de la matriz
    // arr.length -1 -> representa rigthIndex, que apunta al último elemento de la matriz
}

function search(arr, target, leftIndex, rigthIndex){
    // Dentro del cuerpo de la función comenzamos agregando los casos base:
    // 1. Si la matriz está vacía o si el elemento objetivo no es encontrado, retornamos -1
    if(leftIndex > rigthIndex){
        // Sí el indice-izquierdo es mayor que el indice-derecho
        // no tenemos más elementos con los que trabajar y, por tanto, devolveremos -1
        return -1
    }
    // 2. Si el arreglo tiene elementos, encuentra el elemento del medio en el array.
    let middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
    // Si el elemento objetivo es igual al elemento del medio.
    if (target === arr[middleIndex]){
        // retornamos el indice del elemento del medio.
        return middleIndex
    }
    // Sí el elemento objetivo no se encontro en el indice medio
    // Buscamos recursivamente en la mitad izquierda o derecha del array
    if(target < arr[middleIndex]) {
        //Si el objetivo es menor que el elemento del medio, cambiamos el índice derecho al índice del medio - 1.
        //Significa que buscamos en la mitad izquierda del array
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        // Por el contrario, si el objetivo es mayor que elemento del medio, cambiamos el indice izquierdo al indice del medio + 1
        // Significa que buscamos en la mitad derecha de arreglo
        return search(arr, target, middleIndex + 1, rigthIndex)
    }
}

/*
           0  1  2  3  4
Sí arr = [-5, 2, 4, 6, 10] y target = 10

recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
    return search([-5, 2, 4, 6, 10], 10, 0, arr.length - 1)
}

search(arr, target, leftIndex, rigthIndex){
    -------------> iteracion 1
    arr = [-5, 2, 4, 6, 10]
    target = 10
    leftIndex = 0
    rigthIndex = arr.length - 1
    rigthIndex = 5 - 1
    rigthIndex = 4

    El indice-izquierdo es mayor que el indice-derecho?
    (leftIndex > rigthIndex)?
    (0 > 4)? -> False -> El arreglo no esta vacio

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

    El elemento objetivo es igual al elemento del medio?
    (target === arr[middleIndex])?
    (10 === arr[2])?
    (10 === 4)? -> False

    Decidimos si debemos seguir la mitad izquierda de la matriz o la mitad derecha:

    target es es menor al elemento del medio?
    (target < arr[middleIndex])?
    (10 < arr[2])?
    (10 < 4)? -> False -> target es mayor que el elemento del medio

        cambiamos el indice izquierdo al indice del medio + 1
        return search(arr, target, middleIndex + 1, rigthIndex)
        return search([-5, 2, 4, 6, 10], 10, midleIndex + 1, 4)
        ahora buscamos en la mitad derecha del arreglo

        -------------> iteracion 2
        search(arr, target, leftIndex, rigthIndex)

        arr = [-5, 2, 4, 6, 10]
        target = 10
        leftIndex = middleIndex + 1
        leftIndex = 2 + 1
        leftIndex = 3
        rigthIndex = 4

        El indice-izquierdo es mayor que el indice-derecho?
        (leftIndex > rigthIndex)?
        (3 > 4)? -> False

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

        El elemento objetivo es igual al elemento del medio?
        (target === arr[middleIndex])?
        (10 === arr[3])?
        (10 === 6)? -> False

        Seguimos buscando en la mitad derecha del array

        target es es menor al elemento del medio?
        (target < arr[middleIndex])?
        (10 < arr[3])?
        (10 < 6)? -> False -> target es mayor que el elemento del medio

            cambiamos el indice izquierdo al indice del medio + 1
            return search(arr, target, middleIndex + 1, rigthIndex)
            return search([-5, 2, 4, 6, 10], 10, midleIndex + 1, 4)

            -------------> iteracion 3
            search(arr, target, leftIndex, rigthIndex)

            arr = [-5, 2, 4, 6, 10]
            target = 10
            leftIndex = middleIndex + 1
            leftIndex = 3 + 1
            leftIndex = 4
            rigthIndex = 4

            El indice-izquierdo es mayor que el indice-derecho?
            (leftIndex > rigthIndex)?
            (4 > 4)? -> False -> El indice-izquierdo es igual al indice-medio

            Encontramos el indice del medio del array
            middleIndex = Math.floor((leftIndex + rigthIndex) / 2)
            middleIndex = Math.floor(4 + 4 / 2)
            middleIndex = Math.floor(8 / 2)
            middleIndex = Math.floor(4)
            middleIndex = 4

            rigthIndex ---------------> *
            leftIndex ----------------> *
            middleIndex --------------> *
                            0  1  2  3  4
                    arr = [-5, 2, 4, 6, 10]

            El elemento objetivo es igual al elemento del medio?
            (target === arr[middleIndex])?
            (10 === arr[4])?
            (10 === 10)? -> True

            Devolvemos el indice medio
            return middleIndex = 4
}
*/

//Big-O = O(logn)

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))  //3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) //-1