function getCatImage(cat) {
  return cat.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
    : "assets/images/404-gatito.jpg";
}

function createCatCard(cat, index) {
  return `
    <div class="cat-card" data-index="${index}">

      <img
      src="${getCatImage(cat)}"
      alt="${cat.name}"
      onerror="this.src='assets/images/404-gatito.jpg'">

      <div class="cat-info">

        <h3>${cat.name}</h3>

        <p><i class="bi bi-globe"></i> ${cat.origin}</p>

      </div>

    </div>
  `;
}

function renderCats(cats, startIndex = 0) {
  const grid = document.getElementById("catsGrid");

  grid.innerHTML = cats
    .map((cat, index) => createCatCard(cat, startIndex + index))
    .join("");
}
