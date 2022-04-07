const anotherFunction = () => {
    for(var  i = 0; i < 10; i++){//VAR TIENE SCOPE LOCAL DE LA FUNCIÓN
    //for(let  i = 0; i < 10; i++){//LET TIENE SCOPE DE BLOQUE DEL CICLO FOR.
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();//SE IMPRIME 10 VECES EL NUMERO 10