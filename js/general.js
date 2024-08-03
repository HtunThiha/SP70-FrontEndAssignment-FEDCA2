// CLOCK IN NAVIGATION BAR

// converts weekday number to day string
function getWeekday(dayNum) {
    var wDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return wDays[dayNum];
}

// run runClock once
runClock();

// get current date and display
function runClock() {
    // get current date
    var thisDay = new Date();

    // get date, weekday number and time from current date
    var thisDate = thisDay.toLocaleDateString('en-GB');
    var thisWeekday = getWeekday(thisDay.getDay());
    var thisTime = thisDay.toLocaleTimeString();

    // add date and day in div with id 'date-wday'
    document.getElementById('current-date-wday').textContent = `${thisDate}  ${thisWeekday}`;
    // add date and day in div with id 'time'
    document.getElementById('current-time').textContent = thisTime;

}

// run runClock every 1 second
setInterval(runClock, 1000);

// STICKY NAVIGATION BAR

// select navbar
var navbar = document.getElementById("navbar");

// get navbar's top position
var navbarPosition = navbar.offsetTop;

// if reached navbar's top position, add sticky class from general.css
// else, remove sticky class from general.css
function setSticky() {
    if (window.scrollY >= navbarPosition) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
}
// run the function in every pixel scroll
window.addEventListener('scroll', setSticky);