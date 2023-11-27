let tbody = document.querySelector(".tbody");
let userData = JSON.parse(localStorage.getItem("userInfo"));

drawTable(userData);

function drawTable(data) {
  data.forEach((ferhad) => {
    let trElemnt = document.createElement("tr");

    trElemnt.innerHTML = `
                      <td>${element.id}</td> 
                     <td>${element.firstName}</td> 
                     <td>${element.lastName}</td> 
                     <td>${element.address}</td>`;

    tbody.append(trElemnt);
  });
}
