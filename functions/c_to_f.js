"use strict";

function covertCToF(celsius) {
    let fahrenheit = (celsius* (9/5)) + 32;
    return fahrenheit;
}

let celsiusTemp = 92;
let fahrenheitTemp = covertCToF(celsiusTemp);
console.log(celsiusTemp + "°C = " + fahrenheitTemp + "°F");

//console.log(convertCtoF(92))




// function convertFtoc(Fahrenheit) {
//    