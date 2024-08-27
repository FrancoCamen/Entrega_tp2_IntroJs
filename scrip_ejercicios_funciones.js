/* Función Suma:
○ Crea una función llamada sumar que tome dos números como parámetros y devuelva su suma. Prueba la función con diferentes números. */

const suma = function(num1, num2){
    return num1 + num2
}
console.log("01: Funcion suma")
console.log("Suma 3 + 30")
console.log(suma(3, 30))
console.log("Suma 456 + 687")
console.log(suma(456, 687))

/* Función que Multiplica:
○ Crea una función llamada multiplicar que tome dos números como parámetros y devuelva su producto. Prueba la función con diferentes valores.*/

const multiplicar = function(num1, num2){
    return num1 * num2
}
console.log("02: Funcion producto")
console.log("Producto de 6 por 23")
console.log(multiplicar(6, 23))
console.log("Producto de 3 por 21")
console.log(multiplicar(3, 21))

/* Función con Parámetro por Defecto:
○ Crea una función llamada saludar que tome un parámetro nombre con un valor por defecto de "Invitado". La función debe devolver
"Hola, [nombre]". */

const saludar = function(nombre="Invitado"){
    console.log(`Hola, ${nombre}`)
}
console.log("03: Funcion con parametros por defecto")
saludar("Franco")

/* Función que Devuelve un Objeto:
○ Crea una función llamada crearPersona que tome nombre y edad como parámetros y devuelva un objeto con esas propiedades.*/

const crearPersona = function(nombre, edad){
    const persona = {
        name : nombre,
        years : edad
    }
    return persona
}
console.log("04: Funcion que devuelve objeto")
const persona = crearPersona("Franco", 21)
console.log(persona)

/* Función que Modifica un Objeto:
○ Crea una función llamada actualizarEdad que tome un objeto persona y un número nuevaEdad, y actualice la propiedad edad del
objeto. */
const actualizarEdad = function(persona, nuevaEdad){
    persona.years = nuevaEdad
    return persona
}
console.log("05: Funcion que modifica Objeto")
console.log(actualizarEdad(persona, 22))

/* Función Recursiva:
○ Crea una función recursiva llamada factorial que calcule el factorial de un número dado. */
const factorial = function(numero){
    if(numero == 1){
        return 1
    }else{
        return numero * factorial(numero - 1)
    }
}
console.log("06: Funcion recursiva")
console.log(factorial(5))

/* Función con Función Interna:
○ Crea una función llamada despedir que contenga una función interna adios. despedir debe devolver el resultado de llamar a adios.*/

const despedir = function(nombre){
    const adios = function(){
        return "Adios"
    }
    return `${adios()}, ${nombre}`
}
console.log("07: Funcion con funcion interna")
console.log(despedir("Franco"))

/* Función que Usa Otra Función:
○ Crea una función llamada procesarArray que tome un array y una función como parámetros, y aplique la función a cada elemento del
array. Usa una función como parámetro para multiplicar cada número por 2.*/
const multiplicar2 = function(numero){
    return numero * 2
}
const procesarArray = function(array, fun){
    const newArray = array.map(elemento => {
        return fun(elemento)
    })
    return newArray
}

const listaNum = [2, 3, 12]
console.log("08: Funcion que usa otra funcion")
console.log(procesarArray(listaNum, multiplicar2))

/* Función que Devuelve Otra Función:
○ Crea una función llamada crearMultiplicador que tome un número x y devuelva una nueva función que multiplique cualquier número
por x. */

const crearMultiplicador = function(numeroX){
    const multiplicador = function(numeroY){
        return numeroX * numeroY
    }
    return multiplicador
}

const multiplicador = crearMultiplicador(4)
console.log("09: Funcion que devuelve otra funcion")
console.log(multiplicador(3))

/* Función Anónima:
○ Crea una función anónima que sume dos números y la asigna a una variable llamada sumarAnonima. Luego, invoca la función a través de esa variable. */

const anonima = function(a, b){
  return a + b
}
const sumarAnonima = anonima(5, 3)
console.log("10: Funcion anonima")
console.log(sumarAnonima)


