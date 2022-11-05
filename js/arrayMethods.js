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

const arr = [1,2];

function doublea(num){
    const doublearr = [];
    for(let i = 0; i < num.length; i++){
            doublearr.push(num[i] * 2);
    }
        return doublearr;
}

console.log(doublea(arr));


function double(arr) {
    const doublearr = [];
    for(let i = 0; i < arr.length; i++) {
        doublearr.push(arr[i] * 2);
    }

    return doublearr;
}

console.log(double(arr));