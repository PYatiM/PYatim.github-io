const cursor = document.getElementById("custom-cursor");
const strikeStrip = document.getElementById("strike-strip");
const wick = document.getElementById("wick");
const flame = document.getElementById("flame");
const hero = document.getElementById("interactive-hero");
const main = document.getElementById("main-content");

let matchLit = false, diyaLit = false;

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  const rot = (e.clientX - window.innerWidth / 2) * 0.05;
  cursor.style.transform = `translate(-10px, -60px) rotate(${rot}deg)`;
});

strikeStrip.addEventListener("mouseenter", () => {
  if (!matchLit) {
    matchLit = true;
    cursor.style.display = "none"; 
    document.body.style.cursor = "url('images/matchstickflame.cur'), auto"; 
    strikeStrip.querySelector("p").textContent = "Match Lit!";
  }
});

wick.addEventListener("mouseenter", () => {
  if (matchLit && !diyaLit) {
    diyaLit = true;
    flame.style.opacity = 1;
    document.body.style.backgroundColor = "#e47113";

    setTimeout(() => hero.classList.add("hidden"), 1000);
    setTimeout(() => {
      main.classList.add("visible");
      document.body.style.cursor = "auto";
    }, 1500);
  }
});
