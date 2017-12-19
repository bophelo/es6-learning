var _marked = /*#__PURE__*/regeneratorRuntime.mark(numbers),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(range);

//A generator allows a function to exit or pause at a particular point and later the caller as the ability to resume
//starts with a star
function numbers() {
    return regeneratorRuntime.wrap(function numbers$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    //indicates that we are pausing and exiting early
                    //kind of like a return statement, can cycle through everything, can later resume at same point usng the same set of state
                    console.log('Begin');

                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

//console.log(numbers());

//let iterator = numbers();

//the response from interator.next is not just gonna be the value specified
//its gonna be an obejct that contains the value but also the status that indicates whether or not the generator is complete
//if you want the value append. value to grab it
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());

function range(start, end) {
    return regeneratorRuntime.wrap(function range$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    if (!(start <= end)) {
                        _context2.next = 6;
                        break;
                    }

                    _context2.next = 3;
                    return start;

                case 3:
                    start++;
                    _context2.next = 0;
                    break;

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

//let iterator = range(1,5);

//for (let i of iterator)
//    console.log(i);//auto fethces the value not the object

//spread operator turns a sequence into elements of an array
console.log([].concat(babelHelpers.toConsumableArray(range(1, 5))));