function adjustFontSizes() {
    var currentViewWidth = window.innerWidth;
    var heroCarouselContainer = document.getElementById('hero-carousel-container');
    var heroCarouselTitles = document.getElementsByClassName('hero-carousel-title');
    var introCarouselTitles = document.getElementsByClassName('intro-carousel-title');
    var statsTitle = document.getElementById('statistics-title');
    var spIntroText = document.getElementById('sp-intro-text');
    
    // codes to execute when current view-width is below lg
    if (currentViewWidth < 992) {
        heroCarouselContainer.classList.remove('hero-carousel-background');
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.remove('mb-4');
            
        }
        statsTitle.classList.add('fs-3');
    }
    else {
        heroCarouselContainer.classList.add('hero-carousel-background');
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.add('mb-4');
            
        }
        statsTitle.classList.remove('fs-3');
    }
    
    // codes to execute when current view-width is below md
    if (currentViewWidth < 768) {
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.add('fs-2');
            
        }
        spIntroText.classList.add('fs-6');
        spIntroText.classList.remove('fs-5');

        for (let i = 0; i < introCarouselTitles.length; i++) {
            introCarouselTitles[i].classList.add('fs-4');
            
        }
    } else {
        for (let i = 0; i < heroCarouselTitles.length; i++) {
            heroCarouselTitles[i].classList.remove('fs-2');
            
        }
        spIntroText.classList.add('fs-5');
        spIntroText.classList.remove('fs-6');
        for (let i = 0; i < introCarouselTitles.length; i++) {
            introCarouselTitles[i].classList.remove('fs-4');
            
        }
    }

}

adjustFontSizes();

window.addEventListener('resize', adjustFontSizes);


// COUNTDOWN TIMER

// function to generate countdown timer
function startCountdown(endDate) {
    const countdownDays = document.getElementById('countdown-days');
    const countdownHours = document.getElementById('countdown-hours');
    const countdownMinutes = document.getElementById('countdown-minutes');
    const countdownSeconds = document.getElementById('countdown-seconds');

    function updateCountdown(endDate) {
    
        
    
    const now = new Date();
    const timeRemaining = endDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    countdownDays.innerHTML = `${days}`;
    countdownHours.innerHTML = `${hours}`;
    countdownMinutes.innerHTML = `${minutes}`;
    countdownSeconds.innerHTML = `${seconds}`;
    }
    updateCountdown(endDate);
    
    setInterval(() => {
        updateCountdown(endDate);
    }, 1000);
}

// Set the end date for the countdown to October 27, 2024, 00:00:00
const endDate = new Date('2024-10-27T00:00:00');
// runs the startCountdown function
startCountdown(endDate);

// SP TIMELINE CONTENT

function fillTimelineContent() {
    
    var timelineCardsContainer = document.getElementById('timeline-cards-container');
    var timelineModalsContainer = document.getElementById('timeline-modal-container');

    var card1 = [1954,
        ``,
        "Establishment of Singapore's first Polytechnic.",
        `<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal1">
          View details
        </button>`];

}

fillTimelineContent();