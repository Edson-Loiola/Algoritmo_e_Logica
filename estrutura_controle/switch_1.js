



let nota = 10;

//Math.floor : arredonda o número inteiro para baixo
//Math.ceil : arredonda o número inteiro para cima
switch(Math.ceil(nota))
{
    case 10:
    case  9:
    case  8:
        console.log('Parabens!');
        break;

    case 7:
        console.log('Bom!');
        break;
    
    case 5:
        console.log('Recuperação');
        break;

    case 3: case 2: case 1:
        console.log('Reprovado')
        break;
    
    default:
        console.log('Nota inválida!')
}

console.log('Fim!')