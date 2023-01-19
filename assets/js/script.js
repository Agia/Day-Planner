// Get the current day / date and render it to the target element
let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);

// let $currentDate = $("#currentDay")
// setInterval( function () {
//     currentDay.text(moment().format("dddd, MMM Do YYYY"));
// }, 60000)