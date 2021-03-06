class TaskCollection {
    constructor(tasks = []) {//pass in an array of tasks
        this.tasks = tasks;
    }

    log() {//cycles through those tasks and logs to console
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
        this.tasks.forEach(() => console.log('task'));
    }
    prepare() {
        //use single inline approach when doing something very simple otherwise
        //this.tasks.forEach(task => {
        //    console.log('task');
        //});
        //filter through all the items in the array and prepare them for gulp (e.g)
        //this.tasks.forEach(task => task.toGulp());
        //note: the value of the this keyword is handled differently
        this.tasks.forEach(task => {
            console.log(this);//in this case it refers to the TaskCollection instance
        });
        //this.tasks.forEach(function(task) {
        //    console.log(this);//in this case it refers to the global window object usually
            //be careful when searching and replacing function keywords with new syntax as the value of this changes
            //with the arrow syntax the binding never changes
        //});
    }
}

class Task{
    toGulp() {
        console.log('converting to gulp');
    }
}

new TaskCollection([
    new Task, new Task, new Task
]).prepare();