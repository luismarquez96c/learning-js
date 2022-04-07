const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox(5);//imprime 5
moneyBox(10);//imprime 10

const moneyBox2 = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }

    return countCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(4);//imprime 4
myMoneyBox(12);//imprime 16
myMoneyBox(4);//imprime 20