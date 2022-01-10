
//Funçao como parametro

function executar(funcao) {

    if (typeof funcao === "function") {
        console.log(funcao());
    }
}

//detectar se o tipo passado é uma função
console.log(typeof executar)


function bomDia(){
    return "Bom dia";
}

executar(bomDia);  //passando a função bom dia sem os "()" para ser executada

//-----------
const x  = bomDia;  // O valor de x é uma função.
const y = bomDia(); // 
console.log(x);
console.log(y);

