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

// using .filter
const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num => num >= 3));

// using or and and || &&
console.log(nums.filter(num => num >= 4 || num < 2));


// filtering through an array of objects
const actors = [
    {name: 'johnny', networth: 2000000},
    {name: 'amber', networth: 10},
    {name: 'leonard', networth: 1000000},
]

console.log(actors.filter(actor => actor.networth > 10));


// arrayMethods.innerHTML = '<h1>"Hello"</h1>'


// using map to just get the name
let names = actors.map(actor => actor.name);

console.log(names);


// Using reduce
let sumof = [1, 2, 3];
const result = sumof.reduce(function(prev, curr){

    return prev + curr
})

console.log(result);

// sum all of the net worths
// SUM: Think reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator

// This adds the networth of actors
console.log("The networth combine of all the actors is " + actors.reduce((a,b) => a + b.networth, 0));


