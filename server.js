const express = require('express');
const app = express();
const path = require('path');
const port = 8800;

app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`The localhost is http://localhost:${port}`);
});