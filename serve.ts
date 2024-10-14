import express from 'express';
const www = require('path').join(__dirname, 'www');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(www));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});