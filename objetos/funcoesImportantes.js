/* Esse conteudo não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */




const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pegar todas as chaves desse obj
console.log(Object.values(pessoa)) //pegar todos os valores do obj
console.log(Object.entries(pessoa)) // tranforma o objeto em arrays
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

//não deixar que o atributo seja sobrescrito
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2022'
})
console.log(pessoa.dataNascimento)