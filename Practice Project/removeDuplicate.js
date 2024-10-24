let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

let unique = new Set(numbers);

console.log(unique);

console.log(Math.max(...unique));
