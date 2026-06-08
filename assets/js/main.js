document.addEventListener("DOMContentLoaded", init);

async function init() {
  const cats = await getCats();

  renderCats(cats);
}