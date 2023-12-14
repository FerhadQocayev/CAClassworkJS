const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

let form = document.querySelector("form");
let input = document.querySelector(".input");
let defDiv = document.querySelector(".definition");

async function getData(word) {
  const response = await axios(`${BASE_URL}/${word}`);
  drawDefinitions(response.data);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let word = input.value;
  getData(word);
});

function drawDefinitions(arr) {
  defDiv.innerHTML = "";
  let definition = document.createElement("div");
  definition.className = "audioDiv";
  definition.innerHTML = `
  <div> 
   <div>
    <p>${arr[0].word} ${arr[0].phonetic || arr[0].phonetics[1].text} 
    <i class="fa-solid fa-volume-high" onclick="playAudio(this)>
    <audio src="${arr[0].phonetics[0].audio}"></audio>
    </i></p>
   </div>
  <p>Definition(${arr[0].meanings[0].partOfSpeech})</p>
  <p>${arr[0].meanings[0].definitions[0].definition}</p>
  </div>`;
  defDiv.append(definition);
}

input.addEventListener("input", function (e) {
  if (e.target.value === "") {
    defDiv.innerHTML = "";
  }
});

function playAudio(icon) {
  icon.querySelector("audio").play();
}
