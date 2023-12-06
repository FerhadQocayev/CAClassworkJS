const products = document.querySelector(".products");

let id = new URL(document.location).searchParams.get("id");
const BASE_URL = `https://fakestoreapi.com/products`;

console.log(id);

async function getData() {
  const response = await axios(`${BASE_URL}/${id}`);

  drawCards(response.data);
}

getData();

function drawCards(obj) {
  products.innerHTML = "";
  products.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <div>
            <a href="details.html?id=${obj.id}"><img src="${obj.image}" alt="..."  /></a>
            </div>
            <div class="card-body">
              <h5 class="card-description ">${obj.title}</h5>
              <p class="card-price">${obj.price} $</p>
              </div>
              </div>
              <p class="card-desc"> <span>Description</span>: ${obj.description} $</p>
    </div>`;
}
let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", function () {
  window.history.back();
});
