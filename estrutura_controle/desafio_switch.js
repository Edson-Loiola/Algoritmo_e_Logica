
// A+ -> 10
// A  -> 9
// B+ -> 8
// B  -> 7
// C+ -> 6
// C  -> 5
// D+ -> 4
// D  -> 3
// E+ -> 2
// E  -> 1
// F ->  0

let nota = 7.5;

switch(Math.ceil(nota))
{
    case 10:
        console.log('Nota: A+'); break;

    case  9:
        console.log('Nota: A'); break;

    case  8:
        console.log('Nota: B+'); break;

    case  7:
        console.log('Nota: B'); break;

    case  6:
        console.log('Nota: C+'); break;
    
    case 5:
        console.log('Nota: C'); break;

    case 4:
        console.log('Nota: D+'); break;
    
    case 3: 
        console.log('Nota: D'); break;
            
    case 2:
        console.log('Nota: E+'); break;

    case 1:
        console.log('Nota: E'); break;

    case 0:
        console.log('Nota: F'); break;

    default:
        console.log('Nota inválida!')
}

console.log('Fim!')