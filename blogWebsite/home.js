let blogDiv = document.querySelector(".blogs");
let search = document.querySelector(".search");

const BASE_URL = `http://localhost:3000`;

let myData = null;

async function getData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawCards(response.data);
  myData = response.data;
}
getData("blogs");

function drawCards(data) {
  blogDiv.innerHTML = "";
  data.forEach((element) => {
    blogDiv.innerHTML += `
          <div class="card">
              <h2 class="card-title ">${element.title}</h2>
              <p class="card-body">${element.body}....
             <a href="details.html?id=${element.id}">READ MORE</a>
              </p>
              <p class="card-author">Written by ${element.author}</p>
             <div><button class="btn delete" onclick=deleteBlog(${element.id},this)>Delete</button>   <button class="edit" >Edit</button></div> 
          </div>`;
  });
}

document.body.append(blogDiv);

async function deleteBlog(id, btn) {
  if (confirm("Are you sure to delete this blog??")) {
    btn.parentElement.parentElement.remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}

search.addEventListener("input", function (event) {
  let filtered = myData.filter((item) =>
    `${item.title} ${item.body} `
      .toLocaleLowerCase()
      .includes(event.target.value)
  );

  drawCards(filtered);
});
