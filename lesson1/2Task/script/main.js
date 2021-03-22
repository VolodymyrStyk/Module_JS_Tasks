// -присвоить каждому из следующих значений свою переменную:
//     'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи
// console.log , alert, document.write
let welcome = 'Hello';
let userName = "User";
let title = 'owu';
let domain = 'com';
let counry = 'ua';
let dot = "."
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let boollT = true;
let boollF = false;

document.write('<h1>' + welcome + ' ' + userName + '</h1>');
document.write(`<h1>${welcome} ${userName}</h1>`);
document.write(`<h1>${welcome + ' ' + userName}</h1>`);
document.write('<h2>' + title + dot + domain + dot + counry);
document.write(`<h2> ${title}${dot}${domain}${dot}${counry}`);
console.log(num1, num2);
console.log(num3);
alert(num4);
alert(num5);
console.log(num6);
alert(num7);
alert(boollT);
console.log(boollF);
//
// -переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи
// console.log , alert, document.write

welcome = 'Hi!';
userName = "Dude";
title = 'senior';
domain = 'dev';
counry = 'programing';
dot = "-"
num1 = 2;
num2 = 1.0;
num3 = 99;
num4 = -123;
num5 = 0.14;
num6 = 12.7;
num7 = 12345;
boollT = true;
boollF = false;

document.write('<h1>' + welcome + ' ' + userName + '</h1>');
document.write(`<h1>${welcome} ${userName}</h1>`);
document.write(`<h1>${welcome + ' ' + userName}</h1>`);
document.write('<h2>' + title + dot + domain + dot + counry);
document.write(`<h2> ${title}${dot}${domain}${dot}${counry}`);
console.log(num1, num2);
console.log(num3);
alert(num4);
alert(num5);
console.log(num6);
alert(num7);
alert(boollT);
console.log(boollF);