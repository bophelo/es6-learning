//Sets are colelctions of values where each one must be unique
//none unique items are ignored
let items = new Set(['one','two','three']);

console.log(items);
console.log(items.size);
console.log(items.add('four'));
console.log(items.delete('two'));
console.log(items);
console.log(items.has('four'));
items.forEach(item => {
    console.log('->' + item);
});
for (let item of items) {
    console.log(item);
}
console.log(items.clear());

//scenario: a form where a user can type in a comma separated list of tags
let tags = ['php','javascript','vue','javascript'];

let set = new Set(tags);

console.log(set);

//filter down the set to tags that are only three letters
//turn set into an aray using the spread operator
let sett = [...set].filter(tag => tag.length === 3);

console.log(sett);

let settt = new Set(sett);

console.log(settt);

//e.g a form where users can mention others
//@john, did you see this. Check with @jane.
//Thank you @jane.
//Dynamically want to find any mentioned users but the same person can be mentioned multiple times

var mentionedUsers = ['john','jane','jane'];
console.log(new Set(mentionedUsers));