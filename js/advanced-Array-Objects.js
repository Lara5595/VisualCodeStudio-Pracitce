

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

const howManyLetters = (phrase) => {
    return { result: phrase.length }
}

const phrase = prompt( "Write your phase")

console.log(howManyLetters(phrase))