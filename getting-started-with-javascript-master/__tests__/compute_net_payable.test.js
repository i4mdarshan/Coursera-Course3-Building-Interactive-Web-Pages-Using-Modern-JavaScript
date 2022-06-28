const calculateNetPayable = require('../src/compute_net_pay.js');

describe("Compute Net Pay", function () {

    it("should be a function", function () {
        const _calculateNetPayable = calculateNetPayable;
        expect(typeof(_calculateNetPayable)).toEqual("function");
         
    });
    it("should return net pay for the inputs provided", function () {
        const netPay = calculateNetPayable(1000, 25, 7.5);
        expect(netPay).toEqual("23125");
    });
    it("should return error message for the invalid input types provided", function () {
        const netPay = calculateNetPayable("1000", "25", "7.5");
        expect(netPay).toEqual("Invalid Input Types, All Inputs Should Be of Type Number !!");
    });
});
