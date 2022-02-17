
/* Arrow: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */


//O objtevido de funções Arrow Function é de ser mais curtas, sintaxes mais reduzidas e o outro ponto forte é
//ter um this associado a função.

//Forma normal de escrever a função
let dobro = function(a)
{
    return 2 * a;
}

//Forma com o arrow:
dobro = (a) =>{
    return 2 * a;
}

//Forma com o arrow mais reduzida ainda:
dobro = a => 2 * a; //return implicito

console.log(dobro(Math.PI));// imprime o dobro de PI

//--------------------------------------------------------

//Forma normal de escrever a função
let ola = function(){
    return 'Olá'
}

//Forma com o arrow:
olaaa = () => 'Olá';
console.log(olaaa());

