let numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];


let minValue = Math.min(...numbers);
console.log( minValue);

let maxValue = Math.max(...numbers);
console.log(maxValue);


let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);



