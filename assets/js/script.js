// Get the current day / date and render it to the target element
let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

let currentHour = moment().hour();
let input;
let time;
let events = [];
let savedEvents = [];

// * EVENT LISTENERS * //
$(".button-save").on("click", function () {
    input = $(this).siblings(".event-input").val();
    time = $(this).siblings(".event-input").attr("data-time");
    // localStorage.setItem(time, input);
    storeInput();
})




$(".event-input").each(function () {

    let timeIndex = $(this).attr("data-time");
    let event = localStorage.getItem(timeIndex);

    if (event !== null) {
        $(this).val(event);
    }

})


function storeInput () {
    localStorage.setItem(time, input);
}

