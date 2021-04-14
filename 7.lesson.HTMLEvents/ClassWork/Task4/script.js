// -- Взяти масив юзерів
// const usersWithAddress = [...];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

const usersWithAddress = [
    {
        id: 9,
        name: 'vasya',
        age: 31,
        isMarried: false,
        address: {city: 'Kyiv', street: 'Gongadze', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        isMarried: true,
        address: {city: 'Rivne', street: 'Zelena', number: 1}
    },
    {
        id: 4,
        name: 'kolya',
        age: 29,
        isMarried: true,
        address: {city: 'Lviv', street: 'Pasichna', number: 121}
    },
    {
        id: 3,
        name: 'olya',
        age: 28,
        isMarried: false,
        address: {city: 'Rivne', street: 'Shevchenko', number: 90}
    },
    {
        id: 8,
        name: 'max',
        age: 30,
        isMarried: true,
        address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        isMarried: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 10,
        name: 'oleg',
        age: 28,
        isMarried: false,
        address: {city: 'Kyiv', street: 'Centralna', number: 22}
    },
    {
        id: 5,
        name: 'andrey',
        age: 29,
        isMarried: true,
        address: {city: 'Lviv', street: 'Gorodotska', number: 43}
    },
    {
        id: 1,
        name: 'masha',
        age: 30,
        isMarried: true,
        address: {city: 'Kyiv', street: 'Peremogi', number: 12}
    },
    {
        id: 7,
        name: 'olya',
        age: 31,
        isMarried: false,
        address: {city: 'Lviv', street: 'Naukova', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        isMarried: true,
        address: {city: 'Rivne', street: 'Ivana Franka', number: 121}
    }
];

const divInput = document.createElement('div');
divInput.id = 'inputDiv';


let filterIsMaried = usersWithAddress.filter(value => value.isMarried);

const divInputMaried = document.createElement('div');
divInputMaried.id = 'maried';
const inputLabelMaried = document.createElement('label');
inputLabelMaried.setAttribute('for', 'isMaried');
inputLabelMaried.innerText = 'Is Maried:';
const inputIsMaried = document.createElement('input');
inputIsMaried.type = 'checkbox';
inputIsMaried.id = 'isMaried';
inputIsMaried.name = 'isMaried';

divInputMaried.appendChild(inputLabelMaried);
divInputMaried.appendChild(inputIsMaried);
divInput.appendChild(divInputMaried);
document.body.appendChild(divInput);


let filterIsOlder29 = usersWithAddress.filter(value => value.age >= 29);

const divInputOlder29 = document.createElement('div');
divInputOlder29.id = 'older29';
const inputLabelOlder29 = document.createElement('label');
inputLabelOlder29.setAttribute('for', 'isOlder29');
inputLabelOlder29.innerText = 'Is Older 29:';
const inputIsOlder29 = document.createElement('input');
inputIsOlder29.type = 'checkbox';
inputIsOlder29.id = 'isOlder29';
inputIsOlder29.name = 'isOlder29';

divInputOlder29.appendChild(inputLabelOlder29);
divInputOlder29.appendChild(inputIsOlder29);
divInput.appendChild(divInputOlder29);
document.body.appendChild(divInput);


let filterAddres = usersWithAddress.filter(value => value.address.city === 'Kyiv');

const divInputAddres = document.createElement('div');
divInputAddres.id = 'address';
const inputLabelAddres = document.createElement('label');
inputLabelAddres.setAttribute('for', 'addressKyiv');
inputLabelAddres.innerText = 'Address Kyiv:';
const inputIsAddres = document.createElement('input');
inputIsAddres.type = 'checkbox';
inputIsAddres.id = 'addressKyiv';
inputIsAddres.name = 'address';

divInputAddres.appendChild(inputLabelAddres);
divInputAddres.appendChild(inputIsAddres);
divInput.appendChild(divInputAddres);
document.body.appendChild(divInput);


const checkBtn = document.createElement('button');
checkBtn.id = 'btn-chek';
checkBtn.innerText = 'check';
checkBtn.style.marginTop = '10px';
divInput.appendChild(checkBtn);
document.body.appendChild(divInput);

checkBtn.onclick = (event) => {
    let result = usersWithAddress;
    console.log(inputIsMaried.checked);
    if(inputIsMaried.checked){
        result = isMaried(result);
    }
    if(inputIsOlder29.checked){
        result = older29(result);
    }
    if(inputIsAddres.checked){
        result = addressKyiv(result);
    }
    drawUsers(result);
};

const divUsers = document.createElement('div');
divUsers.id = 'mainUsers';

function drawUsers(obj) {
    divUsers.innerText = '';
    const users = document.createElement('div');
    users.id = 'users';
    users.style.display = 'flex';
    users.style.flexWrap = 'wrap';
    users.style.justifyContent = 'space-between';
    for (const element of obj) {
        const userDiv = document.createElement('div');
        userDiv.id = 'userDiv';
        userDiv.style.border = '1px solid red';
        userDiv.style.padding = '10px';
        userDiv.style.minWidth = '150px';
        userDiv.style.marginTop = '20px';
        for (const key in element) {
            const userInfo = document.createElement('div');
            if (key === 'address') {
                userInfo.innerText = `${key}: `;
                userDiv.appendChild(userInfo);
                for (const keyKey in element[key]) {
                    const userAdd = document.createElement('div');
                    userAdd.innerText = `${keyKey}: ${element[key][keyKey]},`;
                    userInfo.appendChild(userAdd);
                    userDiv.appendChild(userInfo);
                }
            } else {
                userInfo.innerText = `${key}: ${element[key]},`;
                userDiv.appendChild(userInfo);
            }
        }
        users.appendChild(userDiv);
    }
    divUsers.appendChild(users);
    document.body.appendChild(divUsers);
}

drawUsers(usersWithAddress);

function isMaried(arr) {
    return arr.filter(value => value.isMarried);
}

function older29(arr) {
    return arr.filter(value => value.age >= 29);
}

function addressKyiv(arr) {
    return arr.filter(value => value.address.city === 'Kyiv');
}
