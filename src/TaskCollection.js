//export or expose the behaviours of this class outside of this file
//in most cases you're exporting one thing, e.g the default import is the taskcollection class
//as such you can remove the curly braces from the import file
//one can still export more than one thing despite the default keyword
class TaskCollection { //refactor
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

//the value that you're exporting is what you'd import
export default TaskCollection;//works when placed at the top or bottom
export let foo = 'bar';
