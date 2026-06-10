function getCatImage(cat) {
  return cat.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
    : "https://placehold.co/400x400?text=No+Image";
}

function createCatCard(cat, index) {
  return `
    <div class="cat-card" data-index="${index}">

      <img
        src="${getCatImage(cat)}"
        alt="${cat.name}"
      >

      <div class="cat-info">

        <h3>${cat.name}</h3>

        <p>🌎 ${cat.origin}</p>

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