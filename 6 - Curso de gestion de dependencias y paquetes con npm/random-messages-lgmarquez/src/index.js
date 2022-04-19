const messages = [
    "oscar",
    "luis",
    "nicolay",
    "diego",
    "ana",
    "fernando",
];

export const randomMsg = () => {

    const rnd = Math.random() * messages.length ;
    console.log(messages[ parseInt(rnd)])

}