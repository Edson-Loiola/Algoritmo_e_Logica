//Classe em Js
class Data {
    // dia = 1;
    // mes = 1;
    // ano = 2022;

    constructor(dia = 1, mes = 1, ano = 2022){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano
    }

    exibir(){
       return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
d1.dia = 10;
d1.mes = 10;
d1.ano = 2023;

const d2 = new Data(15, 12, 2021)

console.log(d1);
console.log(d2);
console.log(d2.exibir());