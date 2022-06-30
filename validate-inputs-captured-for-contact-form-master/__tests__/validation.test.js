import submitContact from '../js/script';

describe("Submit Validation", function () {

    beforeEach(()=>{
        uiDOM();
        document.getElementsByTagName('form')[0].addEventListener('submit', submitContact);

    });

    afterEach(()=>{
        document.body.innerHTML = ``;
    });

    it("should be a function", function () {
        expect(typeof (submitContact)).toEqual("function");
    });

    it('should display error message for empty FirstName', () => {
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`FirstName cannot be left blank`);
    });

    it('should display error message for invalid FirstName', () => {
        document.getElementById('firstname').value = "123";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`FirstName can contain only alphabets and (.)`);
    });

    it('should display error message for empty Email', () => {
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Email cannot be left blank`);
    });

    it('should display error message for invalid Email', () => {
        document.getElementById('email').value = "123";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Invalid Email`);
    });

    it('should display error message for empty Home Contact Number', () => {
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Home No cannot be left blank`);
    });

    it('should display error message for invalid Home Contact Number', () => {
        document.getElementById('homeNo').value = "123";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Home Contact No should start with country code prefixed by + and followed by 10 digits`);
    });

    it('should display error message for invalid Work Contact Number', () => {
        document.getElementById('workNo').value = "123";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Work Contact No should start with country code prefixed by + and followed by 10 digits`);
    });

    it('should display error message for length of notes greater than 200', () => {
        document.getElementById('notes').value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toContain(`Notes should contain maximum of 200 characters`);
    });

    it('should not display any error message for valid inputs', () => {
        document.getElementById('firstname').value = "john travolta";
        document.getElementById('email').value = "john.t@gmail.com";
        document.getElementById('homeNo').value = "+1 233 445 7789";
        document.getElementById('notes').value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        document.getElementsByTagName('input')[8].click();
        const validationSummary = document.getElementById('validationSummary').getElementsByTagName('ul')[0].innerHTML;
        expect(validationSummary).toEqual(``);
    });

});

function uiDOM() {
    document.body.innerHTML = ` <form>
    <h3>Fill up Contact's Details here</h3>

    <div id="validationSummary" class="mt-4">
        <ul>

        </ul>
    </div>
    <div class="row">
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="firstname" id="firstname"
                placeholder="Enter Firstname">
            <small id="firstNameError"></small>
        </div>
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="lastname" id="lastname"
                placeholder="Enter Lastname">
            <small id="lastNameError"></small>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <input class="form-control form-control-sm" name="email" id="email"
                placeholder="Enter Email">
            <small id="emailError"></small>
        </div>
    </div>
    <div id="contactNos" class="row">
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="homeNo" id="homeNo"
                placeholder="Enter Contact No - Home">
            <small id="homeNoError"></small>
        </div>
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="workNo" id="workNo"
                placeholder="Enter Contact No - Work">
            <small id="workNoError"></small>
        </div>
    </div>
    <div>
        <button id="addContactNo" >+</button>
    </div>
    <div class="row">
        <div class="col-md-12">
            <label for="birthday">Enter Birthdate</label>
        </div>
        <div class="col-md-12">
            <input type="date" class="form-control form-control-sm" name="birthdate" id="birthdate"
                placeholder="Enter Birthdate">
            <small id="birthdateError"></small>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="company" id="company"
                placeholder="Enter Company">
            <small id="companyError"></small>
        </div>
        <div class="col-md-6">
            <input class="form-control form-control-sm" name="jobTitle" id="jobTitle"
                placeholder="Enter Job Title">
            <small id="jobTitleError"></small>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <textarea class="form-control form-control-sm" rows="4" name="notes" id="notes"
                placeholder="Enter Notes"></textarea>
            <small id="notesError"></small>
        </div>
    </div>
    <div>
        <input type="submit" value="Submit">
    </div>
</form>`
}