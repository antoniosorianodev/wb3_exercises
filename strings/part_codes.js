"use strict"

const partCode = "ACE:1-12";
const colonIndex = partCode.indexOf(":");
const hyphenIndex = partCode.indexOf("-");
const supplier = getSupplier(partCode);
const productCode = getProductCode(partCode);
const size = getSize(partCode);

function getSupplier(code) {
    return (code.slice(0, colonIndex));
}

function getProductCode(code) {
    return (code.slice(colonIndex + 1, hyphenIndex));
}

function getSize(code) {
    let actualSize = code.slice(hyphenIndex + 1);
    let sizeMessage;
    if (Number(actualSize)) {
        sizeMessage = "size " + actualSize;
    } else {
        if (actualSize === "M") {
            sizeMessage = "medium (" + actualSize + ")";
        }
        if (actualSize === "L") {
            sizeMessage = "large (" + actualSize + ")";
        }
    }
    return (sizeMessage);
}

console.log(`the ${size} part ${productCode} is supplied by ${supplier}`);