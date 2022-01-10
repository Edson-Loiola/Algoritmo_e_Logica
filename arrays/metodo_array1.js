
const numeros = [1, 2, 3, 4, 5];

numeros.push(6);  //adiciona no array
numeros[0] = 100; //alterar valor do indc 0 do array
 

const numeros2 = numeros.concat(7,8,9); //cria um novo array com esses elementos a mais

console.log(numeros.join(',')); //juntas os elementos do array separado por virgula, tornando uma string
console.log(numeros.join(' - '));
console.log(numeros.join(';'));

console.log(numeros.includes(10)) //verifica se o varo existe dentro do array
console.log(numeros.includes(6)) //verifica se o varo existe dentro do array
console.log(numeros.indexOf(4)) //mostrar qual é o index do elemento 4
console.log(numeros);
console.log(numeros2);



