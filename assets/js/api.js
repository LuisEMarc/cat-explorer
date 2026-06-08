const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1";

async function getCats() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener gatos");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}