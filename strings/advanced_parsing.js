"use strict"

function parseAndDisplay(someName) {
    // create a variable to hold the full name
    // added trim because my users hate giving me good data
    let fullName = someName.trim();
    let firstSpaceIndex = fullName.indexOf(" ");
    let lastSpaceIndex = fullName.lastIndexOf(" ");

    console.log("Name: " + fullName);
    // if we have NO spaces in the name
    if (firstSpaceIndex === -1) {
        console.log("Only name: " + fullName);
    }
    // any other case goes here
    else {
        let firstName = fullName.slice(0, firstSpaceIndex);
        let middleName = fullName.slice(firstSpaceIndex + 1, lastSpaceIndex).trim();
        let lastName = fullName.slice(lastSpaceIndex + 1).trim();

        console.log("First name: " + firstName);
        if (middleName.length > 0) {
            console.log("Middle name: " + middleName);
        }
        console.log("Last name: " + lastName);
    }
}

parseAndDisplay("   Cher   ");
parseAndDisplay("Brenda    Kaye   ");
parseAndDisplay("      Dana      Lynn                      Wyatt");