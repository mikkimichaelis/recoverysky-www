import express from 'express';
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'wwww')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});