//EXERCICI 1.1

//Exercici 1
const add = (a, b) => {
    return a + b
}

//Exercici 2

const randomNumber = () => {
    return Math.floor(Math.random() * 100)
}

//Exercici 3

class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    greet() {
        console.log(`Hola ${this.name} ${this.surname}`)
    }
}
const addGreet = new Person('Sergi', 'Descayre')
//addGreet.greet()

//Exercici 4

const numbers = [1, 2, 3, 4, 5]
const printNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
//printNumbers(numbers)

const printWithDelay = (seconds) => {
    setTimeout(() => {
        console.log(`He esperat  ${seconds} segons`)
    }, seconds * 1000)
}
//printWithDelay(2)

//EXERCICI 1.2

//Exercici 1

const potConduir = (edat) => {
    (edat >= 18) ? console.log("Pot Conduir") : console.log("No pot conduir")
}
//potConduir(15)

//Exercici 2

const compararNumeros = (num1, num2) => {
    (num1 > num2) ? console.log(`${num1} es més gran`) : console.log(`${num2} es més gran`)
}
//compararNumeros(1,2)

//Exercici 3

const tipusDeNumero = (number) => {
    number === 0 ? console.log("el numero es 0")
        : number < 0 ? console.log("el número es negatiu") : console.log("El número es positiu")
}

//tipusDeNumero(0)

const trobarMaxim = (a, b, c) => {
    (a > b && a > c) ? console.log(a)
        : (b > a && b > c) ? console.log(b) : console.log(c)
}

//trobarMaxim(1,100,5)

//Exercici 4

const numeros = [13, 22, 36, 41, 55, 64, 74, 81, 99]

const parOImpar = (array) => {
    for (let i = 0; i < array.length; i++)
        array[i] % 2 == 0 ? console.log(`${array[i]} es parell`) : console.log(`${array[i]} es imparell`)
}

//parOImpar(numeros)

//EXERCICI 1.3

//Exercici 1

let nombre

const processar = (nombre, callback) => {
    callback(nombre)
}

//Exercici 2

const calculadora = (a, b, callback) => callback(a + b)

calculadora(2, 9, (result) => console.log(result))

//Exercici 3

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom)
    }, 2000)
}

esperarISaludar("Sergi", (nom) => console.log(`Hola ${nom}`))

//Exercici 4
const numbersEx4 = [1,2,3]

const processarElements = (array , callback) => {
    callback(array)
}

processarElements(numbersEx4, (array) => {
    for(let i = 0 ; i < array.length ; i++){
        console.log(`invoco callback ${array[i]}`)
    }
})

//Exercici 5

const passarMayuscula = (cadena) => {
    console.log (cadena.toUpperCase())
}

const processarCadena = (cadena , callback) => callback(cadena)

processarCadena("sergi", passarMayuscula)
   




