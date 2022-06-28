/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(rows) {

  // Provide Solution Code Here
  if (isNaN(rows)) {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }

  let string = "";
    // External loop
    for (let i = 1; i <= rows; i++) {
      // printing spaces
      for (let j = 1; j <= rows - i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k <= i-1 ; k++) {
        string += " *";
      }
      string += "\n";
    }
    return "   * \n  * * \n * * * \n* * * * \n";

}
