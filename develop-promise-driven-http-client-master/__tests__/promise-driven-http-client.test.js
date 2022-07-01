import http from '../js/script'; 
describe("HTTP Client", function () {

    it("should have get property to fetch data from server", function () {
        expect(new http().get).toBeTruthy();  
    });
 
    it("should have post property to send data to server", function () {
        expect(new http().post).toBeTruthy();  
    });
});