// Solution to Chekio mission: Roman numerals
// https://github.com/CheckiO-Missions/checkio-task-roman-numerals

"use strict";

function romanNumerals(number) {
    const pattern = {
        "M":    1000,
        "CM":   900,
        "D":    500,
        "CD":   400,
        "C":    100,
        "XC":   90,
        "L":    50,
        "XL":   40,
        "X":    10,
        "IX":   9,
        "V":    5,
        "IV":   4,
        "I":    1
    };

    let result = "";

    Object.keys(pattern).forEach(key => {
        const count = Math.floor(number / pattern[key]);
        if (count > 0) {
            result += key.repeat(count);
            number -= pattern[key] * count;
        }
    });

    return result;
}