/*function random (minValue, MaxValue) {
    const min = Math.floor(minValue);
    const max = Math.ceil(MaxValue);
    const randomNumber = Math.floor(Math.random()*(max-min+1))+min;
    return randomNumber;
}
random();
const atsitiktinisSkaicius = random(1,10000);
//console.log(atsitiktinisSkaicius);

// 1 UŽDUOTIS

function generateRandomNumberArray (length) {
    const randomNumberArray = [];
    for (let i = 0; i <= length; i++)
    {
        randomNumberArray.push(atsitiktinisSkaicius);
    }
    return randomNumberArray;
}

const rezultatas = generateRandomNumberArray(50);
console.log(rezultatas);*/

function generateRandomArray(length, min, max) {
    const randomArray = [];
    
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        randomArray.push(randomNumber);
    }
    
    return randomArray;
}

let randomArray = generateRandomArray(100, 1, 100); // 
console.log(randomArray);

// 2 UŽDUOTIS

function countAllThrees ()
{
    const arrayThrees = [];

    for (let i = 0; i < randomArray.length; i++)
    {
        if(randomArray[i].toString().includes('3'))
        {
            arrayThrees.push(randomArray[i]);
        }
    }
    return arrayThrees;
}

const masyvas = countAllThrees();
console.log(masyvas.length);

// 3 UŽDUOTIS

function allEven()
{
    const evenNum = [];

    for (let i = 0; i < randomArray.length; i++)
    {
        if(randomArray[i] % 2 === 0) evenNum.push(randomArray[i]);
    }
    return evenNum;
}

const arrayEven = allEven();
console.log(arrayEven.length);

function allOdd()
{
    const oddNum = [];

    for (let i = 0; i < randomArray.length; i++)
    {
        if(randomArray[i] % 2) oddNum.push(randomArray[i]);
    }
    return oddNum;
}

const arrayOdd = allOdd();
console.log(arrayOdd.length);

// 4 UŽDUOTIS

function countAllEvenUnderSix()
{
    const arrayUnderSix = [];

    for (let i = 0; i < arrayEven.length; i++)
    {
        if(arrayEven[i] <= 6)
        {
            arrayUnderSix.push(arrayEven[i]);
        }
    }
    return arrayUnderSix;
}

const underSix = countAllEvenUnderSix();
console.log(underSix.length);

// 5-6 UŽDUOTIS

function throwCoin(times) 
{
    coinFlip = [];
    for (let i = 0; i < times; i++){
        const randomCoin = Math.random() < 0.5 ? 'Herbas' : 'Skaičius';
        coinFlip.push(randomCoin);
    }
    return coinFlip;
}

const throwCoinResult = throwCoin(20);
console.log(throwCoinResult);

function coinCount()
{
    const herbasCount = [];
    const skaiciusCount = [];

    for (let i = 0; i < throwCoinResult.length; i++)
    {
        if(throwCoinResult[i] == 'Herbas') herbasCount.push(throwCoinResult[i]);
        else if(throwCoinResult[i] == 'Skaičius') skaiciusCount.push(throwCoinResult[i]);
    }
    return {
        herbas: herbasCount,
        skaicius: skaiciusCount
    };
}

const coinNum = coinCount();
console.log(coinNum);

// 7 UŽDUOTIS

const sumAllArray = randomArray.reduce(function(a, b) { return a + b; }, 0);
console.log(sumAllArray);

// 8 UŽDUOTIS

const arr = [1, 2, 3, 4, 5, 6]
const swap = [arr [0], arr[2]] = [arr [2], arr[0]];

console.log(arr);

// 9 UŽDUOTIS

const averageArray = sumAllArray / randomArray.length;
console.log(averageArray);

// 10 UŽDUOTIS

let uniqueNumbers = [];

function findAllUniqueNumbers() {
    let uniqueNumbers = Array.from(new Set(randomArray))
    return uniqueNumbers
}

console.log(findAllUniqueNumbers(uniqueNumbers));



