const phone_number_validation = require('../src/phone_number_validation');

describe("Phone Number Validation", function () {

    it("should be a function", function () {
        const _phoneNumberValidation = phone_number_validation;
        expect(typeof(_phoneNumberValidation)).toEqual("function");
         
    });
    it("should return true for valid phone number", function () {
        const isPhoneNumberValid = phone_number_validation("+1(254)-911-3578");
        expect(isPhoneNumberValid).toBe(true);
         
    });
    it("should return false for invalid phone number", function () {
        const isPhoneNumberValid = phone_number_validation("Password");
        expect(isPhoneNumberValid).not.toBe(true);
    });
});
