const weightInput = document.querySelector("#weightInputArea");
const heightInput = document.querySelector("#heightInputArea");
const calculateButton = document.querySelector(".calculate")
const result = document.querySelector("#result");
const statement = document.querySelector("#resultStatement");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    result.innerText = BMI.toFixed(2);


    if(BMI < 18.5) {
        statement.innerText = "Jūsų KMI mažesnis už standartinį.";
        result.style.color = "red";
    } else if ((BMI > 18.5) && (BMI < 25)) {
        statement.innerText = "Jūsų KMI yra normalus.";
        result.style.color = "green";
    } else if ((BMI > 25) && (BMI < 30)) {
        statement.innerText = "Jūsų KMI patenka į antsvorio kategoriją.";
        result.style.color = "orange";
    } else if (BMI > 30) {
        statement.innerText = "Jūsų KMI patenka į nutukimo kategoriją."
        result.style.color = "red";
    }
});


