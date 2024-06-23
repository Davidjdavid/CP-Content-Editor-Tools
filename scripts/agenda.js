// Creates the buttons
let autoButton = document.createElement("Button");

// Creates the buttons text
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

    // Loops through each file name to add the date and description
    for (var i = 0; i < date.length; i++) {
      date[i].value = extractAndFormatDate(file[i].innerText);
      elements[i].innerText = descriptionPrompt;
    }

    //Buttons on this page reload the page for some reason. This is here at the end just to stop the page from reloading before you can save.
    event.preventDefault();
  });

// List of months, each line is each month in different ways we have seen is spelled
const months = {
    'Jan': '01', 'January': '01', 'Jan.': '01',
    'Feb': '02', 'February': '02', 'Feb.': '02',
    'Mar': '03', 'March': '03', 'Mar.': '03',
    'Apr': '04', 'April': '04', 'Apr.': '04',
    'May': '05', 'May.': '05',
    'June': '06', 'Jun.': '06',
    'July': '07', 'Jul.': '07',
    'Aug': '08', 'August': '08', 'Aug.': '08',
    'Sep': '09', 'September': '09', 'Sep.': '09',
    'Oct': '10', 'October': '10', 'Oct.': '10',
    'Nov': '11', 'November': '11', 'Nov.': '11',
    'Dec': '12', 'December': '12', 'Dec.': '12',
  };
  
  // Function to grab all the dates
  function extractAndFormatDate(str) {

    // Variable that holds the regex patterns. Lets keep the regex patterns seperate for major date patterns so its easy to debug
    const datePatterns = [
        /(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{2,4})/, // dd-mm-yyyy, dd/mm/yyyy, or dd.mm.yyyy
        /(\d{1,2})\s+(\w+)\s+(\d{2,4})/, // dd Month yyyy
        /(\w+)\s+(\d{1,2})[,]?\s+(\d{2,4})/, // Month dd, yyyy or Month dd yyyy
        /(\w+)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{2,4})/, // Month ddth, yyyy
        /(\w+\.?)\s+(\d{1,2})(?:st|nd|rd|th),?\s+(\d{2,4})/, // Month. ddth, yyyy followed by additional text
  ];
  
  // Loop to go through each of the regex patterns for a match in the file names
    for (let pattern of datePatterns) {
        let match = str.match(pattern);
        let formatetedMonth;
        if(match) {

          // Grabs the date and formats it
            const [_, month, day, year] = match;

            // Checks to see if the date is written out or numerical
            if(isNaN(month)) {
                formatetedMonth = months[month];
            } else {
                formatetedMonth = month;
            }
            const formattedYear = (year + '').length === 2 ? `20${year}` : year; // Adds a "20" to the year if its not there
            return `${formatetedMonth}-${day.padStart(2, '0')}-${formattedYear}`;
        }
    }
    return str.match(datePatterns);
  }