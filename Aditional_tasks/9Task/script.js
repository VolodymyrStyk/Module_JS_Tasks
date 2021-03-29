//Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

let arr = [1, 6, 9, 0, 17, 88, 4, 7];

let value = arr.reduce((findValue, currentValue) => findValue > currentValue? findValue : findValue = currentValue);

console.log(value);