var a = 'Hello';

function hello(){
    debugger;
    let b = 'Hello world';
    const c = 'Hello World!';

    if(true){
        let d = 'Hello World!!';
        debugger;
    }

}

hello();

const moneyBox2 = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }

    return countCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(12);
myMoneyBox(4);