const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

// allow handling of json files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// access files in public folder
app.use(express.static('public'));
