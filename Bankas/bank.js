const vardas = "Erika", 
    algosDydis = 800;
let balansas = 100;
let metaloKainaTona = 588.70;
let metaloKainaKg = metaloKainaTona / 1000;

init();

function isleistiPinigus() {
    const islaiduElementas = document.querySelector("#islaidu-input");
    const islaidos = +islaiduElementas.value;
    atimtiNuoBalanso(islaidos);
    islaiduElementas.value = "";
}

function atimtiNuoBalanso(islaidos) {
    if (isNaN(islaidos) || islaidos < 0) return;
    balansas -= islaidos;
    console.log(balansas);
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = `Jūsų balansas: ${balansas.toFixed(2)} Eur.`;

}

function inestiPinigus() {
    const inasoElementas = document.querySelector("#inaso-input");
    const inasas = +inasoElementas.value;
    pridetiPrieBalanso(inasas);
    inasoElementas.value = "";
}

function pridetiPrieBalanso(inasas) {
    if (isNaN(inasas) || inasas < 0) return;
    balansas += inasas;
    console.log(balansas);
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = `Jūsų balansas: ${balansas.toFixed(2)} Eur.`;
}

function gautiAlga() {
    balansas += algosDydis;
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = `Jūsų balansas: ${balansas.toFixed(2)} Eur.`;
}

function priduotiMetala() {
    const metaloElementas = document.querySelector("#metalo-input");
    const metalas = +metaloElementas.value * metaloKainaKg;
    pridetiPrieBalanso(metalas);
    metaloElementas.value = "";
}

function pridetiPrieBalanso(metalas) {
    if (isNaN(metalas) || metalas < 0) return;
    balansas += metalas;
    console.log(balansas);
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = `Jūsų balansas: ${balansas.toFixed(2)} Eur.`;
}

function init () {
    const greetingElement = document.querySelector("#greeting");
    greetingElement.innerText = greetingElement.innerText.replace("{vardas}", vardas);

    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = balanceElement.innerText.replace("x", balansas);
}


