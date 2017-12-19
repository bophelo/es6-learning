/*var button = document.querySelector('button');

console.log('Before');

button.onclick = function () {

    console.log('Button was clicked');

};

console.log('After');*/
//this function is asynchronous in a way, this function won't be triggered until the button is clicked
//anything that comes after the event handler, will come first

//A promise is a placeholder for an operation that has not taken place, a promise to perform the action
var timer = function (length) {
    //In here earrange anyhting that needs to take place, if success throw resolve, on error reject
    return new Promise(function (resolve, reject) {

        console.log('Init Promise');

        setTimeout(() => {
            console.log('Timeout done.')
            resolve();
        }, length);
        
    });
    
};

//does not fire because we never called the resolve function, be explicit when you wanna reject or resolve
//timer.then(() => {
//    console.log('Proceed now that the timer has concluded.');
//});
timer(4000).then(() => console.log('Done.'));