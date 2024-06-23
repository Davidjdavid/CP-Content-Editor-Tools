import { extractAndFormatDate } from 'scripts/dateFinder.js';

// Creates the buttons
let autoButton = document.createElement("Button");

// Creates the buttons text
let autoText = document.createTextNode("Auto Name and Date Agendas");

// Adds the buttons to the menu
document.querySelector('.buttons').append(autoButton);

// Adds the text to the buttons
autoButton.appendChild(autoText);

// Auto agenda date and name button function that runs when clicked
autoButton.addEventListener('click', function(event) {
    let file = document.getElementsByClassName('spanFileName fileType pdf');
    let elements = document.getElementsByClassName('description');
    let date = document.getElementsByClassName('agendaDate');
    let descriptionPrompt = prompt("Enter your descriton", "DEPARTMENT NAME HERE Regular Meeting Agenda (PDF)");

    // Loops through each file name to add the date and description
    for (var i = 0; i < date.length; i++) {
      date[i].value = extractAndFormatDate(file[i].innerText);
      elements[i].innerText = descriptionPrompt;
    }

    //Buttons on this page reload the page for some reason. This is here at the end just to stop the page from reloading before you can save.
    event.preventDefault();
});