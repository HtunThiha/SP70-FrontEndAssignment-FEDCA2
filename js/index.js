// for adjusting font sizes of various elements
function adjustFontSizes() {
    // gets the current view-width
    var currentViewWidth = window.innerWidth;
    // gets the hero carousel container element
    var heroCarouselContainer = document.getElementById('hero-carousel-container');
    // get the carousel titles elements
    var heroCarouselTitles = document.getElementsByClassName('hero-carousel-title');
    var introCarouselTitles = document.getElementsByClassName('intro-carousel-title');
    // stats title
    var statsTitle = document.getElementById('statistics-title');
    // texts that are meant to have fs-6 in small view-widths and 5 in medium and above ones
    var fs6_small_fs5_mediumText = document.getElementsByClassName('fs-sm-6-fs-md-5');

    // codes to execute when current view-width is below lg
    if (currentViewWidth < 992) {
        // removes background in small view-widths
        heroCarouselContainer.classList.remove('hero-carousel-background');

        // no bottom margin in small view-widths
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.remove('mb-4');

        }
        // fs-3 added
        statsTitle.classList.add('fs-3');
    }
    else {
        // adds background in large view-widths
        heroCarouselContainer.classList.add('hero-carousel-background');

        // bottom margin set in large view-widths
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.add('mb-4');

        }
        // removes fs-3 size
        statsTitle.classList.remove('fs-3');
    }

    // codes to execute when current view-width is below md
    if (currentViewWidth < 768) {
        // adds fs-2 for hero carousel titles
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.add('fs-2');

        }
        // smaller font size for text with fs-sm-6 fs-md-5 id
        for (let i = 0; i < fs6_small_fs5_mediumText.length; i++) {
            fs6_small_fs5_mediumText[i].classList.add('fs-6');
            fs6_small_fs5_mediumText[i].classList.remove('fs-5');

        }
        // intro carousel titles fs-6 added
        for (let i = 0; i < introCarouselTitles.length; i++) {
            introCarouselTitles[i].classList.add('fs-4');

        }
    } else {
        // removes fs-2 class from hero carousel titles
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.remove('fs-2');

        }
        // larger font size for text with fs-sm-6-fs-md-5 id
        for (let i = 0; i < fs6_small_fs5_mediumText.length; i++) {
            fs6_small_fs5_mediumText[i].classList.add('fs-5');
            fs6_small_fs5_mediumText[i].classList.remove('fs-6');

        }
        // intro carousel title fs-4 remove
        for (let i = 0; i < introCarouselTitles.length; i++) {
            introCarouselTitles[i].classList.remove('fs-4');

        }
    }
}

// runs the adjustment once first
adjustFontSizes();

// real time adjustment to font-sizes in every view-width resize
window.addEventListener('resize', adjustFontSizes);


// COUNTDOWN TIMER

// function to generate countdown timer
function startCountdown(endDate) {
    // get the elements where respective time digits will be filled
    const countdownDays = document.getElementById('countdown-days');
    const countdownHours = document.getElementById('countdown-hours');
    const countdownMinutes = document.getElementById('countdown-minutes');
    const countdownSeconds = document.getElementById('countdown-seconds');

    function updateCountdown(endDate) {

        // gets current time
        const now = new Date();
        // time left from now to end date
        const timeRemaining = endDate - now;

        // calculates days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // if digits are less than 10, add 0 in tens' digit place
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        // fills the content boxes with time digits
        countdownDays.innerHTML = `${days}`;
        countdownHours.innerHTML = `${hours}`;
        countdownMinutes.innerHTML = `${minutes}`;
        countdownSeconds.innerHTML = `${seconds}`;
    }
    // runs the update function once
    updateCountdown(endDate);

    // updates the timer every second
    setInterval(() => {
        updateCountdown(endDate);
    }, 1000);
}

// Set the end date for the countdown to October 27, 2024, 00:00:00
const endDate = new Date('2024-10-27T00:00:00');
// runs the startCountdown function with endDate of Oct 27, 2024, 00:00:00
startCountdown(endDate);

// SP TIMELINE CONTENT

// for filling timeline branches structures
function fillTimelineBranch() {
    // columns for filling left or right timeline branches
    var leftBranches = document.getElementsByClassName('left-branch-timeline');
    var rightBranches = document.getElementsByClassName('right-branch-timeline');

    // fills every left branches blanks with left branch structure
    for (let i = 0; i < leftBranches.length; i++) {
        leftBranches[i].innerHTML = `<div class="row" style="height: 100%;">
						<div class="col-6" style="border-style: solid; border-color: red; border-left: 0px; border-top: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-right: 0px; border-top: 0px; border-bottom: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-left: 0px; border-bottom: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-top: 0px; border-right: 0px; border-bottom: 0px;">&nbsp;</div>
					    </div>`;
    }

    // fills every right branches blnaks with right branch structure
    for (let i = 0; i < rightBranches.length; i++) {
        rightBranches[i].innerHTML = `<div class="row" style="height: 100%;">
						<div class="col-6" style="border-style: solid; border-color: red; border-left: 0px; border-top: 0px; border-bottom: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-right: 0px; border-top: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-left: 0px; border-bottom: 0px; border-top: 0px;">&nbsp;</div>
						<div class="col-6" style="border-style: solid; border-color: red; border-right: 0px; border-bottom: 0px;">&nbsp;</div>
					    </div>`;

    }
}

// runs the function and fills the columns with branches
fillTimelineBranch();