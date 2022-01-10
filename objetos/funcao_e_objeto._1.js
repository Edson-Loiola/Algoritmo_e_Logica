

//função que cria um objeto
function criarData(dia, mes, ano) {

    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function () {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(10, 10, 2021);
const d2 = criarData(13, 07, 1992);

console.log(d1.exibirData());
console.log(d2.exibirData());