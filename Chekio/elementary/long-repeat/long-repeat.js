// Solution to Chekio mission: Long repeat
// https://github.com/oduvan/checkio-mission-long-repeat

"use strict";

function longRepeat(line) {
    if (line.length < 2) {
        return line.length;
    }

    let result = 1;
    let current = 1;
    for (let i = 1; i < line.length; i++) {
        if (line[i] === line[i-1]) {
           current++;
        } else {
            result = Math.max(result, current);
            current = 1;
        }
    }

    return Math.max(result, current);
}
