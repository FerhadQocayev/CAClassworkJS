const products = document.querySelector(".products");

let id = new URL(document.location).searchParams.get("id");

const BASE_URL = `http://localhost:3000/blogs`;

console.log(id);

async function getData() {
  const response = await axios(`${BASE_URL}/${id}`);
  drawCards(response.data);
}

getData();

function drawCards(obj) {
  products.innerHTML = "";
  products.innerHTML += `<div class="card">
              <h2 class="card-title ">${obj.title}</h2>
              <p class="card-body">${obj.body} orem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam recusandae neque praesentium magni sapiente cupiditate, animi repellendus nesciunt asperiores.</p>
              <p class="card-author">Written by ${obj.author}</p>
          </div>`;
}

let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", function () {
  window.history.back();
});
