// Feel free to modify or add to the quotes array
const quotes = [
    {
        quote: "I am lucky that whatever fear I have inside me, my desire to win is always stronger.",
        author: "Serena Williams"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it.",
        author: "Taylor Swift"
    },
    {
        quote:  "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman"
    }
    // ...
];

/**
 * Fetch a random quote from the API
 * @returns {Promise<Object>}
 */
async function fetchData() {
    const API_URL = 'http://localhost:3000/api/quote';

    const response = await fetch(API_URL);

    if (response.ok) {
        const data = await response.json();
        console.log('Request successful! Data: ', data);
        return data;
    } else {
        console.error('Failed to fetch data');
    }
}