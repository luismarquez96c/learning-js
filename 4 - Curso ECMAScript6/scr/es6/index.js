//1. SE AGREGARON PARAMETROS POR DEFECTO.
function func( name = 'Luis', age=26 ){
    //2. SE AGREGARON TEMPLATE LITERALS
    console.log(`name = ${name} age = ${age}`);
}

func();

//--------------------------------------------

const item = {isCollapsed:true, isLargeScreen: false}
//OTRO EJEMPLO DE TEMPLATE LITERALES PERO CON UNA PLANTILLA ANIDADA.
const classes = `header ${ item.isLargeScreen ? '' 
: `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
console.log(classes);

//TAMBIÉN SE AGREGO MULTILINEA A ESTE TIPO DE STRINGS.
console.log(`lorem asdasdas
asdasdasdasd`);//ESTO SE IMPRIMERA EN DOS LINEAS

//-----------------------------------------

//3. SE AGREGO LA DESESTRUCTURACIÓN DE ARREGLOS Y OBJETOS

const persona = {
    name: 'Luis',
    age: 26,
    country: {
        code: 'SV',
        name: 'El Salvador'
    }
};
const {name, age, country: {code, name: countryName} } = persona
console.log(name, age, code, countryName);


//4. SE AGREGO EL OPERADOR DE PROPAGACIÓN ( ... )
const team1 = ['nombre1','nombre2','nombre3','nombre4'];
const team2 = ['nombre5','nombre6','nombre7','nombre8'];

let educationTeam = [...team1, ...team2];
console.log(educationTeam);//IMPRIME LOS 8 INTEGRANTES DEL TEAM EDUCATION

educationTeam = ['nombre9', ...educationTeam];
console.log(educationTeam);//IMPRIME LOS 9 INTEGRANTES DEL TEAM EDUCATION


//5. SE AGREGO LAS VARIABLES LET Y CONST

//6. SE AGREGO LA PROPIEDAD DE OBJETOS MEJORADOS

const nombre = 'Luis';
const edad = 26;

const objeto = {nombre, edad};
console.log(objeto);//IMPRIME EL OBJETO COMPLETO Y SIN ERRORES.

//7. SE AGREGARON ARROW FUNCTIONS

const funcion = () => {//LAS ARROW FUCTIONS NO TIENEN UN THIS VINCULADO.
    
}

//8. SE AGREGARON LAS PROMESAS.
const cargarRecurso = () => {
    return new Promise((resolve, reject) =>{
        let a = false;
        setTimeout(() => {
            if(a) resolve('Exito');
            else reject('Error');
        }, 2000);

    } );
};

cargarRecurso().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

//9. SE AGREGARON LAS CLASES

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


//10. SE AGREGARON MODULOS
import hello from './module.js';//SINTAXIS AUN NO SOPORTADA POR NODE JS
//const hello = require('./module')//SINTAXIS ANTERIOR
hello();

//11. SE AGREGARON GENERATORS: ES UNA FUNCIÓN ESPECIAL QUE RETORNA UNA SERIE DE VALORES SEGUN EL ALGORITMO DEFINIDO.

function* helloWord(){
    if(true){
        yield 'Hello';
    }

    if(true){
        yield 'World';
    }
}

const generatorHello = helloWord();

let generatorObj = generatorHello.next();
console.log(`${generatorObj.value}, ${generatorObj.done}`);//Hello, false

generatorObj = generatorHello.next();
console.log(`${generatorObj.value}, ${generatorObj.done}`);//World, false

generatorObj = generatorHello.next();
console.log(`${generatorObj.value}, ${generatorObj.done}`);//undefined, true
//la propiedad done nos indica si la función generadora ha hecho yield al último valor.


//-----------------------------------

function* idMaker(){
    var index = 0;
    while(index < 3)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // undefined

//-------------------------------------
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var gen = generator(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20
