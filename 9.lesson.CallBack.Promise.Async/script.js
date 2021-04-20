//Зробити розпорядок дня:
//- від 7-10 дій, кожна дія займає певну кількість часу.
//- синхронізувати виконання цих дій згідно розпорядку
//  - синхронізувати з допомогою callBack
//  - синхронізувати з допомогою Promise
//  - синхронізувати з допомогою Async Await

// // - описую мої функції і час виконання кожної з них
// function getUp(){
//     setTimeout(()=>{
//         console.log('1) Get up!!!');
//     },100)
// }
//
// function coffeeTime(){
//     setTimeout(()=>{
//         console.log('2) Prepare and drink coffee');
//     },180)
// }
//
// function washUp(){
//     setTimeout(()=>{
//         console.log('3) Clean teeth and wash up.');
//     },150)
// }
//
// function getToWork(){
//     setTimeout(()=>{
//         console.log('4) Get to work.');
//     },300)
// }
//
// function work(){
//     setTimeout(()=>{
//         console.log('5) Work.');
//     },2000)
// }
//
// function goToShop(){
//     setTimeout(()=>{
//         console.log('6) Go to shop.');
//     },200)
// }
//
// function goToHome(){
//     setTimeout(()=>{
//         console.log('7) Go to work.');
//     },400)
// }
//
// function prepareFood(){
//     setTimeout(()=>{
//         console.log('8) Prepare food.');
//     },350)
// }
//
// getUp();
// coffeeTime();
// washUp();
// getToWork();
// work();
// goToShop();
// goToHome();
// prepareFood();

//==================================================================================================

////  - синхронізувати з допомогою callBack
//
// function getUp(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('1) Get up!!!');
//             cb(null, '- 1) Get up and go to the next action!');
//         } else {
//             cb('1) No work. I want sleep.');
//         }
//     }, 100)
// }
//
// function coffeeTime(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('2) Prepare and drink coffee');
//             cb(null, '- 2) Drink coffee and go to the next action.');
//         } else {
//             cb('2) No, I dont want coffee, I want stay home.')
//         }
//     }, 180)
// }
//
// function washUp(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('3) Clean teeth and wash up.');
//             cb(null, '- 3) And go to the next action.');
//         } else {
//             cb('3) No, I dont clean my tooth .')
//         }
//     }, 150)
// }
//
// function getToWork(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('4) Go to work.');
//             cb(null, '- 4) Stand up and go to work.');
//         } else {
//             cb('4) No, I dont wanna go work.')
//         }
//     }, 300)
// }
//
// function work(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('5) Work.');
//             cb(null, '- 5) Work hard.');
//         } else {
//             cb('5) No, I dont wanna working.')
//         }
//     }, 2000)
// }
//
// function goToShop(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('6) Go to shop.');
//             cb(null, '- 6) Finish work and go to shop.');
//         } else {
//             cb('6) No, go home now.')
//         }
//     }, 200)
// }
//
// function goToHome(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('7) Go to home.');
//             cb(null, '- 7) Go home after shopping.');
//         } else {
//             cb('7) No, I wanna clubbing.')
//         }
//     }, 400)
// }
//
// function prepareFood(nextAction, cb) {
//     setTimeout(() => {
//         if (nextAction) {
//             console.log('8) Prepare food.');
//             cb(null, '- 8) Preparing food for family.');
//         } else {
//             cb('8) No, I wanna go sleep.')
//         }
//     }, 350)
// }
//
//
// getUp(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         coffeeTime(data, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 washUp(data, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         getToWork(data, (err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 work(true, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         goToShop(true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 goToHome(true, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data);
//                                                         prepareFood(true, (err, data) => {
//                                                             if (!err) {
//                                                                 console.log(data);
//                                                             } else {
//                                                                 console.warn(err);
//                                                             }
//                                                         });
//                                                     } else {
//                                                         console.warn(err);
//                                                     }
//                                                 });
//                                             } else {
//                                                 console.warn(err);
//                                             }
//                                         });
//                                     } else {
//                                         console.warn(err);
//                                     }
//                                 });
//                             } else {
//                                 console.warn(err);
//                             }
//                         });
//                     } else {
//                         console.warn(err);
//                     }
//                 });
//             } else {
//                 console.warn(err);
//             }
//         });
//     } else {
//         console.warn(err);
//     }
// });

//==================================================================================================

////  - синхронізувати з допомогою Promise
//
// function getUp(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('1) Get up!!!');
//                 resolve('- 1) Get up and go to the next action!');
//             } else {
//                 reject('1) No work. I want sleep.');
//             }
//         }, 100)
//     })
// }
//
// function coffeeTime(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('2) Prepare and drink coffee');
//                 resolve('- 2) Drink coffee and go to the next action.');
//             } else {
//                 reject('2) No, I dont want coffee, I want stay home.');
//             }
//         }, 180)
//     })
// }
//
// function washUp(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('3) Clean teeth and wash up.');
//                 resolve('- 3) And go to the next action.');
//             } else {
//                 reject('3) No, I dont clean my tooth .');
//             }
//         }, 150)
//     })
//
// }
//
// function getToWork(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('4) Go to work.');
//                 resolve('- 4) Stand up and go to work.');
//             } else {
//                 reject('4) No, I dont wanna go work.');
//             }
//         }, 300)
//     })
// }
//
// function work(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('5) Work.');
//                 resolve('- 5) Work hard.');
//             } else {
//                 reject('5) No, I dont wanna working.');
//             }
//         }, 2000)
//     })
// }
//
// function goToShop(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('6) Go to shop.');
//                 resolve('- 6) Finish work and go to shop.');
//             } else {
//                 reject('6) No, go home now.');
//             }
//         }, 200)
//     })
// }
//
// function goToHome(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('7) Go to home.');
//                 resolve('- 7) Go home after shopping.');
//             } else {
//                 reject('7) No, I wanna clubbing.');
//             }
//         }, 400)
//     })
// }
//
// function prepareFood(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('8) Prepare food.');
//                 resolve('- 8) Preparing food for family.');
//             } else {
//                 reject('8) No, I wanna go sleep.');
//             }
//         }, 350)
//     })
// }
//
// getUp(true)
//     .then(value => {
//         console.log(value);
//         return coffeeTime(value);
//     })
//     .then(value => {
//         console.log(value);
//         return washUp(value);
//     })
//     .then(value => {
//         console.log(value);
//         return getToWork(value);
//     })
//     .then(value => {
//         console.log(value);
//         return work(value);
//     })
//     .then(value => {
//         console.log(value);
//         return goToShop(value);
//     })
//     .then(value => {
//         console.log(value);
//         return goToHome(value);
//     })
//     .then(value => {
//         console.log(value);
//         return prepareFood(value);
//     })
//     .then(final => {
//         console.log(final);
//     })
//     .catch(reason => {
//         console.warn(reason);
//     })
//     .finally(()=>{
//         console.log('-=FINISH=-');
//     });

//==================================================================================================

////  - синхронізувати з допомогою Async Await
//
// function getUp(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('1) Get up!!!');
//                 resolve('- 1) Get up and go to the next action!');
//             } else {
//                 reject('1) No work. I want sleep.');
//             }
//         }, 100)
//     })
// }
//
// function coffeeTime(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('2) Prepare and drink coffee');
//                 resolve('- 2) Drink coffee and go to the next action.');
//             } else {
//                 reject('2) No, I dont want coffee, I want stay home.');
//             }
//         }, 180)
//     })
// }
//
// function washUp(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('3) Clean teeth and wash up.');
//                 resolve('- 3) And go to the next action.');
//             } else {
//                 reject('3) No, I dont clean my tooth .');
//             }
//         }, 150)
//     })
//
// }
//
// function getToWork(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('4) Go to work.');
//                 resolve('- 4) Stand up and go to work.');
//             } else {
//                 reject('4) No, I dont wanna go work.');
//             }
//         }, 300)
//     })
// }
//
// function work(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('5) Work.');
//                 resolve('- 5) Work hard.');
//             } else {
//                 reject('5) No, I dont wanna working.');
//             }
//         }, 2000)
//     })
// }
//
// function goToShop(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('6) Go to shop.');
//                 resolve('- 6) Finish work and go to shop.');
//             } else {
//                 reject('6) No, go home now.');
//             }
//         }, 200)
//     })
// }
//
// function goToHome(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('7) Go to home.');
//                 resolve('- 7) Go home after shopping.');
//             } else {
//                 reject('7) No, I wanna clubbing.');
//             }
//         }, 400)
//     })
// }
//
// function prepareFood(nextAction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nextAction) {
//                 console.log('8) Prepare food.');
//                 resolve('- 8) Preparing food for family.');
//             } else {
//                 reject('8) No, I wanna go sleep.');
//             }
//         }, 350)
//     })
// }
//
// async function myWorkingDay(){
//     try{
//         let newGetUp = await getUp(true);
//         console.log(newGetUp);
//         let newCoffeeTime = await coffeeTime(true);
//         console.log(newCoffeeTime);
//         let newWashUp = await washUp(true);
//         console.log(newWashUp);
//         let newGetToWork = await getToWork(true);
//         console.log(newGetToWork);
//         let newWork = await work(true);
//         console.log(newWork);
//         let newGoToShop = await goToShop(true);
//         console.log(newGoToShop);
//         let newGoToHome = await goToHome(true);
//         console.log(newGoToHome);
//         let newPrepareFood = await prepareFood(true);
//         console.log(newPrepareFood);
//     }
//         catch (error){
//             console.warn(error);
//         }
// }
//
// myWorkingDay();
