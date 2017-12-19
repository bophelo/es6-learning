//Sets are colelctions of values where each one must be unique
//none unique items are ignored
var items = new Set(['one', 'two', 'three']);

console.log(items);
console.log(items.size);
console.log(items.add('four'));
console.log(items.delete('two'));
console.log(items);
console.log(items.has('four'));
items.forEach(function (item) {
    console.log('->' + item);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
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

console.log(items.clear());

//scenario: a form where a user can type in a comma separated list of tags
var tags = ['php', 'javascript', 'vue', 'javascript'];

var set = new Set(tags);

console.log(set);

//filter down the set to tags that are only three letters
//turn set into an aray using the spread operator
var sett = [].concat(babelHelpers.toConsumableArray(set)).filter(function (tag) {
    return tag.length === 3;
});

console.log(sett);

var settt = new Set(sett);

console.log(settt);

//e.g a form where users can mention others
//@john, did you see this. Check with @jane.
//Thank you @jane.
//Dynamically want to find any mentioned users but the same person can be mentioned multiple times

var mentionedUsers = ['john', 'jane', 'jane'];
console.log(new Set(mentionedUsers));