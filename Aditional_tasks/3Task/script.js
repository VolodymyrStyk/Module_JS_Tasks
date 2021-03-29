//Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як
// і поеперднє слово.
//
// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

let str1 = 'ANAGRAM';
let str2 = 'MGANRAA';

let chekStr1 = str1.split('').sort().join('');
let chekStr2 = str2.split('').sort().join('');
console.log(chekStr1);
console.log(chekStr2);

console.log(str1 + '|'+ str2 + ' -> '+ (chekStr1===chekStr2));