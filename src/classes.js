//create a constructor
/*function User(username, email) {
    //assign attributes to it
    this.username = username;
    this.email = email;

    //e.g setter method to change email
    //this.changeEmail = function name(params) {    
    //} downside to this: setting the function so that it will be redeclared and redefined for every instance of user
}
//rather attach this to the prototype that way every instance of user will share that method rather than recreating it in memory

//for any methods you wanna share attach those to the prototype object
User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

//and then new it up
var user = new User('Mike Molly', 'molly.mike@mail.com');
user.changeEmail('mikemoll@gmail.com');

console.dir(user);*/

//es6 
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    //this method is only callable directly of the user object, i.e cannot be referenced in an instance method like changeEmail
    static register(...args) {//rest operator
        return new User(...args);//spread operator, instead of duplicating the argument list
    }

    //can also add accessors and mutators

    changeEmail(newEmail) { //short syntax, still be ing attached to the prototype
        this.email = newEmail;
    }
        
}

//let user = new User('Jerry Jones', 'jonesjer@mail.com');
let user = User.register('Jerry Jones', 'jonesjer@mail.com');

//user.changeEmail('jerry.jones@mail.com');
//classes are 1st class citizens they can be passed anywhere 
//console.dir(user);

function log(strategy) {
    strategy.handle();
}

//if it is something that can be reused
class ConsoleLogger {
    handle() {
        console.log('Using the console strategy to log.');
    }
}

log(new ConsoleLogger);