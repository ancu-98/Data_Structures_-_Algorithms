//Problem
//Dada una matriz de n elementos y un elemento objetivo `t`, encontrar el índice de `t` en la matriz.
// Devuelve -1 si el elemento objetivo no se encuentra.
/*
Por ejemplo:

    indice:   0  1   2  3  4
    array = [-5, 2, 10, 4, 6], t = 10, -> deberia retornar 2

- Si tienes un array con cinco números: -5, 2, 10, 4 y 6,
y el elemento objetivo t = 10, nuestra solución debería devolver 2, ya que 10 está en el índice 2 de la matriz.

De igual forma:

    array = [-5, 2, 10, 4, 6], t = 6, -> deberia retornar 4.
    array = [-5, 2, 10, 4, 6], t =20, -> deberia retornar -1, ya que 20 no se encuentra en la matriz.
*/

function linearSearch(arr, target){
    //arr -> representa el arreglo en donde deseamos buscar
    //target -> representa el elemento que debemos encontrar
    for(let i = 0; i < arr.length(); i++){
        // Sí algun elemento del arreglo es igual al elemento objetivo
        if (arr[i] === target) {
            return i
        }
    }
    // Si ha recorrido todo el bucle y no ha encontrado el elemento, devolvemos -1
    return -1
}

/*
           0  1  2   3  4
Sí arr = [-5, 2, 10, 4, 6] y target = 10

                        arr.length() -> 5
Iteramos desde i = 0, i <         5? -> True, i++ -> i + 1

    arr[0] -> -5 === 10? --> false

    -------------> i = 1, i < 5? -> True, i++ -> i + 1
    arr[1] -> 2 === 10? --> false

    -------------> i = 2, i < 5? -> True, i++ -> i + 1
    arr[2] -> 10 === 10? --> True
    devolvemos i = 2
*/

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) //2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) //-1
