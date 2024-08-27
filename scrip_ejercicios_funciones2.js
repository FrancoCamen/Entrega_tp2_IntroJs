/*Consumo de Datos desde una API:
○ Crea una función llamada obtenerUsuarios que haga una petición HTTP a la API https://jsonplaceholder.typicode.com/users usandofetch. Luego, imprime en la consola la lista de usuarios obtenida. */

const obtenerUsuarios  = function(){
    const peticion = fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(res => res)
    return peticion
}

console.log("01: Consumo de de datos de una api")

obtenerUsuarios().then(usuarios => console.log(usuarios))

/* Procesamiento de Datos de una API:
○ Usando la función obtenerUsuarios, crea otra función llamada imprimirNombresDeUsuarios que filtre y muestre solo los nombres de los usuarios.*/

const imprimirNombres = function(usuarios){
    const users  = usuarios.map(user => console.log(user["name"]))
    
}
console.log("02: Procesamiento de datos de una api")
obtenerUsuarios().then(usuarios => imprimirNombres(usuarios))

/* Autenticación Simulada:
○ Crea una función llamada autenticarUsuario que tome un objeto credenciales con usuario y contraseña, y verifique si coinciden con un usuario predefinido. La función debe devolver true si la autenticación es exitosa y false en caso contrario.*/
const credenciales = {
    usuario : "Franco",
    contraseña : "1234"
}
const autenticarUsuario = function(credenciales){
    const user = "user"
    const pass = "1233"
    if (credenciales["usuario"] == user & credenciales["contraseña"] == pass){
        return true
    }else{
        return false
    }
}
console.log("03: Autenticacion simulada")
console.log(autenticarUsuario(credenciales))

/* Transformación de Datos:
○ Crea una función llamada mapearUsuarios que tome un array de usuarios obtenidos de la API y devuelva un nuevo array con solo las propiedades nombre y email de cada usuario. */

const mapearUsuarios = function(usuarios){
    const users = usuarios.map(user => {
        return {nombre : user["name"], email : user["email"]}
    })
    return users
}
console.log("04: Transformacion de datos")
obtenerUsuarios().then(usuarios => {
    console.log(mapearUsuarios(usuarios))
})

/* Validación de Formularios:
○ Crea una función llamada validarFormulario que tome un objeto con los campos nombre, email y password. La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso contrario.*/

const info = {
    nombre : "franco",
    email : "asd@gmail.com",
    password : "pass"
}
const validarFormulario = function(formulario){
    if (formulario.nombre && formulario.email && formulario.password) {
        if (formulario.nombre.trim() !== '' && formulario.email.trim() !== '' && formulario.password.trim() !== '') {
            return true;
        }
    }
    return false;
}
console.log("05: validacion de formularios")
console.log("La validacion del formulario es: ",validarFormulario(info))

/* Paginación de Datos:
○ Crea una función llamada obtenerPagina que tome un array de datos y un número de página. La función debe devolver los elementos correspondientes a esa página, asumiendo que cada página tiene 5 elementos.*/

const obtenerPagina = function(elementos, num_pagina){
    const tamaño_pagina = 5
    const inicio = (num_pagina - 1) * tamaño_pagina
    const fin = inicio + tamaño_pagina
    
    return elementos.slice(inicio, fin)
}
const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log("06: Paginacion de datos")
console.log("Elementos iniciales: ",datos)
console.log("Elementos de la pagina ",2," : ",obtenerPagina(datos, 2))

/* Envío de Datos a una API:
○ Crea una función llamada enviarDatos que tome un objeto data y haga una petición POST a la API https://jsonplaceholder.typicode.com/posts. La función debe imprimir la respuesta de la API. */

const enviarDatos = function(data){
    const peticion = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(response => response.json())
        .then(res => console.log(res))               
}
const data = {
    title : "titulo",
    metodo_usado: "POST"
}
console.log("07: Envio de datos a una api")
enviarDatos(data)

/* Búsqueda de Usuarios:
○ Crea una función llamada buscarUsuarioPorEmail que tome un array de usuarios y un email como parámetros, y devuelva el usuario que
coincida con el email proporcionado. Usa el método find para implementarlo.*/
const usuarios = [{
    nombre : "franco",
    email : "asd@gmail"
    },
    {
    nombre : "franco1",
    email : "fdsf@gmail"
    }]
const buscarUsuarioPorEmail = function(usuarios, email){
    const buscar = usuarios.find(user => {
        return user["email"] == email
    })
    return buscar
}
const email = "asd@gmail"
console.log("08: Busqueda de usuarios")
console.log("El usuario que coinide con el email ",email," es : ",buscarUsuarioPorEmail(usuarios, email))

/* Generación de Token de Autenticación:
○ Crea una función llamada generarToken que tome un objeto usuario y devuelva un token JWT simulado como una cadena. Puedes usar
una función como btoa (Base64) para simular la generación del token.*/

const usuario = {
    name : "user",
    password : "pass"
}
const generarToken = function(usuario){
    return btoa(usuario)
}
console.log("09: Generacion de token de autenticacion")
console.log("El token de autenticacion generado para el usuario es : ",generarToken(usuario))

/* Actualización de Información del Usuario:
○ Crea una función llamada actualizarUsuario que tome un objeto usuario y una lista de cambios a aplicar. La función debe retornar el usuario con las propiedades actualizadas. */

const atualizarUsuario =  function(usuario, cambios){
    for (const clave in cambios){
        usuario[clave] = cambios[clave]
    }
    return usuario
}

console.log("10: Actualizacion de informacion del usuario")
console.log("Info actual del usuario : ",usuario)
console.log("Info modificada del usuario : ",atualizarUsuario(usuario,{password : "nueva_pass"}))
