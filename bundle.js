'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

//export or expose the behaviours of this class outside of this file
//in most cases you're exporting one thing, e.g the default import is the taskcollection class
//as such you can remove the curly braces from the import file
//one can still export more than one thing despite the default keyword
var TaskCollection = function () {
    //refactor
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    createClass(TaskCollection, [{
        key: 'dump',
        value: function dump() {
            console.log(this.tasks);
        }
    }]);
    return TaskCollection;
}();

var foo = 'bar';

console.log(foo);

new TaskCollection(['Prepare Resume', 'Finish Code Repo migration', 'Code some more']).dump();
