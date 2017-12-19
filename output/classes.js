'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var User = function () {
    function User(username, email) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
    }

    //this method is only callable directly of the user object, i.e cannot be referenced in an instance method like changeEmail


    _createClass(User, [{
        key: 'changeEmail',


        //can also add accessors and mutators

        value: function changeEmail(newEmail) {
            //short syntax, still be ing attached to the prototype
            this.email = newEmail;
        }
    }], [{
        key: 'register',
        value: function register() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //rest operator
            return new (Function.prototype.bind.apply(User, [null].concat(args)))(); //spread operator, instead of duplicating the argument list
        }
    }]);

    return User;
}();

//let user = new User('Jerry Jones', 'jonesjer@mail.com');


var user = User.register('Jerry Jones', 'jonesjer@mail.com');

//user.changeEmail('jerry.jones@mail.com');
//classes are 1st class citizens they can be passed anywhere 
//console.dir(user);

function log(strategy) {
    strategy.handle();
}

//if it is something that can be reused

var ConsoleLogger = function () {
    function ConsoleLogger() {
        _classCallCheck(this, ConsoleLogger);
    }

    _createClass(ConsoleLogger, [{
        key: 'handle',
        value: function handle() {
            console.log('Using the console strategy to log.');
        }
    }]);

    return ConsoleLogger;
}();

log(new ConsoleLogger());