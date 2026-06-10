document.addEventListener("DOMContentLoaded", init);

let currentCats = [];
const THEME_KEY = "cat_explorer_theme";

async function init() {
  initTheme();
  currentCats = await getCats();
  renderCats(currentCats);
  initCatModal();
}

function initTheme() {
  const switchElement = document.getElementById("themeSwitch");
  const icon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (!switchElement || !icon) return;

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    switchElement.checked = true;
    icon.className = "bi bi-sun-fill";
  }

  switchElement.addEventListener("change", () => {
    const isDark = switchElement.checked;
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
  });
}

function initCatModal() {
  const modalElement = document.getElementById("catModal");

  if (!modalElement) return;

  const modal = new bootstrap.Modal(modalElement);

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".cat-card");
    if (!card) return;
    const index = card.dataset.index;
    const cat = currentCats[index];
    openCatModal(cat, modal);
  });
}

function openCatModal(cat, modal) {
  document.getElementById("modalImage").src = getCatImage(cat);
  document.getElementById("modalName").textContent = cat.name;
  document.getElementById("modalOrigin").textContent = `🌎 ${cat.origin}`;
  document.getElementById("modalTemperament").innerHTML = `
    <div class="temperament-title">
        <i class="bi bi-tags-fill"></i>
        Temperament
    </div>

    <div class="temperament-tags">
        ${cat.temperament
          .split(",")
          .map(
            (trait) => `<span class="temperament-chip">${trait.trim()}</span>`,
          )
          .join("")}
    </div>
`;
  document.getElementById("modalDescription").textContent = cat.description;
  document.getElementById("modalStats").innerHTML = `
    ${createStat("bi-lightbulb-fill", "Intelligence", cat.intelligence)}
    ${createStat("bi-lightning-charge-fill", "Energy", cat.energy_level)}
    ${createStat("bi-person-hearts", "Child Friendly", cat.child_friendly)}
    ${createStat("bi-heart-fill", "Dog Friendly", cat.dog_friendly)}
`;
  document.getElementById("modalWiki").href = cat.wikipedia_url;

  modal.show();
}

function createStat(icon, label, value) {
  const percentage = (value / 5) * 100;

  return `
    <div class="stat-item">

        <div class="stat-header">

            <span class="stat-label">
                <i class="bi ${icon}"></i>
                ${label}
            </span>

            <span class="stat-value">
                ${value}/5
            </span>

        </div>

        <div class="stat-bar">

            <div
                class="stat-fill"
                style="width:${percentage}%">
            </div>

        </div>

    </div>
  `;
}
