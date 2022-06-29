import { transform } from '../scripts/transformer';

describe("Transformer", function () {

    it("should be a function", function () {
        expect(typeof (transform)).toEqual("function");
    });

    it('should return error message for invalid input type', function () {
        const _transform = transform([]);
        expect(_transform).toEqual("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
    });

    it('should return error message for invalid boards type', function () {
        const _transform = transform({ "boards": {} });
        expect(_transform).toEqual("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
    });

    it('should return error message for invalid lists type', function () {
        const _transform = transform({ "boards": [], "lists": {} });
        expect(_transform).toEqual("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
    });

    it('should return error message for invalid cards type', function () {
        const _transform = transform({ "boards": [], "lists": [], "cards": {} });
        expect(_transform).toEqual("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
    });

    it('should return error message for invalid comments type', function () {
        const _transform = transform({ "boards": [], "lists": [], "cards": [], "comments": {} });
        expect(_transform).toEqual("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
    });

    it('should return expected output for the given input', () => {
        const input = {
            "boards": [{
                "boardId": 11,
                "boardTitle": "Product Rating Analysis"
            }],
            "lists": [{
                "listId": 9,
                "listTitle": "Product 1",
                "boardId": 11
            },
            {
                "listId": 99,
                "listTitle": "Product 2",
                "boardId": 11
            },
            {
                "listId": 8,
                "listTitle": "Product 3",
                "boardId": 10
            }
            ],
            "cards": [
                {
                    "cardId": 12,
                    "cardTitle": "Rating in Q1",
                    "listId": 99
                },
                {
                    "cardId": 14,
                    "cardTitle": "Rating in Q2",
                    "listId": 9
                },
                {
                    "cardId": 16,
                    "cardTitle": "Rating in Q3",
                    "listId": 8
                }
            ],
            "comments": [
                {
                    "commentId": 1001,
                    "commentText": "Met the budget",
                    "cardId": 12
                },
                {
                    "commentId": 1002,
                    "commentText": "Failed to meet the expectation.",
                    "cardId": 14
                },
                {
                    "commentId": 1003,
                    "commentText": "Always in Demand",
                    "cardId": 16
                },
            ]
        }

        const expectedOutput = {
            "boardId": 11,
            "boardTitle": "Product Rating Analysis",
            "lists": [{
                "listId": 9,
                "listTitle": "Product 1",
                "cards": [{
                    "cardId": 14,
                    "cardTitle": "Rating in Q2",
                    "comments": 1
                }]
            },
            {
                "listId": 99,
                "listTitle": "Product 2",
                "cards": [{
                    "cardId": 12,
                    "cardTitle": "Rating in Q1",
                    "comments": 1
                }],
            }]
        };
        
        const _transform = transform(input);

        expect(_transform[0]).toEqual(expectedOutput);
    })
});