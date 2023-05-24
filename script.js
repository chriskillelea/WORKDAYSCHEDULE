
$(document).ready(function () {

    var displayTime = document.querySelector("#currentDay");

    var currentTime = dayjs().format("MMMM D, YY - h:mm A");

    displayTime.textContent = currentTime;
 
});
