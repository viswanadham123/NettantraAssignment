const MAX_PHOTO_SIZE = 4 * 1024 * 1024; // 4MB
const MAX_MARKSHEET_SIZE = 4 * 1024 * 1024; // 4MB
const MAX_SEMESTERS_SIZE = 10 * 1024 * 1024; //  4MB

const form = document.getElementById('form');
const photoInput = document.getElementById('photo');
const hscInput = document.getElementById('hsc');
const sscInput = document.getElementById('ssc');
const semestersInput = document.getElementById('semesters');
const successMassage=document.getElementById("success-message");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (photoInput.files[0] === "" && photoInput.files[0].size > MAX_PHOTO_SIZE) {
        alert('The photo must be less than 4MB.');
        return false;
    }

    if (hscInput.files[0] && hscInput.files[0].size > MAX_MARKSHEET_SIZE) {
        alert('The HSC mark sheet must be less than 4MB.');
        return false;
    }

    if (sscInput.files[0] && sscInput.files[0].size > MAX_MARKSHEET_SIZE) {
        alert('The SSC mark sheet must be less than 4MB.');
        return false;
    }

    if (semestersInput.files[0] && semestersInput.files[0].size > MAX_SEMESTERS_SIZE) {
        alert('The please upload');
        return false;
    }
    successMassage.textContent="Registration Successful!";
});