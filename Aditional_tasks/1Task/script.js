// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"


function divideNumbToParts(number) {
    if (typeof number === 'number') {
        let changeNumber = number.toString();
        let numZero = changeNumber.length;
        let numArr = changeNumber.split('');
        let newArr = [];
        for (let i = 0; i < numArr.length; i++) {
            newArr.push(numArr[i] * (10 ** (numArr.length - 1 - i)));
        }
        return number + ' -> ' + newArr.join(' + ');
    } else {
        return "Inputed variable is not a number";
    }
}