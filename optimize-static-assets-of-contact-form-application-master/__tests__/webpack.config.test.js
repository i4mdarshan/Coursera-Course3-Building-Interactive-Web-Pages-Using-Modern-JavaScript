const webpack = require("../webpack.config");

describe("Webpack Config", function () {

    it("should have entry option in webpack config", function () {
        expect(webpack.entry).toBeTruthy();
    });

    it("should have output option in webpack config", function () {
        expect(webpack.output).toBeTruthy();
    });

    it("should have module opion in webpack config", function () {
        expect(webpack.module).toBeTruthy();
    });

    it("should have plugins option in webpack config", function () {
        expect(webpack.plugins).toBeTruthy();
    });

    it("should have 1 or more plugins option in webpack config", function () {
        expect(webpack.plugins.length).toBeGreaterThanOrEqual(1);
    });

    it("should have module option with rules in webpack config", function () {
        expect(webpack.module.rules).toBeTruthy();
    });

    it("should have module option with 1 or more rules in webpack config", function () {
        expect(webpack.module.rules.length).toBeGreaterThanOrEqual(1);
    });
});