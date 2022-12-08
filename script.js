var past=$(".past");
var present=$(".present");
var future = $(".future")
// var saveBtn= $(".saveBtn")
var six= $("#hour-6");
var seven= $("#hour-7");
var eight= $("#hour-8");
var nine= $("#hour-9");
var ten= $("#hour-10");
var eleven= $("#hour-11");
var twelve= $("#hour-12");
var thirteen= $("#hour-13");
var fourteen= $("#hour-14");
var fifteen= $("#hour-15");
var sixteen= $("#hour-16");
var seventeen= $("#hour-17");
var alltimes = [
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
];

var alltimesNumber = [
  six.text().trim(),
  seven.text().trim(),
  eight.text().trim(),
  nine.text().trim(),
  ten.text().trim(),
  eleven.text().trim(),
  twelve.text().trim(),
  thirteen.text().trim(),
  fourteen.text().trim(),
  fifteen.text().trim(),
  sixteen.text().trim(),
  seventeen.text().trim(),
];

var container= $(".container-lg")

var time = dayjs().format('HA');
  $('#time').text(time);

  var numberTimeArray = [];

for (var i = 0; i < alltimesNumber.length; i++) {
  let element = alltimesNumber[i];
  if (element.length === 3) numberTimeArray.push(element[0]);
  if (element.length === 4) numberTimeArray.push(element[0] + element[1]);
}

// if (time.length === 3) time = time[0];
// if (time.length === 4) time = time[0] + time[1];

time = parseInt(time);

for (var index = 0; index < numberTimeArray.length; index++) {
  let number = parseInt(numberTimeArray[index]);
  if (time === number) alltimes[index].addClass('present');
  if (time < number) alltimes[index].addClass('future');
  if (time > number) alltimes[index].addClass('past');
}
function saveInput() {
  console.log($(this).siblings('.description').val());
}
$('.saveBtn').on('click', saveInput);
// function saveInput(event){
// event.preventDefault();
// localStorage.setItem($(event.target).attr('id'),
// $(event.target).siblings('textarea')
// }

//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// });
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd[ - ] MMM DD, YYYY');
$('#currentDay').text(currentDay);
});
