document.addEventListener("DOMContentLoaded", init
);



async function init() {
  initTheme();
  const cats = await getCats();
  renderCats(cats);
}

const THEME_KEY = "cat_explorer_theme";

function initTheme() {

    const switchElement = document.getElementById("themeSwitch");
    const icon = document.getElementById("themeIcon");

    if (!switchElement || !icon) return;

    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        switchElement.checked = true;

        icon.className = "bi bi-sun-fill";
    }

    switchElement.addEventListener("change", () => {

        const isDark = switchElement.checked;

        document.body.classList.toggle("dark-mode", isDark);

        localStorage.setItem(
            THEME_KEY,
            isDark ? "dark" : "light"
        );

        icon.className = isDark
            ? "bi bi-sun-fill"
            : "bi bi-moon-fill";
    });
}