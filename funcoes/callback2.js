


/* Callback: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

//Array de notas. Exemplo sem e com callback. Objetivo: Vamos fazer uma nova lista com notas menores que 7


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem Callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);


//Com função callback
const notasBaixas2 = notas.filter(function(nt){
    return nt < 7;
})
console.log(notasBaixas2);

//Com função callback e arrow
const notasBaixas3 = notas.filter(nts => nts < 7);
console.log(notasBaixas3)