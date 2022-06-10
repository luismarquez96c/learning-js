const express = require('express');//Importamos express

const app = express();//Creamos una aplicación

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`Canchito feliz`);//Enviamos su estatus y además contenido en el body del res
});

app.post('/', (req, res) => {
    res.status(201).send('Creando chanchito');
});

app.put('/:id', (req, res) => {
    console.log(req.params);//Obtiene todos los path params
    console.log(req.query);//obtiene todos los request params

    res.sendStatus(204);//sendStatus no envia contenido, solo el estatus
});

app.get('/:id', (req, res) => {
    console.log(req.params);
    
    res.status(200).send(req.params);
});

app.patch('/:id', (req, res) => {
    res.sendStatus(204);
});

app.delete('/:id', (req, res) => {
    res.sendStatus(204);
});


app.listen(port, () => {//Arrancamos aplicación
    console.log('Arrando la aplicación');
});