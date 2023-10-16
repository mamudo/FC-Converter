const convertInputs = document.getElementById("convertInputs");
const inputFrom = document.getElementById("inputFrom");
const inputTo = document.getElementById("inputTo");
const btnConvert = document.querySelector(".convert");
const btnSwap = document.querySelector(".swap");
const convertType = document.querySelector(".convertType");
const f = "Fahrenheit (°F)";
const c = "Celcius (°C)";

// btnConvert.addEventListener("click",swapTo);
// btnConvert.addEventListener("click",swapTo);
function swapTo(){
    const data1 = document.querySelector(".convertType").firstElementChild;
    const data2 = document.querySelector(".convertType").lastElementChild;
    const toText = document.querySelector(".toText");
    convertType.insertBefore(data2,toText);
    convertType.insertBefore(data1,toText.nextSibling);

    //Input Form - From -> To reFormat:
    inputFrom.id = data2.id+"From";
    inputFrom.placeholder = data2.id;
    inputFrom.nextElementSibling.innerHTML = data2.innerHTML.split(" ")[1];

    inputTo.id = data1.id+"To";
    inputTo.nextElementSibling.innerHTML = data1.innerHTML.split(" ")[1];

    // H1 Title reFormat:
    document.querySelector("h1").innerText = `${data2.id} To ${data1.id} Convertor`;
    reset();
}

function convertTo(){
    let inputValue = parseInt(inputFrom.value);
    let result = 0;

    if (inputFrom.nextElementSibling.textContent.includes("°F")) {
        result = (inputValue-32)*(5/9);
    }else if (inputFrom.nextElementSibling.textContent.includes("°C")) {
        result = (inputValue*9/5)+32;
    }
    inputTo.value = result.toFixed(1);
}
function reset(){
    inputFrom.value = "";
    inputTo.value = "";
}