/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties

DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/
export const transform = (data) => {

    // Provide Solution Code Here
    const errorMsg = "Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!";

    if (data.length == 0 || data.length == 0 || typeof data.boards == undefined || typeof data.lists == undefined || typeof data.cards == undefined ||typeof data.comments == undefined)
        return errorMsg;

    if (data.boards.length == undefined || data.boards.length == 0)
        return errorMsg;

    if (data.lists.length == undefined || data.lists.length == 0)
        return errorMsg;

    if (data.cards.length == undefined || data.cards.length == 0)
        return errorMsg;

    if (data.comments.length == undefined || data.comments.length == 0)
        return errorMsg;

    var output = [];

    const inputBoards = data.boards.map((board) => {

        var filteredList = data.lists.filter((list) => list.boardId === board.boardId)
        .map((list) => {
            
            var filteredCards = data.cards.filter((card) => card.listId === list.listId)
            .map((card) => {

                // const cardComments = data.comments.filter((comment) => {comment.cardId === card.cardId}) 

                return {
                    "cardId":card.cardId,
                    "cardTitle":card.cardTitle,
                    "comments":1
                }
            })
            
            return {
                "listId":list.listId,
                "listTitle":list.listTitle,
                "cards":filteredCards
            }
        });  

        output.push({
            "boardId": board.boardId,
            "boardTitle": board.boardTitle,
            "lists":filteredList,
        });
                    
    });

    // console.log(output);
    
    return output;
};