//______________________________________________________________________________________________________________________________________________________
//                                                               РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let illegalWords1 = ['fuck', 'crap', 'lol', 'shit', 'bitch'];

const divInput1 = document.createElement('div');
divInput1.id = 'inputDiv1';
const inputField1 = document.createElement('input');
inputField1.type = 'text';
inputField1.id = 'checkInput';
inputField1.name = 'checkInput';
const inputLabel1 = document.createElement('label');
inputLabel1.setAttribute('for', 'checkInput');
inputLabel1.innerText = 'Check user word:';
const checkButnWord = document.createElement('button');
checkButnWord.innerText = 'check';
checkButnWord.style.marginLeft = '20px';
divInput1.appendChild(inputLabel1);
divInput1.appendChild(inputField1);
divInput1.appendChild(checkButnWord);
document.body.appendChild(divInput1);

inputField1.oninput = (event) => {
    let userIn = event.target.value;
        const check = illegalWords1.includes(userIn);
        if (check) {
            alert('Аяяяй не можна так писати!!!');
        }
}
checkButnWord.onclick = () => {
    let userIn = inputField1.value;
    console.log(userIn);
    const check = illegalWords1.includes(userIn);
    if (check) {
        alert('Аяяяй не можна так писати!!!');
    }
}

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let illegalWords = ['fuck', 'crap', 'lol', 'shit', 'bitch'];

const divInput = document.createElement('div');
divInput.id = 'inputDiv';
divInput.style.marginTop = '20px';
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'checkInputText';
inputField.name = 'checkInputText';
const inputLabel = document.createElement('label');
inputLabel.setAttribute('for', 'checkInputText');
inputLabel.innerText = 'Check user Text:';
const checkButnText = document.createElement('button');
checkButnText.innerText = 'check';
checkButnText.style.marginLeft = '20px';

divInput.appendChild(inputLabel);
divInput.appendChild(inputField);
divInput.appendChild(checkButnText);
document.body.appendChild(divInput);

inputField.oninput = (event) => {
    let userIn = event.target.value;
    let userInArr = userIn.split(' ');
    for (let i = 0; i < userInArr.length; i++) {
        const check = illegalWords.includes(userInArr[i]);
        if (check) {
            let change = userInArr[i].split('');
            change[1] = '*';
            userInArr[i] = change.join('');
        }
    }
    console.log(userInArr);
    userIn = userInArr.join(' ');
    event.target.value = userIn;
}
checkButnText.onclick = () => {
    let userIn = inputField.value;
    let userInArr = userIn.split(' ');
    for (let i = 0; i < userInArr.length; i++) {
        const check = illegalWords.includes(userInArr[i]);
        if (check) {
            alert('Аяяяй не можна так писати!!!');
        }
    }
}


