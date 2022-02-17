
/* Arrow: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

//O objtevido de funções Arrow Function é de ser mais curtas, sintaxes mais reduzidas e o outro ponto forte é
//ter um this associado a função.

function Pessoa() {
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000) //tempo em mm segundos que irá se repetir
}

new Pessoa