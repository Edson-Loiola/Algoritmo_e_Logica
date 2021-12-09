

// em java script imprimi a data em milissegundos desde o ano de 1970
//console.log(Date.now()) 
const DataFuturo = Date.now() + 10000;
let quantidade = 0;

while(Date.now() < DataFuturo)
{
    quantidade++;
}
console.log('Qdte: ' + quantidade);