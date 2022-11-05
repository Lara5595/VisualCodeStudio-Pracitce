// Higher order functions
// map - loops and return an array
// filter - loops and returns and array with matching conditions
// reduce


// This loop thorugh the numbers with map
// [1, 2, 3, 4].map(number => console.log(number));


// This loops and multiplies by 2
// let result = [1, 2, 3, 4].map(number => number * 2)
// console.log(result);


// This is a function with map
const doubleMap = (numbers) => {
 return numbers.map(number => number * 2)
}

console.log(doubleMap([1, 2, 3]));



// this is how you would do it without map
const arr = [1,2];

function double(arr) {
    const doublearr = [];
    for(let i = 0; i < arr.length; i++) {
        doublearr.push(arr[i] * 2);
    }

    return doublearr;
}

console.log(double(arr));



// This is a filter function
// filter([1,2,3,4,5,6], 3) => (4,5,6)

const filter = (numbers, greaterThan) => {
    let result = [];

    for(const number of numbers) {
        if(number > greaterThan) {
            result.push(number)
        }
    }
    return result;
}
// 
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.filter(num => num >= 3));
