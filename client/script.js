/**
 * ===================== NOTES =====================
 * 1. You can use the quotes array to display a random quote on the page
 * 2. In case you want to pursue the extra credit, you can use the external API to fetch a random quote.
 *  To do that, you can use the fetchData function provided below.
 * 3. Feel free to modify the code as you see fit.
 * 4. Use your creativity to make the page look good and unique.
 * 5. If you want to add more features, you can do so. This will be a plus point.
 */


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