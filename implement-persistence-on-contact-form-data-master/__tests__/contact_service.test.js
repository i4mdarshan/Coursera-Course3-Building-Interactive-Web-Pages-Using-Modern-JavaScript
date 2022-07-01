import { persistSubmittedContact } from '../js/contact_service';
import { showPersistedData } from '../js/contact_service';

describe("Contact Form", function () {
    let open, send, setRequestHeader, onload, onerror;
    it("should have persistSubmittedContact function", function () {
        expect(typeof (persistSubmittedContact)).toEqual("function");
    });

    it("should have showSubmittedContact function", function () {
        expect(typeof (showPersistedData)).toEqual("function");
    });

    it("should make post request to save contacts data", () => {
        createXHRmock();
        let contact = {
            firstName: "mary",
            lastName: "mathews",
            email: "mary.mathews@gmail.com",
            homeNo: "+1 908 780 3424",
            contactAddedOn: new Date()
        }
        persistSubmittedContact(contact);
        expect(open).toBeCalledWith('POST', 'http://localhost:3000/contacts', true);
        expect(setRequestHeader).toBeCalledWith("Content-Type", "application/json;charset=UTF-8");
        expect(send).toBeCalledWith(JSON.stringify(contact));
    });

    it("should make get request to contacts and fetch data", () => {
        createXHRmock();
        showPersistedData();
        expect(open).toBeCalledWith('GET', 'http://localhost:3000/contacts', true);
        expect(send).toBeCalled();
    });

    function createXHRmock() {
        open = jest.fn();

        send = jest.fn().mockImplementation(function (contact) {
            onload = this.onload.bind(this);
            onerror = this.onerror.bind(this);
        });

        setRequestHeader = jest.fn();
        
        const xhrMockClass = function () {
            return {
                open,
                send,
                setRequestHeader
            };
        };

        window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
    }
});