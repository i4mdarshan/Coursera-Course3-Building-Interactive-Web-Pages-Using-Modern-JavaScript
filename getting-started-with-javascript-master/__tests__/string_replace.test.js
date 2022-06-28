const replaceString = require('../src/string_replace');

describe("String Replace", function () {

    it("should be a function", function () {
        const _replaceString = replaceString;
        expect(typeof(_replaceString)).toEqual("function");
         
    });

    it("should return replaced string when match is found", function () {
        const _replaceString = replaceString("Good Morning","Morning","Evening");
        expect(_replaceString).toBe("Good Evening");     
    });

    it("should return replaced original string when match is not found", function () {
        const _replaceString = replaceString("Good Morning","Evening","Day");
        expect(_replaceString).toBe("Good Morning");   
    });
    
    it("should return error message for the invalid input types provided", function () {
        const _replaceString = replaceString(1234,[4,6],{8: 9});
        expect(_replaceString).toEqual("Invalid Input Types, All Inputs Should Be of Type String !!");   
    });
});
