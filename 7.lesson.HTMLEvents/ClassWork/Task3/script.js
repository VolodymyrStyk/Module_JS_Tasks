// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html)
// текст і робить збоку
// меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього
//     пункту в тексті

let titleArray = document.querySelectorAll('h2');
console.log(titleArray);
let allTitle = document.querySelectorAll('div.rules');
console.log(allTitle);
for (let i = 0; i < allTitle.length; i++) {
    allTitle[i].id = `rule${i + 1}`;
}

let divMenu = document.createElement('div');
divMenu.id = 'divMenu';


let ulMenu = document.createElement('ul');
ulMenu.style.padding = '0px';
ulMenu.style.margin = '0px';
ulMenu.style.boxSizing = 'border-box';
ulMenu.style.minHeight = '100px';


for (let i = 0; i < titleArray.length; i++) {

    let liMenu = document.createElement('li');
    liMenu.style.listStyle = 'none';
    let anchorEl = document.createElement('a');
    anchorEl.innerText = titleArray[i].textContent;
    anchorEl.href = `#rule${i + 1}`;
    anchorEl.style.textDecoration = 'none';
    anchorEl.style.display = 'flex';
    anchorEl.style.padding = '10px';
    liMenu.appendChild(anchorEl);
    liMenu.style.border = '1px solid black';
    ulMenu.appendChild(liMenu);
}

let main = document.createElement('div');
main.id = 'main';
main.style.display = 'flex';
divMenu.style.width = '40%';
divMenu.style.height = '50%';
divMenu.style.display = 'flex';
divMenu.style.position = 'sticky';
divMenu.style.top = '0';
let wrap = document.querySelector('#wrap');
wrap.style.marginLeft = '30px';
divMenu.appendChild(ulMenu);

main.appendChild(divMenu);
main.appendChild(wrap)


document.body.appendChild(main);
