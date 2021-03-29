//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте,
// является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами,
// в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.


let inputWord = prompt('Input your WORD:', "TENET");

isPalindrom();

function isPalindrom(word = inputWord) {
    console.log(word);
    let wordR = word.split('').reverse().join('');
    console.log(word);
    console.log(wordR);
    return (word===wordR?alert('YES'):alert('NO'));
}