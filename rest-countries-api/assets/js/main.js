const BASE_URL = `https://restcountries.com/v2/all`;

let allInformation = null;

async function getAllData() {
  const response = await axios(`${BASE_URL}`);
  console.log(response.data);
  flags(response.data);
  allInformation = response.data;
}
getAllData();

let flagElem = document.querySelector(".flags");
let search = document.querySelector(".search");

function flags(data) {
  let card = document.createElement("div");
  card.className = "allFlag";
  flagElem.innerHTML = " ";
  data.forEach((element) => {
    card.innerHTML += `
    <a href="details.html?jname=${element.name}" class="a"> 
    <div class="card">
       <div class="img">
         <img src="${element.flag}" alt="" />
       </div>
       <div class="information">
          <h2>${element.name}</h2>
          <p>
          <b>Population:</b> ${element.population}</p>
          <p>
          <b>Region:</b> ${element.region}</p>
          <p>
          <b>Capital:</b> ${element.capital}</p>
        </div>
    </div>
    </a>
   `;
    flagElem.append(card);
  });
}

search.addEventListener("input", function (event) {
  let filtered = allInformation.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  flags(filtered);
});

let select = document.querySelector("select");

select.addEventListener("change", (e) => filterRegion(e));

async function filterRegion(e) {
  if (e.target.value !== "all") {
    const response = await axios(
      `https://restcountries.com/v2/region/${e.target.value}`
    );
    flags(response.data);
  } else {
    flags(allInformation);
  }
}
let darkBtn = document.querySelector(".darkMode");
let valueBool = true;

darkBtn.addEventListener("click", function () {
  localStorage.setItem("dark", "true");
  if (valueBool && localStorage.getItem("dark") == "true") {
    document.querySelector("header").style.backgroundColor = "black";
    document.querySelector("header").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    localStorage.setItem("dark", "true");
    valueBool = false;
    console.log("ag");
  } else {
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("header").style.color = "black";
    document.querySelector("body").style.backgroundColor = "aliceblue";
    document.querySelector("body").style.color = "black";
    console.log("qara");
    valueBool = true;
    localStorage.setItem("dark", "false");
  }
});

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("dark") == "true") {
    document.querySelector("header").style.backgroundColor = "black";
    document.querySelector("header").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  }
});
