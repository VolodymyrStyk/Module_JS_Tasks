//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
//

const idContent = document.getElementById('content'); //
let textIdContent = idContent.textContent; // a)
const idRules = document.getElementById('rules');
let textIdRules = idRules.textContent;// b

idContent.innerText = 'Hello Kitty!!! ;)'; // c)
idRules.innerText = 'Rules'; // d)

let allElements = document.body.getElementsByTagName('*');
for (const element of allElements) {
    element.style.backgroundColor = '#c42e2e'; // e)
    element.style.color = '#002367'; // f)
}

console.log(idRules.classList); //  g)
console.log(idRules.classList[0] + ' ' + idRules.classList[1]);

let allClassFcRules = document.getElementsByClassName('fc_rules'); // h)
for (const element of allClassFcRules) {
    element.style.color = 'red'; // (i
}

//
// 2) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//
// 2) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

//Заповнюємо за допомогою масива і темплейт стрінги без вкладень

for (const user of users) {
    let divUser = document.createElement('div');

    divUser.style.backgroundColor = 'black';
    divUser.style.color = 'gold';
    divUser.style.margin = '20px';
    divUser.style.padding = '10px';
    divUser.style.fontSize = '25px';

    divUser.innerHTML = `
    User name: ${user.name.charAt(0).toUpperCase()}${user.name.slice(1)},<br>
    User age: ${user.age},<br>
    User status: ${user.status},<br>
    User address:<br>
    &nbsp;&nbsp;&nbsp;&nbsp; city: ${user.address.city},<br>
    &nbsp;&nbsp;&nbsp;&nbsp; country: ${user.address.country},<br>
    &nbsp;&nbsp;&nbsp;&nbsp; street: ${user.address.street} ${user.address.houseNumber}`;

    document.body.appendChild(divUser);
}

// 3) За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//Заповнюємо за допомогою масива і темплейт стрінги окремо діви для першого рівня обєкта окремо для другого
for (const user of users) {
    //console.log(user);
    let divUser = document.createElement('div');

    divUser.style.backgroundColor = '#2a048d';
    divUser.style.color = 'gold';
    divUser.style.margin = '20px';
    divUser.style.padding = '10px';
    divUser.style.fontSize = '25px';

    divUser.innerHTML = `
    User name: ${user.name.charAt(0).toUpperCase()}${user.name.slice(1)},<br>
    User age: ${user.age},<br>
    User status: ${user.status},<br>`;
    document.body.appendChild(divUser);

    let divUserAdd = document.createElement('div');

    divUserAdd.style.backgroundColor = '#1d0953';
    divUserAdd.style.color = 'gold';
    divUserAdd.style.margin = '20px';
    divUserAdd.style.padding = '10px';
    divUserAdd.style.fontSize = '25px';

    divUserAdd.innerHTML = `
    City: ${user.address.city},<br>
    Country: ${user.address.country},<br>
    Street : ${user.address.street}${user.address.houseNumber},<br>`;
    document.body.appendChild(divUserAdd);

}


//=======================
//Заповнюємо за допомогою масивів і темплейт стрінги окремо діви для першого рівня і для другого реалізуємо гнучкість.
for (let i = 0; i < users.length; i++) {
    //console.log(users[i]);
    let divUserAll = document.createElement('div');
    divUserAll.classList.add('user');

    divUserAll.style.backgroundColor = '#7c0505';
    divUserAll.style.color = 'gold';
    divUserAll.style.margin = '20px';
    divUserAll.style.padding = '10px';
    divUserAll.style.fontSize = '25px';

    for (const usersKey in users[i]) {
        let idUser = document.createElement('div');

        let userValue = usersKey;
        let userValueProp = users[i][usersKey];

        if (usersKey === 'address') {
            idUser.innerHTML = `${userValue} :`
            divUserAll.appendChild(idUser);
            document.body.appendChild(divUserAll);

            for (const key in users[i][usersKey]) {
                let divUserAddres = document.createElement('div');
                divUserAddres.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${key} : ${users[i][usersKey][key]}`
                idUser.appendChild(divUserAddres);
                divUserAll.appendChild(idUser);
                divUserAll.appendChild(idUser);
                document.body.appendChild(divUserAll);
            }
        }else{
            idUser.innerHTML = `${userValue} : ${userValueProp}`
            divUserAll.appendChild(idUser);
            document.body.appendChild(divUserAll);
        }
    }
}



