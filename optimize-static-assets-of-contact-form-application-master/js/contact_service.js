// const axios  = require("axios");

let url = "http://localhost:3000/contacts"
// put the solution code to persist and fetch data here
 
/*
    persistSumittedContact() should contain code to persist given contact to server
    use axios to call the post method and persist data
    ensure the return from axios handles both success and error
    the posted data should be displayed on the browser as well.
*/
const persistSubmittedContact = (contact) => {
    
    // let response = axios.post(url,contact);
    return response;
}

/*
    getDetails() should contain code to fetch details of contact for the given contact-id from server
    use axios to call the get method and fetch data
    ensure the return from axios handles both success and error
    the fetched data should be displayed on the browser in a modal dialog.
*/
const getDetails = (id)=>{
   
    // let response = axios.get(url + '/' + id);

    return response;
}

/*
    showPersistedData() should contain code to fetch details of all existing contacts from server
    use axios to call the get method and fetch data
    ensure the return from axios handles both success and error
    the fetched data should be displayed on the browser
*/
const showPersistedData = () => {

}
// showPersistedData(); //uncomment this code to display the existing contacts on browser


module.exports = { persistSubmittedContact, showPersistedData, getDetails }

