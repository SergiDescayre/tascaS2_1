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

//calculadora(2, 9, (result) => console.log(result))

//Exercici 3

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(`Hola ${nom}`)
    }, 2000)
}
//esperarISaludar("Sergi", (saludo) => console.log(saludo))

//Exercici 4
const numbersEx4 = [1, 2, 3]

const pintarCallbacks = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`invoco callback ${array[i]}`)
    }
}

const processarElements = (array, callback) => {
    callback(array)
}

//processarElements(numbersEx4, pintarCallbacks )

//Exercici 5

const passarMayuscula = (cadena) => {
    console.log(cadena.toUpperCase())
}

const processarCadena = (cadena, callback) => callback(cadena)

//processarCadena("sergi", passarMayuscula)

//EXERCICI 1.4

//Exercici 1

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]

//console.log(array3)

//Exercici 2

const suma = (...numeros) => {
    const resultado = numeros.reduce((a, b) => a + b, 0)
    console.log(resultado)
}

//suma(...array1, ...array2, 1, 2, 3, 4, 5, 6)

//Exercici 3

objecte1 = {
    nom: "Sergi",
    cognom: "Descayre"
}

objecte2 = {
    adreca: "gardenia 55",
    poblacio: "llagostera"
}

objecte3 = {
    ...objecte1,
    ...objecte2,
    poblacio: "Llagos"
}

//console.log(objecte3)
//console.log(objecte2)

//Exercici4

const numerosEx4 = [1, 2, 3, 4, 5, 6, 4]

const [numero1, numero2, ...resto] = numerosEx4

//console.log(numero1, numero2, resto)

//Exercici 5
const arrayEx5 = [10, 20, 30]

const sumaSpread = (num1, num2, num3) => {
    const resultado = num1 + num2 + num3
    console.log(resultado)
}

//sumaSpread(...arrayEx5)

//Exercici 6

const persona = {
    nombre: "Sergi",
    Apellidos: "Descayre Solanas"
}

const domicilio = {
    direccion: "la Canyera",
    poblacion: "Llagostera"
}

const contacto = {
    ...persona,
    ...domicilio
}

//console.log(contacto)

//Exercici 1.5

//Exercici 1

const arrayEx1 = [1, 2, 3, 4]

const cuadrat = arrayEx1.map(num => num * num)
//console.log(cuadrat)

const parells = arrayEx1.filter(num => num % 2 === 0)
//console.log(parells)

const arrayEx3 = [1, 10, 8, 11]

const mayorDiez = arrayEx3.find(num => num > 10)
//console.log(mayorDiez)

const arrayEx5N = [13, 7, 8, 21]
const sumaReduce = arrayEx5N.reduce((a, b) => a + b, 0)
//console.log(sumaReduce)

//Exercici 6

const arrayEx6N = [11, 12, 13, 14]

// console.log(arrayEx6N.some(numero => numero >10))
// console.log(arrayEx6N.every(numero => numero >10))

//Exercici 1.6

//Exercici 1

arrayForEach = ['anna', 'Bernat', 'Clara']

//arrayForEach.forEach(nom=>console.log(nom))

//Exercici 2

for (let nom of arrayForEach) {
    console.log(nom)
}

//Exercici 3

const arrayFilter = [1, 2, 3, 4, 5, 6]

const nombresParells = arrayFilter.filter(num => num % 2 === 0)

//console.log(nombresParells)

//Exercici 4

let obj = {
    nom: "Ona",
    edat: 25,
    ciutat: "Barcelona"
}

for (let value in obj) {
    console.log(`${value} : ${obj[value]}`)
}

//exercici 5

let numerosBreak = [1, 2, 3, 4, 5, 6]

for (let numero of numerosBreak) {
    console.log(numero)
    if (numero === 5) break
}

//exercici 6

let noms = ['Anna', 'bernat', 'Clara']

for (let [index, nom] of noms.entries()) {
    console.log(`${nom} en posició ${index}`)
}


//Exercici 1.7

//Exercici 1
const pintarDosSegons = () => {
    setTimeout(() => {
        console.log('Hola mon')
    }, 2000);
}
//pintarDosSegons()

//Exercici 2

const promise = () => {
    return new Promise(() => {
        setTimeout(() => {
            pintarDosSegons()
        }, 2000);
    })
}
//promise().then()

//Exercici 3

const inputPromise = () => {
    const input = "hola"
    return new Promise((resolve, reject) => {
        if (input === "hola") {
            resolve(input)
        } else {
            reject(new Error("input erroni"))
        }
    })
}

inputPromise().then(input => console.log(input))
    .catch(error => console.log(error))

//Exercici 4

const promisEx4 = async () => {
    const resposta = await pintarDosSegons()
    return resposta
}

//promisEx4()

//Exercici 5

const promiseEx5 = async () => {
    try {
        const resposta = await pintarDosSegons()
        return resposta
    } catch (error) {
        console.log(error)
    }
}

//promiseEx5()

//Exercici 6

const promiseOne = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolt promiseOne")
        }, 2000);
    })
}

const promiseTwo = () => {
    return new Promise((resolve) => {
       setTimeout(() => {
            resolve("resolt promiseTwo")
       }, 3000); 
    })
}

Promise.all([promiseOne(), promiseTwo()])
.then(response => response.map(res => console.log(res)))