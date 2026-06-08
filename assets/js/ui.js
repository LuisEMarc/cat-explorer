function createCatCard(cat) {
  const breed = cat.breeds?.[0];

  return `
    <div class="cat-card">

      <img
        src="${cat.url}"
        alt="${breed?.name || "Cat"}"
      >

      <div class="cat-info">

        <h3>
          ${breed?.name || "Unknown Breed"}
        </h3>

        <p>
          🌎 ${breed?.origin || "Unknown"}
        </p>

      </div>

    </div>
  `;
}

function renderCats(cats) {
  const grid = document.getElementById("catsGrid");

  grid.innerHTML = cats
    .map(createCatCard)
    .join("");
}