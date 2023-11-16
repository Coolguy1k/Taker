const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;