import express from 'express';
import helmet from 'helmet';
const www = require('path').join(__dirname, 'www');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static(www, { extensions: ['html'] }));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});