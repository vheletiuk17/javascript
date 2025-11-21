// for (let i = 0; i < 11; i++) {
//     document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, mollitia.</p></div>`)
// }
//
// for(let i = 0; i <10; i++){
//     document.write(`<div><p>asdzxc</p><p>1</p></div>`)
// }

// let i = 0
// while(i < 20){
//     document.write(`<div><p>Lorem ipsum dolor sit amet.</p></div>`)
//     i++
// }

// let i = 0
//
// while(i < 20){
//     document.write(`<div><h1>Lorem ipsum dolor sit amet.</h1><p>1</p></div>`)
//     i++
// }

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (let listOfItem of listOfItems) {
// //     document.write(`<div>
// // <ul>
// // <li>${listOfItems}</li>
// // </ul>
// //
// // </div>`)
// // }
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for( const product of products){
//     document.write(` <div class="product-title">
//     <h3>${product.title}. Price - ${product.price}</h3>
//     <img class='product-image' src="${product.image}" alt="product">
//  </div> `);
// }

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


 for( const user of users){

     if (user.status === true) {
         document.write(`<div> ${user.name} ${user.age} ${user.status} </div>`)
     }

 }
 for( const user of users){
     if (user.status === false) {
         document.write(`<div>  ${user.name} ${user.age} ${user.status} </div>`)
     }

 }
 for(const user of users){
     if (user.age > 30) {
         document.write(`<div> ${user.name} ${user.age} ${user.status} </div>`)
     }

 }
