const checkEligibility = require("../src/check_eligibility");

describe("Check Voting Age Eligibility", function () {

    it("should be a function", function () {
        const _checkEligibility = checkEligibility;
        expect(typeof(_checkEligibility)).toEqual("function");
         
    });
    it("should return true for the valid age", function () {
        const isEligible = checkEligibility(25);
        expect(isEligible).toBe(true);
         
    });
    it("should return false for the invalid age", function () {
        const isEligible = checkEligibility(15);
        expect(isEligible).toBe(false);
         
    });
    it("should return error message for the invalid input types provided", function () {
        const isEligible = checkEligibility([10,15]);
        expect(isEligible).toEqual("Invalid Age Input, Age Should Only Be Number !!");
    });
});
