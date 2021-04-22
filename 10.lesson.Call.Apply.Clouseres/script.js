//Завдання на замикання. Ознайомлення з гетерами і сеттерами.
//Створити юзера через стандартну функцію. Яка приймає параматрами інформацію про юзера,
//Логін можна змінювати
//Імя змінювати не можна
//Вік можна змінювати лише в більшу сторону
//Щоб змінити емайл потрібно ввести старий пароль, новий пароль, логін
//Новий пороль повинен бути від 8 символів, містити букви і цифри та спецсимволи.
//Щоб створити юзера заповніть поля форми і нажміть кнопку 'Create new User'.

function user(login, password, email, name, age) {
    let _login = login;
    let _password = password;
    let _email = email;
    let _name = name;
    let _age = age;

    function getLogin() {
        console.log('Your current Login: ' + _login);
        return _login;
    }

    function getPass() {
        console.log('Your current Password: ' + _password);
        return _password;
    }

    function getEmail() {
        console.log('Your current Email: ' + _email);
        return _email;
    }

    function getName() {
        console.log('Your current Name: '+_name);
        return _name;
    }

    function getAge() {
        console.log('Your current Age: '+_age);
        return _age;
    }

    function setLogin(newLogin) {
        console.log('You change your login on: ' + newLogin);
        return _login = newLogin;
    }

    function setPass(newPass, inputOldPass, inputLogin) {
        let login = getLogin();
        let oldPass = getPass();
        //Input Password and Submit [8 to 15 characters which contain at least one numeric digit and a special character]
        if (login === inputLogin && oldPass === inputOldPass) {
            let validPaswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
            if (newPass.match(validPaswd)) {
                alert('Success, you change your password!')
                console.log('You change your Password on: ' + newPass)
                return _password = newPass;
            } else {
                alert('Wrong password.');
                console.log('Wrong password.');
                return 'Wrong...!';
            }
        }
        console.log('Wrong password.');
        return 'Wrong...!';
    }

    function setEmail(newEmail) {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (newEmail.match(mailformat)) {
            console.log(`Your new email is: ${newEmail}`);
            return _email = newEmail;
        } else {
            console.log('Incorrect email');
            return 'Incorrect email';
        }
    }

    function setName(newName) {
        console.log('Not allowed change name');
        return 'Not allowed change name';
    }

    function setAge(newAge) {
        if (newAge > _age) {
            console.log(newAge);
            return _age = newAge;
        }
        console.log('We become only oldest, inputted incorrect age!')
        return 'We become only oldest';
    }

    return {
        getLogin,
        getPass,
        getEmail,
        getName,
        getAge,
        setLogin,
        setPass,
        setEmail,
        setName,
        setAge
    }
}

let newUser;
let newUserBtn = document.getElementById('newUser');
newUserBtn.onclick = (ev) => {
    ev.preventDefault();
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    console.log(`
    Login: ${login},
    Password: ${password},
    Email: ${email},
    Name: ${name},
    Age: ${age}  
    `)
    newUser = user(login, password, email, name, age);
}


let getLogin = document.getElementById('getLogin');
getLogin.onclick = (ev) => {
    ev.preventDefault();
    document.getElementById('login').value = newUser.getLogin();
}
let setLogin = document.getElementById('setLogin');
setLogin.onclick = (ev) => {
    ev.preventDefault();
    let input = document.getElementById('login').value;
    newUser.setLogin(input);
}
let getPass = document.getElementById('getPass');
getPass.onclick = (ev) => {
    ev.preventDefault();
    document.getElementById('password').value = newUser.getPass();
}
let setPass = document.getElementById('setPass');
setPass.onclick = (ev) => {
    ev.preventDefault();
    let newPass = prompt('Please input new password [8 to 15 characters which contain at least one numeric digit and a special character]:')
    let inputOldPass = prompt('Please input your old password:');
    let inputLogin = prompt('Please Input your login');
    newUser.setPass(newPass, inputOldPass, inputLogin);
}
let getEmail = document.getElementById('getEmail');
getEmail.onclick = (ev) => {
    ev.preventDefault();
    document.getElementById('email').value = newUser.getEmail();
}
let setEmail = document.getElementById('setEmail');
setEmail.onclick = (ev) => {
    ev.preventDefault();
    let input = document.getElementById('email').value;
    newUser.setEmail(input);
}
let getName = document.getElementById('getName');
getName.onclick = (ev) => {
    ev.preventDefault();
    document.getElementById('name').value = newUser.getName();
}
let setName = document.getElementById('setName');
setName.onclick = (ev) => {
    ev.preventDefault();
    let input = document.getElementById('name').value;
    newUser.setName(input);
}
let getAge = document.getElementById('getAge');
getAge.onclick = (ev) => {
    ev.preventDefault();
    document.getElementById('age').value = newUser.getAge();
}
let setAge = document.getElementById('setAge');
setAge.onclick = (ev) => {
    ev.preventDefault();
    let input = document.getElementById('age').value;
    newUser.setAge(input);
}