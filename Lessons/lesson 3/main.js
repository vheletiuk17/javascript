// // інкрементація збільшення інкременту
// let x = 0
// x = x + 1
// x += 1
// x++
// ++x
// // зменшення (аналогічно)
// --x
// x--
//
// let a = 0
// let b = a++
//
// console.log(a);
// console.log(b);
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// додаваня поля в масив за допомогою циклу - iter
// let id = 1
// for (let user of users) {
//     user.id = id
//     id++
// }
// console.log(users);

for(let i = 0; i < users.length; i++){
    let user = users[i];
    console.log(user)
}