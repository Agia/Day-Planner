// Get the current day / date and render it to the target element
// Variable to store current day / date for hero element
let currentDate = moment().format("dddd, MMMM Do YYYY");
// Application of above to relevant HTML element
$("#currentDay").text(currentDate);
// Variable to keep track of current hour

// TODO: Change currentHour to string
let currentHour = moment().hour();
// Global variable for use across functions / listeners
let input;
let time;

// * EVENT LISTENERS * //
$(".button-save").on("click", function () {
    input = $(this).siblings(".event-input").val();
    time = $(this).siblings(".event-input").attr("data-time");
    storeInput();
})

// TODO: Add a remove function - if time


$(".event-input").each(function () {

    let timeIndex = $(this).attr("data-time");
    let event = localStorage.getItem(timeIndex);

    if (event !== null) {
        $(this).val(event);
    }

    // TODO: Add other removeClass

    if (currentHour == timeIndex) {
        $(this).addClass("present");
        $(this).removeClass("past future");
    } else if (currentHour > timeIndex) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
})

// function hourComparison () {
//     if (currentHour === $(this).attr("data-time"))
//         $(this).addClass("present");
// }


function storeInput () {
    localStorage.setItem(time, input);
}

