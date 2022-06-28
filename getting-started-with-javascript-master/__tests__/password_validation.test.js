const checkPassword = require('../src/password_validation.js');

describe("Password Validation", function () {

    it("should be a function", function () {
        const _passwordValidation = checkPassword;
        expect(typeof(_passwordValidation)).toEqual("function");
         
    });
    it("should return true for valid password", function () {
        const isPasswordValid = checkPassword("P@$$w0rd");
        expect(isPasswordValid).toBe(true);
         
    });

    it("should return false for password that does not contain upper-case alphabet", function () {
        const isPasswordValid = checkPassword("p@$$word");
        expect(isPasswordValid).not.toBe(true);
         
    });

    it("should return false for password that does not contain lower-case alphabet", function () {
        const isPasswordValid = checkPassword("P@$$WORD");
        expect(isPasswordValid).not.toBe(true);
         
    });

    it("should return false for password that does not contain digit", function () {
        const isPasswordValid = checkPassword("P@$$word");
        expect(isPasswordValid).not.toBe(true);
         
    });

    it("should return false for password that does not contain symbolic character", function () {
        const isPasswordValid = checkPassword("Passw0rd");
        expect(isPasswordValid).not.toBe(true);
         
    });

    it("should return false for password with less than 6 characters", function () {
        const isPasswordValid = checkPassword("Pass");
        expect(isPasswordValid).not.toBe(true);
         
    });

    it("should return false for password with more than 20 characters", function () {
        const isPasswordValid = checkPassword("Passwords@1234567890.");
        expect(isPasswordValid).not.toBe(true);
         
    });
});
