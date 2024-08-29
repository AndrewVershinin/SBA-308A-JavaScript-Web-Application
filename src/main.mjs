import { fetchBreeds, fetchTemperaments } from "./api.mjs";
import { populateTemperamentSelect, displayBreeds } from "./ui.mjs";

const temperamentSelect = document.getElementById('temperamentSelect');
const breedBtn = document.getElementById('fetchBreedsBtn');
const breedInfo = document.getElementById('breedInfo');

// Load temperaments when the page loads
(async function loadTemperaments() {
    const temperaments = await fetchTemperaments();
    populateTemperamentSelect(temperaments, temperamentSelect);
})();

breedBtn.addEventListener('click', async () => {
    const selectedTemperament = temperamentSelect.value;

    if (selectedTemperament) {
        const breeds = await fetchBreeds();
        const filteredBreeds = breeds.filter(breed => breed.temperament && breed.temperament.includes(selectedTemperament));
        displayBreeds(filteredBreeds, breedInfo);
    } else {
        breedInfo.innerHTML = '<p>Please select a temperament</p>';
    }
});