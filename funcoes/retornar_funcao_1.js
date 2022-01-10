
// Retornar uma função

function retonaUmaFuncao() {

    function bomdia() {
        return "Bom dia!"
    }

    return bomdia;
}

console.log(retonaUmaFuncao);
console.log(retonaUmaFuncao());
console.log(retonaUmaFuncao()());  //dessa formar a função executa a função bomdia.

const umaFuncao = retonaUmaFuncao();  //ou dessa forma
console.log(umaFuncao())
