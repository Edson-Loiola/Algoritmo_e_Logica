
//Função construtora  - Representa uma classe/objeto. A partir função construtora se cria objetos
function Produto(){
    console.log(this)
}

const p1 = new Produto();
//console.log(typeof(p1))

//-----------------------

function Data(dia = 1, mes = 1, ano = 2022){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
const dt1 = new Data(10, 11, 2021);
console.log(dt1.exibir())