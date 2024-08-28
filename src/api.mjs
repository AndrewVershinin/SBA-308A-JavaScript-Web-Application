

const API_KEY = "live_66qRtXomSB6HTTw0ajscK3PPh8d32TJXGctc1wqMNYu80GyH8OCd8IursmNYcBV5";
const BASE_URL = "https://api.thedogapi.com/v1";

// fetches read data from the Dog API
export async function fetchBreeds(param) {
    try {
        const response = await fetch(`${BASE_URL}/breeds`, {
        headers: { 'x-api-key': API_KEY }
    });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            throw new Error('No breeds found');
        }

        return data.filter(breed => breed[param]);
    } catch (error) {
        console.error('Error fetching breeds:', error);
    }

}





