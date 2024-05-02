"use strict"

function parseAndDisplay(someName) {
    // create a variable to hold the full name
    // added trim because my users hate giving me good data
    let fullName = someName.trim();
    let firstSpaceIndex = fullName.indexOf(" ");
    let lastSpaceIndex = fullName.lastIndexOf(" ");

    // if we have NO spaces in the name
    console.log("Name: " + fullName);
    if (firstSpaceIndex === -1) {
        console.log("Only name: " + fullName);
    }
    // this is if we have 1 and only 1 space, so first and last only
    else if (fullName.indexOf(" ") === fullName.lastIndexOf(" ")) {

        let firstName = fullName.slice(0, firstSpaceIndex);
        let lastName = fullName.slice(firstSpaceIndex + 1);
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);

        // any other scenario goes here, I know a name of "first      second" will break this but this'll do for now
    } else {
        let firstName = fullName.slice(0, firstSpaceIndex);
        let middleName = fullName.slice(firstSpaceIndex + 1, lastSpaceIndex);
        let lastName = fullName.slice(lastSpaceIndex + 1);

        console.log("First name: " + firstName);
        console.log("Middle name: " + middleName);
        console.log("Last name: " + lastName);
    }
}

parseAndDisplay("Cher");
parseAndDisplay("Brenda Kaye");
parseAndDisplay("Dana Lynn Wyatt");