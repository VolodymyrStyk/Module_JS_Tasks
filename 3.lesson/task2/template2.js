//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//=====================================================================================================================
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
const mainHeaderId = document.getElementById('main_header');
mainHeaderId.style.color = 'gold';
mainHeaderId.innerText = 'mon-2021';
//     b) робить шириниу елементу ul 400px
const ulElement = document.getElementsByTagName('ul');
for (const item of ulElement) {
    item.style.width = '400px';
    item.style.border = '1px solid red';
}
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const classLinkList = document.getElementsByClassName('linkList');
for (const item of classLinkList) {
    item.style.width = '50%';
    item.style.border = '1px solid red';
}
//     d) отримує текст який зберігається в елементі з класом listElement2
const classLinkElement2 = document.getElementsByClassName('listElement2');
for (const itemText of classLinkElement2) {
    console.log(itemText.textContent);
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий
const allLiElements = document.getElementsByTagName('li');
for (const liItems of allLiElements) {
    liItems.style.backgroundColor = 'lightgray';
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
const allAElements = document.getElementsByTagName('a');
for (const ancorElem of allAElements) {
    ancorElem.classList.add('anchor');

    //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
    //     змінює йому розмір тексту на 40 пікселів
    if (ancorElem.textContent === 'link3') {
        ancorElem.style.fontSize = '40px';
    }

    //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
    ancorElem.classList.add(`element_${ancorElem.textContent}`);
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeaderEle = document.getElementsByClassName('sub-header');
let userColor = prompt(`Input bg-color for sub-headers:`, 'lightblue');
for (let subItems of subHeaderEle) {
    subItems.style.backgroundColor = userColor;

    //     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
    //     якщо текст елемнту = content 2 segment . Колір отримати з prompt()
    if (subItems.textContent === 'content 2 segment') {
        let userColorText = prompt(`Input text color for sub-headers:`, 'red');
        subItems.style.color = userColorText;
    } else {
        subItems.style.color = 'darkgreen';
    }
}
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const classContent1 = document.getElementsByClassName('content_1');
for (const element of classContent1) {
    element.innerText = prompt('Type your text here: ...', 'Blah blah blah...')
}
//     l) отримати елементи p та змінити їм padding на 20px
const allPElements = document.getElementsByTagName('p');
for (const element of allPElements) {
    element.style.padding = '20px';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const elementClassText2 = document.getElementsByClassName('text2');
for (const element of elementClassText2) {
    element.innerText = mainHeaderId.textContent;
}

// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


// Через 5 сек. включається таймер який очистить сторінку

setTimeout(function(){


document.body.innerHTML = '';


const bodyHtml = document.body;
const contentIdtDiv = document.createElement('div');
contentIdtDiv.id = 'content';
bodyHtml.appendChild(contentIdtDiv);

const headerH1 = document.createElement('h1');
headerH1.innerText = 'Правила бойцовского клуба';
bodyHtml.appendChild(headerH1);

const wrapIdDiv = document.createElement('div');
wrapIdDiv.id = 'wrap';
bodyHtml.appendChild(wrapIdDiv);

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (let i = 0; i < rules.length; i++) {
    const ruleDiv = document.createElement('div');
    ruleDiv.classList.add('rules')
    ruleDiv.classList.add('rule'+(i+1));
    for (const key in rules[i]) {
        if (key === 'title') {
            console.log(rules[i][key]);
            let text = rules[i][key].toString();
            const ruleHeader = document.createElement('h2');
            ruleHeader.innerText = text;
            ruleDiv.appendChild(ruleHeader);
        }
        if (key === 'body') {
            console.log(rules[i][key]);
            let text = rules[i][key].toString();
            const ruleText = document.createElement('p');
            ruleText.innerText = text;
            ruleDiv.appendChild(ruleText);
        }
    }
    wrapIdDiv.appendChild(ruleDiv);
}
// ============= Використано for of та for in.
// let i = 1;
// for (const rule of rules) {
//     const ruleDiv = document.createElement('div');
//     ruleDiv.classList.add('rules')
//     ruleDiv.classList.add('rule'+i);
//     for (const key in rule) {
//         if (key === 'title') {
//             console.log(rule[key]);
//             const ruleHeader = document.createElement('h2');
//             ruleHeader.innerText = rule[key];
//             ruleDiv.appendChild(ruleHeader);
//         }
//         if (key === 'body') {
//             console.log(rule[key]);
//             const ruleText = document.createElement('p');
//             ruleText.innerText = rule[key];
//             ruleDiv.appendChild(ruleText);
//         }
//     }
//     wrapIdDiv.appendChild(ruleDiv);
//     i++;
// }

}, 5000);