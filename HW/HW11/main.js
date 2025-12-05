// let fatherConteiner = document.querySelector('.father-Conteiner');
//
// let cartsUrl = 'https://dummyjson.com/carts';
//
// fetch(cartsUrl)
//     .then((res) => res.json())
//     .then((data) => {
//
//         let carts = data.carts;
//
//         for (const cart of carts) {
//
//             // Блок однієї корзини
//             let cartContainer = document.createElement('div');
//             cartContainer.classList.add('cart');
//
//             // Основна інформація про корзину
//             let cartInfo = document.createElement('div');
//             cartInfo.innerHTML = `
//                 <h2>Cart ID: ${cart.id}</h2>
//                 <p>User ID: ${cart.userId}</p>
//                 <p>Total Price: ${cart.total}</p>
//                 <p>Products: ${cart.totalProducts}</p>
//             `;
//             cartContainer.appendChild(cartInfo);
//
//             // Блок для товарів
//             let productsBox = document.createElement('div');
//             productsBox.classList.add('productsBox');
//
//             for (const product of cart.products) {
//
//                 // Блок одного товару
//                 let productDiv = document.createElement('div');
//                 productDiv.classList.add('product');
//
//                 productDiv.innerHTML = `
//                     <h3>${product.title}</h3>
//                     <p>Price: ${product.price}$</p>
//                     <p>Quantity: ${product.quantity}</p>
//                     <p>Total: ${product.total}$</p>
//                 `;
//
//                 // Картинка
//                 let img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 img.style.width = '150px';
//
//                 productDiv.appendChild(img);
//                 productsBox.appendChild(productDiv);
//             }
//
//             cartContainer.appendChild(productsBox);
//             fatherConteiner.appendChild(cartContainer);
//         }
//     });








let recipesContainer = document.querySelector('.recipesContainer');

let baseUrl = 'https://dummyjson.com'
let recipesUrl = baseUrl + '/recipes';

  fetch(recipesUrl)
      .then(response => response.json())
      .then((data) => {

          let recipes = data.recipes


          for (const recipe of recipes) {
              let divRecipes = document.createElement('div');
              let divDescriptions = document.createElement('div');

              divDescriptions.innerHTML = `Id - ${recipe.id}  Name - ${recipe.name}`;

              let ul = document.createElement('ul');

              for (const ing of recipe.ingredients) {
                  let li = document.createElement('li');
                  li.innerText = ing;
                  ul.appendChild(li);
              }

              divDescriptions.appendChild(ul);
              divRecipes.appendChild(divDescriptions)
              recipesContainer.appendChild(divRecipes);
          }


      })



