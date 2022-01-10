
//como reeutilizar o objeto mais de uma vez sem duplicar. Abaixo foi criado de forma literal. 
//

const d1 = {
    dia: 13,
    mes: 07,
    ano: 92,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(dataNascimento.exibirData());