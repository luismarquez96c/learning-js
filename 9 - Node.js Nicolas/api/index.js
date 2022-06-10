//Instalar mongoose: npm i -S mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hidansamura:ZaHJygz8kfPxnikC@cluster0.htck5.mongodb.net/miApp?retryWrites=true&w=majority');

// MODELA LA DATA
const User = mongoose.model('User', {
    username: String,
    edad: Number
});


// ACCESO A LA DATA
const crear = async () => {
    const user = new User({username:'Chanchito triste', edad: 25 });

    const saveUser = await user.save();

    console.log(saveUser);
}

// crear();//

const buscarTodo = async () => {
    const users = await User.find();
    console.log(users);
}
// buscarTodo();

const buscar = async () => {
    const user = await User.find({username: 'Chanchito feliz'});
    console.log(user);
}
// buscar();


const buscarUno = async () => {
    const user = await User.findOne({username: 'Chanchito feliz'});
    console.log(user);
}

// buscarUno();


const actualizar = async () => {
    const user = await User.findOne({username: 'Chanchito feliz'});
    console.log(user);
    user.edad = 30;

    await user.save();

}

// actualizar();

const eliminar = async () => {
    const user = await User.findOne({username: 'Chanchito triste'});
    console.log(user);

    if(user){
        await user.remove();
    }
}

// eliminar();