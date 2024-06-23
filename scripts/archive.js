import { extractAndFormatDate } from 'scripts/dateFinder.js';

// Creates the buttons
let autoButton = document.createElement("Button");

// Creates the buttons text
let autoText = document.createTextNode("Auto Date Archive Items");

// Adds the buttons to the menu
document.querySelector('.buttons').append(autoButton);

// Adds the text to the buttons
autoButton.appendChild(autoText);

// Auto archive date button function that runs when clicked
autoButton.addEventListener('click', function(event) {
    let file = document.getElementsByClassName('spanFileName fileType pdf');
    let date = document.getElementsByClassName('archiveDate');
  
    // Loops through each file name to add the date
    for (var i = 0; i < date.length; i++) {
        date[i].value = extractAndFormatDate(file[i].innerText);
    }
  
    //Buttons on this page reload the page for some reason. This is here at the end just to stop the page from reloading before you can save.
    event.preventDefault();
});