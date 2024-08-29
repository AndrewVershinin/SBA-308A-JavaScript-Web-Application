

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

        return Array.from(childFriendlyLevel)
    } catch (error) {
        console.error('Error fetching child-friendly levels:', error); 
    }
}

