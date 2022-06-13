//arreglos
let people: string[] = [];//arreglo de string
let peopleAndNumber: Array< string | number > = [];//arreglo de string y numbers

//tipo de datos enum
enum Color {
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Rojo;

console.log("Mi color favorito es: " + colorFavorito);//imprime 1

enum Color2 {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

colorFavorito = Color.Verde;
console.log("Mi color favorito es: " + colorFavorito);//imprime Verde

//tipo Any
let comodin:any = "Joker";
comodin = {type: "wildcard"}

//Object
let someObject:Object = {type: "wildcard"};

//Funciones
function add(a: number, b:number) : number{
    return a + b;
}

const sum = add(4, 6);

function createAdder(a : number) : (b: number) => number {//(b: number) => number es el tipo de retorno

    return function(b : number) {
        return b + a;
    }

}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName?: string): string{//A lastName se le agrego el simbolo ? que indica que es un parametro opcional
    return `${firstName} ${lastName}`;
}

const luis = fullName('Luis');

function fullName2(firstName: string, lastName: string = 'Marquez'): string{//A lastName se le dio un valor por defecto en caso no se envie un argumento
    return `${firstName} ${lastName}`;
}

const luis2 = fullName2('Luis');

/*
Interfaces: definie cómo debe de ser un objeto.
*/

interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color2;//? indica que color es opcional
}

let rect: Rectangulo = {
    ancho:4,
    alto: 6,
    // color: Color2.Azul,
}

function area(r: Rectangulo): number{
    return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString())