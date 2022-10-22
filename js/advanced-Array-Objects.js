

const howManyLetters = () => {
    const phrase = "hey, can you go grocery store with me?"

    for (letter in phrase) {
        console.log(letter);
    }

}

console.log(howManyLetters());
