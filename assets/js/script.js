// Variable to store current day / date for hero element
let currentDate = moment().format("dddd, MMMM Do YYYY");
// Application of above to relevant HTML element
$("#currentDay").text(currentDate);

// Variable to keep track of current hour
let currentHour = moment().hour();

// Global variable for use across functions / listeners
let input;
let time;
// Stores the user input element
// let eventInput = $(".event-input");


// * EVENT LISTENERS * //

// Listen for click on .button-save elements
$(".button-save").on("click", function () {
    // Set variables, relative to the particular button that was clicked. input to the value of it's .event-input sibling and time to the data-time attribute of same sibling
    input = $(this).siblings(".event-input").val();
    time = $(this).siblings(".event-input").attr("data-time");

    // Call function to store time / input variables in localStorage
    storeInput();
})

// Event listener to delete all saved events on click of delete button element
$(".button-del").on("click", function () {
    removeEvents();
})


// * FUNCTIONS * //

// For each input field, call the following function
$(".event-input").each(function () {

    // Assign to the value of it's own data-time attribute
    let timeIndex = $(this).attr("data-time");
    // Assign to the value of timeIndex key from localStorage
    let event = localStorage.getItem(timeIndex);

    // If value is localStorage is not empty, assign it to this input's value.
    if (event !== null) {
        $(this).val(event);
    }

    // Checks if currentHour against timeIndex value and assign/remove .past, .present and .future classes accordingly
    if (currentHour == timeIndex) {
        $(this).removeClass("past future");
        $(this).addClass("present");
    } else if (currentHour > timeIndex) {
        $(this).removeClass("present future");
        $(this).addClass("past");
    } else {
        $(this).removeClass("past present");
        $(this).addClass("future");
    }
})

// * Might prove unnecessary. Can remove and put code in appropriate eventListener
// Helper function to save input and time data to localStorage
function storeInput () {
    localStorage.setItem(time, input);
}

// Clears localStorage and each input element
function removeEvents () {
    localStorage.clear();

    $(".event-input").map(function () {
        $(this).val("");
    })
}
