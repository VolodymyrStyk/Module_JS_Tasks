//Дан массив целых чисел, найдите тот,
// который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается
// нечетное количество раз [1,2,3,4,5,2,4,1,3] -> 5
let array =[1,2,3,4,5,2,4,1,3,5,5];

for (let i = 0; i < array.length; i++) {
let counter = 0;
let tempVar = array[i];
    for (let j =0; j < array.length; j++){
        if (array[j] === tempVar) {
            counter++;
        }
    }
    if (counter%2){
        console.log(tempVar+' :is odd');
        break;
    }else {
        console.log('even: ' + array[i]);
    }
}