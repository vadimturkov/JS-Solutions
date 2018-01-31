// Solution to Chekio mission: Roman numerals
// https://github.com/CheckiO-Missions/checkio-task-roman-numerals

"use strict";

function romanNumerals(number) {
    const patterns = [
        { arabic: 1000, roman:  "M"  },
        { arabic: 900,  roman:  "CM" },
        { arabic: 500,  roman:  "D"  },
        { arabic: 400,  roman:  "CD" },
        { arabic: 100,  roman:  "C"  },
        { arabic: 90,   roman:  "XC" },
        { arabic: 50,   roman:  "L"  },
        { arabic: 40,   roman:  "XL" },
        { arabic: 10,   roman:  "X"  },
        { arabic: 9,    roman:  "IX" },
        { arabic: 5,    roman:  "V"  },
        { arabic: 4,    roman:  "IV" },
        { arabic: 1,    roman:  "I"  },
    ];

    let result = "";

    patterns.forEach(pattern => {
        const count = Math.floor(number / pattern.arabic);
        if (count > 0) {
           result += pattern.roman.repeat(count);
           number -= pattern.arabic * count;
        }
    });

    return result;
}