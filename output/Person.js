var Person = function () {
    function Person(name) {
        babelHelpers.classCallCheck(this, Person);

        this.name = name;
    }

    babelHelpers.createClass(Person, [{
        key: 'greet',
        value: function greet() {
            return this.name + ' says hello.'; //can be cleaned up a bit more using template strings (review)
        }
    }]);
    return Person;
}();

console.log(new Person('Mpilo').greet());