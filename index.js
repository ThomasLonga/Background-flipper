document.addEventListener("DOMContentLoaded", function () {
  const cambiarFondoBtn = document.getElementById("cambiarFondoBtn");
  const body = document.body;
  const cambiarColortxt = document.getElementById("cambiarColortxt");
  const codigo_color = document.getElementById("codigo_color");
  const colorList = document.querySelector("ul");

  cambiarFondoBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    cambiarColortxt.style.color = newColor;
    colorList.style.color = newColor;
    codigo_color.textContent = ": " + newColor;
    codigo_color.style.color = newColor;
  });

  // cambiarColortxt.addEventListener("click", function () {});

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
