

function sempreRetornaUm()
{
    return 1;
}

let valor = sempreRetornaUm()
console.log(valor);


function textoOuNumero(retornaTexto )
{
    // if(retornaTexto)  //true
    // {
    //     return "Sou um texto";
    // }else{
    //     return 123
    // }

    //para simplificar o if posso usar operador ternário
    return retornaTexto ? "Sou um texto" : 123;
}

let texto  = textoOuNumero(true);
console.log(texto)

console.log(textoOuNumero(false));