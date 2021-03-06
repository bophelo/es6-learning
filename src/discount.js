//applying a defautl parameter e.g if one does not provide a discount automatically use 10%
//es6
function defaultDiscountRate(params) {
    return .10;
}
//default parameter does not have to a primitive value
function applyDiscount(cost, discount = defaultDiscountRate()) {
    //es5
    //discount = discount || .10;
    return cost - (cost * discount);
}

console.log(applyDiscount(100));