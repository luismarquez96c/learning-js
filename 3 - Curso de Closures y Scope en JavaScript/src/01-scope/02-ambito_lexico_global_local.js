var scope = 'I am global';

const funcionScope = () =>{
    var scope = 'I am just a local';

    const func = () =>{
        return scope;
    }

    console.log(func());
}

funcionScope();//IMPRIME I am just a local
console.log(scope);//IMPRIME I am global

/*
LO ANTERIOR SE LLAMA AMBITO LEXICO
*/