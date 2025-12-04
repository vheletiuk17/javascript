// let text = document.getElementById("text");
// // let btn = document.getElementById("btn");
// //
// // btn.onclick = () => {
// //     text.style.color = "red";
// // }
// //
// // let ageInput = document.getElementsByClassName("age")[0];
// // let btn1 = document.getElementsByClassName("btn-form")[0];
// //
// // btn1.onclick = () => {
// //     let age = Number(ageInput.value);
// //
// //     if(age <= 18){
// //         alert("You fucking kid")
// //     }else if(age > 18){
// //
// //         alert("All good")
// //     }
// // }

// let nameInput = document.getElementsByClassName("name")[0];
// let surnameInput = document.getElementsByClassName("surname")[0];
// let ageInput = document.getElementsByClassName("age")[0];
// let btn = document.getElementsByClassName("btn")[0];
// btn.onclick = () =>{
//     let divElement = document.createElement('div');
//
//     divElement.innerHTML = `
//         <p><b>Name:</b> ${nameInput.value}</p>
//         <p><b>Surname:</b> ${surnameInput.value}</p>
//         <p><b>Age:</b> ${ageInput.value}</p>
//     `;
//
//     document.body.appendChild(divElement);
//
// }

// let counter = document.querySelector('.count')
// let count = Number(localStorage.getItem('count'));
//
// window.onload = () => {
//     count += 1
//     counter.innerText = count;
//     localStorage.setItem('count', count);
// }