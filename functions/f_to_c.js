"use strict"

function convertFtoC(someTemp) {

    let fahrenheit = someTemp
    let celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;

}

console.log("212 degrees fahrenheit is " + convertFtoC(212) + " degrees celsius");
console.log("90 degrees fahrenheit is " + convertFtoC(90) + " degrees celsius");
console.log("72 degrees fahrenheit is " + convertFtoC(72) + " degrees celsius");
console.log("32 degrees fahrenheit is " + convertFtoC(32) + " degrees celsius");
console.log("0 degrees fahrenheit is " + convertFtoC(0) + " degrees celsius");
console.log("-40 degrees fahrenheit is " + convertFtoC(-40) + " degrees celsius");