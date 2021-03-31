//Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello', 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

//let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];
let newArr = [];
let j = 0;

// for (let arrElem of array) {
//     if (Array.isArray(arrElem)) {
//         for (let arrElement of arrElem) {
//             if (Array.isArray(arrElement)) {
//                 for (const element of arrElement) {
//                     if (Array.isArray(element)) {
//                     } else {
//                         newArr.push(element);
//                     }
//                 }
//             } else {
//                 newArr.push(arrElement);
//             }
//         }
//     } else {
//         newArr.push(arrElem);
//     }
//     if (arrElem === array[array.length-1]) {
//         console.table(newArr);
//     }
// }

let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1,[9, 6, 1,[9, 6, 1]]]], ['oops'], 9];
let arrLen = array.length - 1;
function isArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            isArray(arr[i]);
        }else {
            newArr.push(arr[i]);
        }
    }
    j++;
    if(j === arrLen){
        console.log(newArr);
    }
}
isArray(array)