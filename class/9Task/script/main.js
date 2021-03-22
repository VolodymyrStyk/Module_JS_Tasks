//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';

let concatenation = str1 + str2 + str3;

document.write('<h1>' + concatenation + '</h1>');
