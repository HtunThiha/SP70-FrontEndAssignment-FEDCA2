// adjust the sizes of various elements in achievement-plans.html
function adjustSizes() {
    // gets current view-width in px
    var currentViewWidth = window.innerWidth;
    // gets an array of all elements that want to adjust font sizes of fs-5 and fs-6
    var fs6_small_fs5_mediumText = document.getElementsByClassName('fs-sm-6-fs-md-5');

    // get the youtube video object
    var heroVideo = document.getElementById('so-possible-video');
    // sets the youtube video heigth to 60% of its width
    var heroVideoHeight = Math.floor(heroVideo.offsetWidth * (60 / 100));

    // gets the height of the center icon
    var centerIconHeight = document.getElementById('center-icon').offsetHeight;
    // get the middle div placeholder between hexagons
    var centerPlaceholder = document.getElementById('center-placeholder');

    // sets the youtube video height
    heroVideo.style.height = `${heroVideoHeight}px`;
    // sets the blank div placeholder in the middle to make the hexagonal structure
    centerPlaceholder.style.height = `${centerIconHeight}px`;

    // when current view-width is smaller than md
    if (currentViewWidth < 768) {
        // adds fs-6 class and removes fs-5 classes from elements that have the class fs-sm-6-fs-md-5
        for (let i = 0; i < fs6_small_fs5_mediumText.length; i++) {
            fs6_small_fs5_mediumText[i].classList.add('fs-6');
            fs6_small_fs5_mediumText[i].classList.remove('fs-5');

        }
    }
    else {
        // adds fs-5 class and removes fs-6 classes from elements that have the class fs-sm-6-fs-md-5
        for (let i = 0; i < fs6_small_fs5_mediumText.length; i++) {
            fs6_small_fs5_mediumText[i].classList.remove('fs-6');
            fs6_small_fs5_mediumText[i].classList.add('fs-5');

        }
    }
}
// runs adjust sizes once first
adjustSizes();

// eventListender for real-time adjustment changes
window.addEventListener('resize', adjustSizes);