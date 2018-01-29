// Solution to Chekio mission: Non-unique elements
// https://github.com/CheckiO-Missions/checkio-task-median

"use strict";

function median(data) {
    const count = data.length;
    const sortedData = data.sort((a, b) => a - b);

    if(count % 2 === 0) {
        return (sortedData[count / 2 - 1] + sortedData[count / 2]) / 2;
    } else {
        return sortedData[(count - 1) / 2];
    }
}
