// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
let expr1 = 5 < 6;
console.log('5 ? 6 -> 5 < 6 true: ' + expr1);

// 5 ? 6 -> false
let expr2 = 5 > 6;
console.log('5 ? 6 -> 5 > 6 false: ' + expr2);

// 5 ? 6 -> false
let expr3 = 5 === 6;
console.log('5 ? 6 -> 5 === 6 false: ' + expr3);

// 5 ? 6 -> false
let expr4 = 5 >= 6;
console.log('5 ? 6 -> 5 >= 6 false: ' + expr4);

// 10 ? 10 -> true
let expr5 = 10 === 10;
console.log('10 ? 10 -> 10 === 10 true: ' + expr5);

// 10 ? 10 -> true
let expr6 = 10 <= 10;
console.log('10 ? 10 -> 10 <= 10 true: ' + expr6);

// 10 ? 10 -> false
let expr7 = 10 !== 10;
console.log('10 ? 10 -> 10 !== 10 false: ' + expr7);

// 10 ? 10 -> false
let expr8 = 10 < 10;
console.log('10 ? 10 -> 10 < 10 false: ' + expr8);

// 10 ? 10 -> false
let expr9 = 10 > 10;
console.log('10 ? 10 -> 10 > 10 false: ' + expr9);

// 123 ? '123' -> false
let expr10 = 123 === '123';
console.log('123 ? \'123\' -> 123 === \'123\' false: ' + expr10);

// 123 ? '123' -> true
let expr11 = 123 == '123';
console.log('123 ? \'123\' -> 123 == \'123\' true: ' + expr11);