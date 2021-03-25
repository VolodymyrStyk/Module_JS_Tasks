//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let surName = prompt("Input Your Sur Name: ");
let name = prompt("Input Your Name: ");
let fatherName = prompt("Input Your Father Name: ");
let division = " ";
let person = surName + division + name + division + fatherName;

let family = [person];

let familyObj = {};
familyObj['surName'] = surName;
familyObj['name'] = name;
familyObj['fatherName'] = fatherName;

console.log(person);
console.log(family);
console.log(familyObj);

alert(person);

document.write("<h1>"+person+"</h1>");