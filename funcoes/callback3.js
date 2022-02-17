


/* Callback: Esse tema não foi abordado do Curso de Algoritmo e Logicae sim no Curso Web Moderno.
   Mas por ser parte de fundamento fiz aqui. 
------------------------------------------------------------------------------------------- */

//Exemplo de callback no browser


//document aponta para a sua pagina e a função getelementes retorna um array de elementos, e vamos passar o evento de click
//Ativar uma função sempre que o usuário clicar
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O envento click ocorreu!')
}