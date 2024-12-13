// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); // Example output: 5

// 2. Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log("Is 7 odd?", isOdd(7)); // Example output: true
console.log("Is 8 odd?", isOdd(8)); // Example output: false

// 3. Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Minimum number:", findMin([5, 3, 8, 1, 9])); // Example output: 1

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([5, 3, 8, 2, 9])); // Example output: [8, 2]

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("Sorted in descending order:", sortArrayDescending([5, 3, 8, 2, 9])); // Example output: [9, 8, 5, 3, 2]

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased first letter:", lowercaseFirstLetter("Hello")); // Example output: "hello"

// 7. Function to find the average of an array of numbers
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return arr.length ? sum / arr.length : 0;
}
console.log("Average:", findAverage([5, 3, 8, 2, 9])); // Example output: 5.4

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?", isLeapYear(2024)); // Example output: true
console.log("Is 1900 a leap year?", isLeapYear(1900)); // Example output: false
console.log("Is 2000 a leap year?", isLeapYear(2000)); // Example output: true
