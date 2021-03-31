//Реалізувати друкарську машинку.
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

let str = "Hello World";
let arr = str.split('');
console.log(arr);
let i = 0;

function play() {
    let timeout = Math.round(Math.random() * 1000);
    console.log(str[i] + ' ' + '0.' + timeout + 's');
    document.write(str[i]);
    i++;
    if (i < str.length) {
        setTimeout(play, timeout);
    }
}

setTimeout(play, 1000);

// let id = setInterval(function() {
//     for ( i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if (i === arr.length - 1) {
//             clearInterval(id);
//         }
//     }
// }, 1000);