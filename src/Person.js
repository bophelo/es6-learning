class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' says hello.'; //can be cleaned up a bit more using template strings (review)
    }
}

console.log(new Person('Mpilo').greet());