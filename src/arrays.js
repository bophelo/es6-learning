class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('Jeebz', false),
    new User('Mike', true),
    new User('Terry', true)
];

//find me the first user who is an Admin
console.log(users.find(user => user.isAdmin).name);

console.log(
    [2,4,6,8,10].includes(8) //checking if array contains a given value (es>2015)
);

//see if this array contains 8, we can pass a condition
console.log(
    [2, 4, 6, 8, 10].find(item => item > 8) 
);

//findIdex
console.log(
    [2, 4, 6, 8, 10].findIndex(item => item > 8)
);

//[].fill();
//[].keys();
//[]/values();
//[].entries();]
let items = ['jeff', 'jordan', 'jack'].entries();

for (let name of items)
    console.log(name);
