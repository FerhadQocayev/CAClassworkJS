const BASE_URL = `https://fakestoreapi.com/products`;
const products = document.querySelector(".products");
const electronicsBtn = document.querySelector(".electronics");
const jewBtn = document.querySelector(".jew");
const men = document.querySelector(".men");
const woman = document.querySelector(".woman");

async function getData(endpoint = "") {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawCards(response.data);
}

getData();

function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    products.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <div>
            <a href="details.html?id=${element.id}"><img src="${element.image}" alt="..."  /></a>
            </div>
            <div class="card-body">
              <h5 class="card-description ">${element.title}</h5>
              <p class="card-price">${element.price} $</p>
            </div>
          </div>
        </div>`;
  });
}

document.body.append(products);

electronicsBtn.addEventListener("click", function () {
  getData("/category/electronics");
});
jewBtn.addEventListener("click", function () {
  getData("/category/jewelery");
});
men.addEventListener("click", function () {
  getData("/category/men's clothing");
});
woman.addEventListener("click", function () {
  getData("/category/women's clothing");
});
