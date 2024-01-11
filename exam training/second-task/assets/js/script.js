const BASE_URL = `http://localhost:8000`;

async function getAllData() {
  const response = await axios(`${BASE_URL}/info`);
  console.log(response.data);
    drawCard(response.data);
}

getAllData();

let cards = document.querySelector(".dinamic-cards");
function drawCard(data) {
  cards.innerHTML = " ";
  data.forEach((element) => {
    let cardElement = document.createElement("div");
    cardElement.className = "dinamic-card";
    cardElement.innerHTML = `
    <div class="img-and-heading">
        <div>
            <img src="./assets/images/logo.png" alt="" />
        </div>
        <h2>${element.heading}</h2>
    </div>
    <p>${element.title}</p>
    `;

    cards.append(cardElement);
  });
}
