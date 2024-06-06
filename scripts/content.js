    // Creates the buttoms
   let autoButton = document.createElement("Button");

    // Creates teh buttons text
   let autoText = document.createTextNode("Auto Name and Date");

   // Adds the buttons to the menu
   document.querySelector('.buttons').append(autoButton);


   // Adds the text to the buttons
   autoButton.appendChild(autoText);


   // Auto Agenda Date and Name Button on click
   autoButton.addEventListener('click', function(event) {
       let file = document.getElementsByClassName('spanFileName fileType pdf');
       let elements = document.getElementsByClassName('description');
       let date = document.getElementsByClassName('agendaDate');
       let descriptionPrompt = prompt("Enter your descriton", "DEPARTMENT NAME HERE Regular Meeting Agenda (PDF)");

       for (var i = 0; i < date.length; i++) {
            date[i].value = file[i].innerText.replace(".pdf", "").slice(0, 2) + '/' + file[i].innerText.slice(3, 5) + '/' + file[i].innerText.slice(6, 11).replace(".pdf", "");
            elements[i].innerText = descriptionPrompt;
       }

       //Buttons on this page reload the page for some reason. This is here at the end just to stop the page from reloading before you can save.
       event.preventDefault();
   });