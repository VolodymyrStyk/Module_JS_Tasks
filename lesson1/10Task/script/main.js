//- при помощи prompt()  получить 3 числа с плавающей точекой.
// Округлить их при помощи Math.round Сложить их между собой записав результат в переменную
// и вывести в консоль браузера


let num1 = Math.round(parseFloat(prompt("Number 1:")));
let num2 = Math.round(parseFloat(prompt("Number 2:")));
let num3 = Math.round(parseFloat(prompt("Number 3:")));

let result = num1 + num2 + num3;

console.log(result);

