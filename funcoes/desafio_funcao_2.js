

//Parametro (Nota ) -> Retorno (Conceito)

function retornaNota(nota) {

    switch (Math.ceil(nota)) {
        case 10:
            return ('Nota: A+');

        case 9:
            return ('Nota: A');

        case 8:
            return ('Nota: B+');

        case 7:
            return('Nota: B');

        case 6:
            return('Nota: C+');

        case 5:
            return('Nota: C');

        case 4:
            return('Nota: D+');
        case 3:
            return('Nota: D');

        case 2:
            return('Nota: E+');
        case 1:
            return('Nota: E');

        case 0:
            return('Nota: F');

        default:
            return ('Nota inválida!')
    }
}

let resultado = retornaNota(12)
console.log(resultado); 