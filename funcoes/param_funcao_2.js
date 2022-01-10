
//Prametros de função com valores padrões

function somar(a=0, b=0, c=0, d=0){
    return a + b + c + d;
}

console.log(somar(1,2,3))  //se eu não passar todos os parametros será retornado NaN.
console.log(somar(1,2,3,4))
console.log(somar(1))
console.log(somar(1,2,3,4, 5)) //se eu passar um parametro a mais não será considerado e não retorna erro