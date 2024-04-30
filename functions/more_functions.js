"use strict"

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);
}

function addNumbers(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let answer = num1 + num2
    console.log(`${num1} + ${num2} = ${answer}`);
}

function displayReceipt(totalDue, amountPaid) {
    let difference = (amountPaid - totalDue);
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    if (difference >= 0) {
        console.log(`Change Due: $${difference}`);
    } else {
        console.log(`HEY! You owe us: $${Math.abs(difference)}`);
    }
}

displayMailingLabel("John Doe", "123 Abbey Road", "Dallas", "TX", "75001")
displayMailingLabel("Jane Doe", "123 Wall Street", "New York City", "NY", "10001")

addNumbers(3, 4);
addNumbers(8, 1);

// owed 5, paid 10
displayReceipt(5, 10);

// owed 10, paid 10
displayReceipt(10, 10);

// owed 10, paid 5
displayReceipt(10, 5);