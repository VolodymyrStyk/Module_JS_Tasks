//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let num1 = prompt('Input num1');
let num2 = prompt('Input num2');
let num3 = prompt('Input num3');

// В порядку зростання
//
let a = num1 <= num2;
let b = num2 <= num3;
let c = num1 <= num3;

if (a && c) {
    console.log(num1);
    if (b) {
        console.log(num2);
        console.log(num3);
    } else {
        console.log(num3);
        console.log(num2);
    }
} else if (!a && b) {
    console.log(num2);
    if(c){
        console.log(num1);
        console.log(num3);
    }else{
        console.log(num3);
        console.log(num1);
    }
}else if (!b && !c) {
    console.log(num3);
    if(a){
        console.log(num1);
        console.log(num2);
    }else{
        console.log(num2);
        console.log(num1);
    }
}

// В порядку спадання
//
//let a = num1 >= num2;
//let b = num2 >= num3;
//let c = num1 >= num3;
//
// if (a && c) {
//     console.log(num1);
//     if (b) {
//         console.log(num2);
//         console.log(num3);
//     } else {
//         console.log(num3);
//         console.log(num2);
//     }
// } else if (!a && b) {
//     console.log(num2);
//     if(c){
//         console.log(num1);
//         console.log(num3);
//     }else{
//         console.log(num3);
//         console.log(num1);
//     }
// }else if (!b && !c) {
//     console.log(num3);
//     if(a){
//         console.log(num1);
//         console.log(num2);
//     }else{
//         console.log(num2);
//         console.log(num1);
//     }
// }