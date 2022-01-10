

//função que cria um objeto - forma simplificada
function criarData(dia, mes, ano) {

    return {
        dia,
        mes,
        ano,
        exibirData () {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(10, 10, 2021);
const d2 = criarData(13, 07, 1992);

console.log(d1.exibirData());
console.log(d2.exibirData());