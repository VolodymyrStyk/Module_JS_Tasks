// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
usersWithCities.length = usersWithId.length;
let id = 1;

for (let i = 0; i < usersWithCities.length; i++) {
    for (const key in usersWithId[i]) {
        if (usersWithId[i][key] === id) {
            usersWithCities[i] = usersWithId[i];
        }
    }
    id++;
}
for (let i = 0; i < usersWithCities.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
       // console.log(citiesWithId[j].user_id);
        if (usersWithCities[i].id === citiesWithId[j].user_id){
            usersWithCities[i].address = citiesWithId[j];
        }
    }
    console.table(usersWithCities[i],usersWithCities[i].address);
}
console.log(usersWithCities);
console.table(usersWithCities);
