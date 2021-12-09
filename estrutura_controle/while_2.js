
//console.log( Math.random() ); ;// sempre retorna um número menor que 1. 

let quantidade = 0;
while(Math.random() < 0.5)
{
    console.log(Math.random());
    quantidade++;
}
console.log('Qdte ' + quantidade);