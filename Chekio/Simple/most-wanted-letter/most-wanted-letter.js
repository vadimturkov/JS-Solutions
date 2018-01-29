"use strict";

function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function mostWanted(text) {
    const letters = Array.from(text.toLowerCase()).filter(char => isLetter(char));

    const frequencies = {};
    letters.forEach(letter => frequencies[letter] ? frequencies[letter]++ : frequencies[letter] = 1);

    const maxFrequency = Math.max(...Object.values(frequencies));
    return letters.filter(letter => frequencies[letter] === maxFrequency).sort()[0];
}