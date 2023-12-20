let str: string = "Hello There!";
console.log(str);

let num: number = 345345;
console.log(num);

let num2: number = 3453.45;
console.log(num2);

let bool: boolean = true;
console.log(bool);

let arr: Array<number> = [43534,34534,43]
console.log(arr);

let anyVar: any = "dfgdfg";
anyVar = 343;
console.log(anyVar);

const enum Day {
    SUNDAY,
    MONDAY,
    Tuesday,
    Wednesday
}

let enumData: Day = Day.Tuesday;
console.log(enumData);

let tupVar: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

tupVar = swapNumbers(10, 20);
console.log(tupVar);

