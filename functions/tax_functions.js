function getSocSecTax(grossPay) {
    social = (grossPay * 0.062);
    return (social);
}

function getMedicareTax(grossPay) {
    medicare = (grossPay * 0.0145);
    return (medicare);
}

function getFederalTax(grossPay, withholdingCode) {
    let taxRate;
    if (withholdingCode == 0) {
        taxRate = 0.23;
    } else if (withholdingCode == 1) {
        taxRate = 0.21;
    } else if (withholdingCode == 2) {
        taxRate = 0.195;
    } else if (withholdingCode == 3) {
        taxRate = 0.185;
    } else if (withholdingCode >= 4) {
        let gap = (withholdingCode - 4)
        taxRate = 0.18 - (gap * 0.005);
    }
    let federal = (grossPay * taxRate);
    return (federal);
}

console.log(getSocSecTax(750));
console.log(getSocSecTax(1550));
console.log(getSocSecTax(1100));

console.log(getMedicareTax(750));
console.log(getMedicareTax(1550));
console.log(getMedicareTax(1100));

console.log(getFederalTax(750, 0));
console.log(getFederalTax(1550, 2));
console.log(getFederalTax(1100, 6));