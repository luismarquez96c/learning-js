/**
 * Variables privadas en JS
 */

const person = () => {
    var saveName = 'Name';

    return {
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        }
    }
};

const newPerson = person();
console.log(newPerson.getName());//imprime Name
newPerson.setName('Luis');
console.log(newPerson.getName());//imprime Luis