/* 
    define object that takes url as parameter and 
    returns Promise with the response for the get and post requests made
    the object should have 2 properties 
    - get
    - post

    the properties should return Promise that should resolve 
    for success or reject with error

*/
// import axios from 'axios';
// class http{

//     constructor (url) {
//         this.url = url;
//     }
    
//     post(record){
//         return new Promise((resolve,reject) => {
//             let xhr = new XMLHttpRequest();
//             xhr.open("POST",this.url);
//             xhr.setRequestHeader('Content-Type', 'application/json');
//             xhr.onload = function() { 
//                 if (xhr.status == 200) { 
//                     return resolve(xhr.response); 
//                 } else { 
//                     return reject(Error(xhr.statusText)); 
//                 } 
//             }; 
//             xhr.onerror = function() { 
//                 return reject(Error("Network Error")); 
//             }; 

//             // console.log(record);
//             // let data = Object.entries(record);
//             let formData = new FormData(record);

//             // console.log();

//             xhr.send(formData);
//         });

//     }

//     get(){
//         return new Promise((resolve,reject) => {
//             let xhr = new XMLHttpRequest();

//             xhr.open("GET",this.url);
//             xhr.onload = function() { 
//                 if (xhr.status == 200) { 
//                     return resolve(xhr.response); 
//                 } else { 
//                     return reject(Error(xhr.statusText)); 
//                 } 
//             }; 
//             xhr.onerror = function() { 
//                 return reject(Error("Network Error")); 
//             }; 
//             xhr.send();
//         })

//     }

// }

export default function http(url){

    let axios = require('axios');
    this.get=() => axios.get(url) 
    this.post = (body) => axios.post(url,body) 
}

// create object of the Promise driven HTTP client and ensure following code works

const httpClient = new http('http://localhost:3000/contacts');

// console.log(httpClient.get());


let contact = {
    // add properties as per the data structure of the data fetched and retrieved
    "firstName": "darshan",
    "lastName": "mahajan",
    "email": "darshan@gmail.com",
    "homeNo": "+1 890 765 3210",
    "workNo": "",
    "birthDate": "2001-16-9",
    "company": "",
    "jobTitle": "",
    "notes": "nth contact",
    "contactAddedOn": new Date()
}

httpClient
.post(contact)
.then(response=>{
    alert('record added')
    // console.log(response);
})
.catch(err=>{
    // console.log(err);
});

httpClient
.get()
.then((response)=>{
    let data = '<ul>'
    let records = JSON.parse(response);
    records.forEach(r => {
        data+= `<li>${r.firstName}.${r.lastName}</li>`
    })
    data+='</ul>'
    document.body.innerHTML += data;
    // console.log(response);
})
.catch(err=>{
    document.write(response);
    // console.log(err)
});

