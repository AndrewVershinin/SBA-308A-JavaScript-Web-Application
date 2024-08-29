export function populateTemperamentSelect(temperaments, selectElement) {
    temperaments.forEach(temperament => {
        const option = document.createElement('option');
        option.value = temperament;
        option.textContent = temperament;
        selectElement.appendChild(option);
    });
}

export function populateChildFriendlyLevel(childFriendlyLevel, selectElement) {
    childFriendlyLevel.forEach(cfl => {
        const option = document.createElement('option');
        option.value = cfl;
        option.textContent = cfl;
        selectElement.appendChild(option);
    });
}

export function populateDogFriendlyLevel(dogFriendlyLevel, selectElement) {
    dogFriendlyLevel.forEach(dfl => {
        const option = document.createElement('option');
        option.value = dfl;
        option.textContent = dfl;
        selectElement.appendChild(option);
    });
}

export function populateGroomingLevel(groomigLevel, selectElement) {
    groomigLevel.forEach(gl => {
        const option = document.createElement('option');
        option.value = gl;
        option.textContent = gl;
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
        <p><strong>Child Friendly level</strong> <i>(maximum level is 5):</i> ${breed.child_friendly}</p>
        <p><strong>Dog Friendly level</strong> <i>(maximum level is 5):</i> ${breed.dog_friendly}</p>
        <p><strong>Grooming needs level</strong> <i>(maximum level is 5):</i> ${breed.grooming}</p>
        <p><strong>Wikipedia URL:</strong> ${breed.wikipedia_url}</p>
        `;

        breedInfo.appendChild(breedCard);
    });
}