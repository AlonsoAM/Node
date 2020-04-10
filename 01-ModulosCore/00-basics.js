/*

Organización de Código JS
    Librerías/Módulos
    Constantes
    Objetos/Variables
    Funciones
    Eventos
    Ejecicions

Usar CamelCase


    Cuando una instrucción tenga una sola palabra,va en minúsculas p.e. require() ... sólo las clases rompen esta regla, siempre va en mayúscula la letra inicial p.e. EventEmiter()
    Cuando una instrucción tenga 2 o más palabras, a partir de la segunda la primer letra va en mayúsula p.e. createServer()

    Tipos de CamelCase
        UpperCamelCase
            Date
            EventEmiter()
        lowerCamelCase
            getElementById
            createServer()
*/

'use strict' // modo estricto para programar con buenas practicas

console.log('Hola mundo desde Node.js, esto se verá en la terminal de comandos.')

console.log(2 + 7)

//console.log(window)

console.log(global)

setInterval(() => {
    console.log('Hola NodeJS')
}, 1000);

// Con Ctrl + C detienes la ejecución de un script en la consola.