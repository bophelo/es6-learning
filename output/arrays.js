var User = function User(name, isAdmin) {
    babelHelpers.classCallCheck(this, User);

    this.name = name;
    this.isAdmin = isAdmin;
};

var users = [new User('Jeebz', false), new User('Mike', true), new User('Terry', true)];

//find me the first user who is an Admin
console.log(users.find(function (user) {
    return user.isAdmin;
}).name);

console.log([2, 4, 6, 8, 10].includes(8) //checking if array contains a given value (es>2015)
);

//see if this array contains 8, we can pass a condition
console.log([2, 4, 6, 8, 10].find(function (item) {
    return item > 8;
}));

//findIdex
console.log([2, 4, 6, 8, 10].findIndex(function (item) {
    return item > 8;
}));

//[].fill();
//[].keys();
//[]/values();
//[].entries();]
var items = ['jeff', 'jordan', 'jack'].entries();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;

        console.log(name);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}