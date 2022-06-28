const generateRandomNumber = require('../src/generate_random_numbers.js');

describe("Check Generate Random Numbers", function () {

    it("should be a function", function () {
        const _generateRandomNumber = generateRandomNumber;
        expect(typeof(_generateRandomNumber)).toEqual("function");
         
    });

    it("should return error message if the min value is greater than max value", function () {
        const _generateRandomNumber = generateRandomNumber(15,5);
        expect(_generateRandomNumber).toEqual("Incorrect Inputs. 1st value should be less than the second");   
    });

    it("should return error message if the min value is equal to max value", function () {
        const _generateRandomNumber = generateRandomNumber(15,15);
        expect(_generateRandomNumber).toEqual("Incorrect Inputs. 1st value should be less than the second");   
    });


    it("should return error message for the invalid input types provided", function () {
        const _generateRandomNumber = generateRandomNumber("one","ten");
        expect(_generateRandomNumber).toEqual("Invalid Input Types, All Inputs Should Be of Type Number !!");   
    });
});
