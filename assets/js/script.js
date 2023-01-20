// Get the current day / date and render it to the target element
let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);


// * EVENT LISTENERS * //
$(".button-save").on("click", function () {
    let input = $(this).siblings(".event-input").val();
    let time = $(this).siblings(".event-input").attr("data-time");
    // console.log(input + " " + time);
    localStorage.setItem(time, input); // Check best order for variables
})


