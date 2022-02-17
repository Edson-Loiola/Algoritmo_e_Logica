/* Esse conteudo não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */


const sequencia = {
    _valor: 1, // '_' convenção para falara que esse atributo será privado
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this.valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)