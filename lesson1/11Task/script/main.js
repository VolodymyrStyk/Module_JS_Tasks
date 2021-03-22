//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.

let num1 = parseInt(prompt("Input num:"));
let num2 = parseInt(prompt("Input pow:"));

let result = Math.pow(num1,num2);

console.log(result);

