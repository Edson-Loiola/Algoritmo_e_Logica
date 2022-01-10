
const numeros = [10, 20, 30, 40, 50, 60];

//uma forma de percorrer todos os números
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])    
// }

//melhor forma de percorrer array
for(let n of numeros){
    console.log(n)
}

console.log('--------------------');

//foreach em java script é passado uma funcao como parametro
numeros.forEach(function(elemento, indice, array){ //1º param ref ao elemento, 2º param ref ao indice, 3º param é o arraycompleto
    console.log(elemento, indice, array)
})



