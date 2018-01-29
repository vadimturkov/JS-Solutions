// Solution to Chekio mission: Non-unique elements
// https://github.com/CheckiO-Missions/checkio-task-non-unique-elements

"use strict";

function nonUniqueElements(data) {
    return data.filter(element => data.indexOf(element) !== data.lastIndexOf(element));
}