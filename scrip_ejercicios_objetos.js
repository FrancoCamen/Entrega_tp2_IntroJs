/*Creación de un Objeto Básico:
    ○ Crea un objeto llamado libro con propiedades como título, autor y añoDePublicacion. Imprime cada propiedad en la consola.*/

const libro = {
    titulo : "100 años de soledad",
    autor : "Garcia marquez",
    añoDePublicacion : 1995
}

console.log("01: Creacion de objeto basico")
console.log(libro)

/* Anidación de Objetos:
    ○ Crea un objeto llamado estudiante con propiedades nombre, edad y direccion. direccion debe ser otro objeto con propiedades calle, ciudad y pais. Imprime la dirección completa del estudiante.*/
const direccion = {
    calle : "Dorrego",
    ciudad : "Concepcion",
    pais : "Argentina"
}
const estudiante = {
    nombre : "Franco",
    edad : 21,
    direccion : direccion
}

console.log("02: Anidacion de objetos")
console.log(estudiante.direccion)


/* Métodos en Objetos:
○ Añade un método llamado descripción al objeto libro que devuelvauna cadena describiendo el título y el autor del libro. Invoca este método e imprime el resultado. */

libro.descripcion = function(){
    return `El titulo del libro es: ${libro.titulo} y el autor es: ${libro.autor}`
}

console.log("03: Métodos en Objetos")
console.log(libro.descripcion())

/* Iteración sobre Propiedades de un Objeto:
    ○ Crea un objeto producto con propiedades como nombre, precio y disponible. Usa un bucle for...in para imprimir todas las propiedades y sus valores. */

const producto = {
    nombre : "producto1",
    precio : 54,
    disponible : "si"
}

console.log("04: Iteracion sobre propiedades de un Objeto")
for (let atributo in producto){
    console.log(`${atributo} : ${producto[atributo]}`)
}

/* Actualización de Propiedades:
    ○ Modifica el valor de la propiedad precio del objeto producto y luego imprime el objeto completo para verificar el cambio. */

console.log("05: Actualizacion de propiedades")
producto.precio = 34
console.log(`Precio del producto actualizado: ${producto.precio}`)

/* Comprobación de Propiedades:
    ○ Crea una función llamada tienePropiedad que tome un objeto y una cadena como parámetros, y devuelva true si el objeto tiene una propiedad con ese nombre, o false en caso contrario. */

const tienePropiedad = function(objeto, propiedad){
    for (let atributo in objeto){
        if(atributo == propiedad){
            return true
        }
    }
    return false
}
console.log("06: Comprobacion de propiedades")
let propiedad = "nombre"
if(tienePropiedad(producto, propiedad)){
    console.log(`El objeto tiene la propiedad: ${propiedad}`)
}else{
    console.log(`El objeto no tiene la propiedad: ${propiedad}`)
}

/* Eliminación de Propiedades:
    ○ Elimina la propiedad disponible del objeto producto. Imprime el objeto antes y después de eliminar la propiedad. */

console.log("07: Eliminacion de propiedades")
console.log(producto)
delete producto.disponible
console.log(producto)

/* Combinar Objetos:
    ○ Usa Object.assign para combinar dos objetos, persona1 y persona2, en un nuevo objeto. Imprime el resultado. */

const producto1 = {
    nombre : "producto1",
    precio : 56
}
const producto2 = {
    codigo : "04hu6x",
    disponible : true
}
const conbinated = Object.assign({}, producto1, producto2)
console.log("08: Combinar objetos")
console.log(producto1)
console.log(producto2)
console.log(conbinated)

/* Copiar Objetos:
    ○ Crea una copia profunda del objeto estudiante utilizando el método JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto original no haya sido alterado.*/

const copiaEstudiante = JSON.parse(JSON.stringify(estudiante))
copiaEstudiante.edad = 22

console.log("09: Copiar objetos")
console.log(estudiante)
console.log(copiaEstudiante)

/* Métodos Getters y Setters:
    ○ Añade un getter y un setter al objeto libro para la propiedad añoDePublicacion. Usa el setter para actualizar el año de publicación y luego usa el getter para leerlo.*/

libro.set_añoDePublicacion = function(año){
    this.añoDePublicacion = año
}
libro.get_añoDePublicacion = function(){
    return `El año de publicacion del libro es: ${this.añoDePublicacion}`
}

libro.set_añoDePublicacion(1999)
console.log("10: Metodos getters y setters")
console.log(libro.get_añoDePublicacion())

