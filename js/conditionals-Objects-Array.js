// conditional operators
// ==, ====, >, <, <=, >=, !=, !==



// Functions 
// this function call sayMyName it has 0 arguments
// function sayMyName() {
//   console.log('David without parameter')
// }

// sayMyName('David');
// this function call sayMyName2 it has 1 argument called name and it logs out your name in console.

// function sayMyName2(name) {
//   console.log(name)
// }

// sayMyName2('David');

// function greeting(name) {
//   greet = 'hi ' + name + ', Nice to meet you!'
//   console.log(greet)
// }

// greeting('Lance');



// template literals

// function greeting(name) {
//   greet = `hi ${name}, Nice to meet you!`
//   console.log(greet)
// }

// greeting('Lance');


// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1,2));

// or if you store if you can just log
// num1 = sum(1, 2)
// console.log(num1);


// function calculateFoodTotal(food, tip) {
//   let tipPercentage = tip / 100
//   let tipAmount = food * tipPercentage
//   let  total = food + tipAmount
//   return total
// }

// console.log(calculateFoodTotal(100,20));

// or you can reuse your functions in this case its going to be sum to get the total
// function calculateFoodTotal(food, tip) {
//   let tipPercentage = tip / 100
//   let tipAmount = food * tipPercentage
//   let total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(100,20));

// function sum(a, b) {
//   return a + b;
// }
// This ^^ is the same as the function below just in es6 version

// ES6 new way to write functions Arrow functions
// arrow function with explicit return
// const sumArrow = (a,b) => {
// return a + b 
// }

//  shorter version is
// arrow function with implicit return
// IMPORTRANT: For implicit return, revome curly braces
// const sumArrow = (a, b) => a + b

// console.log(sumArrow(10, 50));



//  Basics of Array 

// Arrays 
groceries = ['banana', 'apple', 'orange', 'pear']
// console.log(groceries);
console.log(groceries[0]); // we get the banana we enter the index of the fruit to get it 


// Array methods
groceries.push("cookie");
// console.log(groceries);

// add another
groceries.push("blueberries")
// console.log(groceries);

// Array Slice Method
// start from 0 INCLUSIVE and UP to 2 [0,1]
// console.log(groceries.slice(0, 2))

// This gets from pear to blueberrie 
// console.log(groceries.slice(3, 6))
// // this gets from apple to pear
// console.log(groceries.slice(1,4));


// More array Methods (slice, push, indexOf, length)
// console.log(groceries.indexOf('orange')) // gets the index of groceries
// console.log(groceries.length); // tells you the lenght of the array

// console.log(groceries);




//////////////////////OBJECTS ///////////////////////////////////*
// const person = {
//     name: 'Leonardo',
//     shirt: 'white'
// }

// console.log(person.name)
// console.log(person.shirt)

// // access object: dot notation vs. bracket notation ^
// console.log(person['name']);

// // assign object 
// person.phone = '1-222-333-4444'
// console.log(person.phone);

// console.log(person); // now phone is on objects since we added it

// little exercecise
// const anime = {
//     name: 'goku',
//     shirt: 'orange'
// }

// // logs objects for anime
// console.log(anime);

// // assign a new object
// anime.power = "HAMEHAMEHAA"
// console.log(anime);


// es6 arrow function (2 arguments)
// object
// template literals
// Methods Math.floor()
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 25000,
        liabilities: 1500,
        netWorth: function () {
            return this.assets - this.liabilities
        }

    }
  
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

  return intro

}

console.log(introducer('David', 'black'))



///////////////////////////////For Loops////////////////////////

fruits = ['banana', 'apple', 'orange', 'pear']
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let i=0; i< fruits.length; i++) {
//     console.log(i,fruits[i])
// }
 
// new way to loop
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// const numbers = [1, 2, 3, 4, 5, 6]


// loop old way
// for(let i =0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// new way
// for (const number of numbers) {
//     console.log(number)
// }

// console.log("we use the number array and double it and push it to a new array")

// for (const number of numbers) {
//    result.push(number * 2)
// }

// console.log(result);



// new way

const double = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number * 2)
    }
    return result
}

console.log(double([1, 2, 3, 4, 5, 6]))


// // this squares 
// const squarenum = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number ** 2)
//     }
//     return result
// }

// console.log(squarenum([1, 2, 3, 4, 5, 6]))


// MORE ON For Loops that i got from a video of MoshCoder 
// for (Inital expression, conditon, increament expression)

// This loops hello world 5 times
for (let i = 0; i < 5; i++) {
    console.log(i, 'hello world');
}

// this display the odd numbers
for (let i = 1; i <= 5; i++) {
    if (i%2 !==0)
    console.log("I am console loggin odd numbers", i)
}

// this display the odd number but decremation
for (let i = 5; i >= 1; i--) {
    if (i%2 !==0)
    console.log('I am decrementing', i)
}

// FOR LOOPS BEAU - youtuber teaches JS

var ourArray = [];
for (let i =0; i<5; i++) {
    ourArray.push(i)
}
console.log(ourArray);

// using a break statement
var ourArray = [];
for (let i =0; i<5; i++) {
    if(i > 2) break;
    ourArray.push(i)
}
console.log("I am using a break statment",ourArray);

// looping through a existing array
let arr = [10,9,8,7,6];
for (let i = 0; i < arr.length; i++){
    console.log("I am looping through the array" ,arr[i])
}

// Nested for loops
let array = [ 
    [1,2],
    [3,4],
    [5,6] ];

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

  
    // const double = (numbers) => {
    //     let result = []
    //     for (const number of numbers) {
    //         result.push(number * 2)
    //     }
    //     return result
    // }
    
    // console.log(double([1, 2, 3, 4, 5, 6]))



    // this is the same as the one above^^
    let forTest = [3, 2, 5, 8, 10];

    function forDouble (numbers) {
        let newArr = []
        for (let i = 0; i < numbers.length; i++){
            newArr.push(numbers[i] * 2)
        } return newArr
    }