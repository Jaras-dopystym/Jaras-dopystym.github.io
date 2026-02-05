function goYes() {
  window.location.href = "gifts.html";
}

const noBtn = document.getElementById("noBtn");
const bear1 = document.querySelector(".bear1");
const bear2 = document.querySelector(".bear2");

noBtn.addEventListener("mouseover", () => {
  // Убираем лаг — используем translate
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Медвежата "пугайся"
  const bearX1 = Math.random() * (window.innerWidth - 60);
  const bearY1 = Math.random() * (window.innerHeight - 60);

  const bearX2 = Math.random() * (window.innerWidth - 60);
  const bearY2 = Math.random() * (window.innerHeight - 60);

  bear1.style.transform = `translate(${bearX1}px, ${bearY1}px)`;
  bear2.style.transform = `translate(${bearX2}px, ${bearY2}px)`;
});
