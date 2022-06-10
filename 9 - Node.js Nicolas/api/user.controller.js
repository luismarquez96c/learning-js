const Users = require('./User');

const User = {
    get: async (req, res) => {

        ObjectId('628715f1f4210d3e310e8763');

        const {id} = req.params;
        const user = await Users.findOne({_id: id});

        res.status(200).send(user);
    },
    list: async (req, res) => {
        const users = await Users.find();
        res.status(200).send(users);
    },

    create: async (req, res) => {
        const user = new Users(req.body);
        const saveUser = await user.save();
        res.status(201).send(saveUser._id);
    },

    update: async (req, res) => {

        const {id} = req.params;
        const userFromDataBase = await Users.findOne({_id: id});
        
        if(!Boolean(userFromDataBase)){
            res.sendStatus(404);
            return;
        }

        Object.assign(userFromDataBase, req.body);//Al parametro 1 le reemplaza sus valores que coincidena con los nombres de atributos del parametro 2
        await userFromDataBase.save();
        res.sendStatus(204);
    },

    destroy: async (req, res) => {
        const {id} = req.params;
        const userFromDataBase = await Users.findOne({_id: id});

        if(!Boolean(userFromDataBase)){
            res.sendStatus(404);
            return;
        }

        await userFromDataBase.remove();
        res.sendStatus(204);
    },

}

module.exports = User;
