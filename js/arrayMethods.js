// Higher order functions
// map - loops and return an array
// filter
// reduce


// This loop thorugh the numbers with map
// [1, 2, 3, 4].map(number => console.log(number));


// This loops and multiplies by 2
// let result = [1, 2, 3, 4].map(number => number * 2)
// console.log(result);


// This is a function with map
// const doubleMap = (numbers) => {
//  return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 2, 3]));


arr = [1, 2, 3, 4];

function doubleNums(nums) {
    for(let i = 0; i < nums.lenght; i * 2){
        return nums[i];
    }
    return doubleNums[i];
}
console.log(doubleNums(arr));