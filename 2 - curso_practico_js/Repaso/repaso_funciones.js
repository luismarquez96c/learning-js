// const persona = {
//     name : "Juan David",
//     lastname : "Castro Gallego",
//     getCompleteName : function () {
//         return this.name + ' ' + this.lastname
//     },
//     nickname : "juandc",
// }

// presentarPersona(persona);

// function presentarPersona( personaParam ){
//     console.log(`Mi nombre es ${personaParam.getCompleteName()}, pero prefiero que me digas ${personaParam.nickname}.`);
// }




// const tipoDeSuscripcion = "Basic";

// const SUSCRIPCIONES = new Array(4);
// SUSCRIPCIONES['Free'] = "Solo puedes tomar los cursos gratis";
// SUSCRIPCIONES['Basic'] = "Puedes tomar casi todos los cursos de Platzi durante un mes";
// SUSCRIPCIONES['Expert'] = "Puedes tomar casi todos los cursos de Platzi durante un año";
// SUSCRIPCIONES['ExpertPlus'] = "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";

// if( SUSCRIPCIONES[tipoDeSuscripcion] ){
//     console.log(SUSCRIPCIONES[tipoDeSuscripcion])
// }

// const persona = {
//     name : "Juan David",
//     lastname : "Castro Gallego",
//     nickname : "juandc"
// }

// function imprimirObjeto( objeto ){
//     for( const propiedad in objeto ){
//         console.log(`${propiedad} - ${objeto[propiedad]} `)
//     }
// }
// imprimirObjeto(persona);


let persona = {
    nombre: 'Oscar',
    apellido: 'Aguilar',
    edad: 21
  }
  const unaFuncion = (objeto) => {
    Object.values(objeto).forEach((elem) => {
      console.log(elem);
    });
  };
  
  unaFuncion(persona);