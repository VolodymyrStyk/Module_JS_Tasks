//Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих
// пятизначних чисел.

console.time('Time executing Program');
let numMin = 10000;
let numMax = 99999;
let arr = [];
let newArr =[];
let acumulator = 0;
let firstNum = 0;
let secondNum = 0;

// Time executing Program:  = 71251.05688476562 ms
for (let i = numMax; i >= numMin; i -= 2) {
    if (isPrime(i)) {
        arr.push(i);
    }
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        let chekStr = (arr[j] * arr[i]).toString();
        if (isPalindrom(chekStr)) {
            if (Number(chekStr) > acumulator) {
                acumulator = Number(chekStr);
                firstNum = arr[i];
                secondNum = arr[j];
            }
            newArr.push(Number(chekStr));
        }
    }
}
console.log(Math.max(...newArr));
console.log(`Поліндром число: ${acumulator}; Перше число: ${firstNum}, Друге число: ${secondNum}`);
console.timeEnd('Time executing Program');


function isPrime(n) {
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

function isPalindrom(word) {
    let wordR = word.split('').reverse().join('');
    return word === wordR;
}


//========================= початок======================
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