//1.CREACION DE FUNCION QUE EJECUTA CALLBACK
const date = callback => {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

//2.CREACION DE FUNCION CALLBACK
const printDate = dateNow => console.log(dateNow);

//3.MANDANDO A LLAMAR A FUNCION QUE EJECUTA CALLBACK
date(printDate);