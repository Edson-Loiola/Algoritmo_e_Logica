
//Um objeto é composto por atributos e metodos(ou comportamentos). Ele pode ter apenas atributos.
let produto = {
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function () {  // uma função dentro de um objeto ou classe é um metodo
        return this.preco * (1 - this.desconto) //no desconto o valor do produto equivale a 85% ou 0.85 do produto,  então 1 - 0.15
    }
};

console.log(produto.precoComDesconto())

//This : Quando é preciso referenciar um atributo do proprio objeto e vc está dentro do objeto.
//