// Solution to CodeWars kata: Sum Arrays
// https://www.codewars.com/kata/sum-arrays/

const sum = numbers => numbers.reduce((partSum, number) => partSum += number, 0);