// // metodu masuvy
//
// let arr = []
// arr.push('sadasada')
// arr.push('sadasada')
// arr.push(54353)
// arr.push(54353)
// arr.push(54353)
//
// arr.pop()
//
// arr.unshift('sadasada')
//
// arr.shift('dasd')
//
// arr.join(' ')
//
// let reserv = arr.toReversed()
// console.log(reserv);
//
// let slice = arr.slice(1,2)
// console.log(slice);
//
// let splice = arr.splice(0,2)
// console.log(splice);
//
// arr.forEach( (item) => {
//     console.log(item)
// })
// console.log(arr);


// const numbers = [123,234,456,678,986]
// numbers.forEach( item => console.log(item))
//
// let filteres = numbers.filter( item => {
//     if(item > 124){
//         return true
//     }
// })
// console.log(filteres);
//

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let filters = users.filter(user =>user.status);
//
// console.log(filters);
//
// let map = users.map(user => {return user.age});
// console.log(map);
//

let map = users.map((user, index) => {user.id = index+1; return user; });

console.log(map);

users.sort((a,b) =>a.age - b.age);
console.log(users);

users.sort((a,b)=> a.name.localeCompare(b.name));
console.log(users);


const callback = function (acumulator, item) {
    if(item.status){
        acumulator[0].push(item);
    }else{
        acumulator[1].push(item);
    }
    return acumulator;
}
let reduce = users.reduce(callback, [[], []]);
console.log(reduce);

let reduce = users.reduce ((acumulator, user) => {
    if(user.status){
        acumulator[0].push(user);
    }else{
        acumulator[1].push(user);
    }
    return acumulator;
} ,[ [] , [] ]);
console.log(reduce);
