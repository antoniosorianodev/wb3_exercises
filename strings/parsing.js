"use strict"

function parseAndDisplay(someName) {

    // create a variable to hold the full name
    let fullName = someName;

    // find the position of the first space
    let spacePosition = fullName.indexOf(" ");

    // create variable for the first and last name
    let firstName = fullName.substring(0, spacePosition);
    let lastName = fullName.substring(spacePosition + 1);


    console.log(`
    Name: ${fullName}
    First name: ${firstName}
    Last name: ${lastName}`
    );
}

parseAndDisplay("Brenda Kaye");
parseAndDisplay("Ian Auston");
parseAndDisplay("Siddalee Grace");

