var past=$(".past");
var present=$(".present");
var future = $(".future")
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
alltimes=[six, seven, eight, nine ,ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]
var container= $(".container-lg")
var rows = $(".row")
var time = dayjs().format('HA');
  $('#time').text(time);
// rows.each(function(){
//   var rowHour=$(this).attr('row time-block')
//   console.log(rows)
//   console.log(rowHour)
//   if (rowHour<time){
//     $(this).addClass("present")
//   }else if(rowHour===time){
//     $(this).addClass("pass")
//   }else{
//     $(this).addClass("present")}
// });

  var divarr=[]

  for (let i = 0; i < alltimes.length; i++) {
  var timeOPs = alltimes[i].text().trim();
  divarr.push(timeOPs)
  var presentTime = time==divarr[i]
  var pastTime = divarr[i]<presentTime
  var futureTime = divarr[i]>presentTime
  console.log(divarr[i])
  var sliceNum = (presentTime=(i-1))}
  if (presentTime){
    alltimes[sliceNum].addClass("present")
    pastT= divarr.slice(0,sliceNum)
    futureT= divarr.slice(sliceNum+1, 12)
    for (let i = 0; i < pastT.length; i++) {
      alltimes[i].addClass("past")
    }
    for (let i = 0; i < futureT.length; i++) {
      alltimes[i].addClass("future");
      
    }}
  

  //   alltimes[i].addClass("future")
  //  }else if(futureTime==false){
  //   alltimes[i].addClass("past")
  //  }}
  
  //  console.log((time > (divarr[i].text().trim())))
  //  console.log((time < (divarr[i].text().trim())))
  //  console.log(divarr[i].text().trim())
  console.log(futureT.length)
  console.log(pastT)
  console.log(futureT)
  console.log(presentTime)
console.log(pastTime)
console.log(futureTime)

console.log(divarr)
   console.log(time)
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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd[ - ] MMM DD, YYYY');
$('#currentDay').text(currentDay);
});
