const express = require('express');//Importamos express
const mongoose = require('mongoose');
const user = require('./user.controller.js');//Obtenemos el modulo que tiene las funciones handler para los metodos http
const app = express();//Creamos una aplicación
const port = 3000;

app.use(express.json());//Toma todas las peticiones que vengan en un formato JSON, las transforma a un objeto JS y la asigna a req.body

mongoose.connect('mongodb+srv://hidansamura:ZaHJygz8kfPxnikC@cluster0.htck5.mongodb.net/miApp?retryWrites=true&w=majority');

app.get('/', user.list);
app.post('/', user.create);
app.get('/:id', user.get);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.destroy);

app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe');
})

app.listen(port, () => {//Arrancamos aplicación
    console.log('Arrando la aplicación');
});