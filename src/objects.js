//Object shorthand
//Method shorthand
//Object destructuring

function getPerson() {
    let name = 'John';
    let age = '25';

    //es5
    //return {
    //    name: name,
    //    age: age
    //};
    //In situations where the property name is the same as the value variable
    //can also be applied to vue
    return {
        name,
        age,
        //greet: function () {//es5
        //return 'Hello, ' + this.name; es5
        greet() {
            return `Hello, ${this.name}`;//template strings
        }
    };
}

//console.log(getPerson().greet());

let person = {
    name: 'Mike',
    age: 21
};

let {name, age} = person;

//console.log(age);destructuring object into variables

let data = {
    name: 'Mike',
    age: 21,
    results: ['foo', 'bar'],
    count: 29
};

let {results, count} = data;

//console.log(results, count);

//can use obejct destructuring as a function argument
//function getData(date) 
function getData({results, count}) {//es6
    //es5
    //var results = data.results;
    //var count = data.count;

    //console.log(results, count);
}

getData({
        name: 'Mike',
        age: 21,
        results: ['foo', 'bar'],
        count: 29
});

//function greet(person) {
function greet({name, age}) {
//    let name = person.name;
//    let age = person.age;

//    console.log('Hello, ' + name + '. You are ' + age);
    console.log(`Hello, ${name}. You are ${age}.`)
}

greet({
    name: 'Kenji',
    age: 45
});
