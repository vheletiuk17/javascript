//  let block  = document.createElement("div");
// block.className = "wrap";
// block.innerText = "Hello World!";
// document.body.appendChild(block);
// let cloneNode = block.cloneNode(true);
// document.body.appendChild(cloneNode);
//
//
// let arr = ['Main','Products','About us','Contacts']
//
//  let arrElement = document.createElement('ul');
//  for (const item of arr) {
//      let li =   document.createElement("li");
//      li.innerText = item;
//      arrElement.appendChild(li)
//  }
//
//  document.body.appendChild(arrElement);



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// for (const elementOfArray of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.innerHTML += `<p>${elementOfArray.title}</p>`;
//     block.innerHTML += `<p>${elementOfArray.monthDuration}</p>`;
//     document.body.appendChild(block);
// }

for (const element of coursesAndDurationArray) {
    let fatherBox = document.createElement('div');
    fatherBox.className = 'item';
    let h1 = document.createElement('h1');
    h1.innerHTML = `<p>Title: ${element.title}</p>  <p>Time : ${element.monthDuration}</p>`;
    document.body.appendChild(fatherBox);
    fatherBox.appendChild(h1);

}