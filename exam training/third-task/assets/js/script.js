// const BASE_URL = `http://localhost:8000`;

// async function getAllData() {
//   const response = await axios(`${BASE_URL}/workers`);
//   console.log(response.data);
//   drawCard(response.data);
// }

// getAllData();

// let cards = document.querySelector(".dinamic-cards");
// function drawCard(data) {
//   cards.innerHTML = " ";
//   data.forEach((element) => {
//     let cardElement = document.createElement("div");
//     cardElement.className = "dinamic-card";
//     cardElement.innerHTML = ` 
//     <div>
//         <img src="${element.image}" alt="" />
//     </div>
//     <a href="#">${element.heading}</a>
//     <p>${element.title}</p>
//     `;

//     cards.append(cardElement);
//   });
// }
