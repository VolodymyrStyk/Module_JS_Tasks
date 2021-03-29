//Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)

let num = 3;
let sumNumb = num;
sum();
function sum(n = num) {
    if (n > 0) {
        sumNumb += n - 1;
        //console.log(sumNumb);
        console.log(n);
        sum(n-1);
    }else{
        console.log("Sum: " + sumNumb);
    }
}

sumNumb = num;
let sumN = (n = num) => {
    if (n > 0) {
        sumNumb += n - 1;
        console.log(n);
        sumN(n-1);
    }else{
        console.log("Sum: " + sumNumb);
    }
}
sumN();
