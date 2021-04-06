//1) створити функцію яка приймає масив та виводить його

// function reciveArr(arr){
//     console.log(arr)
//     return arr;
// }
// let array = ['one',2,true];
// //let result = reciveArr(array);
// //console.log(result);

// ============================================================================================
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randomArr(arr=[]){
//     for (let i = 0; i < 10; i++) {
//         let randNum = Math.floor(Math.random()*100);
//         arr[i] = randNum;
//     }
//     reciveArr(arr);
//     return arr;
// }
// let randomArrList = randomArr();
// //console.log(randomArrList);
// ============================================================================================
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumb(num1, num2, num3) {
//     //console.log((num1 > num2)? (num1>num3)? console.log(num1):console.log(num3) :(num2>num3)?console.log(num2):console.log(num3));
//     // console.log(num1);
//     // console.log(num2);
//     // console.log(num3);
//     // повертаємо іфами ==================
//     if (num1 < num2 && num1 < num3) return num1;
//     if (num2 < num1 && num2 < num2) return num2;
//     if (num3 < num1 && num3 < num2) return num3;
//
//     //повертаємо тернаркою =================
//     // return ((num1 < num2 && num1 < num3) ? num1 :
//     //     (num2 < num1 && num2 < num3) ? num2 : num3);
// }
//
// let min = minNumb(13, 33, 3);
// console.log(min);
// ============================================================================================
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumb(num1, num2, num3) {
//     //console.log((num1 > num2)? (num1>num3)? console.log(num1):console.log(num3) :(num2>num3)?console.log(num2):console.log(num3));
//     // console.log(num1);
//     // console.log(num2);
//     // console.log(num3);
//     // повертаємо іфами ==================
//     // if (num1 > num2 && num1 > num3) return num1;
//     // if (num2 > num1 && num2 > num2) return num2;
//     // if (num3 > num1 && num3 > num2) return num3;
//
//     //повертаємо тернаркою =================
//     return ((num1 > num2 && num1 > num3) ? num1 :
//         (num2 > num1 && num2 > num3) ? num2 : num3);
// }
//
// let max = maxNumb(323, 33, 3);
// console.log(max);

// ============================================================================================
// 5) створити функцію яка повертає найбільше число з масиву

// function maxNumArr(arr){
//     // //максимальне число черз Math.max
//     //let maxNum = Math.max(...arr);
//     //console.log(maxNum);
//     //return maxNum;
//     //максимальне число черз масив
//
//     let acum = 0;
//     for (const element of arr) {
//         if(element > acum){
//             acum = element;
//         }
//     }
//     return acum;
// }
// let array = [1,2,5,3,1,545,2,2];
// let maxNumA = maxNumArr(array);
// console.log(maxNumA);

// ============================================================================================
// 6) створити функцію яка повертає найменьше число з масиву

// function minNumArr(arr){
//     // //максимальне число черз Math.max
//     // let minNum = Math.min(...arr);
//     // //console.log(maxNum);
//     // return minNum;
//     // //максимальне число черз масив
//     let acum = arr[0];
//     for (const element of arr) {
//         if(element < acum){
//             acum = element;
//         }
//     }
//     return acum;
// }
// let array = [122,2,5,3,2,545,2,2];
// let minNumA = minNumArr(array);
// console.log(minNumA);
// ============================================================================================

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArray(arr){
//     //рахуємо через цикл
//     // let sum = 0;
//     // for (const element of arr) {
//     //     sum +=element
//     // }
//     // return sum;
//     //рахуємо через редюсер
//     const reducer = (acum,currentValue) => acum +currentValue;
//     let sum = arr.reduce(reducer);
//     return sum;
// }
// let array = [122,2,5,3,2,545,2,2];
// sumNumArr = sumArray(array);
// console.log(sumNumArr);

// ============================================================================================
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arrayAverage(arr){
//     //рахуємо через цикл
//     let sum = 0;
//     let averageNum = 0;
//     for (const element of arr) {
//         sum +=element
//     }
//     averageNum = sum/arr.length
//     return averageNum;
//     //рахуємо через редюсер
//     // const reducer = (acum, curVal) => acum+curVal;
//     // let sum = arr.reduce(reducer);
//     // let averageNum = sum/arr.length
//     // return averageNum;
//
// }
// let array = [122,2,5,3,2,545,2,2];
// averageNum = arrayAverage(array);
// console.log(averageNum);

// ============================================================================================
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keyArr = parseKey(array);
// console.log(keyArr);
//
// function parseKey(array) {
//     let keyArr = [];
//     for (let i = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             keyArr.push(key);
//             //console.log(key);
//         }
//     }
//     return keyArr;
// }

// ============================================================================================
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keyArr = parseKey(array);
// console.log(keyArr);
//
// function parseKey(array) {
//     let keyArr = [];
//     for (let i = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             keyArr.push(array[i][key]);
//             //console.log(key);
//         }
//     }
//     return keyArr;
// }

// ============================================================================================
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function addArray() {
//     let newArr = [];
//     //console.log(arguments);
//     // for (let i = 0; i < arguments[0].length; i++) {
//     //     let multi = arguments[0][i] + arguments[1][i];
//     //     console.log(multi);
//     //     console.log(arguments[0][i]);
//     //     newArr.push(multi);
//     // }
//     // console.log(newArr);
// //===========================================
// //============= Робимо трохи диамічним==============
//     let multi = 0;
//     for (let i = 0; i < arguments[0].length; i++) {
//         for (let j = 0; j < arguments.length; j++) {
//             multi += arguments[j][i];
//         }
//         console.log(multi);
//         newArr.push(multi);
//         multi = 0;
//     }
//     console.log(newArr);
//     return newArr;
// }
//
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let arr3 = [4, 4, 5, 6];
// let arr4 = [1, 1, 1, 1];
//
// addArray(arr1, arr2, arr3,arr4);


// ============================================================================================
//
// ==2.1- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minNum() {
//     console.log(arguments);
//     let min = arguments[0];
//     for (const element of arguments) {
//         if(min > element){
//             min = element;
//         }
//     }
//     console.log(min);
//     return min;
// }
//
// let num1 = 4;
// let num2 = 3;
// let num3 = 5;
// let num4 = 21;
// let num5 = 6;
// let minimumNumber = minNum(num1,num2,num3,num4,num5);

//==================================================================================================
// 2.2  - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let parseArr = parseArayObj(array);
// console.log(parseArr);
//
// function parseArayObj(array) {
//     let userAnswer = prompt('What you want return key or value or all', 'all');
//     let keyArr = [];
//     let valArr = [];
//     if ('key' === userAnswer || userAnswer === 'all') {
//         for (let i = 0; i < array.length; i++) {
//             for (const key in array[i]) {
//                 keyArr.push(key);
//                 //console.log(key);
//             }
//         }
//     }
//     if ('value' === userAnswer || userAnswer === 'all') {
//         for (let i = 0; i < array.length; i++) {
//             for (const key in array[i]) {
//                 valArr.push(array[i][key]);
//                 //console.log(valArr);
//             }
//         }
//     }
//     //console.log(`${keyArr} ${valArr}`);
//     if (userAnswer === 'key') return keyArr;
//     if (userAnswer === 'value') return valArr;
//     if (userAnswer === 'all') return (`KEYS: ${keyArr} | VALUES: ${valArr}`);
//
// }

//================================================================================================


// 2.3 - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let pos = 0;
// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// let chPos = changePos(arr,pos);
// console.log(chPos);
//
// function changePos(arr,i){
//     let copy = arr[i];
//     let copyCh = arr[i+1];
//     //console.log(arr[i]);
//     //console.log(arr[i+1]);
//
//     arr[i] = copyCh;
//     arr[i + 1] = copy;
//     //console.log(arr[i]);
//     //console.log(arr[i+1]);
//     return arr;
// }
//================================================================================================
//
// 2.4- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Довожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//

// let array = [1,0,6,0,3,6,0,3,6,0,3,6,0,3,6,0,3,6,0,3,6,0,3];
// let result = zeroFilter(array);
// console.log(result);
// console.table(result);
//
// function zeroFilter(arr){
//     if(arr.length >= 2 && arr.length <=200){
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === 0){
//                 let acum = arr.splice(i,1);
//                 arr.push(acum[0]);
//             }
//         }
//     }
//     return arr;
// }


//================================================================================================
// 2.5.- Дано список імен.
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
// //let n1Trim = n1.replace(/\s+/g,' ').trim();
// //============
// change = n1.split(' ');
// newArr = []
// for (let i = 0; i < change.length; i++) {
//     if (!(change[i] === '')) {
//         newArr.push(change[i]);
//         newArr.push(' ');
//     }
// }
// let norm = newArr.join('').trim();
// console.log(norm);


// 2.6. Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1V = 'Harry Potter'
// let n2V = 'Ron Whisley'
// let n3V = 'Hermione Granger'
//
//
// function validateName(name) {
//     let validName = name.split(' ');
//     newArr = []
//     for (let i = 0; i < validName.length; i++) {
//         if (!(validName[i] === '')) {
//             newArr.push(validName[i]);
//             newArr.push(' ');
//         }
//     }
//     let valid = newArr.join('').trim();
//     //console.log(valid);
//     return valid;
// }
// let n1 = '    Harry       Potter      ';
// let validN1 = validateName(n1);
// console.log(`${validN1} === ${n1V}`);
// console.log(validN1 === n1V);
// let n2 = '    Ron       Whisley      ';
// let validN2 = validateName(n2);
// console.log(`${validN2} === ${n2V}`);
// console.log(validN2 === n2V);
// let n3 = '    Hermione       Granger      ';
// let validN3 = validateName(n3);
// console.log(`${validN3} === ${n3V}`);
// console.log(validN3 === n3V);


// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
//  - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

// function htmlCreator(elemName, elemText) {
//     //=========Hello owu
//     let userHello = 'Hello  owu';
//     let userElem = document.createElement('div');
//     userElem.innerText = userHello;
//     document.body.appendChild(userElem);
//     //=======userElem userText
//     let helloDiv = document.createElement(typeElement);
//     helloDiv.innerText = textHello;
//     document.body.appendChild(helloDiv);
// }
// let typeElement = 'h1'
// let textHello = 'Hello Volodymyr';
// htmlCreator(typeElement, textHello);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
// let carIdElem = document.createElement('div');
// carIdElem.id = 'cars';
// document.body.appendChild(carIdElem);
//
// function htmlCreator(carrArr, id) {
//     for (const car of carrArr) {
//         let carItem = document.createElement('div');
//         carItem.classList.add('car-' + car.name.toLowerCase());
//         document.getElementById(id).appendChild(carItem);
//         carItem.style.border = '1px solid red';
//
//         for (const carProp in car) {
//
//             if (typeof car[carProp] !== 'object') {
//                 console.log(car[carProp]); //car name
//                 let carName = document.createElement('div');
//                 carName.classList.add(car.name.toLowerCase());
//                 carName.innerText = `${car[carProp]}`;
//                 carItem.appendChild(carName);
//                 document.getElementById(id).appendChild(carItem);
//                 document.body.appendChild(carIdElem);
//             }
//
//             if (typeof car[carProp] === 'object') {
//                 console.log(carProp); //car properties title
//                 let carProperties = document.createElement('div');
//                 carProperties.classList.add(car.name.toLowerCase()+'-'+carProp);
//                 carProperties.innerText = `${carProp} :
//                 `;
//                 carItem.appendChild(carProperties);
//                 document.getElementById(id).appendChild(carItem);
//                 document.body.appendChild(carIdElem);
//
//                 for (const carProperty in car[carProp]){
//                     //console.log(carProperty);
//                     //console.log(car[carProp][carProperty]);
//
//                     let carPropertie = `${carProperty}: ${car[carProp][carProperty]},  `;
//                     console.log(carPropertie);
//                     //carPropertie.classList.add(car.name.toLowerCase()+'-'+carProp+'-'+carProperty);
//                     //carPropertie.innerText = `${carProperty}: ${car[carProp][carProperty]}`;
//                     carProperties.append(carPropertie);
//                     carItem.appendChild(carProperties);
//                     document.getElementById(id).appendChild(carItem);
//                     document.body.appendChild(carIdElem);
//                 }
//             }
//         }
//
//     }
//
//     document.body.appendChild(document.getElementById(id));
// }
//
//
// let carsArray = [
//     {
//         name: 'Ford',
//         properties: {
//             model: 'Focus',
//             color: 'White',
//             engine: 'diesel',
//             speed: 300
//         }
//     },
//     {
//         name: 'Opel',
//         properties: {
//             model: 'Astra',
//             color: 'Black',
//             engine: 'diesel',
//             speed: 310
//         }
//     }, {
//         name: 'Renault',
//         properties: {
//             model: 'Megan',
//             color: 'Silver',
//             engine: 'diesel',
//             speed: 290
//         }
//     }, {
//         name: 'Volkswagen',
//         properties: {
//             model: 'Golf',
//             color: 'Green',
//             engine: 'benzin',
//             speed: 330
//         }
//     }, {
//         name: 'Audi',
//         properties: {
//             model: 'A6',
//             color: 'Dark Gray',
//             engine: 'benzin',
//             speed: 350
//         }
//     }];
// let idCarArray = 'cars';
// let result = htmlCreator(carsArray, idCarArray);
//

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

// let carIdElem = document.createElement('div');
// carIdElem.id = 'cars';
// document.body.appendChild(carIdElem);
//
// function htmlCreator(carrArr, id) {
//     for (const car of carrArr) {
//         let carItem = document.createElement('div');
//         carItem.classList.add('car-' + car.name.toLowerCase());
//         document.getElementById(id).appendChild(carItem);
//         carItem.style.border = '1px solid red';
//
//         for (const carProp in car) {
//
//             if (typeof car[carProp] !== 'object') {
//                 console.log(car[carProp]); //car name
//                 let carName = document.createElement('div');
//                 carName.classList.add(car.name.toLowerCase());
//                 carName.innerText = `${car[carProp]}`;
//                 carItem.appendChild(carName);
//                 document.getElementById(id).appendChild(carItem);
//                 document.body.appendChild(carIdElem);
//             }
//
//             if (typeof car[carProp] === 'object') {
//                 console.log(carProp); //car properties title
//                 let carProperties = document.createElement('div');
//                 carProperties.classList.add(car.name.toLowerCase()+'-'+carProp);
//                 carProperties.innerText = `${carProp}: `;
//                 carItem.appendChild(carProperties);
//                 document.getElementById(id).appendChild(carItem);
//                 document.body.appendChild(carIdElem);
//
//                 for (const carProperty in car[carProp]){
//                     //console.log(carProperty);
//                     //console.log(car[carProp][carProperty]);
//
//                     let carPropertie = document.createElement('div');
//                     console.log(carPropertie);
//                     carPropertie.classList.add(car.name.toLowerCase()+'-'+carProp+'-'+carProperty);
//                     carPropertie.innerText = `${carProperty}: ${car[carProp][carProperty]}`;
//                     carProperties.append(carPropertie);
//                     carItem.appendChild(carProperties);
//                     document.getElementById(id).appendChild(carItem);
//                     document.body.appendChild(carIdElem);
//                 }
//             }
//         }
//     }
//     document.body.appendChild(carIdElem);
// }
//
//
// let carsArray = [
//     {
//         name: 'Ford',
//         properties: {
//             model: 'Focus',
//             color: 'White',
//             engine: 'diesel',
//             speed: 300
//         }
//     },
//     {
//         name: 'Opel',
//         properties: {
//             model: 'Astra',
//             color: 'Black',
//             engine: 'diesel',
//             speed: 310
//         }
//     }, {
//         name: 'Renault',
//         properties: {
//             model: 'Megan',
//             color: 'Silver',
//             engine: 'diesel',
//             speed: 290
//         }
//     }, {
//         name: 'Volkswagen',
//         properties: {
//             model: 'Golf',
//             color: 'Green',
//             engine: 'benzin',
//             speed: 330
//         }
//     }, {
//         name: 'Audi',
//         properties: {
//             model: 'A6',
//             color: 'Dark Gray',
//             engine: 'benzin',
//             speed: 350
//         }
//     }];
// let idCarArray = 'cars';
// let result = htmlCreator(carsArray, idCarArray);


// // ******************* НАЗАД В МИНУЛЕ *********************** //


//================ Реалізація через функції=================================

// let carIdElem = document.createElement('div');
// carIdElem.id = 'cars';
// document.body.appendChild(carIdElem);
//
// function isObject(obj) {
//     return (typeof obj === 'object');
// }
//
// function searchObj(obj,carItem) {
//     //console.log(obj);
//     for (const objKey in obj) {
//         if (isObject(obj[objKey])) {
//             //console.table(objKey);
//             let itemDiv = document.createElement('div');
//             let text = itemDiv.innerText = `${objKey}:`;
//             drawElement(text,carItem);
//             //carItem.appendChild(itemDiv);
//             searchObj(obj[objKey],carItem);
//         } else {
//             //console.table(objKey, obj[objKey]);
//             let itemDiv = document.createElement('div');
//             let text = itemDiv.innerText = `${objKey}: ${obj[objKey]}`;
//             //console.log(text);
//             //console.log(carItem);
//             drawElement(text,carItem)
//             //carItem.appendChild(itemDiv);
//         }
//     }
// }
//
// function drawElement(str,place){
//     console.log(str);
//     console.log(place);
//     let newDiv = document.createElement('div');
//     newDiv.innerText = str;
//     place.appendChild(newDiv);
//     carIdElem.append(place);
// }
//
//
// function htmlCreator(carrArr, id) {
//
//     for (const car of carrArr) {
//         let carItem = document.createElement('div');
//         carItem.classList.add('car-' + car.name.toLowerCase());
//         let className = 'car-' + car.name.toLowerCase();
//         document.getElementById(id).appendChild(carItem);
//         carItem.style.border = '1px solid red';
//         if (isObject(car)) {
//             searchObj(car,carItem);
//         }
//         document.body.appendChild(carIdElem);
//     }
// }
//
// let carsArray = [
//     {
//         name: 'Ford',
//         properties: {
//             model: 'Focus',
//             color: 'White',
//             engine: 'diesel',
//             speed: 300
//         }
//     },
//     {
//         name: 'Opel',
//         properties: {
//             model: 'Astra',
//             color: 'Black',
//             engine: 'diesel',
//             speed: 310
//         }
//     }, {
//         name: 'Renault',
//         properties: {
//             model: 'Megan',
//             color: 'Silver',
//             engine: 'diesel',
//             speed: 290
//         }
//     }, {
//         name: 'Volkswagen',
//         properties: {
//             model: 'Golf',
//             color: 'Green',
//             engine: 'benzin',
//             speed: 330
//         }
//     }, {
//         name: 'Audi',
//         properties: {
//             model: 'A6',
//             color: 'Dark Gray',
//             engine: 'benzin',
//             speed: 350
//         }
//     }];
// let idCarArray = 'cars';
// let result = htmlCreator(carsArray, idCarArray);
//
//
// //========= обєкт для перевірки рекурсивності
// // let idCarArray = 'cars';
// let carsArrays = [
//      {
//          name: 'Ford',
//          properties: {
//              model: 'Focus',
//              color: 'White',
//              engine: 'diesel',
//              speed: {
//                  low: 300,
//                  higth: 500,
//                  averenge: {
//                      max: true,
//                      min: false
//                  }
//              }
//          }
//      }];
//  console.log(htmlCreator(carsArrays, idCarArray));

//================================================================================================

//============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//

// function pow(n) {
//     if (typeof n ==='number' && !isNaN(n)){
//     console.log(n);
//     i++;
//     return (!(n % 2) ? pow(n / 2):
//     (n===1)?  `Yes ${userNum} -> 2** ${i-1}`: 'No');
//     }else {
//         return 'No';
//     }
// }
// let userNum = parseInt(prompt('Check if number is power of two','1024'));
// let i = 0;
// alert(pow(userNum));

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
//=========копіювання через JSON
// function deepCopy(obj) {
//     //console.log(obj);
//     let newObj = JSON.parse(JSON.stringify(obj));
//     //console.log(newObj);
//     return newObj;
// }
//
// let carsArray = [
//     {
//         name: 'Ford',
//         model: 'Focus',
//         color: 'White',
//         engine: 'diesel',
//         speed: 300
//     }, {
//         name: 'Opel',
//         model: 'Astra',
//         color: 'Black',
//         engine: 'diesel',
//         speed: 320
//     }, {
//         name: 'Renualt',
//         model: 'Megane',
//         color: 'Silver',
//         engine: 'diesel',
//         speed: 310
//     },]
// let newObjectCars = deepCopy(carsArray);
// console.log(carsArray);
// console.log(newObjectCars);
// carsArray[0].name = 'Audi';

//=========копіювання через Функцію
// function copy(mainObj) {
//     let objCopy = {}; // objCopy копія mainObj
//
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key]; // копія кожної властивості objCopy
//     }
//     return objCopy;
// }
//
// const mainObj = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     },
// }
// let newObjectCars = copy(mainObj);
// console.log(newObjectCars);
// mainObj.a = 55;
// console.log(mainObj);
// console.log(newObjectCars);


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
//
// function flatting(arr) {
//     for (const element of arr) {
//         if(Array.isArray(element)){
//             arr = arr.flat();
//             //console.log(arr);
//             flatting(arr);
//         }
//     }
//     return arr;
// }
//
// let newArray = flatting(array);
// console.log(newArray);
// //=======================================
//
// let array2 = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
// function flattenDeep(arr1) {
//     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }
// let newArray2 = flattenDeep(array2);
// console.log(newArray2);

