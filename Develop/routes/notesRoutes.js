// express, path, and fs modules; uuidv4 for generating unique id
const express = require('express');
const path = require('path');
const fsPromises = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

// Mock database for storing notes data
const notesData = require('../db/db.json');

// Create a router
const router = express.Router();
// Middleware for parsing incoming JSON data
router.use(express.json());

// GET /api/notes
router.get('/', (req, res) => {
    res.json(notesData)
})

// POST /api/notes
router.post('/', async (req, res) => {
    // Create key of "id", value of uuidv4() for the new note object
    req.body.id = uuidv4(); 
    notesData.push(req.body)

    const dbFilePath = path.join(__dirname, '../db/db.json')
    
})
