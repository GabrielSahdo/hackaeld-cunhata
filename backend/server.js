const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/quote', (req, res) => {
    const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

    /**
     * You must implement the logic to fetch a random quote from the URL provided above.
     * You can use the native function 'fetch' to make a request to the API or install any other library you prefer.
     * Just remember the less dependencies you have, the better.
     */

    /**  This is a placeholder response. You must implement the logic to fetch a random quote. */
    res.json({})
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});