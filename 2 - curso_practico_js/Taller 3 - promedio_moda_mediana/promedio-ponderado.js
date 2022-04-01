const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


const notesWidthCredits = notes.map( note => note.credit * note.note );

const sumNotesWidthCredits = notesWidthCredits.reduce( (acumulador, elemento) => acumulador + elemento );

const sumCredits = notes.map( note => note.credit ).reduce( (acumulador, elemento) => acumulador + elemento );

const promedio_ponderado = sumNotesWidthCredits / sumCredits;

console.log(promedio_ponderado)