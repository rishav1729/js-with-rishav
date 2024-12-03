let usersDetails = [
    {
        id: 1,
        name: "John Doe",
        age: 28,
        isActive: true,
        hobbies: ["reading", "gaming", "coding"],
        friends: [
            { id: 2, name: "Jane Smith", age: 25 },
            { id: 3, name: "Mike Brown", age: 30 },
        ],
        scores: { math: 75, science: 82, english: 90 },
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        isActive: false,
        hobbies: ["painting", "swimming", "hiking"],
        friends: [
            { id: 1, name: "John Doe", age: 28 },
            { id: 3, name: "Mike Brown", age: 30 },
        ],
        scores: { math: 85, science: 78, english: 88 },
    },
    {
        id: 3,
        name: "Mike",
        age: 30,
        isActive: true,
        hobbies: ["hiking", "cooking"],
        friends: [
            { id: 1, name: "John Doe", age: 28 },
            { id: 2, name: "Jane Smith", age: 25 },
        ],
        scores: { math: 90, science: 92, english: 85 },
    },
];

module.exports = usersDetails;

// to include in index.js
const usersDetails = require("./exportFiles/q");
