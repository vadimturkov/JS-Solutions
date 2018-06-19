// Solution to CodeWars kata: Return substring instance count
// https://www.codewars.com/kata/return-substring-instance-count

const substringCount = (fullText, searchText) => fullText.split(searchText).length - 1;