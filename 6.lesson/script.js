//1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.
//  b) відсортувати його від більшого до меншого.
//  c) Відфілтрувати числа які є кратними 3.
//  d) Відфілтрувати числа які є більшими за 10.
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let array = [1, 3, 2, 4, 5, 7, 78, 9, 0, 87, 5, 43, 2, 2, 7, 8, 4, 3, 6, 20];
// console.log(array);
// // a) відсортувати його від меншого до більшого.
// let sortArr = array.sort((a,b)=>a - b);
// console.log(sortArr);
// //  b) відсортувати його від більшого до меншого.
// let sortArrRev = array.sort((a, b) => b - a);
// console.log(sortArrRev);
// //  c) Відфілтрувати числа які є кратними 3.
// let filter3 = array.filter(value => !(value%3));
// console.log(filter3);
// // d) Відфілтрувати числа які є більшими за 10.
// let arrayFilterMore10 = array.filter(value => value > 10);
// console.log(arrayFilterMore10);
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//array.forEach(value => document.write(`${value}, `));
//array.forEach((value,index,array) => console.log(value,index,array));
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arrayMap = array.map(value => value * 3);
// console.log(arrayMap);
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arrayReduce = array.reduce((acc,value)=> acc + value);
// console.log(arrayReduce);

//2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку
//  b) Відсортувати в зворотньому порядку
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let strArray = ['wasd', 'apple', 'qwe', 'w', 'asd', 'vcx', 'vova', 'fds', 'hjkjyn', 'tyh', 'thr',
//     'asx', 'ssddqw', 'yujhg', 'ercx', 'zcz', 'tyhg', 'vbcncb', 'yjhjg', 'qsad'];
// //console.log(strArray);
//
// a) Відсортувати його в алфавітному порядку
// let strSort = strArray.sort();
// console.log(strSort);
// b) Відсортувати в зворотньому порядку
// let strSortReverse = strArray.sort((a, b) => (a < b) ? 1 : -1);
// console.log(strSortReverse);
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let strArrFiltred = strArray.filter(value => value.length > 4);
// console.log(strArrFiltred);
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let mapStrArr = strArray.map(value => `Sam says ${value}`);
// console.log(mapStrArr);
// let forEaStrArr = [];
// strArray.forEach((value,i) => {
//     forEaStrArr[i] = `Sam says ${value}`
// });
// console.log(forEaStrArr);

//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
//
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let upSortUsers = users.sort((a, b) => a.age - b.age);
// console.log(UpSortUsers);
// let downSortUsers = users.sort((a, b) => b.age - a.age);
// console.log(DownSortUsers);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let moreUsersLen = users.sort((a, b) => a.name.length - b.name.length);
// console.log(moreUsersLen);
// let lessUsersLen = users.sort((a, b) => b.name.length - a.name.length);
// console.log(lessUsersLen);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//робимо через forEach робимо глибоку копію через JSON
// let idUsers = JSON.stringify(users);
// idUsers = JSON.parse(idUsers);
// idUsers.forEach((value, index) => value.id = index + 1);
// console.log(users);
// console.log(idUsers);
//робимо через map робимо глибоку копію через JSON
// let mapIdUsers = JSON.stringify(users);
// mapIdUsers = JSON.parse(mapIdUsers);
// mapIdUsers.map((value, index,array) => {
//     value.id = index+1;
//     return array[index];
// });
// console.log(mapIdUsers);
// console.log(users)
//робимо через map другий спосіб не робимо копію, масив мутує, мутований масив використовуюмо для
// наступного завдання.
// idUsers = users.map((value, index) => {
//     value.id = ++index;
//     return value;
// });
// // console.log(idUsers);
// // console.log(users)
// // d) відсортувати його за індентифікатором (просортував від більшого до меншого)
// // let idSortedUsers = users.sort((a, b) => b.id - a.id);
// // console.log(idSortedUsers);
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let isMaried = users.reduce((acc, currentValue, i) => {
//     if (currentValue.isMarried) {
//         currentValue.getFlat = true;
//         acc.push(currentValue);
//     }
//     return acc;
// }, []);
// console.log(isMaried);


//______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {
//         producer: "bmw",
//         model: "115",
//         year: 2013,
//         color: "red",
//         type: "hachback",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         producer: "bmw",
//         model: "315",
//         year: 2010,
//         color: "white",
//         type: "sedan",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         producer: "bmw",
//         model: "650",
//         year: 2009,
//         color: "black",
//         type: "coupe",
//         engine: "f60",
//         volume: 6,
//         power: 350
//     },
//     {
//         producer: "bmw",
//         model: "320",
//         year: 2012,
//         color: "red",
//         type: "sedan",
//         engine: "f20",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
// //
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let filterEngMore3 = cars.filter(value => value.volume > 3);
// console.log(filterEngMore3);
// // - двигун = 2л
// let filterEng2 = cars.filter(value => value.volume === 2);
// console.log(filterEng2);
// // - виробник мерс
// let filterMers = cars.filter(value => value.producer === 'mercedes');
// console.log(filterMers);
// // - двигун більше 3х літрів + виробник мерседес (більше рівне 3)
// let filterMersEng3 = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3);
// console.log(filterMersEng3);
// // - двигун більше 3х літрів + виробник субару (більше рівне 3)
// let filterSubEng3 = cars.filter(value => value.producer === 'subaru' && value.volume >= 3);
// console.log(filterSubEng3);
// // - сили більше ніж 300
// let powerMore300 = cars.filter(value => value.power > 300);
// console.log(powerMore300);
// // - сили більше ніж 300 + виробник субару
// let powerMore300Subaru = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(powerMore300Subaru);
// // - мотор серіі ej
// let engineEJ = cars.filter(value => value.engine.startsWith('ej'));
// console.log(engineEJ);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let engineEjSubaru = cars.filter(value => value.power > 300 && value.engine.startsWith('ej') && value.producer === 'subaru');
// console.log(engineEjSubaru);
// // - двигун меньше 3х літрів + виробник мерседес
// let filterMersEngLess2 = cars.filter(value => value.producer === 'mercedes' && value.volume < 3);
// console.log(filterMersEngLess2);
// // - двигун більше 2л + сили більше 250
// let engine2Power250 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(engine2Power250);
// // - сили більше 250  + виробник бмв
// let powerMore250BMW = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(powerMore250BMW);

//- взять слдующий массив
//-- Відсортувати їх по ID
// -- Відсортувати їх по ID в зворотньому порядку
// -- Відсортувати по віку
// -- Відсортувати по віку в зворотньому порядку
// -- Відсорутвати по імені
// -- Відсорутвати по назві вулиці
// -- Відсорутвати по номеру будинку
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// -- Залишити тільки одружених
// -- Залишити тільки одружених, які молодні за 30
// -- Залишити лише тих, в кого парні номери будинків.
// -- Порахувати загальний вік всіх людей. (reduce)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// const usersWithAddress = [
//     {
//         id: 9,
//         name: 'vasya',
//         age: 31,
//         isMarried: false,
//         address: {city: 'Kyiv', street: 'Gongadze', number: 16}
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         isMarried: true,
//         address: {city: 'Rivne', street: 'Zelena', number: 1}
//     },
//     {
//         id: 4,
//         name: 'kolya',
//         age: 29,
//         isMarried: true,
//         address: {city: 'Lviv', street: 'Pasichna', number: 121}
//     },
//     {
//         id: 3,
//         name: 'olya',
//         age: 28,
//         isMarried: false,
//         address: {city: 'Rivne', street: 'Shevchenko', number: 90}
//     },
//     {
//         id: 8,
//         name: 'max',
//         age: 30,
//         isMarried: true,
//         address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}
//     },
//     {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         isMarried: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 2}
//     },
//     {
//         id: 10,
//         name: 'oleg',
//         age: 28,
//         isMarried: false,
//         address: {city: 'Kyiv', street: 'Centralna', number: 22}
//     },
//     {
//         id: 5,
//         name: 'andrey',
//         age: 29,
//         isMarried: true,
//         address: {city: 'Lviv', street: 'Gorodotska', number: 43}
//     },
//     {
//         id: 1,
//         name: 'masha',
//         age: 30,
//         isMarried: true,
//         address: {city: 'Kyiv', street: 'Peremogi', number: 12}
//     },
//     {
//         id: 7,
//         name: 'olya',
//         age: 31,
//         isMarried: false,
//         address: {city: 'Lviv', street: 'Naukova', number: 16}
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         isMarried: true,
//         address: {city: 'Rivne', street: 'Ivana Franka', number: 121}
//     }
// ];
// // // -- Відсортувати їх по ID
// // let sortUsers = usersWithAddress.sort((a,b) => a.id - b.id);
// // console.log(sortUsers);
// // // -- Відсортувати їх по ID в зворотньому порядку
// // let sortUsersRevers = usersWithAddress.sort((a, b) => b.id - a.id);
// // console.log(sortUsersRevers);
// // //  -- Відсортувати по віку
// // let ageSort = usersWithAddress.sort((a,b) => a.age - b.age);
// // console.log(ageSort);
// // //  -- Відсортувати по віку в зворотньому порядку
// // let ageRevSor = usersWithAddress.sort((a, b) => b.age - a.age);
// // console.log(ageRevSor);
// // -- Відсорутвати по імені
// // let nameSort = usersWithAddress.sort((a, b) => (a.name > b.name) ? 1 : -1);
// // console.log(nameSort);
// // -- Відсорутвати по назві вулиці
// // let streetSort = usersWithAddress.sort((a, b) => {
// //     return ((a.address.street > b.address.street) ? 1 : -1);
// // });
// // console.log(streetSort);
// // -- Відсорутвати по номеру будинку
// // let houseNumSort = usersWithAddress.sort((a, b) => {
// //     return a.address.number - b.address.number;
// // });
// // console.log(houseNumSort);
// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// // let lessAge30 = usersWithAddress.filter(value => value.age < 30);
// // console.log(lessAge30);
// // -- Залишити тільки одружених
// // let onlyMaried = usersWithAddress.filter(value => value.isMarried);
// // console.log(onlyMaried);
// // -- Залишити тільки одружених, які молодні за 30
// // let mariedLess30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// // console.log(mariedLess30);
// // -- Залишити лише тих, в кого парні номери будинків.
// // let evenNumHouse = usersWithAddress.filter(value => !(value.address.number%2));
// // console.log(evenNumHouse);
// // -- Порахувати загальний вік всіх людей. (reduce)
// // let sumAgeAll = usersWithAddress.reduce(((acc, value) => acc + value.age),0);
// // console.log(sumAgeAll);
// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// // let withChild = usersWithAddress.reduce((acc, value, i) => {
// //     if(value.isMarried && value.age > 30){
// //         value.child = true;
// //         acc.push(value);
// //     }
// //     return acc;
// // } , []);
// // console.log(withChild);
// //


//______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// let cars = [
//     {
//         producer: 'Peugeot',
//         power: 120,
//         price: 10000,
//         year: 2016,
//         owner: {
//             name: 'Vova',
//             age: 26,
//             drivingExp: 10,
//         }
//     },
//     {
//         producer: 'Opel',
//         power: 115,
//         price: 8000,
//         year: 2012,
//         owner: {
//             name: 'Ivan',
//             age: 24,
//             drivingExp: 4,
//         }
//     },
//     {
//         producer: 'Renault',
//         power: 110,
//         price: 7000,
//         year: 2014,
//         owner: {
//             name: 'Vasya',
//             age: 28,
//             drivingExp: 8,
//         }
//     }, {
//         producer: 'Audi',
//         power: 170,
//         price: 20000,
//         year: 2014,
//         owner: {
//             name: 'Bodya',
//             age: 24,
//             drivingExp: 7,
//         }
//     }, {
//         producer: 'Audi',
//         power: 140,
//         price: 5000,
//         year: 2001,
//         owner: {
//             name: 'Roman',
//             age: 27,
//             drivingExp: 10,
//         }
//     }, {
//         producer: 'Renault',
//         power: 140,
//         price: 6000,
//         year: 2005,
//         owner: {
//             name: 'Pavlo',
//             age: 26,
//             drivingExp: 7,
//         }
//     }, {
//         producer: 'Volkswagen',
//         power: 170,
//         price: 20000,
//         year: 2019,
//         owner: {
//             name: 'Sergii',
//             age: 27,
//             drivingExp: 5,
//         }
//     }, {
//         producer: 'Chevrolet',
//         power: 90,
//         price: 4000,
//         year: 2009,
//         owner: {
//             name: 'Sanya',
//             age: 26,
//             drivingExp: 5,
//         }
//     },
// ];
//
// let driverName = ['Vova','Vasja','Mykola','Yrii','Ivan','Roman','Oleg','Ted','Sania','Olena','Ola'];
// let driverAge = [22,23,25,26,44,32,54,34,21];
//
// // let filterCar = cars.filter(value => value.year < 2013);
// // console.log(filterCar);
//
// let repairCar = cars.map((value, index) => {
//     if (value.year < 2013){
//         value.power *= 1.1;
//         value.repair = true;
//         value.owner.name = driverName[Math.floor(Math.random()*driverName.length)];
//         value.owner.age = driverAge[Math.floor(Math.random()*driverAge.length)];
//         value.owner.drivingExp = Math.floor(Math.random() * (15 - 1)) + 1;
//     }
//     return value;
// })
// console.log(repairCar);

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// // Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// let cars = [
//     {
//         producer: 'Peugeot',
//         power: 120,
//         price: 10000,
//         year: 2016,
//         owner: {
//             name: 'Vova',
//             age: 26,
//             drivingExp: 10,
//         }
//     },
//     {
//         producer: 'Opel',
//         power: 115,
//         price: 8000,
//         year: 2012,
//         owner: {
//             name: 'Ivan',
//             age: 24,
//             drivingExp: 4,
//         }
//     },
//     {
//         producer: 'Renault',
//         power: 110,
//         price: 7000,
//         year: 2014,
//         owner: {
//             name: 'Vasya',
//             age: 28,
//             drivingExp: 3,
//         }
//     }, {
//         producer: 'Audi',
//         power: 170,
//         price: 20000,
//         year: 2014,
//         owner: {
//             name: 'Bodya',
//             age: 24,
//             drivingExp: 7,
//         }
//     }, {
//         producer: 'Audi',
//         power: 140,
//         price: 5000,
//         year: 2001,
//         owner: {
//             name: 'Roman',
//             age: 27,
//             drivingExp: 10,
//         }
//     }, {
//         producer: 'Renault',
//         power: 140,
//         price: 6000,
//         year: 2005,
//         owner: {
//             name: 'Pavlo',
//             age: 26,
//             drivingExp: 7,
//         }
//     }, {
//         producer: 'Volkswagen',
//         power: 170,
//         price: 20000,
//         year: 2019,
//         owner: {
//             name: 'Sergii',
//             age: 27,
//             drivingExp: 5,
//         }
//     }, {
//         producer: 'Chevrolet',
//         power: 90,
//         price: 4000,
//         year: 2009,
//         owner: {
//             name: 'Sanya',
//             age: 26,
//             drivingExp: 5,
//         }
//     },
// ];
// cars.map((value,index) => {
//     if (index%2){
//         value.power *= 1.1;
//         value.price *= 1.05;
//     }
//    return value;
// });
// console.log(cars);
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// cars.map(value=> {
//    if (value.owner.age > 25 && value.owner.drivingExp < 5){
//        value.owner.drivingExp += 1;
//    }
//     console.log(value);
//     return value;
// });
// console.log(cars);
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = cars.reduce(((acc, value) => acc + value.price),0);
// console.log(sum);

// // in progres for refactoring
////// let Car = class {
// // //     constructor(producer ='', power = 0, price = 0, year = 0, owner = {}) {
// // //         this.producer = producer;
// // //         this.power = power;
// // //         this.price = price;
// // //         this.year = year;
// // //         this.owner = owner;
// // //     }
// // // }
// // // let Owner = class {
// // //     constructor(name = '',age = 0,drivingExp = 0) {
// // //         this.name = name;
// // //         this.age = age;
// // //         this.drivingExp = drivingExp;
// // //     }
// // // }
// // // let volodymyr = new Owner('Volodymyr',26,10);
// // // let peugeot = new Car('peugeot',120,10000,2016,volodymyr);
// // // console.log(peugeot);
// // finish

//----------------------------------------------------------------------------------------------
//Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
//
// function check(findNum, arr) {
//     let minIndex = arr.findIndex(value => value === findNum);
//     let maxIndex = arr.lastIndexOf(findNum);
//     //
//     //let maxIndex = arr.filter(value => value === findNum).length + minIndex - 1;
//     //
//     console.log(`MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);
//     return `MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`;
// }
//
// check(4, arr);
