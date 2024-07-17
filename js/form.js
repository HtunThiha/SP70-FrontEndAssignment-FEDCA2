function displaySecondPage(event) {
    event.preventDefault();

    var fullName = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var selectSchool = document.getElementById('input-select').value;
    var studentTrue = document.getElementById('input-student-yes').checked;
    var studentFalse = document.getElementById('input-student-no').checked;
    var studentID = document.getElementById('input-student-id').value;
    var iChatEmail = document.getElementById('input-ichat-email').value;
    var mailRequire = document.getElementById('emailCheck').checked;

    var errorCount = 0;
    var errorMessage = "* This field is required.";

    if (fullName == "") {
        document.getElementById('error-message1').innerHTML = errorMessage;
        errorCount++;
    }
    if (email == "") {
        document.getElementById('error-message2').innerHTML = errorMessage;
        errorCount++;
    }


    if (studentTrue == false && studentFalse == false) {
        document.getElementById('error-message-check').innerHTML = errorMessage;
        errorCount++;
    }

    if (studentTrue == true) {
        if (studentID == "") {
            document.getElementById('error-message3').innerHTML = errorMessage;
            errorCount++;
        }
        if (iChatEmail == "") {
            document.getElementById('error-message4').innerHTML = errorMessage;
            errorCount++;
        }
    }

    if (studentTrue == true) {
        var studentStatus = true;
    }
    else {
        var studentStatus = false;
    }

    if (errorCount == 0) {
        
    
        document.getElementById('loading-animation').style.display = "block";
    setTimeout(function() {
        document.getElementById('form-container').style.display = "none";
        document.getElementById('display-name').innerHTML = `<div class="container-fluid col-md-8 col-lg-6 col-xl-4 my-5">
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Favourite School: ${selectSchool}</p>
        <p>Student of SP: ${studentStatus}</p>
        <p>Student ID: ${studentID}</p>
        <p>iChatEmail: ${iChatEmail}</p>

    </div>`;

    }, 2000);
}

}


function showStudentForm(status) {
    if ( status == 'yes') {
        document.getElementById('extra-field').style.display = "block"; 
    } else if ( status == 'no'){
        document.getElementById('extra-field').style.display = "none";
    }
}