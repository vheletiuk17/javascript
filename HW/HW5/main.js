// const sum = (a,b) => a + b
//
// console.log(sum(10, 20));
//
// let arr = [1,2,3];
//
// const postArr = (arr) =>{
//     for( item of arr){
//         console.log(item)
//     }
// }
//
// console.log(postArr(arr));


// const list = (text) =>{
//
//     document.write(`<p>${text}</p>`);
// }
//
// console.log(list('saddasdas'));


// const list = (text) =>{
//     document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`)
// }
//
// console.log(list('sadasdasdasdas'));


// const creatorOfList = (text, count) =>{
//     document.write(`<ul>`)
//     for( let i = 0; i < count; i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// creatorOfList('dasdsadasdas', 100)


// const arr = [11,222, 'sdadas', true];
//
// const sort = (arr) =>{
//     for( item of arr ){
//         document.write(`<ul><li>${item}</li></ul>`)
//     }
// }
//
// sort(arr)


// const users = [{
//     id: 1,
//     name: 'John',
//     age: 25,
// },
//     {
//     id: 1,
//     name: 'John',
//     age: 25,
// },
// {
//     id: 1,
//     name: 'John',
//     age: 25,
// }]
//
// const post = (users) =>{
//     for(let i = 0;i < users.length; i++){
//         document.write(`<div>${users[i].name} ${users[i].id} ${users[i].age}</div>`)
//     }
// }
//
// post(users)

// let arr = [112,27645,332,0,-32,-543,9.4];
//
//
// const minNum = (arr) =>{
//     return Math.min(...arr);
// }
//
// console.log(minNum(arr));
//
//
// const minNum1 =(arr) =>{
// let num = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if( i < num){
//             i = num;
//         }
//     }
//     return num;
// }
//
// console.log(minNum(arr));
//
//

// let arr = [1,2,3];
//
// const sum = (arr) =>{
//     let suma = 0;
//     for (const num of arr) {
//         suma += num
//
//     }
//     return suma;
// }
//
// console.log(sum(arr));

// let arr = [11,22,33,44]
//
// const swap = (arr, index1,index2) =>{
//     [arr[index1], arr[index2]]= [arr[index2], arr[index1]];
//     return arr;
// }
//
// console.log(swap(arr, 1, 2));



// function clouser () {
//
//     let a = 1
//
//     function cl () {
//         let a = 2
//         console.log(a);
//
//         const cl1 =() =>{
//             let a  = 3
//             console.log(a);
//
//
//             const cl2 = () =>{
//
//                 console.log(a);
//             }
//             cl2()
//         }
//         cl1()
//     }
//     cl()
// }
//
//
// clouser();







