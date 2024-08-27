/* Agregar y Eliminar Elementos:
○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa push para agregar una fruta al final, y pop para eliminar la última fruta. */

console.log("01: Agregar y Eliminar Elementos")
const frutas = ["manzana", "banana", "pera"]
frutas.pop()
frutas.push("fruta4")
console.log(frutas)

/* Array Bidimensional: 
○ Crea un array bidimensional llamado matriz con los valores [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.*/
console.log("02: Array bidimensional")
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for (let primero of matriz){
    for (let segundo of primero){
        if (segundo == 5){
            console.log(segundo)
        }
    }
}


/* Iterar sobre un Array:
○ Usa un bucle for para iterar sobre el array frutas e imprimir cada elemento. */

for (let fruta of frutas){console.log(fruta)}

/* Uso de map:
○ Crea una función llamada elevarAlCuadrado que tome un array de números y devuelva un nuevo array con cada número elevado al cuadrado. Usa map para implementar la función. */

const numeros = [1,3,5,6,7,8]
const elevarAlCuadrado = function(numeros){
    const new_array = numeros.map(num => {
        return num*num
    })
    return new_array
}
console.log(elevarAlCuadrado(numeros))

/* Uso de filter:
○ Crea una función llamada filtrarMayoresDe que tome un array de números y un valor de referencia, y devuelva un nuevo array solo con
los números mayores que ese valor. Usa filter.*/

function filtrarMayoresDe(numeros, valorReferencia) {
    return numeros.filter(numero => numero > valorReferencia);
}
const valorReferencia = 6;
console.log(filtrarMayoresDe(numeros, valorReferencia))

/* Uso de reduce:
○ Crea una función llamada sumarElementos que tome un array de números y devuelva la suma de todos los elementos del array usando reduce. */ 

function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}
console.log(sumarElementos(numeros))

/* Uso de some:
○ Crea un array de números llamado numeros y usa some para verificar si algún número es mayor que 10.*/
const hayMayorQue10 = numeros.some(numero => numero > 10)
console.log(hayMayorQue10)

/* Uso de every:
○ Crea un array de números llamado numeros y usa every para verificar si todos los números son positivos.*/
const todosPositivos = numeros.every(numero => numero > 0)
console.log(todosPositivos)

/* Uso de find:
○ Crea un array de objetos llamados personas donde cada objeto tenga nombre y edad. Usa find para encontrar a la primera persona mayor de 30 años.*/
const personas = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Carlos", edad: 35 },
    { nombre: "Laura", edad: 25 },
    { nombre: "Pedro", edad: 40 }
];
const personaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log(personaMayorDe30)

/* Uso de sort:
○ Crea un array de palabras y ordénalo alfabéticamente usando sort. */
const palabras = ["manzana", "kiwi", "banana", "cereza", "pera"];
palabras.sort();
console.log(palabras);
