const funcion = () =>{
    variableGlobal = 'Valor gloabl';//DECLACIÓ DE UNA VARIABLE GLOBAL.
    var variableLocal = 'Valor local';
}

funcion();

console.log(variableGlobal);//IMPRIME Valor global
//console.log(variableLocal);//DA ERROR PORQUE ES LOCAL