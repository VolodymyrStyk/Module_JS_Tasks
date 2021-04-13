// --створити масив та вивести його в консоль:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
/*
let arrayNumber = [0,1,2,4,8];
console.log(arrayNumber);
console.log(arrayNumber[0]);

let arrayString = ['a', 'world', 'JS', 'Happy', 'Life'];
console.log(arrayString);
console.log(arrayString[2]);

let arrayMix = ['abc',16,32,true, false];
console.log(arrayMix);
console.log(arrayMix[4]);*/

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
/*
let arr = [];
arr[3] = 'Ivan';
arr[0] = 'zero';
console.log(arr);
arr[4] = 4;
arr[1] = true;
arr[2] = false;
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr);*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/* for (let i = 0; i < 10; i++) {
     document.write(`<div>DIV</div>`);
}*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>'+i+' DIV'+'</div>');
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>'+'H1'+'</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>'+i+' H1'+'</h1>');
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (const number of array) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayString = ['one','abc','qwe','x','a','z','v','kamaz','lviv','auto'];
// for (const string of arrayString) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrayMix =[true,'abx',2,1,4,5,'false',false,5,'10'];
// for (const arrayMix1 of arrayMix) {
//     console.log(arrayMix1);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayMix =[true,'abx',2,1,4,5,'false',false,5,'10'];
// for (const arrayMix1 of arrayMix) {
//     if(typeof arrayMix1 === 'boolean'){
//         console.log(arrayMix1);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayMix =[true,'abx',2,1,4,5,'false',false,8,'10'];
// for (const arrayMix1 of arrayMix) {
//     if(typeof arrayMix1 === 'number'){
//         console.log(arrayMix1);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayMix =[true,'abx',2,1,4,5,'false',false,8,'10'];
// for (const arrayMix1 of arrayMix) {
//     if(typeof arrayMix1 === 'string'){
//         console.log(arrayMix1);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 3;
// arr[1] = 4;
// arr[2] = 'string';
// arr[3] = 'asd';
// arr[4] = true;
// arr[5] = 'zxc';
// arr[6] = false;
// arr[7] = true;
// arr[8] = 10;
// arr[9] = 'YES';
//
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i+'<br>');
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let cycleLength = 100;
// for (let i = 0; i < cycleLength; i++) {
//     console.log(i);
//     document.write(i+'<br>');
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let cycleLength = 100;
// for (let i = 0; i < cycleLength; i += 2) {
//     console.log(i);
//     document.write(i + '<br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let cycleLength = 100;
// for (let i = 0; i < cycleLength; i += 2) {
//     console.log(i);
//     document.write(i + '<br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let cycleLength = 100;
// for (let i = 0; i < cycleLength; i++) {
//     if(!(i%2)){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let cycleLength = 100;
// for (let i = 0; i < cycleLength; i++) {
//     if(i%2){
//         console.log(i);
//         document.write(i + '<br>');
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let quantitiMinutes = 2;
// let quaSecondsOneMinute = 60;
//
// for (let i = 0; i < quantitiMinutes; i++) {
//     console.log(i + ' minutes');
//     for (let j = 0; j < quaSecondsOneMinute; j++) {
//         console.log(i + ' M: ' + j + ' seconds');
//         if (i === 1 && j === 59) {
//             console.log('Past: 2Minutes')
//         }
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// let quaMinutesOneHour = 60;
// let quaSecondsOneMinute = 60;
// let quantitiHour = 2;
//
// for (let i = 0; i < quantitiHour; i++) {
//     console.log(i + ' hour');
//
//     for (let j = 0; j < quaMinutesOneHour; j++) {
//         console.log(j + ' minutes');
//
//         for (let k = 0; k < quaSecondsOneMinute; k++) {
//             console.log(i+' H: '+j+' M: ' +k + ' seconds');
//             if(i===1&&j===59&& k===59){
//                 console.log('Past: 2H');
//             }
//         }
//     }
// }


// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let string = '';
// for (let i =0; i < array.length; i++){
//     string +=array[i];
// }
// console.log(string);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let string = '';
// let i= 0;
// while (i < array.length){
//     string+=array[i];
//     i++;
// }
// console.log(string);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let string = '';
// for (const item of array) {
//     string += item;
// }
// console.log(string);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let string = '';
// for (const item of array) {
//     string += item;
// }
// console.log(string);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c'];
// const arrayLen = array.length;
// for (let i = 1; i <= arrayLen; i++) {
//     array.push(i);
// }
// console.log(array);

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3];
// let newArr = [];
// for (const item of array) {
//     newArr.unshift(item);
// }
// console.log(newArr);

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4);
// arr.unshift(5);
// arr.unshift(6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// document.write('<h1>' + arr.shift() + '</h1>');

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// document.write('<h1>' + arr.pop() + '</h1>');

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3,5);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,2);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,0,'a','b','c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = i;
// }
// for (const arrayElement of array) {
//     if (!(arrayElement%2)){
//         console.log(arrayElement);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = i;
// }
// console.log(array);
// let newArray = [];
// for (const item of array) {
//     newArray.push(item);
// }
// console.log(newArray);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = i;
// }
// console.log(array);
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i];
// }
// console.log(newArray);


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length){
//     console.log(array[i]);
//     i++;
// }

// 2. перебрати його циклом for
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length){
//     if (array[i] % 2){
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2){
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length){
//     if (!(array[i] % 2)){
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 2)){
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 3)){
//         array[i] = 'okten';
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

//==================================================================================================
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length-1;
// while (i >=0){
//     console.log(array[i]);
//     i--;
// }

// 9.2. перебрати його циклом for
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2) {
//         console.log(array[i]);
//     }
// }

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     if (!(array[i] % 2)) {
//         console.log(array[i]);
//     }
//     i--;
// }

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = array.length - 1; i >= 0; i--) {
//     if (!(array[i] % 2)) {
//         console.log(array[i]);
//     }
// }

// 9.7. замінити кожне число кратне 3 на слово "okten"
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (!(array[i] % 3)) {
//         array[i] = 'okten';
//     }
//     console.log(array[i]);
// }
// console.log(array);
//==================================================================================================

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for (let i = 0; (i >= array.length) && (array.length < 50); i++) {
//     if (!(i % 2)) {
//         array.push(i);
//     }
// }
// console.log(array);


// - заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// for (let i = 0; (i >= array.length) && (array.length < 50); i++) {
//     if (i % 2) {
//         array.push(i);
//     }
// }
// console.log(array);

//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let qNumb= parseInt(prompt('Input elements quantity: '));
// let array =[];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.random();
// }
// console.log(array);


//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let qNumb = parseInt(prompt('Input elements quantity: '));
// let array = [];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(array);

//  2. вывести на консоль  каждый третий елемент

// let qNumb = parseInt(prompt('Input elements quantity: '));
// let array = [];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     if (i % 3 === 0) {
//         console.log(array[i]);
//     }
// }

//  3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
// let qNumb = parseInt(prompt('Input elements quantity: '));
// let array = [];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     if ((i % 3 === 0) && (array[i] % 2 === 0)) {
//         console.log(array[i]);
//     }
// }

//  4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
//  записать их в другой массив.
// let qNumb = parseInt(prompt('Input elements quantity: '));
// let array = [];
// let newArray =[];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     if ((i % 4 === 0) && (array[i] % 2 === 0)) {
//         console.log(array[i]);
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);


//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let qNumb = parseInt(prompt('Input elements quantity: '));
// let array = [];
// let newArray =[];
// for (let i = 0; i < qNumb; i++) {
//     array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     if (array[i+1]%2 === 0){
//         console.log('Right element: '+array[i+1]);
//         console.log(array[i]);
//     }
// }
// console.log(newArray);

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//   обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let sum = 0;
// for (const element of array) {
//     sum += element;
// }
// let result = sum/array.length;
// console.log(result);

//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [2, 4, 6, 3, 2, 4, 5, 2, 3, 5];
// let newArr = [];
// for (const element of array) {
//     newArr.push(element*5);
// }
// console.log(array);
// console.log(newArr);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо об'єкт є числом,
//  додати його в інший масив.
// let arrayMix = [true, 1, 3, 5, 7, 2, 'asd', 'xzcs', 'asdq', 'zxcz', 5, 2, '1'];
// let newArrNumb = [];
// for (const arrItem of arrayMix) {
//     if (typeof arrItem === 'number') {
//         newArrNumb.push(arrItem);
//     }
// }
// console.log(arrayMix);
// console.log(newArrNumb);







