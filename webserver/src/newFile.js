const express = require('express');
const { app, publicDirectoryPath } = require('./server');

app.use(express.static(publicDirectoryPath));
