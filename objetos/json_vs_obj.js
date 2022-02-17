

/* Esse conteudo não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */


const obj = {a:1 , b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a":1, "b":2, "c":3}'))
console.log(JSON.parse('{ "a":1, "b":2, "c":3, "d": true, "e":{}, "f":"string"}'))