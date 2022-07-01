## Practice

### Develop Promise Driven HTTP Client

#### Context

One of the ways of making web applications interactive, is by making calls to access data to external apis.

This operation has to be performed asynchronously to allow non-blocking execution

The XMLHttpRequest object helps to make asynchronous calls and provides responses.

However to retrieve response event handlers are required that invoke on events being raised as the response is generated

For multiple nested calls the code becomes too complex

Better approach would be to create a promise object that makes XHR requests and returns promise with response.

The resulting response can be consumed by calling then( ) and catch( ) methods

#### Problem Statement

Develop Promise driven HTTP client that uses XMLHttpRequest object to make HTTP calls and returns promise to resolve or reject for the request made to provided url

#### Instructions

1. Download and unzip the boilerplate code.  
2. Run the command `npm install` to install the dependencies required for automated testing.  
3. Open the boilerplate code in VSCode to develop the assignment solution.
4. Provide the solution code within the file `script.js`.
5. Launch the `index.html` page on the browser to view the rendered output.
6. `contacts.json` should be created and put under a separate folder outside the application folder
7. Command to run json-server is `json-server -w contacts.json`
8. Test the solution locally by running the command `npm run test`.  
9. Refactor the solution to ensure all test cases are passing.  
10. DO NOT MODIFY THE PROVIDED CODE, ELSE THIS MAY IMPACT THE TEST CODE EXECUTION.
11. Zip the solution code by selecting all the files and folders **excluding the node_modules folder** and give the name same as assignment name to the zipped file.
12. Upload the zipped solution for submission.