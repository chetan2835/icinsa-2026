const eventDate = new Date("June 1, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}, 1000);

const cards = document.querySelectorAll(".speaker-card");
let current = 0;

setInterval(() => {
  cards.forEach(c => c.classList.remove("active"));
  cards[current % cards.length].classList.add("active");
  current++;
}, 2500);

fetch("header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

