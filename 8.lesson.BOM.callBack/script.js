// //- Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
document.getElementById('task1');
let inputTextArea = document.getElementById('input-text-area');
inputTextArea.innerText = localStorage.getItem('textArea');
let inputedTextArea = '';
let keyTextArea = 'textArea';
inputTextArea.oninput = (event) => {
    inputedTextArea = event.target.value;
    localStorage.setItem(keyTextArea, inputedTextArea);
};
//
//==================================================================================================
//
// //- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.
let key2 = '';
let value2 = '';
const formTask2 = document.getElementById('form-task2');

let allNames = formTask2.querySelectorAll('textarea,input,select');
let arrKeys = [];
allNames.forEach(value => {
    arrKeys.push(value.id);
});
//заповнюємо дані з localStorage, якщо вони є. Створюємо умови для radio і checkbox
arrKeys.forEach((value, index) => {
    formTask2[index].value = localStorage.getItem(value);
    if (formTask2[index].type === 'checkbox' && localStorage.getItem(value) === 'true') {
        formTask2[index].checked = true;
    }
    if (formTask2[index].type === 'radio'&& localStorage.getItem(value) === 'true') {
        formTask2[index].checked = true;
    }
});
// //Беремо дані з форм і записуємо в LocalStorage. Створюємо умови запису для radio i checkbox
// //для radio зчитуємо інфу при нажаті на будь-який радіо, з кожного radio і заносимо її в сторедж
// //кожен раз оновлюємо дані.
formTask2.oninput = (event) => {
    key2 = event.target.id;
    value2 = event.target.value;
    localStorage.setItem(key2, value2);
    if (event.target.type === 'radio') {
        formTask2.gender.forEach((value, index) =>{
            value.checked = event.target.id === value.id;
            key2 = value.id;
            value2 = value.checked;
            localStorage.setItem(key2, value2);
        });
    }
    if (event.target.type === 'checkbox') {
        key2 = event.target.id;
        value2 = event.target.checked;
        localStorage.setItem(key2, value2);
    }
}
//
//==================================================================================================
//
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
//  по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

document.getElementById('task3');
let lastIndex = localStorage.getItem('lastIndex');
let keyNum = Number(lastIndex)+1;
let currentIndex = localStorage.getItem('currentIndex');
let keyValue = `${keyNum}userText`;
let textValue = '';
let userText = document.getElementById('userText');
const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clearHistory');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');

userText.innerText = localStorage.getItem(`${currentIndex}userText`);
saveBtn.onclick = (event) => {
    keyValue = `${keyNum}userText`;
    textValue = userText.value;
    localStorage.setItem(keyValue, textValue);
    localStorage.setItem('lastIndex', keyNum);
    localStorage.setItem('currentIndex', keyNum);
    keyNum++;
};
clearBtn.onclick = (event) => {
    localStorage.clear();
    userText.value = '';
    keyNum = 0;
}
backBtn.onclick = (event) => {
    document.location.reload();
    if (currentIndex > 0){
        currentIndex--;
        keyValue = `${currentIndex}userText`;
        userText.innerText = localStorage.getItem(keyValue);
        localStorage.setItem('currentIndex', currentIndex);
    }
}
forwardBtn.onclick = (event) => {
    document.location.reload();
    if (currentIndex < Number(localStorage.getItem('lastIndex'))){
        currentIndex++;
        keyValue = `${currentIndex}userText`;
        userText.innerText = localStorage.getItem(keyValue);
        localStorage.setItem('currentIndex', currentIndex);
    }
}

//==================================================================================================
//
//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let arr = [];
const saveContactBtn = document.getElementById('save-contact');
const clearAllBtn = document.getElementById('clear-all');
const showAllBtn = document.getElementById('all-contacts');
const refreshBtn = document.getElementById('refresh-page');
const contact = document.getElementById('contact');
const renderContacts = document.getElementById('render-contact');
renderContacts.style.marginTop = '20px';
let contactInfo = contact.querySelectorAll('input');
let lastIndexContact = localStorage.getItem('lastIndexContact');
let contactId = Number(lastIndexContact) + 1;
let contactValue = '';
let contactKey = `${contactId}id`;
saveContactBtn.onclick = (event) => {
    console.log(event);
    contactInfo.forEach((value, key) => {
        let obj = {};
        obj[value.id] = value.value;
        arr.push(obj);
    });
    contactValue = JSON.stringify(arr);
    contactKey = `${contactId}id`;
    localStorage.setItem(contactKey, contactValue);
    localStorage.setItem('lastIndexContact', contactId);
    arr = [];
    contactId++;
    let userObj = JSON.parse(localStorage.getItem(contactKey));
    drawUsers(userObj, contactKey);
};

function drawUsers(arr, id) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    userDiv.id = id;
    userDiv.style.border = '1px solid red';
    userDiv.style.padding = '10px';
    userDiv.style.marginTop = '20px';
    let userId = document.createElement('div');
    userId.innerText = id;
    userDiv.appendChild(userId);
    let editButn = document.createElement('button');
    editButn.classList.add('edit-btn');
    editButn.innerText = 'Edit info';
    editButn.onclick = (event) => {
        let userEleId = event.composedPath()[1].id;
        edit(userEleId);
    }
    let removeButn = document.createElement('button');
    removeButn.classList.add('remove-btn');
    removeButn.innerText = 'Remove contact';
    removeButn.onclick = (event) => {
        let keyItem = event.composedPath()[1].id;
        localStorage.removeItem(keyItem);
        event.composedPath()[1].remove();
    }
    for (const element of arr) {
        let newDivContact = document.createElement('div');
        for (const keyEl in element) {
            newDivContact.innerText = `${keyEl}: ${element[keyEl]},`;
        }
        userDiv.appendChild(newDivContact);
    }
    userDiv.appendChild(editButn);
    userDiv.appendChild(removeButn);
    renderContacts.appendChild(userDiv);
    document.body.appendChild(renderContacts);
}

clearAllBtn.onclick = (event) => {
    localStorage.clear();
    contactId = 0;
    document.location.reload();
}
showAllBtn.onclick = () => {
    renderContacts.innerText = '';
    for (let i = Number(lastIndex); i >= 0; i--) {
        contactKey = `${i}id`;
        let userObj = JSON.parse(localStorage.getItem(contactKey));
        if (Array.isArray(userObj)) {
            drawUsers(userObj, contactKey);
        }
    }
}

function edit(id) {
    console.log(id);
    let userObj = JSON.parse(localStorage.getItem(id));
    for (let i = 0; i < contactInfo.length; i++) {
        for (const keyObj in userObj[i]) {
            contactInfo[i].value = userObj[i][keyObj];
        }
    }
    return contactId = id.slice(0, -2);
}

refreshBtn.onclick = () => {
    document.location.reload();
}
