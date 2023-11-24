// Klavye tuşlarını oluşturacak fonksiyon
function createKeyboard() {
  const keyboard = document.getElementById("keyboard");
  const keys = "abcdefghijklmnopqrstuvwxyz".split(""); // Alfabetik tuşlar

  keys.forEach((key) => {
    const button = document.createElement("div");
    button.textContent = key;
    button.classList.add("key");
    button.addEventListener("click", function () {
      handleKeyPress(key); // Tuşa basıldığında handleKeyPress fonksiyonunu çağır
    });
    keyboard.appendChild(button);
  });
}

// Metin alanına tuşları ekle
function handleKeyPress(key) {
  document.getElementById("textbox").value += key;
}

// Sayfa yüklendiğinde klavyeyi oluştur
window.addEventListener("DOMContentLoaded", createKeyboard);
