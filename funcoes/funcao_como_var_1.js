

//armazenar função dentro de uma variável

const x = 123;
let y = 321;



//função anonima (função sem nome). Pode ser armazenada em uma variável. É apenas uma outra forma de criar a função
const somar  = function (a, b){
    return a + b;
}

console.log(somar(x, y))