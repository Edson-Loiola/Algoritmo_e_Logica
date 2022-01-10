

// 4 tipos de Funções


// #1 Função com parametros de entrada e com retornor
function somar (a, b){
    return a + b;
}
let resultado = somar(10, 20);
console.log(resultado);


// #2 Função com parametros e sem retorno
function exibirMultiplicacao(a, b)
{
    console.log(a * b);
}
exibirMultiplicacao(2, 10);


//#3 Função sem parametro que retorna alguma coisa
function retornaDataAtual()
{
    return new Date(); 
}
console.log(retornaDataAtual());


//#4 Função sem parametro e sem retorno
function exibirHoraAtual()
{
    console.log(new Date().getHours());
}
exibirHoraAtual();