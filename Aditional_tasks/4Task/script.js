//Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO
// в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// let n = 10;
// (n !== 0) && ((n & (n - 1)) === 0) ? console.log('YES') : console.log('NO');
let number = parseInt(prompt('Input your number: '));
console.log(number);
alert(isPow());

function isPow(n = number, b = 2) {
    console.log(number);
    console.log(n);
    let i =0;
    if (n > 1) {
        while (n % b === 0) {
            n /= b;
            i++;
        }
    }
    console.log(`${number} = ${b} ** ${i}`);
    return n === 1? `YES-> ${number} = ${b} ** ${i}`:'NO';
}
