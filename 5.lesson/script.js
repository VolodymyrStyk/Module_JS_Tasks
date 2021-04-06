// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// Створюємо загальну функцію конструктор для тегів
// function Tag(titleOfTag = 'Name not inputed', description = 'Description not inputed', attrs = []) {
//     this.titleOfTag = titleOfTag;
//     this.description = description;
//     this.attrs = attrs;
// }
// // -a
// let aTag = new Tag(
//     'anchor',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//         {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'
//         },]);
// // -div
// let divTag = new Tag(
//     'div',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением.'
//         },]);
// // -h1
// let h1Tag = new Tag(
//     'h1',
//     'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//         {titleOfAttr: 'accesskey ', actionOfAttr: 'Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.'},
//         {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем — можно удалять текст и вводить новый.'},
//     ]);
// // -span
// let spanTag = new Tag(
//     'span',
//     'Тег <span> предназначен для определения строчных элементов документа.',
//     [{titleOfAttr: 'accesskey ', actionOfAttr: 'Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением.'},
//         {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра. '},
//     ]);
// // -input
// let inputTag = new Tag(
//     'input',
//     'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr: 'accept ', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'},
//         {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
//     ]);
// // -form
// let formTag = new Tag(
//     'form',
//     'Тег <form> устанавливает форму на веб-странице.',
//     [{titleOfAttr: 'accept-charset ', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},]);
// // -option
// let optionTag = new Tag(
//     'option',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//         {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//     ]);
// // -select
// let selectTag = new Tag(
//     'select',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
//         {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
//     ]);
//==================================================================================================
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},]}
// створюємо батьківський клас.
// class Tag{
//     constructor(titleOfTag = 'Name not inputed',
//                 description = 'Description not inputed',
//                 attrs = []) {
//         this.titleOfTag = titleOfTag;
//         this.description = description;
//         this.attrs = attrs;
//     }
// }
// // a
// let aTag = new Tag(
//     'anchor',
//     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//         {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//         {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'},
//     ]);
// // -div
// let divTag = new Tag(
//     'div',
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением.'
//         },]);
// // -h1
// let h1Tag = new Tag(
//     'h1',
//     'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
//         {titleOfAttr: 'accesskey ', actionOfAttr: 'Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.'},
//         {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем — можно удалять текст и вводить новый.'},
//     ]);
// // -span
// let spanTag = new Tag(
//     'span',
//     'Тег <span> предназначен для определения строчных элементов документа.',
//     [{titleOfAttr: 'accesskey ', actionOfAttr: 'Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.'},
//         {titleOfAttr: 'class', actionOfAttr: 'Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением.'},
//         {titleOfAttr: 'hidden', actionOfAttr: 'Скрывает содержимое элемента от просмотра. '},
//     ]);
// // -input
// let inputTag = new Tag(
//     'input',
//     'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr: 'accept ', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает фокус в поле формы.'},
//         {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
//     ]);
// // -form
// let formTag = new Tag(
//     'form',
//     'Тег <form> устанавливает форму на веб-странице.',
//     [{titleOfAttr: 'accept-charset ', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},]);
// // -option
// let optionTag = new Tag(
//     'option',
//     'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//         {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//     ]);
// // -select
// let selectTag = new Tag(
//     'select',
//     'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
//         {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
//     ]);
//==================================================================================================
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// let car = {
//     model: 'Astra',
//     producer: 'Opel',
//     produceYear: 2015,
//     maxSpeed: 320,
//     engineCapacity: 1.7,
//     drive: function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue){
//         this.produceYear = newValue;
//     },
//     addDriver: function (driver= {}){
//     if (Object.keys(driver).length){
//         for (const driverKey in driver) {
//             if (driver.hasOwnProperty(driverKey)){
//                 let propertyName = 'driver'+driverKey[0].toUpperCase()+driverKey.slice(1,driverKey.length);
//                 console.log(propertyName);
//                 this[propertyName] = driver[driverKey];
//             }
//         }
//     }
//     }
// }
//
// let driver={
//     name:'Vova',
//     age: 26,
//     lic: true
// }
// //car.addDriver(driver);
// car.addDriver({
//     name:'Danylo',
//     age: 3,
//     lic: false
// });

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, produceYear, maxSpeed, engineCapacity){
//     this.model = model;
//     this.producer = producer;
//     this.produceYear = produceYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function (){
//         console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину.');
//     }
//     this.info = function (){
//         // виводимо динамічну інформацію про дане авто
//         for (const key in this) {
//             if (this.hasOwnProperty(key)) {
//                 //console.log(typeof key);
//                 //console.log(typeof this[key]);
//                 if (!(typeof this[key] === 'function')) {
//                     console.log(key + ': ' + this[key]);
//                 }
//             }
//         }
//         // виводимо статичну інформацію про дане авто відносно початкових параметрів
//         // console.log('Car model: ' + this.model);
//         // console.log('Car producer: ' + this.producer);
//         // console.log('Year of produce: ' + this.produceYear);
//         // console.log('Maximal speed: ' + this.maxSpeed);
//         // console.log('Engine capacity: ' + this.engineCapacity);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.produceYear = newValue;
//     }
//     this.addDriver = function (driver = {}){
//         if (Object.keys(driver).length){
//             for (const driverKey in driver) {
//                 if(driver.hasOwnProperty(driverKey)){
//                     let propertyName = 'driver'+driverKey[0].toUpperCase()+driverKey.slice(1,driverKey.length);
//                     this[propertyName] = driver[driverKey];
//                 }
//             }
//         }
//     }
// }
//
// let astra = new Car('Astra', 'Opel', 2015, 320, 1.7);
//--------------------------------------------------------------------------------------------------
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, produceYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.produceYear = produceYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`);
//     }
//     info(){
//         for (const key in this) {
//             if (this.hasOwnProperty(key)){
//                if (!(typeof this[key] === 'function')){
//                    console.log(`${key}: ${this[key]}`);
//                }
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue){
//         this.produceYear = newValue;
//     }
//     addDriver(driver = {}){
//         for (const driverKey in driver) {
//             if (driver.hasOwnProperty(driverKey)){
//                 let propertyName = 'driver'+driverKey[0].toUpperCase()+driverKey.slice(1,driverKey.length);
//                 this[propertyName] = driver[driverKey];
//             }
//         }
//     }
// }
//
// let megan = new Car('Megan','Renault', 2020, 350, 1.5);
// megan.info();
// megan.changeYear(2012);
// console.log('--------------------------------------');
// megan.info();
// megan.addDriver({name:'Shumaher',age:33,lic:true,proffessional: true, country:'Deutschland'});
// console.log('--------------------------------------');
// megan.info();
//--------------------------------------------------------------------------------------------------
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let ann = new Cinderella('Ann',22,33);
// let marie = new Cinderella('Marie',21,33);
// let lisa = new Cinderella('Lisa',26,35);
// let julia = new Cinderella('Julia',27,33.5);
// let marianna = new Cinderella('Marianna',33,34);
// let olya = new Cinderella('Olya',35,35);
// let vika = new Cinderella('Vika',22,36);
// let karina = new Cinderella('Karina',18,33);
// let luba = new Cinderella('Luba',33,37);
// let jenifer = new Cinderella('Jenifer',45,45);
//
// let cindarelasArray = [ann,marie,lisa,julia,marianna,olya,vika,karina,luba,jenifer];
//
// class Prince{
//     constructor(name, age, findShoeSize) {
//         this.name = name;
//         this.age = age;
//         this.findShoeSize = findShoeSize;
//     }
// }
//
// let rudolf = new Prince('Rudolf', 27, 33.5);
//
// for (const cindarela of cindarelasArray) {
//     if (cindarela.footSize === rudolf.findShoeSize){
//         console.log(`${rudolf.name} знайшов свою попелюшку це ${cindarela.name}.`);
//         console.table(rudolf);
//         console.table(cindarela);
//     }
// }
//--------------------------------------------------------------------------------------------------
//
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// function Cinderella(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let ann = new Cinderella('Ann',22,33);
// let marie = new Cinderella('Marie',21,33);
// let lisa = new Cinderella('Lisa',26,34);
// let julia = new Cinderella('Julia',27,33.5);
// let marianna = new Cinderella('Marianna',33,34);
// let olya = new Cinderella('Olya',35,35);
// let vika = new Cinderella('Vika',22,36);
// let karina = new Cinderella('Karina',18,33);
// let luba = new Cinderella('Luba',33,37);
// let jenifer = new Cinderella('Jenifer',45,45);
//
// let cindarelasArray = [ann,marie,lisa,julia,marianna,olya,vika,karina,luba,jenifer];
//
// function Prince(name, age, findingFootSize){
//     this.name = name;
//     this.age = age;
//     this.findingFootSize = findingFootSize;
// }
//
// let ted = new Prince('Ted', 35, 35);
//
// for (const cindarela of cindarelasArray) {
//     if (cindarela.footSize === ted.findingFootSize){
//         console.log(`${ted.name} знайшов свою попелюшку це ${cindarela.name}.`);
//         console.table(ted);
//         console.table(cindarela);
//     }
//
// }
//==================================================================================================
// - створити класс персонаж з полями ім'я, вік
// - створити нащадка попелюшка з додатковим полем розмір ноги
// - створити 10 попелюшок , покласти їх в масив
// - сторити клас "принц" який є нащадком персонажу
// - має додаткове поле туфелька яку він знайшов.
// - за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Personage{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     say(){
//         console.log(`Hello my name is ${this.name}, мені ${this.age} роки`);
//     }
// }
//
// class Cinderella extends Personage{
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
//     say(){
//         console.log(`Hello my name is ${this.name}, мені ${this.age} роки мій розмір ноги ${this.footSize}`);
//     }
// }
// class Prince extends Personage{
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize = findFootSize;
//     }
//     say(){
//         console.log(`Hello my name is ${this.name}, мені ${this.age} у мене туфелька розміру ${this.findFootSize}`);
//     }
// }
//
// let ann = new Cinderella('Ann', 22, 32)
// let marie = new Cinderella('Marie',21,33);
// let lisa = new Cinderella('Lisa',26,34);
// let julia = new Cinderella('Julia',27,33.5);
// let marianna = new Cinderella('Marianna',33,34);
// let olya = new Cinderella('Olya',35,35);
// let vika = new Cinderella('Vika',22,36);
// let karina = new Cinderella('Karina',18,33);
// let luba = new Cinderella('Luba',33,37);
// let jenifer = new Cinderella('Jenifer',45,45);
//
// let konan = new Prince('Konan', 33, 32);
//
// let cindarelasArray = [ann,marie,lisa,julia,marianna,olya,vika,karina,luba,jenifer];
//
// for (const cindarela of cindarelasArray) {
//     if (cindarela.footSize === konan.findFootSize) {
//         console.log(konan.say());
//         console.log(cindarela.say());
//         console.log(`${konan.name} знайшов свою попелюшку це ${cindarela.name}.`);
//         console.table(konan);
//         console.table(cindarela);
//     }
// }