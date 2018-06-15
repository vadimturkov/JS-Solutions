// Solution to CodeWars kata: Counting Duplicates
// https://www.codewars.com/kata/compare-powers/

const comparePowers = ([leftBase, leftExponent], [rightBase, rightExponent]) =>
    Math.sign(rightExponent * Math.log(rightBase) - leftExponent * Math.log(leftBase));
