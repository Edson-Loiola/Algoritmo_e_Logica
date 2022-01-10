

//armazenar função dentro de uma variável

function subtrair(a, b){
    return a - b;
}

const subtracao  = subtrair;


console.log(subtrair(5,2));
console.log(subtracao(5,2));