//Provide the solution code here

const submitContact = (event) => {

    event.preventDefault();

    console.log("submit clickec");

    const contact = {
        firstName:document.getElementById('firstName').value,
        lastName:document.getElementById('lastName').value,
        email:document.getElementById('email').value,
        homeNo:document.getElementById('homeNo').value,
        contactAddedOn: new Date()
    }

        let xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost:3000/contacts");
        xhr.setRequestHeader("Content-Type","application/json");

        let body = {
            firstName:contact.firstName,
            lastName:contact.lastName,
            email:contact.email,
            homeNo:contact.homeNo,
            contactAddedOn: new Date()
        }

        // console.log(body);

        xhr.send(JSON.stringify(body));

        xhr.onload = () => {
            let response = JSON.parse(xhr.response);
            return response;
        }

}

