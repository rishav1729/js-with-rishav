/*
1.Get Names of All Users:
2.Filter Active Users:
3.Find a User by Name:
4.Get All Hobbies of Users:
5.Calculate Total Age:
6.Count the Total Number of Friends:
7.List All Friend Names for Each User:
8.Check if All Users Are Active:
9.Find the First User Who Likes Gaming:
10.Sort Users by Age:
*/


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
        hobbies: ["painting", "swimming","hiking"],
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

//1.Get Names of All Users:

function allUserNames(arr) {
    let newarr = [];
    arr.forEach((e) => {
        newarr.push(e.name);
    });
    return newarr;
}
// let names=usersDetails.map((e)=>{
//     return e.name
// })
// console.log(names)
// console.log(allUserNames(usersDetails));

// 2.Filter Active Users:

function activeUsers(arr){
    let newarr=arr.filter((element) => {
        if(element.isActive == true){
            return true
        } else {
            return false
        }
    })
    return newarr
}

console.log(activeUsers(usersDetails))

// console.log(JSON.stringify(activeUsers(usersDetails),null,2))


// 3.Find a User by Name:

function findUser(arr,user){
    let newArray = arr.filter(element => {
        if(element.name == user){
            return true
        }
    })
    return newArray
}

// console.log(findUser(usersDetails,"Ramu"))

// 4.Get All Hobbies of Users:

// function allHobbies(arr){
//     let newArray = arr.filter(element =>{
//         if
//     })
// }