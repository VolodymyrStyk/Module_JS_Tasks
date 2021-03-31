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

const mainDiv = document.createElement('div');
mainDiv.id = 'main';

for (let i = 0; i < usersWithCities.length; i++) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.style.border = '1px solid red';
    userDiv.style.margin = '20px';
    userDiv.style.padding = '10px';
    userDiv.style.backgroundColor = 'black';
    userDiv.style.color = 'gold';
    userDiv.style.display = 'flex';
    userDiv.style.justifyContent = 'space-around';

    const userImg = document.createElement('img');
    userImg.style.height = '100px';
    userImg.style.width = '150px';
    const userImgDiv = document.createElement('div');
    userImgDiv.appendChild(userImg);
    userDiv.appendChild(userImgDiv);

    const userDivInfo = document.createElement('div');
    userDiv.appendChild(userDivInfo);

    for (const key in usersWithId[i]) {
        //console.log(key);
        //console.log(usersWithId[i][key]);
        if (usersWithId[i][key] === id) {
            usersWithCities[i] = usersWithId[i];
            for (let j = 0; j < citiesWithId.length; j++) {
                for (const keyCity in citiesWithId[j]) {
                    if (citiesWithId[j][keyCity] === id) {
                        //console.log(keyCity);
                        //console.log(citiesWithId[j][keyCity]);
                        usersWithCities[i].address = citiesWithId[j];
                        userDivInfo.innerText = `id: ${usersWithCities[i].id} 
                        name: ${usersWithCities[i].name} 
                        age: ${usersWithCities[i].age} 
                        status: ${usersWithCities[i].status} 
                        address: 
                        user_id: ${usersWithCities[i].address.user_id}
                        country: ${usersWithCities[i].address.country}
                        city: ${usersWithCities[i].address.city}`;
                    }
                }
            }
        }
    }
    id++;

    const userButton = document.createElement('button');
    userButton.style.padding = '10px';
    userButton.innerText = 'Check User';;
    userButton.style.cursor = 'pointer';
    const userButtonDiv = document.createElement('div');
    userButtonDiv.appendChild(userButton);
    userDiv.appendChild(userButtonDiv);

    mainDiv.appendChild(userDiv);

    console.table(usersWithCities[i],usersWithCities[i].address);
}
console.table(usersWithCities);
console.log(usersWithCities);
document.body.appendChild(mainDiv);