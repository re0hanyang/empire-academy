const grid = document.getElementById("studentGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterButtons = [...document.querySelectorAll(".filter")];
let activeRank = "all";

const rankClass = { "루비":"ruby", "사파이어":"sapphire", "에메랄드":"emerald", "오닉스":"onyx" };

function cardTemplate(c){
  const cls = rankClass[c.rank] || "onyx";
  return `
    <article class="student-card" data-name="${c.name}" data-rank="${c.rank}">
      <div class="portrait">
        <img src="${c.image}" alt="${c.name} 학생 이미지" loading="lazy">
      </div>
      <div class="record">
        <div class="record-name">${c.name}</div>
        <div class="record-country">${c.country}</div>
        <div class="record-meta">
          <span>${c.grade}</span>
          <span class="rank-badge ${cls}">${c.rank.toUpperCase()}</span>
        </div>
      </div>
    </article>`;
}

function render(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = characters.filter(c =>
    (activeRank === "all" || c.rank === activeRank) &&
    (!q || c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q))
  );
  grid.innerHTML = filtered.map(cardTemplate).join("");
  emptyState.style.display = filtered.length ? "none" : "block";
}

filterButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filterButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeRank = btn.dataset.rank;
    render();
  });
});

searchInput.addEventListener("input", render);

document.getElementById("menuBtn").addEventListener("click",()=>{
  const nav = document.querySelector(".main-nav");
  const open = nav.dataset.open === "1";
  nav.dataset.open = open ? "0" : "1";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "66px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px 24px";
  nav.style.background = "rgba(8,9,11,.96)";
  nav.style.flexDirection = "column";
  nav.style.gap = "18px";
});

render();
