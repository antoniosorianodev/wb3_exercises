"use strict"

window.onload = function huh() {
    let daButton = document.querySelector("#theButton");
    daButton.addEventListener("click", displayTime);
}

function displayTime() {
    console.log("you clicked the button")

    let theDate = document.querySelector("#theDate");
    let theParagraph = document.querySelector("#theParagraph");

    let generatedDate = new Date(theDate.value);

    theParagraph.innerHTML = generatedDate.toLocaleString();
}