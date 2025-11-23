// function calc(a,b){
//     return a*b
// }
//
// console.log(calc(10, 20));
//
// function square(x,h){
//     return x*h
// }
//
// console.log(square(10, 10));
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
//
// function arr (users){
//     for (const user of users) {
//         console.log(user);
//     }
//     return;
// }
// console.log(arr(users));
//
// function text (t){
//document.write(`<p>${t}</p>`);
// }
//
// text('lgjafdjkghkgmnxjkvbhjdfkhgijkfdjgfd');

// function list (t1){
//     document.write(`<ul>
//  <li>${t1}</li>
//  <li>${t1}</li>
//  <li>${t1}</li>
//  </ul>`);
// }
//
// list('helllo okten!');

// for(let i = 0; i < 3; i++){
//
// }

// function list (t1, count){
//     document.write(`<ul>`)
//     for(let i = 0; i < count; i++){
//         document.write(`<li>${t1}</li>`);
//     }
//     document.write(`</ul>`)
//
// }
//
// list('fsdfsd', 19)
//
// const arr = [123, 'qwe', true, false, 'qwe', 99]
//
//
// function generation(arr){
//     document.write(`<ul>`)
//
//     for(let i = 0; i < arr.length; i++){
//         document.write(`<li>${arr[i]}</li>`)
//     }
//
//     document.write(`</ul>`)
// }
// generation(arr)
//
// const arr = [
//     {name:'Kokos', age: 31, id:1},
//     {name:'Petya', age: 22, id:2},
//     {name:'ASD', age: 10, id:3}
// ]
//
// function creator(arr){
//
//
//     for(let i = 0; i < arr.length; i++){
//         document.write(` <div>
//             <p>${arr[i].name}</p>
//             <p>${arr[i].id}</p>
//             <p>${arr[i].age}</p>
//     </div>`)
//     }
//
//
// }
//
// creator(arr);


// const arr = [121,32,4324,7,6,3,0.67]
//
// function minNum(arr){
//     return Math.min(...arr);
// }
//
// console.log(minNum(arr));
//
// function miNum1(arr){
//     let item = arr[0]
//     for (const min of arr) {
//         if(min < item){
//             item = min;
//         }
//     }
//     return item;
// }
//
// console.log(miNum1(arr));

// let arr = [10, 20 ,5 ,33]
//
// function calc(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
//
// console.log(calc(arr));

// let arr = [11,22,33,44]
//
// function swap(arr, index1, index2){
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }
//
// console.log(swap(arr , 1 ,3));

