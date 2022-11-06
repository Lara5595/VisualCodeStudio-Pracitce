

// This is reading title from html
let title = document.getElementById("title")

console.log(title.innerText);

// This changes the text in html for the id of title
// title.innerText = 'Goodbye my lover!'


// Changing its html
let message = 'Goodbye my lover!'
title.innerText = message;
// This change the text to hello and made it a paragraph
title.innerHTML = '<p>Hello</p>'

// replace the word hello with the message variable using template literals
// We use template literals to use the var message that has goodbye my lover
title.innerHTML = `<p>${message}</p>`


// We are changing the color of the text
title.style.color = "white";
// Background color is diffrent from css you cant use dashes - like in css
title.style.backgroundColor = "red";



// Mini exercise
let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// This is the newer way to write functions
redDiv.onclick = () => console.log('you clicked red');
yellowDiv.onclick = () => console.log('you click yellow')
greenDiv.onclick = () => console.log('you click green')


// old way i used alert just to test it instead of console log
// redDiv.onclick = function() {
//     alert('red');
// }


// Looping
// This selects all the squares with a class of colorSquare
const squares = document.querySelectorAll(".colorSquare")
console.log(squares);
// Instead of repeating this we can do a for loop
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// forEach
squares.forEach(square => {
square.onclick = () => console.log(square.value)
})