// // let id = 1;
//
// let user1 = {
//     // id, - shorthand
//     name: 'Juan',
//     id: 1,
//     wife: {
//         name: 'Juanly',
//         id: 1,
//         age: 118
//     }
// }
// console.log(user1);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.wife);
// console.log(user1.wife.id);
//
// let wife = user1.wife
//
// let user2 = user1
// delete user2.id;
//
// console.log(user2);
//
//
// let arr = [11, 22, 33, 'asd', true, {}]
// console.log(arr[1]);
// console.log(arr.length);
// //додати новий елемент в масив
// arr[6] = 'new value'
// // або 2-ий спосіб
// arr[arr.length] = 'new';
// // або 3ій спосіб
// arr.push('value');
// console.log(arr);
//
// let users = [
//     {id: 1, name: 'kokos', status: true},
//     {id: 2, name: 'asd', status: false},
//     {id: 3, name: 'zxc', status: true}
// ];
// let users3 = users[0]
// console.log(users3);
// let users4 = users[1]
// console.log(users4);
// let users5  = users[2]
// console.log(users5);
//
// let musics = [
//     ['pink', 'acdc'],
//     ['metalic', 'rock']
// ];
//
// console.log(musics[0][1]);
//
// let user = {
//     id: 1,
//     name: 'Kokos',
//     skills: ['js', 'html', 'css'],
//     family:[{
//         name:'Asd',
//         age: 34
//     }]
// }
//
// console.log(user.skills);
// console.log(user);

//
// let obj = {}
// let obj2 = obj;
// console.log({} === {}) false
// console.log(obj === obj2); true


let age = 10;
if (age > 18) {
    console.log('adult')
} else {
    console.log('child')
}

let color = 'green';
if (color === 'red') {
    console.log('stop')
}
if (color === 'yellow') {
    console.log('waiting')
}
if (color === 'green') {
    console.log('go')
}


let x = 'as'

switch (x) {
    case 'asd':
        console.log('case')
        break;
    default:
        console.log('nothing')
}

// ternarniu operator
let t = 5>6 ? 'ads':'dsa'
console.log(t);



