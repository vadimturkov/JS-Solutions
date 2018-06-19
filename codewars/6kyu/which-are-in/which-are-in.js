// Solution to CodeWars kata: Which are in?
// https://www.codewars.com/kata/which-are-in/

const inArray = (patterns, strings) => 
  patterns.filter(pattern => strings.findIndex(value => value.includes(pattern)) !== -1).sort();