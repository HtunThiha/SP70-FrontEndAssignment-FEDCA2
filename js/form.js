// activated function when submit button is clicked
function displaySecondPage(event) {
    event.preventDefault();
    // refreshes error messages
    let errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerHTML = '';
    }

    // user inputs for all fields
    var fullName = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var selectSchool = document.getElementById('input-select').value;
    var studentTrue = document.getElementById('input-student-yes').checked;
    var studentFalse = document.getElementById('input-student-no').checked;
    var studentID = document.getElementById('input-student-id').value;
    var iChatEmail = document.getElementById('input-ichat-email').value;
    var wish = document.getElementById('input-wish-text').value;
    var mailRequire = document.getElementById('emailCheck').checked;

    // regex patterns for ichat and student id
    var iChatPattern = /^[\w.]+@ichat\.sp\.edu\.sg$/i;
    var studentIDPattern = /^[pP]2[234]\d{5}$/;

    // set errorCount to 0
    // each error in later code will add this by 1.
    var errorCount = 0;

    // error messages for different conditions
    // required = when the user doesn't fill the required field
    // ichaterror = when the ichat email input doesn't match the regex pattern
    // student id error = when the student id input doesn't match the regex pattern
    var requiredErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> This field is required.`;
    var iChatErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> Invalid iChat email.`;
    var studnetIDErrorMessage = `<i class="bi bi-exclamation-circle-fill"></i> Invalid Student ID.`

    // These inputs are required no matter the condition
    var baselineRequiredInputs = [fullName, email, wish];
    // These inputs are required only when user choose yes to Are you a student of SP.
    var studentRequiredInputs = [studentID, iChatEmail];

    // Prompts error messages under the fields that are not filled.
    for (let i = 0; i < baselineRequiredInputs.length; i++) {
        if (baselineRequiredInputs[i] == "") {
            document.getElementById(`error-message${i+1}`).innerHTML = requiredErrorMessage;
            errorCount++;
        }
        
    }

    // Prompts error message when Are you a student of SP is neither selected yes or no
    if (studentTrue == false && studentFalse == false) {
        document.getElementById('error-message-check').innerHTML = requiredErrorMessage;
        errorCount++;
    }

    // Conditions if student is selected yes
    if (studentTrue == true) {
        // prompts required error message when student id field is not filled
        if (studentID == "") {
            document.getElementById('error-message-check1').innerHTML = requiredErrorMessage;
            errorCount++;
        }
        // prompts if student id doesn't match the student id regex pattern
        else if (studentIDPattern.test(studentID) == false) {
            document.getElementById('error-message-check1').innerHTML = studnetIDErrorMessage;
            errorCount++
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

    if (studentTrue == true) {
        var studentStatus = "Yes";
    }
    else {
        var studentStatus = "No";
    }

    if (studentStatus == "No") {
        studentID = "Not applicable";
        iChatEmail = "Not applicable";
    }


    if (selectSchool == "Select a school") {
        selectSchool = "Not selected";
    }

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
    // after 2 seconds delay, shows the second page
    setTimeout(function() {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('before-submit').style.display = "none";
        document.getElementById('after-submit').style.display = "block";
        document.getElementById('after-submit').innerHTML = `<div class="px-5">
        <h2 class="text-start my-3">Form Submitted</h2>
        <h6 class="mb-4 lh-base">🎉&nbsp;Thank you for submitting your heartfelt wishes for Singapore Polytechnic's 70th anniversary! Your thoughtful message contributes to the celebration of our journey and achievements over the decades. Your support means a lot to us, and we look forward to continuing our mission of education excellence with your encouragement.🥰🌟</h6>
        <p><i class="bi bi-person-circle"></i>&ensp;Full name:&ensp; ${fullName}</p>
        <p><i class="bi bi-envelope-at-fill"></i>&ensp;Email:&ensp; ${email}</p>
        <p><i class="bi bi-star-fill"></i>&ensp;Favourite school:&ensp; ${selectSchool}</p>
        <p><i class="bi bi-person-check-fill"></i>&ensp;Student of SP:&ensp; ${studentStatus}</p>
        <p><i class="bi bi-person-badge"></i>&ensp;Student ID:&ensp; ${studentID}</p>
        <p><i class="bi bi-envelope-at-fill"></i>&ensp;iChatEmail:&ensp; ${iChatEmail}</p>
        <p><i class="bi bi-app-indicator"></i>&ensp;Form Response via email:&ensp; ${mailRequire}</p>

        <button type="button" class="btn btn-primary ms-2 mt-2" onclick="returnForm(event);"><i class="bi bi-arrow-left"></i>&ensp;Another Response</button>
        </div>`;

    }, 2000);
}

}

// If student of SP is selected yes, display ichat and student id fields
// If selected no again, those fields will disappear
function showStudentForm(status) {
    if ( status == 'yes') {
        document.getElementById('extra-field').style.display = "block"; 
    } else if ( status == 'no'){
        document.getElementById('extra-field').style.display = "none";
    }
}

function returnForm() {
    document.getElementById('submit-button').innerHTML = "Submit";
    document.getElementById('after-submit').style.display = "none";
    document.getElementById('before-submit').style.display = "block";
    document.getElementById('input-wish-text').value = "";
}

function refreshInputs(event) {
    event.preventDefault();
    document.getElementById('before-submit').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('extra-field').style.display = "none";
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
