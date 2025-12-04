
let productsBlock = document.querySelector('.products');

let baseUrl = 'https://dummyjson.com'
let requestUrl = baseUrl + '/products';
let getProductById =(id) => requestUrl + '/' + id

fetch(requestUrl)
 .then((res) => res.json())
 .then((data) => {

    let products = data['products'];

       for (const product of products) {

           let divProduct = document.createElement('div');
           let divDescription = document.createElement('div');

           divDescription.innerHTML = `Id - ${product.id} Title - ${product.title} Price -  ${product.price}`;


           let divImages = document.createElement('div');
           let productImage = document.createElement('img');
           productImage.classList.add('product-img')
           productImage.src = product.images[0];


           divImages.appendChild(productImage);
           divProduct.append(divDescription, divImages);

           productsBlock.appendChild(divProduct);
       }

})