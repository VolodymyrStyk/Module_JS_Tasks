//Дополнительно:
//    - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12);// -> 1 && 0 -> 0
console.log(34 > 33 && 23 < 90);// 1 && 1 -> 1
console.log(99 > 100 && 45 > 12);// 0 && 1 -> 0
console.log(132 > 100 || 45 < 12);// 1 || 0 -> 1
console.log(111 > 11 || 45 < 111);// 1 || 1 -> 1
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));// (1 || 1) && (1 || 0)-> 1 && 1 -> 1
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));// (1 || 1) || (1 || 0)-> 1 || 1 -> 1
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));//(1 && 0) && (1 || 0)-> 0 && 1 -> 0
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));//(1 || 1) || (0 && 1)-> 1 || 0 -> 1
console.log(!!'-1'); // true
console.log(!!-1);// true
console.log(!!'0');// true
console.log(!!'null');// true
console.log(!!'undefined');// true
console.log(!!(3 / 'owu'));// false !!!
console.log((111 > 11 || 45 < 111) || !!'0');// true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12)); // false

