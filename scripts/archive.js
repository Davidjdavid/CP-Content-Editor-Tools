// Creates the buttons
let autoButton = document.createElement("Button");

// Creates the buttons text
let autoText = document.createTextNode("Auto Name and Date");

// Adds the buttons to the menu
document.querySelector('.buttons').append(autoButton);

// Adds the text to the buttons
autoButton.appendChild(autoText);