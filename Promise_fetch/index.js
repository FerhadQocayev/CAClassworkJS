let productDiv = document.querySelector(".products-div");
const BASE_URL = "https://api.escuelajs.co/api/v1";

function fetchProduct() {
  fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(
        (item) =>
          (productDiv.innerHTML += `
<div class="product">
                <div class="product-image">
                    <img src="${item.images[0]}" alt="">
                </div>
                <div class="product-heading">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <span>Price: ${item.price}</span>
                    <div><button class="deleteBtn" >Delete</button></div>
                </div>
            </div>`)
      );
    });
}

fetchProduct();
