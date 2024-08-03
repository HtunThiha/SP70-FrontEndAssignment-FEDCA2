// lists to store wishes and names
var wishesList = [];
var fullNamesList = [];

// activated function when submit button is clicked
function displayFormSubmitted(event) {
    event.preventDefault();
    // refreshes error messages
    var errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerHTML = '';
    }

    // user inputs for all fields
    var fullName = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var selectSchool = document.getElementById('input-select').value;
    var studentTrue = document.getElementById('input-student-yes').checked;
    var studentFalse = document.getElementById('input-student-no').checked;
    var studentId = document.getElementById('input-student-id').value;
    var iChatEmail = document.getElementById('input-ichat-email').value;
    var wish = document.getElementById('input-wish-text').value;
    var mailRequire = document.getElementById('emailCheck').checked;

    // gets the wishes placeholder div
    var wishesPlaceholder = document.getElementById('wishes-placeholder');
    // gets the wishes container div, which is the main wishes div
    var wishesContainer = document.getElementById('wishes-container');
    // gets the modal button element
    var modalButton = document.getElementById('modal-button');
    // gets the modal place in modal body
    var modalPlace = document.getElementById('wishes-modal-body');

    //random titles for wishes
    var randomTitlesArr = [
        "Joyful Wishes for SP's 70th",
        "SP's 70th: Heartfelt Greetings",
        "Warmest Wishes for SP's 70th",
        "SP Turns 70: Best Wishes",
        "Wishing SP a Grand 70th",
        "SP's 70th Anniversary Joy",
        "SP's 70th: Congratulations and Cheers"
    ];

    // regex patterns for ichat and student id
    var iChatPattern = /^[\w.]+@ichat\.sp\.edu\.sg$/i;
    var studentIdPattern1 = /^[pP]2[234]\d{5}$/;
    var studentIdPattern2 = /^2[234]\d{5}$/;

    // set errorCount to 0
    // each error in later code will add this by 1.
    var errorCount = 0;

    // error messages for different conditions
    // required: when the user doesn't fill the required field
    // ichaterror: when the ichat email input doesn't match the regex pattern
    // student id error: when the student id input doesn't match the regex pattern
    var requiredErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> This field is required.`;
    var iChatErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> Invalid iChat email.`;
    var studnetIDErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> Invalid Student ID.`;

    // These inputs are required no matter the condition
    var baselineRequiredInputs = [fullName, email, wish];
    // These inputs are required only when user choose yes to Are you a student of SP.
    var studentRequiredInputs = [studentId, iChatEmail];

    // Prompts error messages under the fields that are not filled.
    for (let i = 0; i < baselineRequiredInputs.length; i++) {
        if (baselineRequiredInputs[i] == "") {
            document.getElementById(`error-message${i + 1}`).innerHTML = requiredErrorMessage;
            errorCount++;
        }
    }

    // Prompts error message when Are you a student of SP is not selected
    if (studentTrue == false && studentFalse == false) {
        document.getElementById('error-message-check').innerHTML = requiredErrorMessage;
        errorCount++;
    }

    // Conditions if student is selected yes
    if (studentTrue == true) {
        // prompts required error message when student id field is not filled
        if (studentId == "") {
            document.getElementById('error-message-check1').innerHTML = requiredErrorMessage;
            errorCount++;
        }
        // prompts if student id doesn't match the student id regex pattern
        else if (studentIdPattern1.test(studentId) == false && studentIdPattern2.test(studentId) == false) {
            document.getElementById('error-message-check1').innerHTML = studnetIDErrorMessage;
            errorCount++;
        }
        // prompts required error message when ichat email field is not filled
        if (iChatEmail == "") {
            document.getElementById('error-message-check2').innerHTML = requiredErrorMessage;
            errorCount++;
        }
        // prompts if ichat email doesn't match the student id regex pattern
        else if (iChatPattern.test(iChatEmail) == false) {
            document.getElementById('error-message-check2').innerHTML = iChatErrorMessage;
            errorCount++;
        }
    }

    // for student status in second page
    if (studentTrue == true) {
        var studentStatus = "Yes";
    }
    else {
        var studentStatus = "No";
    }

    // for id and ichat in second page if student yes or no is selected no
    if (studentStatus == "No") {
        studentId = "Not applicable";
        iChatEmail = "Not applicable";
    }

    // text if school select was not selected
    if (selectSchool == "Select a school") {
        selectSchool = "Not selected";
    }

    // mail require or not
    switch (mailRequire) {
        case true:
            mailRequire = "Yes";
            break;
        case false:
            mailRequire = "No";
            break;
    }

    // If there are no errors in any of the fields, proceeds to display the second page
    if (errorCount == 0) {

        // shows loading animation besides submit buttom
        document.getElementById('submit-button').innerHTML = `Submit&ensp;<span class="spinner-border 
        spinner-border-sm" role="status"></span>`;

        // adds wishs and full names to respective lists
        fullNamesList.push(fullName);
        wishesList.push(wish);

        // after 2 seconds delay
        setTimeout(function () {
            // scroll to top instantly
            window.scrollTo({ top: 0, behavior: 'instant' });

            // sets first page to disappear and second page to appear
            document.getElementById('before-submit').style.display = "none";
            document.getElementById('after-submit').style.display = "block";

            // hides the hero image
            document.getElementById('hero-image-container').style.display = "none";

            // adds content to the after-submit div
            document.getElementById('after-submit').innerHTML = `<div class="px-5">
        <h2 class="text-start mt-2 mb-3">Form Submitted</h2>
        <h6 class="mb-4 lh-base">🎉&nbsp;Thank you for submitting your heartfelt wishes for Singapore Polytechnic's 70th anniversary! Your thoughtful message contributes to the celebration of our journey and achievements over the decades. Your support means a lot to us, and we look forward to continuing our mission of education excellence with your encouragement.🥰🌟</h6>
        <p><i class="bi bi-person-circle"></i>&ensp;Full name:&ensp; ${fullName}</p>
        <p><i class="bi bi-envelope-at-fill"></i>&ensp;Email:&ensp; ${email}</p>
        <p><i class="bi bi-star-fill"></i>&ensp;Favourite school:&ensp; ${selectSchool}</p>
        <p><i class="bi bi-person-check-fill"></i>&ensp;Student of SP:&ensp; ${studentStatus}</p>
        <p><i class="bi bi-person-badge"></i>&ensp;Student ID:&ensp; ${studentId}</p>
        <p><i class="bi bi-envelope-at-fill"></i>&ensp;iChatEmail:&ensp; ${iChatEmail}</p>
        <p class="mb-5"><i class="bi bi-app-indicator"></i>&ensp;Form Response via email:&ensp; ${mailRequire}</p>
        <h5><i class="bi bi-box2-heart"></i>&ensp;Your wish:</h5>
        <div class="border border-dark p-4 rounded" style="background: white;">${wish}</div>
        <button type="button" class="btn btn-primary ms-2 mt-2" onclick="returnForm(event);"><i class="bi bi-arrow-left"></i>&ensp;Another Response</button>
        </div>`;

            // clicks the hidden toast button to pop up notification
            document.getElementById('form-toast-trigger').click();

            // displays the wishes section once there are wishes in wishes array
            if (wishesList.length > 0) {
                wishesContainer.classList.add('d-block');
                wishesContainer.classList.remove('d-none');
            }

            // clears previous contents in these divs before adding new content
            wishesPlaceholder.innerHTML = "";
            modalPlace.innerHTML = "";

            // iterates for the number of elements in array
            for (let i = 0; i < wishesList.length; i++) {

                // sets a new random title
                var randomTitle = randomTitlesArr[Math.floor(Math.random() * 8)];
                
                // don't add anything to main display after 12 wish cards
                if (i > 12) {    
                }
                else {
                    // adds every card in the array to wishes placeholder
                    wishesPlaceholder.innerHTML += `<!-- Wish Card ${i + 1} -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card wish-card">
                            <div class="card-header">From: ${fullNamesList[i]}</div>
                            <div class="card-body">
                                <h5 class="card-title sp-color-text roboto-slab">${randomTitle} ✨</h5>
                                <p class="card-text">${wishesList[i]}</p>
                            </div>
                        </div>
                    </div>`;
                }

                // adds every wish to the wishes modal
                modalPlace.innerHTML += `<!-- Wish Card ${i + 1} -->
                <div class="col-12 mb-3">
                    <div class="card">
                        <div class="card-header">From: ${fullNamesList[i]}</div>
                        <div class="card-body">
                            <h5 class="card-title sp-color-text roboto-slab">${randomTitle} ✨</h5>
                            <p class="card-text">${wishesList[i]}</p>
                        </div>
                    </div>
                </div>`;
            }

        }, 2000);
    }
}

// if student of sp is selected yes, display ichat and student id fields
// if selected no again, those fields will disappear
function showStudentForm(status) {
    if (status == 'yes') {
        document.getElementById('extra-field').style.display = "block";
    } else if (status == 'no') {
        document.getElementById('extra-field').style.display = "none";
    }
}

// activated function when return button in second page is clicked
function returnForm() {
    // removes spinning animation from submit button
    document.getElementById('submit-button').innerHTML = "Submit";
    // sets second page to disappear and first page to appear
    document.getElementById('after-submit').style.display = "none";
    document.getElementById('before-submit').style.display = "block";
    document.getElementById('hero-image-container').style.display = "block";
    // deletes text in wish input from previous response
    document.getElementById('input-wish-text').value = "";
    // scroll back to place 100px higher than the top of the first submit form's top position
    window.scrollTo({ top: document.getElementById('before-submit').offsetTop - 100, behavior: 'smooth' });
}

// activated function when refresh button is clicked
function refreshInputs(event) {
    event.preventDefault();
    // scroll back to place 100px higher than the top of the first submit form's top position
    window.scrollTo({ top: document.getElementById('before-submit').offsetTop - 100, behavior: 'smooth' });
    // Hide student ID and iChat container
    document.getElementById('extra-field').style.display = "none";
    // set values of all input fields to blank or unchecked
    document.getElementById('input-name').value = "";
    document.getElementById('input-email').value = "";
    document.getElementById('input-select').value = "Select a school";
    document.getElementById('input-student-yes').checked = false;
    document.getElementById('input-student-no').checked = false;
    document.getElementById('input-student-id').value = "";
    document.getElementById('input-ichat-email').value = "";
    document.getElementById('input-wish-text').value = "";
    document.getElementById('emailCheck').checked = false;
}

// get the toast button and toast content objects
const formtoastTrigger = document.getElementById('form-toast-trigger');
const formtoastLive = document.getElementById('form-live-toast');

// if toast button is clicked,
if (formtoastTrigger) {
    // creates a new instance of a bootstrap toast using the formtoastLive element
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(formtoastLive);
    // event listener to clicking to the button
    formtoastTrigger.addEventListener('click', () => {
        // show the toast notification
        toastBootstrap.show();
    })
}