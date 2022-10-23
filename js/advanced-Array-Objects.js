

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


// This get the hightest number in a array
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



// This counts the letter in a phrase
const letterFrequency = (phrase) => {
    // letterFrequency("haha") should log {'h' : 2  'a' : 2}
    console.log(phrase)
    // Make a frequency object {}
    let frequency = [];
    for (const letter of phrase) {
    // check if letter exist in frequency
    if (letter in frequency) {
        // if it exist increment value by 1
        frequency[letter] = frequency[letter] + 1
      // Otherwise, set value to 1
    }  else{
        frequency[letter] = 1
    }
    }
       return frequency;
}

// console.log(letterFrequency("lol, what are you doing later tonight lol, haha!"));



// Word Frequency('lol what lol) => {'lol : 2 what : 1}
// const wordFrequency = (phrase) => {
//     let frequency2 = {};
//       words = phrase.split(' ') // This splits the words

//     for (const word of words) {
//         console.log(word)
//         if(word in frequency2) {
//             frequency2[word] += 1
//         } else {
//             frequency2[word] = 1
//         }
//     }
//     return frequency2
// }
// console.log(wordFrequency("lol what lol"))



// This one is a shorter version we grab the letterfrequency function and it made it shorter but now we made it to prompt the user and count the words
const wordFrequency = (phrase) => {
   const words = phrase.split(' ')
   return letterFrequency(words)
}
const userInput = prompt("Write your sentence")
console.log(wordFrequency(userInput));