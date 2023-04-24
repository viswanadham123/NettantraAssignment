let formValidation = document.getElementById("formValidation");



const formValidations = (event) => {
    event.preventDefault();
    const studentFirstName = document.getElementById('studentFirstName').value;
    const studentLastName = document.getElementById('studentLastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const emailId = document.getElementById('emailId').value;
    const fatherFistname = document.getElementById('fatherFistname').value;
    const fatherLastname = document.getElementById('fatherLastname').value;
    const motherFistname = document.getElementById('motherFistname').value;
    const motherLastname = document.getElementById('motherLastname').value;
    const gender = document.querySelector('input[name="Gender"]:checked');
    const nationality = document.getElementById('nationality').value;
    const streetName = document.getElementById('streetName').value;
    const cityName = document.getElementById('cityName').value;
    const countryName = document.getElementById('countryName').value;
    const telePhoneNumber = document.getElementById('telePhoneNumber').value;
    const mobileNumber = document.getElementById('mobileNumber').value;

    // Validate the input fields
    if (studentFirstName.trim() === '') {
        alert('Please enter your first name');
        return false;
    }
    if (studentLastName.trim() === '') {
        alert('Please enter your last name');
        return false;
    }
    if (dateOfBirth.trim() === '') {
        alert('Please enter your date of birth');
        return false;
    }
    if (emailId.trim() === '' || emailId.includes("@") === false) {
        alert('Please enter your email address');
        return false;
    }
    if (fatherFistname.trim() === '') {
        alert('Please enter your father\'s first name');
        return false;
    }
    if (fatherLastname.trim() === '') {
        alert('Please enter your father\'s last name');
        return false;
    }
    if (motherFistname.trim() === '') {
        alert('Please enter your mother\'s first name');
        return false;
    }
    if (motherLastname.trim() === '') {
        alert('Please enter your mother\'s last name');
        return false;
    }
    if (gender === null) {
        alert('Please select your gender');
        return false;
    }
    if (nationality.trim() === '') {
        alert('Please enter your nationality');
        return false;
    }
    if (streetName.trim() === '') {
        alert('Please enter your street name');
        return false;
    }
    if (cityName.trim() === '') {
        alert('Please enter your city name');
        return false;
    }
    if (countryName.trim() === '') {
        alert('Please enter your country name');
        return false;
    }
    if (mobileNumber.trim() === '' || mobileNumber.length !== 10 || isNaN(parseInt(mobileNumber))) {
        alert('Please enter your 10 digits mobile number');
        return false;
    }


    const userData = {
        studentFirstName:studentFirstName,
        studentLastName:studentLastName,
        dateOfBirth:dateOfBirth,
        emailId:emailId,
        fatherFistname:fatherFistname,
        fatherLastname:fatherLastname,
        motherFistname:motherFistname,
        motherLastname:motherLastname,
        gender: gender.value,
        nationality:nationality,
        streetName:streetName,
        cityName:cityName,
        countryName:countryName,
        telePhoneNumber:telePhoneNumber,
        mobileNumber:mobileNumber,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href="../Pages/SecondPage.html"

};


formValidation.addEventListener("submit", formValidations);