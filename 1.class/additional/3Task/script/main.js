//3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('Якого кольору світлофор? \na: Зелений?\nb: Жовтий?\nc: Червоний?\nd: Аварійний?');
let isRoadClear = confirm('Є авто на дорозі?');

if(color === 'a' || color === 'Зелений' ){
    if (isRoadClear){
        alert('Зачекай поки порушники проїдуть.');
    }else {
        alert('Світлофор зелений: Можна йти!');
    }
}
if(color === 'b' || color === 'Жовтий' ){
    if (isRoadClear){
        alert('Світлофор жовтий: Потрібно зачекати!Є авто.');
    }else {
        alert('Все одно чекай!');
    }
}
if(color === 'с' || color === 'Червоний' ){
    if (isRoadClear){
        alert('Світлофор червоний: Стій і чекай є авто!');
    }else {
        alert('Світлофор червоний: Стій!');
    }
}
if(color === 'd' || color === 'Аварійний' ){
    alert('Світлофор аварійний: Роби що хочеш!');
}