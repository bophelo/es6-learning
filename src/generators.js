//A generator allows a function to exit or pause at a particular point and later the caller as the ability to resume
//starts with a star
function *numbers() {
    //indicates that we are pausing and exiting early
    //kind of like a return statement, can cycle through everything, can later resume at same point usng the same set of state
    console.log('Begin');

    yield 1;
    yield 2;
    yield 3;
}

//console.log(numbers());

//let iterator = numbers();

//the response from interator.next is not just gonna be the value specified
//its gonna be an obejct that contains the value but also the status that indicates whether or not the generator is complete
//if you want the value append. value to grab it
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());

function *range(start, end) {
    while (start <= end) {
        yield start;
        start++;
    }
}

//let iterator = range(1,5);

//for (let i of iterator)
//    console.log(i);//auto fethces the value not the object

//spread operator turns a sequence into elements of an array
console.log([...range(1, 5)]);