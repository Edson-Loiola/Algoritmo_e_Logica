


/* Callback: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//imprimir nesse caso é uma função. E para cada elemento e ele chama a função fabricantes e imprime
fabricantes.forEach(imprimir) 
fabricantes.forEach(fabricante => console.log(fabricante)) // fabricante será os elementos do array

