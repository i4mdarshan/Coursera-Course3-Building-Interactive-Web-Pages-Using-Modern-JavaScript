import { persistSubmittedContact } from '../js/contact_service';
import { showPersistedData } from '../js/contact_service';
import { getDetails } from '../js/contact_service';

import axios from 'axios';

describe("Contact Form", function () {

    beforeEach(() => {
        uiDOM();
    });
    it("should have persistSubmittedContact function", function () {
        expect(typeof (persistSubmittedContact)).toEqual("function");
    });

    it("should have showSubmittedContact function", function () {
        expect(typeof (showPersistedData)).toEqual("function");
    });

    it('should get details by contact id', () => {
        const response = {
            "data": {
                "id": 10440,
                "firstName": "robert",
                "lastName": "warne",
                "homeNo": "+1 432 202 3434",
                "email": "robert.warne@gmail.com",
            }
        }
        jest.spyOn(axios, 'get').mockImplementation(() => {
            return Promise.resolve(response);
        });

        getDetails(101);

        expect(axios.get).toHaveBeenCalled();
    });

    it('should get details of all contacts', (done) => {
        const response = {
            "data": [{
                "id": 10440,
                "firstName": "robert",
                "lastName": "warne",
                "homeNo": "+1 432 202 3434",
                "email": "robert.warne@gmail.com",
            }]
        };
        jest.spyOn(axios, 'get').mockImplementation((url) => {
            return Promise.resolve(response);
        });

        showPersistedData(() => {
            expect(
                document.getElementById("contact-list").getElementsByTagName('table')[0]
                .getElementsByTagName('tbody')[0].innerHTML).toContain("robert");
            });
            expect(axios.get).toHaveBeenCalled();
            done();
    });

    it('should post details of given contacts', (done) => {
        const response = {
            "data": [{
                "id": 10440,
                "firstName": "robert",
                "lastName": "warne",
                "homeNo": "+1 432 202 3434",
                "email": "robert.warne@gmail.com",
            }]
        };
        jest.spyOn(axios, 'post').mockImplementation((url) => {
            return Promise.resolve(response);
        });

        persistSubmittedContact(() => {
            expect(
                document.getElementById("contact-list").getElementsByTagName('table')[0]
                .getElementsByTagName('tbody')[0].innerHTML).toContain("robert");
            });
            expect(axios.post).toHaveBeenCalled();
            done();
    });
});


function uiDOM() {
    document.body.innerHTML = `<section class="container">
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Add New Contact</h3>
            <form onsubmit="submitContact(event)">
                <!-- <form onsubmit="persistSubmittedContact(event)"> -->
                <h3>Fill up Contact's Details here</h3>

                <div id="validationSummary" class="mt-4">
                    <ul>

                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="firstname" id="firstname"
                            placeholder="Enter Firstname">
                        <small id="firstNameError"></small>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="lastname" id="lastname"
                            placeholder="Enter Lastname">
                        <small id="lastNameError"></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <input class="form-control form-control-sm" name="email" id="email"
                            placeholder="Enter Email">
                        <small id="emailError"></small>
                    </div>
                </div>
                <div id="contactNos" class="row">
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="homeNo" id="homeNo"
                            placeholder="Enter Contact No - Home">
                        <small id="homeNoError"></small>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="workNo" id="workNo"
                            placeholder="Enter Contact No - Work">
                        <small id="workNoError"></small>
                    </div>
                </div>
                <div>
                    <button id="addContactNo">+</button>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label for="birthday">Enter Birthdate</label>
                    </div>
                    <div class="col-md-12">
                        <input type="date" class="form-control form-control-sm" name="birthdate" id="birthdate"
                            placeholder="Enter Birthdate">
                        <small id="birthdateError"></small>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="company" id="company"
                            placeholder="Enter Company">
                        <small id="companyError"></small>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" name="jobTitle" id="jobTitle"
                            placeholder="Enter Job Title">
                        <small id="jobTitleError"></small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <textarea class="form-control form-control-sm" rows="4" name="notes" id="notes"
                            placeholder="Enter Notes"></textarea>
                        <small id="notesError"></small>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit">
                </div>
            </form>
        </div>
        <div class="col-12 col-md-6">
            <div id="contact-list">
                <h3>My Contacts</h3>
                <table class="table table-striped table-hover table-success mt-5 p-5">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">ContactNo</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Contact Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="contact-data"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

</section>`
}