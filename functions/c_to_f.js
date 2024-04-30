"use strict"

function convertCtoF(someTemp) {

    let celsius = someTemp
    let fahrenheit = ((celsius) / (5 / 9)) + 32;

    return fahrenheit;

}

console.log("100 degrees celsius is " + convertCtoF(100) + " degrees fahrenheit");
console.log("45 degrees celsius is " + convertCtoF(45) + " degrees fahrenheit");
console.log("19 degrees celsius is " + convertCtoF(19) + " degrees fahrenheit");
console.log("0 degrees celsius is " + convertCtoF(0) + " degrees fahrenheit");
console.log("-7 degrees celsius is " + convertCtoF(-7) + " degrees fahrenheit");
console.log("-40 degrees celsius is " + convertCtoF(-40) + " degrees fahrenheit");