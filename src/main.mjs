import { fetchBreeds, fetchTemperaments, fetchChildFriendlyLevel, fetchDogFriendlyLevel, fetchGroomingNeedsLevel } from "./api.mjs";
import { populateTemperamentSelect, displayBreeds, populateChildFriendlyLevel, populateDogFriendlyLevel, populateGroomingLevel } from "./ui.mjs";

const temperamentSelect = document.getElementById('temperamentSelect');
const childFriendlyLevelSelect = document.getElementById('childFriendlySelect');
const dogFriendlyLevelSelect = document.getElementById('dogFriendlySelect');
const groomingLevelSelect = document.getElementById('grooming');
const breedBtn = document.getElementById('fetchBreedsBtn');
const breedInfo = document.getElementById('breedInfo');

// Load temperaments when the page loads
(async function loadTemperaments() {
    const temperaments = await fetchTemperaments();
    populateTemperamentSelect(temperaments, temperamentSelect);
})();

// Load Child Friendly lvl when the page loads
(async function loadChildFriendlyLevel() {
    const childFriendlyLevel = await fetchChildFriendlyLevel();
    populateChildFriendlyLevel(childFriendlyLevel, childFriendlyLevelSelect)
})();

// Load Dog Friendly lvl when the page loads
(async function loadDogFriendlyLevel() {
    const dogFriendlyLevel = await fetchDogFriendlyLevel();
    populateGroomingLevel(dogFriendlyLevel, dogFriendlyLevelSelect)
})();

// Load grooming lvl when the page loads
(async function loadGroomingLevel() {
    const groomingLevel = await fetchGroomingNeedsLevel();
    populateDogFriendlyLevel(groomingLevel, groomingLevelSelect)
})();

breedBtn.addEventListener('click', selectedOptions)


async function selectedOptions() {
    const selectedTemperament = temperamentSelect.value;
    const selectedChildFriendlyLevel = parseInt(childFriendlyLevelSelect.value, 10); // Convert to an integer
    const selectedDogFriendlyLevel = parseInt(dogFriendlyLevelSelect.value, 10);
    const selectedGroomingLevel = parseInt(groomingLevelSelect.value, 10);

    const breeds = await fetchBreeds();

    // Filter breeds based on the selected temperament and child-friendly level
    const filteredBreeds = breeds.filter(breed => {
        const matchesTemperament = selectedTemperament ? breed.temperament && breed.temperament.includes(selectedTemperament) : true;
        const matchesChildFriendlyLevel = !isNaN(selectedChildFriendlyLevel) ? breed.child_friendly === selectedChildFriendlyLevel : true;
        const matchesDogFriendlyLevel = !isNaN(selectedDogFriendlyLevel) ? breed.dog_friendly === selectedDogFriendlyLevel : true;
        const matchesGroomingLevel = !isNaN(selectedGroomingLevel) ? breed.grooming === selectedGroomingLevel : true;
        return matchesTemperament && matchesChildFriendlyLevel && matchesDogFriendlyLevel && matchesGroomingLevel;
    });

    // Display the filtered breeds
    if (filteredBreeds.length > 0) {
        displayBreeds(filteredBreeds, breedInfo);
    } else {
        breedInfo.innerHTML = '<p>No breeds found with the selected filters.</p>';
    }
    
}