//function-1
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//function-2
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods.splice(1, 2, 'burger', 'noodles', 'icecream');
console.log(foods);

//function-3

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let evennumbers = numberArray.filter(function (isEven) {
    if (isEven % 2 == 0 || isEven == 0) {
        return isEven;
    }
});
console.log(evennumbers);

let primenumbers = numberArray.filter(function (isPrime) {
    let c = 0;
    for (let start = 2; isPrime > start; start++) {
        if (isPrime % start == 0) {
            return false;
        } else {
            c++;
        }
    }
    return c == 0;
});
console.log(primenumbers);

//function 4
let nonPrime = numberArray.filter(function (isnonPrime) {
    return isnonPrime % 2 != 1;
});
console.log(nonPrime);


//function:5
var isEven = numberArray.filter(value => value % 2 === 0);
console.log(isEven);

//function:6
const myArray = [11, 34, 20, 5, 53, 16];
let squareofnumbers = myArray.map(function (findSquareOfNumbers) {
    return findSquareOfNumbers * findSquareOfNumbers;
});
console.log(squareofnumbers);

//function:7 
function multiply(myArray1) {
    console.log(myArray1.reduce(function (acc, init) {
        return acc * init;
    }));
}
multiply(myArray1 = [2, 3, 5, 10]);