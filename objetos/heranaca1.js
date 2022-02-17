

/* Arrow: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

//Herança para reuso de código

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)