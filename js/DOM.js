

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
title.innerHTML = `<p>${message}</p>`