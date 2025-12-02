//  // window.onload = () => {
//  //     console.log('hello')
//  // }
//
//  // dark mode
//  let btn = document.getElementById('btn');
//  //
//  //   btn.onclick = (e) => {
//  //       console.log('click');
//  //       e.target.classList.toggle('dark');
//  //   };
//
//
//
//  //better
//  btn.addEventListener('click', (e) => {
//      e.target.classList.toggle('dark');
//
//  })
//  btn.addEventListener('click', (e) => {
//      console.log('asdaasdas')
//  })
// let input = document.getElementById('input');
//
// input.oninput = (e) => {
//     console.log('input');
// }
//
// input.onkeyup = (e) => {
//     console.log(e);
// }
// input.onkeydown = (e) => {
//     console.log(e);
// }
//
// let f1 = document.forms.f1;
// // reloading PAGE
// f1.onsubmit = (e) => {
//     e.preventDefault()
//     console.log('qw')
// }
//
// f1.onsubmit = (e) => {
//     e.preventDefault()
//     let surname = e.target.surname.value;
//     let username = e.target.username.value;
//     let obj = {username, surname}
//     localStorage.setItem('surname', JSON.stringify(obj));
//
// }
//
// //Сховище
//
//  console.log(localStorage);
//  localStorage.setItem('key', 'qwe')
//
//  console.log(localStorage.getItem('key'));
//



//Cookies

// Звертання

document.cookie = 'key = asd'
let split = document.cookie.split(';');
console.log(split);

let arr = {}
for (let i = 0; i < split.length; i++) {
    console.log(split[i])
    let a = split[i].split('=')
    console.log(a);
    arr[a[0]] = a[1];
}
console.log(document.cookie);
console.log(arr);