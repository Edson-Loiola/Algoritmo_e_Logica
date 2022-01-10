
//Deasfio Data

const dataNascimento = {
    dia: 13,
    mes: 07,
    ano: 92,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(dataNascimento.exibirData());