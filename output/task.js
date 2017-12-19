'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        //pass in an array of tasks
        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: 'log',
        value: function log() {
            //cycles through those tasks and logs to console
            //this.tasks.forEach(function(task) {
            //this.tasks.forEach(task => {//if only one argument () can be omitted
            //    console.log(task);
            //}); since there is only one action entire thing can be put on one line
            //this.tasks.forEach((task, index) => console.log(task, index));
            //with the inline version the return is implicit no need to type it
            //let names = ['Mike', 'Terry', 'Fletch'];
            //names = names.map(name => name + ' is liberal.');
            //console.log(names);
            //{} can be there if you want no matter, e.g every function argument is surrounded by ()
            //e.g if you multiple arguments use the (), if single naaah if you wanna...decide on your own convention
            //if there are no arguments e.g log a string you may use an empty set of ()
            this.tasks.forEach(function () {
                return console.log('task');
            });
        }
    }, {
        key: 'prepare',
        value: function prepare() {
            var _this = this;

            //use single inline approach when doing something very simple otherwise
            //this.tasks.forEach(task => {
            //    console.log('task');
            //});
            //filter through all the items in the array and prepare them for gulp (e.g)
            //this.tasks.forEach(task => task.toGulp());
            //note: the value of the this keyword is handled differently
            this.tasks.forEach(function (task) {
                console.log(_this); //in this case it refers to the TaskCollection instance
            });
            //this.tasks.forEach(function(task) {
            //    console.log(this);//in this case it refers to the global window object usually
            //be careful when searching and replacing function keywords with new syntax as the value of this changes
            //with the arrow syntax the binding never changes
            //});
        }
    }]);

    return TaskCollection;
}();

var Task = function () {
    function Task() {
        _classCallCheck(this, Task);
    }

    _createClass(Task, [{
        key: 'toGulp',
        value: function toGulp() {
            console.log('converting to gulp');
        }
    }]);

    return Task;
}();

new TaskCollection([new Task(), new Task(), new Task()]).prepare();