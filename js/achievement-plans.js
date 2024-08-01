function adjustSizes() {
    
var currentViewWidth = window.innerWidth;
var futureReadyText = document.getElementById('future-ready-text');

var heroVideo = document.getElementById('so-possible-video');

var heroVideoHeight = Math.floor(heroVideo.offsetWidth * (60/100));

var centerIconHeight = document.getElementById('center-icon').offsetHeight;
var centerPlaceholder = document.getElementById('center-placeholder');

heroVideo.style.height = `${heroVideoHeight}px`;
centerPlaceholder.style.height = `${centerIconHeight}px`;

if (currentViewWidth < 768) {
    futureReadyText.classList.add('fs-6');
    futureReadyText.classList.remove('fs-5');
}
else {    
    futureReadyText.classList.remove('fs-6');
    futureReadyText.classList.add('fs-5');
}
}
adjustSizes();

window.addEventListener('resize', adjustSizes);