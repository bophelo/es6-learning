'use strict';

//Object shorthand
//Method shorthand
//Object destructuring

function getPerson() {
    var name = 'John';
    var age = '25';

    //es5
    //return {
    //    name: name,
    //    age: age
    //};
    //In situations where the property name is the same as the value variable
    //can also be applied to vue
    return {
        name: name,
        age: age,
        //greet: function () {//es5
        //return 'Hello, ' + this.name; es5
        greet: function greet() {
            return 'Hello, ' + this.name; //template strings
        }
    };
}

//console.log(getPerson().greet());

var person = {
    name: 'Mike',
    age: 21
};

var name = person.name,
    age = person.age;

//console.log(age);destructuring object into variables

var data = {
    name: 'Mike',
    age: 21,
    results: ['foo', 'bar'],
    count: 29
};

var results = data.results,
    count = data.count;

//console.log(results, count);

//can use obejct destructuring as a function argument
//function getData(date) 

function getData(_ref) {//es6
    //es5
    //var results = data.results;
    //var count = data.count;

    //console.log(results, count);

    var results = _ref.results,
        count = _ref.count;
}

getData({
    name: 'Mike',
    age: 21,
    results: ['foo', 'bar'],
    count: 29
});

//function greet(person) {
function greet(_ref2) {
    var name = _ref2.name,
        age = _ref2.age;

    //    let name = person.name;
    //    let age = person.age;

    //    console.log('Hello, ' + name + '. You are ' + age);
    console.log('Hello, ' + name + '. You are ' + age + '.');
}

greet({
    name: 'Kenji',
    age: 45
});