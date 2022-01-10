

//aprovado >= 7
//recuperção  >=4 e <7
//reprovado < 4

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;

function calcularMediaDasDuasNotasMaiores(n1, n2, n3) {

    let media = 0.00;

    if (n1 >= n2 || n1 >= n3) {
        media += n1;
    }
    if (n2 >= n1 || n2 >= n3) {
        media += n2;
    }
    if (n3 >= n1 || n3 >= n2) {
        media += n3
    }

    resultado = (media / 2);
    
    return resultado;
}

function statusDoAluno(media) {

    if (media >= 7) {
        console.log('Aluno Aprovado!');
    }
    else if (media >= 4 || media < 7) {
        console.log('Aluno em Recuperação!');
    } else {
        console.log('Aluno Reprovado!');
    }
}


let mediaAluno = calcularMediaDasDuasNotasMaiores(nota1, nota2, nota3)
statusDoAluno(mediaAluno);
