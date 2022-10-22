

// Looops through the letters in phrase
// const howManyLetters = () => {
//     const phrase = "hey, can you go to the grocery store with me?"

//     let result = 0;

//     for (const index in phrase) {
//         console.log(Number(index)+ 1);
//         result = Number(index)+ 1
//     }
//     return {result} // by putting on curly brackets it returns results: 37

// }

// console.log(howManyLetters());


// This one prompt the user and counts the letters on their phrase 

// const howManyLetters = () => {
    
//    let result = 0;

//     for (const index in phrase) {
//         console.log(Number(index)+ 1);
//         result = Number(index)+ 1
//     }
//     return {result} // by putting on curly brackets it returns results: 37

// }
// const phrase = prompt('Write your phrase');
// console.log(howManyLetters(phrase));




// Using .length to count the letters 
// const howManyLetters = (phrase) => {
//     return { result: phrase.length }
// }

// const phrase = prompt( "Write your phase")

// console.log(howManyLetters(phrase))


// const sumArray = (numbers) => {
//     let result = 0;
//     // for loop
//  for (const number of numbers) {
//     console.log(number) 
//    result = result + number
//  }
//     return { result }
// }

// const nums = [1, 2, 3, 4, 5]
// console.log(sumArray(nums));


// This is a regular for loop
// const nums = [1, 2, 3, 4, 5]

// function sumArray (numbers) {
//     let result = 0;

//     for(let i = 0; i < numbers.length; i++) {
//         result = result + numbers[i]
//     }
//     return {result}
// }
// console.log(sumArray(nums));


const max = (numero) => {
    let result = numero[0]; // results is the first item of array
    //loop
    for (const high of numero) {
        if(high > result) {
            result = high
        }
    }
    return { result };
}
console.log(max([1, 2, 3, 4, 5, 1, 3, 7, 9, 2]))