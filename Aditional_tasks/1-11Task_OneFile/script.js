//1.
// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"
//
//function divideNumbToParts(number) {
//     if (typeof number === 'number') {
//         let changeNumber = number.toString();
//         let numZero = changeNumber.length;
//         let numArr = changeNumber.split('');
//         let newArr = [];
//         for (let i = 0; i < numArr.length; i++) {
//             newArr.push(numArr[i] * (10 ** (numArr.length - 1 - i)));
//         }
//         return number + ' -> ' + newArr.join(' + ');
//     } else {
//         return "Inputed variable is not a number";
//     }
// }
//
// ____________________________________________________________
// 2.
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
// [1,2,3,4,5,2,4,1,3] -> 5
//
//let array =[1,2,3,4,5,2,4,1,3,5,5];
//
// for (let i = 0; i < array.length; i++) {
// let counter = 0;
// let tempVar = array[i];
//     for (let j =0; j < array.length; j++){
//         if (array[j] === tempVar) {
//             counter++;
//         }
//     }
//     if (counter%2){
//         console.log(tempVar+' :is odd');
//         break;
//     }else {
//         console.log('even: ' + array[i]);
//     }
// }
//
// _____________________________________________________________
// 3.
// Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// let str1 = 'ANAGRAM';
// let str2 = 'MGANRAA';
//
// let chekStr1 = str1.split('').sort().join('');
// let chekStr2 = str2.split('').sort().join('');
// console.log(chekStr1);
// console.log(chekStr2);
//
// console.log(str1 + '|'+ str2 + ' -> '+ (chekStr1===chekStr2));
//
// _______________________________________________________________
// 4.
// Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
//let number = parseInt(prompt('Input your number: '));
// console.log(number);
// alert(isPow());
//
// function isPow(n = number, b = 2) {
//     console.log(number);
//     console.log(n);
//     let i =0;
//     if (n > 1) {
//         while (n % b === 0) {
//             n /= b;
//             i++;
//         }
//     }
//     console.log(`${number} = ${b} ** ${i}`);
//     return n === 1? `YES-> ${number} = ${b} ** ${i}`:'NO';
// }
//
// ______________________________________________________________
// 5.
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)
//
// let num = 3;
// let sumNumb = num;
// sum();
// function sum(n = num) {
//     if (n > 0) {
//         sumNumb += n - 1;
//         //console.log(sumNumb);
//         console.log(n);
//         sum(n-1);
//     }else{
//         console.log("Sum: " + sumNumb);
//     }
// }
//
// sumNumb = num;
// let sumN = (n = num) => {
//     if (n > 0) {
//         sumNumb += n - 1;
//         console.log(n);
//         sumN(n-1);
//     }else{
//         console.log("Sum: " + sumNumb);
//     }
// }
// sumN();
//
// ______________________________________________________________
// 6.
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// slet inputWord = prompt('Input your WORD:', "TENET");
//
// isPalindrom();
//
// function isPalindrom(word = inputWord) {
//     console.log(word);
//     let wordR = word.split('').reverse().join('');
//     console.log(word);
//     console.log(wordR);
//     return (word===wordR?alert('YES'):alert('NO'));
// }
//
// _______________________________________________________________
// 7.
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
//
// let numStr = '2176491947586100';
// let searchDigit = '1';
// let acumulator = '';
// let i = 0;
//
// for (const item of numStr.split('')) {
//     if (acumulator === '0' && item === '0') {
//         console.log(numStr+' -> ' + i);
//         break;
//     }
//     if (item === searchDigit) {
//         i++;
//     }
//     acumulator = item;
// }
//
// _________________________________________________________________
// 8.
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
//
// let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
// let newArr = [];
// let j = 0;
//
// for (let arrElem of array) {
//     if (Array.isArray(arrElem)) {
//         for (let arrElement of arrElem) {
//             if (Array.isArray(arrElement)) {
//                 for (const element of arrElement) {
//                     if (Array.isArray(element)) {
//                     } else {
//                         newArr.push(element);
//                     }
//                 }
//             } else {
//                 newArr.push(arrElement);
//             }
//         }
//     } else {
//         newArr.push(arrElem);
//     }
//     if (arrElem === array[array.length-1]) {
//         console.log(newArr);
//     }
// }
//===================2версія==========
// let arrLen = array.length - 1;
// function isArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             isArray(arr[i]);
//         }else {
//             newArr.push(arr[i]);
//         }
//     }
//     j++;
//     if(j === arrLen){
//         console.log(newArr);
//     }
// }
//
//
// ___________________________________________________________________
// 9.
// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88
//
// let arr = [1, 6, 9, 0, 17, 88, 4, 7];
//
// let value = arr.reduce((findValue, currentValue) => findValue > currentValue? findValue : findValue = currentValue);
//
// console.log(value);
//
// ____________________________________________________________________
// 10.
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
//================варіант1 ОК початок===============
//console.time('Time executing Program');
// let numMin = 10000;
// let numMax = 99999;
// let arr = [];
// let newArr =[];
// let acumulator = 0;
// let firstNum = 0;
// let secondNum = 0;
//
// // Time executing Program:  = 71251.05688476562 ms
// for (let i = numMax; i >= numMin; i -= 2) {
//     if (isPrime(i)) {
//         arr.push(i);
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         let chekStr = (arr[j] * arr[i]).toString();
//         if (isPalindrom(chekStr)) {
//             if (Number(chekStr) > acumulator) {
//                 acumulator = Number(chekStr);
//                 firstNum = arr[i];
//                 secondNum = arr[j];
//             }
//             newArr.push(Number(chekStr));
//         }
//     }
// }
// console.log(Math.max(...newArr));
// console.log(`Поліндром число: ${acumulator}; Перше число: ${firstNum}, Друге число: ${secondNum}`);
// console.timeEnd('Time executing Program');
//
//
// function isPrime(n) {
//     let i = 2;
//     const limit = Math.sqrt(n);
//     while (i <= limit) {
//         if (n % i === 0) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }
//
// function isPalindrom(word) {
//     let wordR = word.split('').reverse().join('');
//     return word === wordR;
// }
//=====================кінець==========
//
//
//=========================другий варіант ОК початок======================
//Time executing Program: 202626.77685546875 ms
//====================Робочий варіант
// for (let i = numMax; i >= numMin; i--) {
//     if (isPrime(i)) {
//         for (let j = numMax; j >= numMin; j--) {
//             if (isPrime(j)) {
//                 let chekStr = (j * i).toString();
//                 if (isPalindrom(chekStr)) {
//                     if(Number(chekStr) > acumulator){
//                         acumulator = Number(chekStr);
//                         firstNum = i;
//                         secondNum = j;
//                     }
//                     arr.push(Number(chekStr));
//                 }
//             }
//         }
//     }
// }
// console.log(Math.max(...arr));
// console.log(`Поліндром число: ${acumulator}; Перше число: ${firstNum}, Друге число: ${secondNum}`);
// console.timeEnd('Time executing Program');
//
// function isPrime(n) {
//     let i = 2;
//     const limit = Math.sqrt(n);
//     while (i <= limit) {
//         if (n % i === 0) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }
//
// function isPalindrom(word) {
//     let wordR = word.split('').reverse().join('');
//     return word === wordR;
// }
//=========================================== кінець======================

// Перший варіант неправильно працює
//for (let i = numMax; i >= numMin; i--) {
//     let chekStr = (i * i).toString();
//     if (isPalindrom(chekStr)) {
//         console.log('First: ' + i);
//         console.log('Second: ' + i);
//         console.log('Palindrom: ' + Number(chekStr));
//     } else {
//         chekStr = (i * (i - 1)).toString();
//         if (isPalindrom(chekStr)) {
//             console.log('2First: ' + i);
//             console.log('2Second: ' + Number(i-1));
//             console.log('2Palindrom: ' + Number(chekStr));
//         }
//     }
// }

// Другий варіант неправильно працює
//for (let i = numMax; i >= numMin; i--) {
//     for (let j = numMax; j >= numMin; j--) {
//         let chekStr = (j * i).toString();
//         if (isPalindrom(chekStr)) {
//             console.log('First: ' + i);
//             console.log('Second: ' + j);
//             console.log('Palindrom: ' + Number(chekStr));
//             triger = true;
//         }
//         if(triger){
//             break;
//         }
//     }
//     if(triger){
//         break;
//     }
// }
//
//
// ____________________________________________________________________
// 11.
// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
//
//let str = "Hello World";
// let arr = str.split('');
// console.log(arr);
// let i = 0;
//
// function play() {
//     var timeout = Math.round(Math.random() * 1000);
//     console.log(str[i] + ' ' + '0.' + timeout + 's');
//     document.write(str[i]);
//     i++;
//     if (i < str.length) {
//         setTimeout(play, timeout);
//     }
// }
//
// setTimeout(play, 1000);
//
//
