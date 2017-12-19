"use strict";

//Scenario: Accepting any number of arguments
//Rest parameters take all the rest of the arguments and make them an array
function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    //sum(x,y,z) can't do that because user may want to pass in fourth argument
    //numbers = [1,2,3], useful epsecially when you may need to map over them
    //es5
    //return numbers.reduce(function (prev, current) {
    //    return prev + current; //total will be equal to prev on the next iteration
    //})
    //refactor
    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(sum(1, 2, 3)); //takes these values and encapsulates them in an array
//(numbers) would be equal to one, i.e the first argument
//flexible api...
//always place rest parameter at the end of the list if planning on appending other parameters

//The spread operator does the opposite
//function sum(x,y) { //1,2
//    return x + y;
//}

//let nums = [1,2];
//to find the sum of the array precede it with 3 dots
//takes the array and converts it to single arguments
//console.log(sum(...nums));