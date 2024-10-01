function getRgb(colorObject = {red:0, green:255, blue:255}) {
    return `rgb(${colorObject.red}, ${colorObject.green}, ${colorObject.blue})`;
}
console.log(getRgb());

function chooseNewColor() {
    const rgbObject = parseRgbNumbers();
    const colorRgbText = getRgb(rgbObject);
    atnaujintiKvadrata(colorRgbText);
    nustatytiNaujaSpalva(rgbObject);
}

function parseRgbNumbers() {
    const red = document.querySelector('#redInput').value;
    const green = document.querySelector('#greenInput').value;
    const blue = document.querySelector('#blueInput').value;

    return{
        red: red,
        green: green,
        blue: blue,
    }
}

function atnaujintiKvadrata(colorRgbText) {
    const boxContainer = document.querySelector(`#boxContainer`);
    const boxText = `<div id="box" style="background-color: ${colorRgbText}">${colorRgbText}</div>`;
    boxContainer.innerHTML = boxText;
}

function gautiPaskutineSpalva() {
    const gautaSpalva = localStorage.getItem("spalva");
    if (typeof gautaSpalva === "string") return JSON.parse(gautaSpalva);
    return null;
}

function nustatytiNaujaSpalva(spalva = {red:0, green:0, blue:0}) {
    const spalvaText = JSON.stringify(spalva);
    localStorage.setItem('spalva', spalvaText);
}

function initialize() {
    let paskutineSpalva = gautiPaskutineSpalva();

    if(paskutineSpalva === null) {
        nustatytiNaujaSpalva();
        paskutineSpalva = {red:0, green:0, blue:0};
    }
    const colorText = getRgb(paskutineSpalva);
    atnaujintiKvadrata(colorText);
}

initialize();


