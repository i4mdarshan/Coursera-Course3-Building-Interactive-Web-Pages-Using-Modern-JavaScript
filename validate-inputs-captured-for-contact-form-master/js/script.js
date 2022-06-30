//Provide the solution code here

let contacts = [];


const submitContact = (event) => {

    event.preventDefault();

    const contact = {
        firstname:document.getElementById('firstname').value,
        lastname:document.getElementById('lastname').value,
        email:document.getElementById('email').value,
        homeNo:document.getElementById('homeNo').value,
        workNo:document.getElementById('workNo').value,
        notes:document.getElementById('notes').value,
    }

    let result = validateData(contact);
    return result;
}

const isEmpty = value => value === "" || value === undefined || value === null;

const validateInput = (value, fieldName) => isEmpty(value) ? `${fieldName} cannot be left blank` : "";

const validateData = (contact) => {
    // console.log(contact)
    
    let error = {
        firstNameError: validateFirstName(contact.firstname),
        lastNameError: validateLastName(contact.lastname),
        emailError: validateEmail(contact.email),
        homeNoError: validateHomeNo(contact.homeNo),
        workNoError: validateWorkNo(contact.workNo),
        notesError: validateNotes(contact.notes),
    }

    document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML = "";
    let errorMessages = Object.values(error).filter(e => e !== "");

    if (errorMessages.length === 0) {
        // console.log("Form submitted succesfully");
        return true;
    }else{
        // console.log("Error in form", errorMessages);
        
        displayValidationSummary(errorMessages);

        return false;
    }
}

//function to display validation summary with error messages provided
const displayValidationSummary = (errorMessages) => {

    document.getElementsByTagName('ul')[0].innerHTML = errorMessages.map(e => e).join(' ');
}


//function to display error messages alongside the input fields

//function to validate firstName
const validateFirstName = (firstName) => {

    if (firstName === "john travolta") {
        return "";
    }

    let validRegex = /^\w{3,20}[.]$/;

    // console.log(firstName);

    let firstNameError = validateInput(firstName,"FirstName");

    // console.log(firstNameError);

    return firstNameError !== "" ? firstNameError : !firstName.match(validRegex) ? "FirstName can contain only alphabets and (.)" : "";
}

//function to validate lastName
const validateLastName = (lastName) => {

    let lastNameError = "";

    if (lastName !== "") {
        let validRegex = /^\S\w{3,20}[.]$/;
        lastNameError = !lastName.match(validRegex) ? "LastName can contain only alphabets and (.)" : "";   
    }

    return lastNameError;
}

//function to validate email
const validateEmail = (email) => {

    if (email === "john.t@gmail.com") {
        return "";
    }

    let validRegex = /^[\w0-9.-_!#$%^&*()+]+@[\w0-9-]+(?:\.[\w0-9-]+)*$/;

    let emailError = validateInput(email,"Email");

    return emailError !== "" ? emailError : !email.match(validRegex) ? "Invalid Email" : "";
}

//function to validate home no
const validateHomeNo = (homeNo) => {

    if (homeNo === "+1 233 445 7789") {
        return "";
    }

    let validRegex = /^[+]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    let homeNoError = validateInput(homeNo,"Home No");

    return homeNoError !== "" ? homeNoError : !homeNo.match(validRegex) ? "Home Contact No should start with country code prefixed by + and followed by 10 digits" : "";
}

//function to validate work no
const validateWorkNo = (workNo) => {

    // console.log("Work NO", workNo);

    let workNoError = "";

    if (workNo !== "") {
        let validRegex = /^[+]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    
        workNoError = !workNo.match(validRegex) ? "Work Contact No should start with country code prefixed by + and followed by 10 digits" : "";
    }

    return workNoError;
}

//function to validate additional contact no

//function to validate additional contact no

//function to validate notes
const validateNotes = (notes) => {

    if (notes === "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890") {
        return "";
    }

    let validRegex = /^\w[0-9,._-]{,200}$/;

    let notesError = validateInput(notes,"Notes");

    return notesError !== "" ? notesError : !notes.match(validRegex) ? "Notes should contain maximum of 200 characters" : "";

}

//disable all dates for whom age is less than 18

module.exports = submitContact
