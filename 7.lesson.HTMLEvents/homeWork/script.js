//- Створити довільний елемент с id = text. використовуючи JavaScript,
// зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
const divIdText = document.createElement('div');
divIdText.innerText = 'Hello!!!';
divIdText.style.border = '1px solid red';
divIdText.style.width = '200px';
divIdText.style.height = '200px';
divIdText.style.textAlign = 'center';
divIdText.style.paddingTop = '10%';
document.body.appendChild(divIdText);

const buttonNoneDivText = document.createElement('button');
buttonNoneDivText.innerText = 'Click and hide DIV!';
document.body.appendChild(buttonNoneDivText);

buttonNoneDivText.onclick = () => {
    // if (divIdText.style.display === 'none'){
    //     divIdText.style.display = '';
    //     return 1;
    // }
    // divIdText.style.display = 'none';
    divIdText.style.display === 'none' ? divIdText.style.display = 'block' : divIdText.style.display = 'none';
};
const buttonHide = document.createElement('button');
buttonHide.innerText = 'HIDE!';
buttonHide.style.margin = '20px'
document.body.appendChild(buttonHide);
buttonHide.onclick = () => {
    buttonHide.style.opacity === '0' ? buttonHide.style.opacity = '1' : buttonHide.style.opacity = '0';
};

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

const formUser = document.createElement('form');
const inputUser = document.createElement('input');
inputUser.name = 'userAge';
inputUser.type = 'number';
const submitUserForm = document.createElement('input');
submitUserForm.type = 'submit';

formUser.appendChild(submitUserForm);
formUser.appendChild(inputUser);
document.body.appendChild(formUser);

submitUserForm.onclick = () => {
    if (inputUser.value === '') {
        return alert('Ви нічого не ввели');
    }
    return (inputUser.value > 18 ? alert(`Ваш вік ${inputUser.value}, це більше 18`) : alert(`Ваш вік ${inputUser.value}, це менше 18`));
};


// - Створіть меню, яке розгортається/згортається при клику
const divMenuList = document.createElement('div');
divMenuList.style.marginTop = '20px';
divMenuList.style.border = '1px solid blue';
divMenuList.style.width = '200px';

const divMenuTitle = document.createElement('div');
divMenuTitle.innerText = 'List Of Items';
divMenuList.appendChild(divMenuTitle);

const ulMenu = document.createElement('ul');
for (let i = 1; i <= 10; i++) {
    const liMenu = document.createElement('li');
    liMenu.innerText = `Item ${i}`;
    ulMenu.appendChild(liMenu);
}
divMenuList.appendChild(ulMenu);
document.body.appendChild(divMenuList);
divMenuTitle.onclick = () => {
    ulMenu.style.display === 'none' ? ulMenu.style.display = 'block' : ulMenu.style.display = 'none';
}

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
class Comment {
    constructor(title = 'no Title', body = 'no Text') {
        this.title = title;
        this.body = body;
    }
}

let comment1 = new Comment('Volodymyr', 'Description blah blah');
//console.log(comment1);

const listComments = document.createElement('div');
listComments.style.border = '1px solid green';
listComments.style.minWidth = '200px';
listComments.style.minHeight = '20px';
listComments.style.boxSizing = 'border-box';
listComments.id = 'comments';
listComments.style.display = 'flex';
listComments.style.flexDirection = 'column';
listComments.style.justifyContent = 'center';
listComments.style.alignItems = 'center';
listComments.style.marginTop = '30px';

const addCommentButton = document.createElement('button');
addCommentButton.innerText = 'Add Comment';

let commentsArray = [];
addCommentButton.onclick = () => {
    let titleComment = prompt('Input title of your comment:');
    let titleBody = prompt('Input your comment here:');
    let newComment = new Comment(titleComment, titleBody);
    commentsArray.push(newComment);
    let divNewComment = document.createElement('div');
    let divNewCommentTitle = document.createElement('div');
    divNewCommentTitle.innerHTML = `<h3>Title: </h3><p>${newComment.title}</p>`;

    let divNewCommentBody = document.createElement('div');
    let divNewCommentBodyText = document.createElement('div');
    divNewCommentBodyText.innerHTML = `<h3>Comment: </h3><p>${newComment.body}</p>`;
    const buttonHideBody = document.createElement('button');
    buttonHideBody.innerText = 'Hide Comments';
    divNewCommentBody.appendChild(divNewCommentBodyText);
    divNewCommentBody.appendChild(buttonHideBody);
    buttonHideBody.onclick = () => {
        divNewCommentBodyText.style.display === 'none' ? divNewCommentBodyText.style.display = 'block' : divNewCommentBodyText.style.display = 'none';
    }

    divNewComment.style.border = '1px solid black';
    divNewComment.style.padding = '20px';
    divNewComment.appendChild(divNewCommentTitle);
    divNewComment.appendChild(divNewCommentBody);
    listComments.appendChild(divNewComment);
}
listComments.appendChild(addCommentButton);
document.body.appendChild(listComments);


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divContainForms = document.createElement('div');
divContainForms.id = 'forms-container'
divContainForms.style.marginTop = '30px';
let brElement = document.createElement('br');

const form1 = document.createElement('form');
form1.id = 'form1';

const userDiv1 = document.createElement('div');
const labelFirsFormName = document.createElement('label');
labelFirsFormName.setAttribute('for', 'userName');
labelFirsFormName.innerText = 'User name:';
form1.appendChild(labelFirsFormName);
const firstInputForm1 = document.createElement('input');
firstInputForm1.id = 'userName'
firstInputForm1.name = 'userName';
firstInputForm1.type = 'text';
userDiv1.appendChild(firstInputForm1);
form1.appendChild(userDiv1);

const userDiv2 = document.createElement('div');
const labelFirsFormPass = document.createElement('label');
labelFirsFormPass.setAttribute('for', 'userPass');
labelFirsFormPass.innerText = 'User Password:';
form1.appendChild(labelFirsFormPass);
const secondInputForm1 = document.createElement('input');
secondInputForm1.id = 'userPass';
secondInputForm1.name = 'userPassword';
secondInputForm1.type = 'password';
userDiv2.appendChild(secondInputForm1);
form1.appendChild(userDiv2);


const form2 = document.createElement('form');
form2.id = 'form2';
const labelSecondForm = document.createElement('label');
labelSecondForm.setAttribute('for', 'form2');
labelSecondForm.innerText = 'Your gender:';
form2.appendChild(labelSecondForm);
form2.appendChild(brElement);

const radioDiv1 = document.createElement('div');
const firstInputForm2 = document.createElement('input');
firstInputForm2.name = 'gender';
firstInputForm2.type = 'radio';
firstInputForm2.value = 'male';
firstInputForm2.checked = true;
firstInputForm2.innerText = 'male';
radioDiv1.appendChild(firstInputForm2);
const spanTextMale = document.createElement('span');
spanTextMale.innerText = 'male';
radioDiv1.appendChild(spanTextMale);
form2.appendChild(radioDiv1);

const radioDiv2 = document.createElement('div');
const secondInputForm2 = document.createElement('input');
secondInputForm2.name = 'gender';
secondInputForm2.type = 'radio';
secondInputForm2.value = 'female';
secondInputForm2.innerText = 'female';
radioDiv2.appendChild(secondInputForm2);
const spanTextFemale = document.createElement('span');
spanTextFemale.innerText = 'female';
radioDiv2.appendChild(spanTextFemale);
form2.appendChild(radioDiv2);

divContainForms.appendChild(form1);
divContainForms.appendChild(form2);

let buttonReadUser = document.createElement('button');
buttonReadUser.innerText = 'Read forms info';
buttonReadUser.style.marginTop = '20px';
buttonReadUser.onclick = (event) => {
    console.log(`User name: ${form1.userName.value}`);
    console.log(`User pass: ${form1.userPass.value}`);
    console.log(`User gender: ${form2.gender.value}`);
    //console.log(event);
};

divContainForms.appendChild(buttonReadUser);
document.body.appendChild(divContainForms);


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
let divTable = document.createElement('div');
divTable.id = 'table'
document.body.appendChild(divTable);

function generateTable(columnQuantity, rowQuantity, tablePlace) {
    let newTable = document.createElement('table');
    newTable.style.border = '1px solid #333';
    newTable.style.marginTop = '20px';
    for (let i = 0; i < columnQuantity; i++) {
        let newRow = document.createElement('tr');
        for (let j = 0; j < rowQuantity; j++) {
            let newCell = document.createElement('td');
            newCell.innerText = `column: ${i + 1}, row: ${j + 1}`
            newCell.style.border = '1px solid #333';
            ;
            newRow.appendChild(newCell);

        }
        newTable.appendChild(newRow);
    }
    console.log(tablePlace);
    let place = document.querySelector(tablePlace);
    console.log(place);
    place.appendChild(newTable);

    document.body.appendChild(place);
}

let generateTableBut = document.createElement('button');
generateTableBut.innerText = 'Generate Table';
generateTableBut.style.marginTop = '20px';
document.body.appendChild(generateTableBut);
generateTableBut.onclick = () => {
    let col = Number(prompt('input col q-ty', 3));
    let row = Number(prompt('input row q-ty', 3));
    let selector = prompt('input selector', '#table');
    generateTable(col, row, selector);
}

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо \
// нажаттям на стрілочки.
//---------------------------------------------------------------------------

let imgLeftIndex = 0;
let imgMainIndex = 1;
let imgRightIndex = 2;

let imgSlider = document.createElement('div');
imgSlider.style.display = 'flex';
imgSlider.style.justifyContent = 'center';
imgSlider.style.alignItems = 'center';
imgSlider.id = 'slider';

let objImg = [
    {name: 'img1', src: './img/1.jpg'},
    {name: 'img2', src: './img/2.jpg'},
    {name: 'img3', src: './img/3.jpg'},
    {name: 'img4', src: './img/4.jpg'},
    {name: 'img5', src: './img/5.jpg'},
    {name: 'img6', src: './img/6.jpg'},
    {name: 'img7', src: './img/7.jpg'},
    {name: 'right', src: './img/slider-right.png'},
    {name: 'left', src: './img/slider-left.png'},
];
let ArrImg = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/slider-right.png',
    './img/slider-left.png'
];

let leftArrow = document.createElement('div');
let leftArrowImg = document.createElement('img');
leftArrowImg.setAttribute('src', ArrImg[8]);
leftArrowImg.style.marginLeft = '5px';
leftArrowImg.style.height = '20px';
leftArrow.appendChild(leftArrowImg);
imgSlider.appendChild(leftArrow);
leftArrow.id = 'left-slide';
leftArrow.style.height = '20px';
leftArrow.style.width = '20px';
leftArrow.style.border = '1px solid red';

let imgLeft = document.createElement('div');
let imgLeftImg = document.createElement('img');
imgLeftImg.setAttribute('src', ArrImg[imgLeftIndex]);
imgLeftImg.style.height = '100px';
imgLeftImg.style.width = '100px';
imgLeft.appendChild(imgLeftImg);
imgLeft.id = 'imgLeft';
imgLeft.style.height = '100px';
imgLeft.style.width = '100px';
imgLeft.style.border = '1px solid red';
imgSlider.appendChild(imgLeft);

let imgMain = document.createElement('div');
let imgMainImg = document.createElement('img');
imgMainImg.setAttribute('src', ArrImg[imgMainIndex]);
imgMainImg.style.height = '120px';
imgMainImg.style.width = '120px';
imgMain.appendChild(imgMainImg);
imgMain.id = 'imgMain';
imgMain.style.height = '120px';
imgMain.style.width = '120px';
imgMain.style.border = '1px solid red';
imgSlider.appendChild(imgMain);

let imgRight = document.createElement('div');
let imgRightImg = document.createElement('img');
imgRightImg.setAttribute('src', ArrImg[imgRightIndex]);
imgRightImg.style.height = '100px';
imgRightImg.style.width = '100px';
imgRight.appendChild(imgRightImg);
imgRight.id = 'imgRight';
imgRight.style.height = '100px';
imgRight.style.width = '100px';
imgRight.style.border = '1px solid red';
imgSlider.appendChild(imgRight);

let rightArrow = document.createElement('div');
let rightArrowImg = document.createElement('img');
rightArrowImg.setAttribute('src',  ArrImg[7]);
rightArrowImg.style.marginLeft = '5px';
rightArrowImg.style.height = '20px';
rightArrow.appendChild(rightArrowImg);
rightArrow.id = 'right-slide';
rightArrow.style.height = '20px';
rightArrow.style.width = '20px';
rightArrow.style.border = '1px solid red';
imgSlider.appendChild(rightArrow);
//0-6
//
//
//
rightArrow.onclick = () => {
    if (imgRightIndex < 6) {
        imgLeftIndex = imgMainIndex;
        imgMainIndex = imgRightIndex;
        imgRightIndex++;
    }
    if (imgRightIndex === 6) {
        imgRightIndex = 0;
    }

    // console.log('L: ' + imgLeftIndex);
    // console.log('C: ' + imgMainIndex);
    // console.log('R: ' + imgRightImg);

    imgLeftImg.setAttribute('src', ArrImg[imgLeftIndex]);
    imgMainImg.setAttribute('src', ArrImg[imgMainIndex]);
    imgRightImg.setAttribute('src', ArrImg[imgRightIndex]);

}

leftArrow.onclick = () => {

    if (imgLeftIndex >= 0) {
        imgRightIndex = imgMainIndex;
        imgMainIndex = imgLeftIndex;
        imgLeftIndex--;
    }
    if (imgLeftIndex < 0) {
        imgLeftIndex = 6;
    }
    // console.log('L: ' + imgLeftIndex);
    // console.log('C: ' + imgMainIndex);
    // console.log('R: ' + imgRightImg);

    imgLeftImg.setAttribute('src', ArrImg[imgLeftIndex]);
    imgMainImg.setAttribute('src', ArrImg[imgMainIndex]);
    imgRightImg.setAttribute('src', ArrImg[imgRightIndex]);

}

document.body.appendChild(imgSlider);