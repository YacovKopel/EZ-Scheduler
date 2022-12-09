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
// array of all the 'id's
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

// trimmed version of Ids to get time string
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

var time = dayjs().format('HA');

var numberTimeArray = [];
// For loop that appends just the digits of the time string in to a new array
for (var i = 0; i < alltimesNumber.length; i++) {
  let element = alltimesNumber[i];
  if (element.length === 3) numberTimeArray.push(element[0]);
  if (element.length === 4) numberTimeArray.push(element[0] + element[1]);
}

// turns time from string to number
time = parseInt(time);

// loops through array of digits and compares to current time to assign past, present, or future class
for (var index = 0; index < numberTimeArray.length; index++) {
  let number = parseInt(numberTimeArray[index]);
  if (time === number) alltimes[index].addClass('present');
  if (time < number) alltimes[index].addClass('future');
  if (time > number) alltimes[index].addClass('past');
}

// sets key and value pair for items in local storage
function saveInput() {
  var userInput = $(this).siblings('.description').val();
  var hourId = $(this).parent().attr('id');
  localStorage.setItem(hourId, userInput);
}
// A listener for click events on the save button that saves text into local storage
$('.saveBtn').on('click', saveInput);

// retrieves items from local storage to always be displayed on-screen at specific hour specified by id
function renderInput(){
  for (let i = 0; i < alltimes.length; i++) {
    var key = alltimes[i].attr('id');
    var value = localStorage.getItem(key);
    alltimes[i].children('.description').text(value)
    
  }
}

// displays the current date in the header of the page
$(function () {
  var currentDay = dayjs().format('dddd[ - ] MMM DD, YYYY');
$('#currentDay').text(currentDay);
setInterval(() => {
  var liveTime=dayjs().format('H:mm A');
  $('#time').text(liveTime);
}, 1000);
});

 renderInput()