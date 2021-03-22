// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
//     Для фамилии имени и отчества создать разные переменные.
//     Вывести каждую при помощи console.log , alert, document.write
const surName = prompt("Input Your Sur Name: ");
const name = prompt("Input Your Name: ");
const fatherName = prompt("Input Your Father Name: ");
let division = " ";

console.log(surName);
console.log(name);
console.log(fatherName);

alert(surName);
alert(name);
alert(fatherName);

document.write(`<h1>${surName}</h1>`);
document.write(`<h1>${name}</h1>`);
document.write(`<h1>${fatherName}</h1>`);

