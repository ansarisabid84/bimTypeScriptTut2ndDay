function add(num1: number, num2: number): void {
    num1 + num2;
}

let fun = (num1: number, num2: number) => {
    return num1 + num2;
}

let fun2 = function (num1: number, num2: number) {
    return num1 * num2
}

function optionalParameterFunction(num1: number, num2: number, num3?: number): number {
    if (num3 === undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}

console.log(optionalParameterFunction(10, 20))
console.log(optionalParameterFunction(10, 20, 30))

function requiredParameterFunction(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3;
}

console.log(requiredParameterFunction(10, 20, 30))


function restParametersFunction(num1: number, ...res: number[]) {
    let total = 0;
    res.forEach((num) => total += num);

    return num1 + total;
}

console.log(restParametersFunction(1));
console.log(restParametersFunction(1, 2));
console.log(restParametersFunction(1, 2, 3));
console.log(restParametersFunction(1, 2, 3, 4, ...[1,2,3,4,5,6,7]));


