// // Ejercicios
// // Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.
// function multiplicacion(a, b) {
//     let x = a * b
//     return x

// } console.log(multiplicacion(2, 6))
// // Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.
//     function adul() {

//     let edad = prompt("inserte un numero")

//     if (edad < 18) {
//         console.log("Eres menor de edad")
//     } else if (edad < 65) {
//         console.log("Eres mayor de edad")
//     } else {
//         console.log("Eres un adulto mayor")
//     }

//      }console.log(adul())
// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

// function sumaTresNumeros(a,b,c) {
//     let suma = a + b + c
//     if ((typeof a !== "number")||(typeof b !== "number") || (typeof c !== "number")) {
//         console.log("Debo ser ejecutada con números")
//     }else{
//         return suma

//     }return

// }console.log(sumaTresNumeros(1,"a",6))
// // Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.
// function primerosTresCaracteres(word) {
//     if (typeof word !== "string") {
//        return "Debo ser ejecutada con un string"
//     } else {
//         if (word.length > 3) {
//             return word.substring(0, 3)
//         }
//         else {
//            return word
//         }
//     }
// }console.log(primerosTresCaracteres("hola"))
// // Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
// function getPrecioMostrarIVA(money) {
//     if (typeof money !== "number") {
//         return "no es un formato correcto"        
//     }else{
//         const moneyiva = ((money*0.21)+money).toFixed(2)

//         return moneyiva
//     }

// }

// console.log(getPrecioMostrarIVA(38))






// Ejercicios extras
// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.
// function penultimoCaracter(string) {
//     if (typeof string !== "string") {
//         return "Debo ser ejecutada con un string"
//     }else if(string.length<2){
//         return string.charAt(0)
//     }else{
//         return string.charAt(string.length - 2)
//     }
// }
// console.log(penultimoCaracter("adios"))
// Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".
// lo voy a dejar asi pero este no me sale
// function cuentaVocales(palabra) {
//     let vocales
//     let letras
//     if (typeof palabra !== "string") {
//         return "Debo ser ejecutada con un string"
//     } else {
//         for (let i = 0; i < palabra.length; i++) {
//             console.log(palabra)
//             if ([palabra] !== ("a" || "e" || "i" || "o" || "u")) {
//             } else {

//             }
//         }
//     }
// }
// console.log(cuentaVocales("hpla"))
// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.
// function potencia(a,b){
//     return Math.pow(a,b)
// }
// console.log(potencia(2,10))
// Ejercicio extra spoiler de DOM
// Investiga que es el DOM js, y haz lo siguiente:
// Crea un botón en tu archivo HTML
// Llama a ese botón en tu archivo js y muestralo por consola
// Crea una función que cuando se ejecute muestre un alert que diga “Hola”
// Investiga qué es addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.
