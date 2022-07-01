// Provide persistence solution code here
const persistSubmittedContact = (contact) => {

    let xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:3000/contacts",true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");

    let body = {
        firstName:contact.firstName,
        lastName:contact.lastName,
        email:contact.email,
        homeNo:contact.homeNo,
        contactAddedOn: new Date()
    }

    // console.log(body);

    
    xhr.onload = () => {
        let response = JSON.parse(xhr.response);
        console.log("data added",response);
    }

    xhr.onerror = () => {
        console.log("error POST");
    } 

    xhr.send(JSON.stringify(contact));
}

// Code to show the persisted data
const showPersistedData = () => {
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET","http://localhost:3000/contacts",true);
    // xhr.setRequestHeader("Content-Type","application/json");

    xhr.onload = () =>{
        let response = JSON.parse(xhr.response);
        console.log("data received",response);
    }

    xhr.onerror = () => {
        console.log("error GET");
    } 
    xhr.send();
    

}

module.exports = { persistSubmittedContact, showPersistedData }
