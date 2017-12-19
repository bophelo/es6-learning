//export or expose the behaviours of this class outside of this file
//in most cases you're exporting one thing, e.g the default import is the taskcollection class
//as such you can remove the curly braces from the import file
//one can still export more than one thing despite the default keyword
var TaskCollection = function () {
    //refactor
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        babelHelpers.classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    babelHelpers.createClass(TaskCollection, [{
        key: 'dump',
        value: function dump() {
            console.log(this.tasks);
        }
    }]);
    return TaskCollection;
}();

//the value that you're exporting is what you'd import


export default TaskCollection; //works when placed at the top or bottom
export var foo = 'bar';