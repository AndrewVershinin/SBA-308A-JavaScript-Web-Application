export function populateTemperamentSelect(temperaments, selectElement) {
    temperaments.forEach(temperament => {
        const option = document.createElement('option');
        option.value = temperament;
        option.textContent = temperament;
        selectElement.appendChild(option);
    });
}


export function displayBreeds(breeds, breedInfo) {
    breedInfo.innerHTML = ""; // Clear previous content

    breeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.classList.add('breed-card');

        const img = document.createElement('img');
        img.src = breed.image.url;
        img.alt = breed.name;
        breedCard.appendChild(img);

        breedCard.innerHTML += `
        <h3>${breed.name}</h3>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>Temperament:</strong> ${breed.temperament}</p>
        <p><strong>Description:</strong> ${breed.description}</p>
        `;

        breedInfo.appendChild(breedCard);
    });
}