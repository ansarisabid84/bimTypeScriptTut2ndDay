var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(num1, num2) {
    num1 + num2;
}
var fun = function (num1, num2) {
    return num1 + num2;
};
var fun2 = function (num1, num2) {
    return num1 * num2;
};
function optionalParameterFunction(num1, num2, num3) {
    if (num3 === undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}
console.log(optionalParameterFunction(10, 20));
console.log(optionalParameterFunction(10, 20, 30));
function requiredParameterFunction(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(requiredParameterFunction(10, 20, 30));
function restParametersFunction(num1) {
    var res = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        res[_i - 1] = arguments[_i];
    }
    var total = 0;
    res.forEach(function (num) { return total += num; });
    return num1 + total;
}
console.log(restParametersFunction(1));
console.log(restParametersFunction(1, 2));
console.log(restParametersFunction(1, 2, 3));
console.log(restParametersFunction.apply(void 0, __spreadArray([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7], false)));
