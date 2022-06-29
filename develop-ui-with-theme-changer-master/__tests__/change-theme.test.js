// const path = require('path');
// const { readFileSync } = require('fs');
// const { JSDOM } = require('jsdom');

import changeTheme from '../js/script';

describe("Change Theme", function () {

    it("should be a function", function () {
        expect(typeof (changeTheme)).toEqual("function");
    });

    it("should change document theme to bright theme", () => {
        document.body.innerHTML = `
        <input type="radio" name="theme" id="bright">`;
        const radio = document.getElementById('bright');
        radio.addEventListener('change',(event)=>{
            changeTheme(event);
        });
        radio.click();
        expect(document.body.style.backgroundColor).toBe("lightyellow");
        expect(document.body.style.color).toBe("darkgreen");
    });

});