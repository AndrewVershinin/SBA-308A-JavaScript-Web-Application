

const API_KEY = "live_CaXqTJX59UPvpHs7ppXpTqwkGycKJcwBttMnYykssBGUuRBFab5bZtceolhqaTab";
const BASE_URL = "https://api.thecatapi.com/v1";

// Fetch all breeds
export async function fetchBreeds() {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
        headers: { 'x-api-key': API_KEY }
    });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        return data
    
    } catch (error) {
        console.error('Error fetching breeds:', error);
    } 
}



// Fetch the list of temperaments

export async function fetchTemperaments() {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: { 'x-api-key': API_KEY }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const breeds = await response.json();
        const temperaments = new Set();

        breeds.forEach(breed => {
            if (breed.temperament) {
                breed.temperament.split(', ').forEach(temp => temperaments.add(temp.trim()));
            }
        });

        return Array.from(temperaments);
    } catch (error) {
        console.error('Error fetching temperaments:', error); 
    }
}

export async function fetchChildFriendlyLevel() {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: { 'x-api-key': API_KEY }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const breeds = await response.json();
        const childFriendlyLevel = new Set();

        breeds.forEach(breed => {
            if (breed.child_friendly !== undefined) {
                childFriendlyLevel.add(breed.child_friendly)
            }
        });

        return Array.from(childFriendlyLevel).sort((a, b) => a - b);
    } catch (error) {
        console.error('Error fetching child-friendly levels:', error); 
    }
}

export async function fetchDogFriendlyLevel() {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: { 'x-api-key': API_KEY }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const breeds = await response.json();
        const dogFriendlyLevel = new Set();

        breeds.forEach(breed => {
            if (breed.dog_friendly !== undefined) {
                dogFriendlyLevel.add(breed.dog_friendly)
            }
        });

        return Array.from(dogFriendlyLevel).sort((a, b) => a - b);
    } catch (error) {
        console.error('Error fetching dog-friendly levels:', error); 
    }
}

export async function fetchGroomingNeedsLevel() {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: { 'x-api-key': API_KEY }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const breeds = await response.json();
        const groomingLevel = new Set();

        breeds.forEach(breed => {
            if (breed.grooming !== undefined) {
                groomingLevel.add(breed.grooming)
            }
        });

        return Array.from(groomingLevel).sort((a, b) => a - b);
    } catch (error) {
        console.error('Error fetching grooming levels:', error); 
    }
}