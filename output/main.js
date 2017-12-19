function fire(bool) {
    //var foo;
    //let and const are block level declarations {}
    if (bool) {
        //var foo = 'bar';
        //let foo = 'bar'; //hoisting never takes place due to block level -> reference error
        var _names = ['Mike, Molly'];
        //var names = ['Frank', 'Fiona'];
        //names = ['Lip', 'Carl'];
        _names.push('Debbie'); //const is not a 100 percent immutable, the assignment itself is immutable (the binding itself is immutable but the value is not)

        console.log(_names); //2nd declaration gets returned for var and let but not const, results in type error
    } else {
        console.log(names); //hoisting (not defined)
        //when using the var keyword the declaration is hoisted to the top of the scope
        //declare all your variables at the very top, initialise later...
        //foo is not declared or initialise in the else
    }
}

fire(true);

//use var at the top level...?
//default to using let
//default to using const when you do not want reassignment
//const foo = 'bar';
//if you do need to reassign that value and change it later, then use let
//force immutablilty with: const months = Object.freeze([...]);