


/* Esse conteudo não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

//Herança para reuso de código

const avo = {atrib1: 'A'}
const pai = { __proto__: avo, atrib2: 'B'}
const filho = { __proto__: pai, atrib3: 'C'}

console.log(filho.atrib1)
console.log(filho.atrib2)
console.log(filho.atrib3)